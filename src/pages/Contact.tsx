import { useState, type FormEvent, type ChangeEvent } from "react";
import LavaBackground from "../components/LavaBackground";

export default function Contact() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fileError, setFileError] = useState("");

  const allowedFileTypes = ["application/pdf", "image/jpeg", "image/png"];

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit!");
  }

  return (
    <LavaBackground className="flex items-stretch justify-center w-full min-h-[calc(100vh-4rem)]">
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl m-auto shadow-lg rounded-lg overflow-hidden">
        {/* Left info panel */}
        <div className="flex flex-col justify-center gap-6 bg-plum-gradient-3 text-white p-10 md:w-2/5">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Have a question or want to work with us? Fill out the form and we'll
            get back to you as soon as possible.
          </p>
          <div className="flex flex-col gap-3 text-sm text-white/90">
            <span>📧 hello@plumllc.com</span>
            <span>📞 (555) 123-4567</span>
            <span>📍 San Francisco, CA</span>
          </div>
        </div>

        {/* Right form panel */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 flex flex-col gap-4 md:w-3/5"
        >
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-neutral-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                required
                minLength={1}
                className="border border-neutral-300 rounded px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-plum-gradient-2 w-full"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-neutral-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                required
                minLength={1}
                className="border border-neutral-300 rounded px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-plum-gradient-2 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-neutral-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              className="border border-neutral-300 rounded px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-plum-gradient-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-neutral-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Phone number must be 10 digits"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(555) 123-4567"
              className="border border-neutral-300 rounded px-3 py-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-plum-gradient-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-neutral-700"
            >
              Message
            </label>
            <textarea
              id="message"
              maxLength={500}
              placeholder="Provide us with more information on what you're looking for here..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-neutral-300 rounded px-3 py-2 text-neutral-800 resize-none focus:outline-none focus:ring-2 focus:ring-plum-gradient-2"
            />
            <span className="text-xs text-neutral-500 text-right">
              {message.length}/500
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="attachment"
              className="text-sm font-medium text-neutral-700"
            >
              Attachment
            </label>
            <input
              id="attachment"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="text-sm text-neutral-600 file:mr-3 file:rounded file:border-0 file:bg-plum-gradient-2 file:px-3 file:py-2 file:text-white file:cursor-pointer"
            />
            {fileError && (
              <span className="text-xs text-red-500">{fileError}</span>
            )}
          </div>

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
