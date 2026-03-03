import {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { useForm } from "@formspree/react";
import LavaBackground from "../components/LavaBackground";

const inputCls =
  "border border-neutral-300 rounded px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-plum-gradient-2 w-full";

const allowedFileTypes = ["application/pdf", "image/jpeg", "image/png"];

function useToast() {
  const [toast, setToast] = useState<{ text: string; success: boolean } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) return;
    const showTimer = setTimeout(() => setVisible(true), 10);
    const fadeTimer = setTimeout(() => setVisible(false), 5010);
    const clearTimer = setTimeout(() => setToast(null), 5510);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
      clearTimeout(clearTimer);
    };
  }, [toast]);

  return { toast, visible, show: setToast };
}

function FormField({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="text-sm font-medium text-neutral-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fileError, setFileError] = useState("");
  const [state, formspreeSubmit] = useForm("xvzbegja");
  const { toast, visible: toastVisible, show: showToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const prevSubmitting = useRef(false);

  useEffect(() => {
    if (prevSubmitting.current && !state.submitting) {
      if (state.succeeded) {
        showToast({ text: "request submitted", success: true });
        formRef.current?.reset();
        setPhone("");
        setMessage("");
      } else {
        showToast({ text: "submission failure", success: false });
      }
    }
    prevSubmitting.current = state.submitting;
  }, [state.submitting, state.succeeded]);

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }
    setPhone(formatted);
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file && !allowedFileTypes.includes(file.type)) {
      setFileError("Only PDF, JPG, or PNG files are allowed.");
      e.target.value = "";
    } else {
      setFileError("");
    }
  }

  return (
    <LavaBackground className="flex items-center justify-center w-full min-h-screen pt-16 px-4 py-6">
      {toast && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-sm font-medium transition-opacity duration-500 ease-in-out ${
            toastVisible ? "opacity-100" : "opacity-0"
          } ${toast.success ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.text}
        </div>
      )}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left info panel */}
        <div className="flex flex-col justify-center gap-6 bg-plum-gradient-3 text-white p-8 md:p-10 md:w-2/5">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Have a question or want to work with us? Fill out the form and we'll
            get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/90">
            <span>📧 contact@domain.com</span>
            <span>📞 (555) 123-4567</span>
            <span>📍 Berks County, PA</span>
          </div>
        </div>

        {/* Right form panel */}
        <form
          ref={formRef}
          onSubmit={formspreeSubmit}
          className="bg-white p-8 flex flex-col gap-4 md:w-3/5"
        >
          <div className="flex gap-4">
            <FormField label="First Name" htmlFor="firstName" required>
              <input id="firstName" name="firstName" type="text" required className={inputCls} />
            </FormField>
            <FormField label="Last Name" htmlFor="lastName" required>
              <input id="lastName" name="lastName" type="text" required className={inputCls} />
            </FormField>
          </div>

          <FormField label="Email" htmlFor="email" required>
            <input id="email" name="email" type="email" required className={inputCls} />
          </FormField>

          <FormField label="Phone Number" htmlFor="phone" required>
            <input
              id="phone"
              name="phoneNumber"
              type="tel"
              required
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Phone number must be 10 digits"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(555) 123-4567"
              className={inputCls}
            />
          </FormField>

          <FormField label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              maxLength={500}
              placeholder="Provide us with more information on what you're looking for here..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputCls} resize-none`}
            />
            <span className="text-xs text-neutral-500 text-right">{message.length}/500</span>
          </FormField>

          <FormField label="Attachment" htmlFor="attachment">
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="text-sm text-neutral-600 file:mr-3 file:rounded file:border-0 file:bg-plum-gradient-2 file:px-3 file:py-2 file:text-white file:cursor-pointer"
            />
            {fileError && <span className="text-xs text-red-500">{fileError}</span>}
          </FormField>

          <button
            type="submit"
            className="bg-plum-gradient-2 text-white font-medium py-2 rounded hover:bg-plum-gradient-3 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </LavaBackground>
  );
}
