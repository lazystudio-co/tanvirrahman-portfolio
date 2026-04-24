import React, { useState, useEffect } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import Container from "../components/Container";
import { db } from "../../firebaseConfig";
import { push, ref } from "firebase/database";
import emailjs from "@emailjs/browser";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, budget, message } = formData;

    if (!name || !email || !phone || !budget || !message) {
      alert("Please fill all the forms");
      return;
    }

    if (email !== email.toLowerCase()) {
      alert("Please enter your email in lowercase letters only");
      return;
    } else if (!email.includes("@") || !email.endsWith(".com")) {
      alert("Please enter a valid email");
      return;
    }

    setStatus("sending");

    try {
      await push(ref(db, "clients"), {
        name,
        email,
        phone,
        budget,
        message,
        createdAt: new Date().toISOString(),
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, phone, budget, message },
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div
      id={id}
      className="2xl:my-20 xl:my-20 lg:my-20 md:my-10 my-10 2xl:pt-20 xl:pt-20 lg:pt-0 md:pt-10 pt-10 text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden"
    >
      <Container>
        <div className="relative mb-10 md:mb-10 lg:mb-20 xl:mb-18 2xl:mb-20 text-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="2xl:text-[12vw] xl:text-[12vw] lg:text-[180px] md:text-[110px] sm:text-[80px] text-[60px] font-anton tracking-tight leading-none text-white uppercase select-none opacity-90"
          >
            Let's Talk
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: easeIn }}
            viewport={{ once: true, amount: 0.2 }}
            className="absolute 2xl:top-8 xl:top-6 lg:top-14 md:top-1 sm:top-4 top-2 left-[50%] translate-x-[-50%] 2xl:text-[12vw] xl:text-[12vw] lg:text-[14vw] md:text-[16vw] sm:text-[14vw] text-[14vw] font-patung text-red-600 z-10 whitespace-nowrap"
          >
            connect
          </motion.span>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-7 z-50"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Don Trevon"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi capitalize placeholder:text-white/50 placeholder:font-satoshi"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="example@gmail.com"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi placeholder:text-white/50 placeholder:font-satoshi"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="+44 1234 567 890"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi placeholder:text-white/50 placeholder:font-satoshi"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50">
                    Project Budget
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      placeholder="Your budget in USD"
                      className="w-full bg-[#111] border border-white/5 rounded-lg px-9 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi placeholder:text-white/50 placeholder:font-satoshi"
                      onChange={handleChange}
                    />
                    <span className="text-white/50 absolute top-[50%] translate-y-[-50%] left-6 text-lg">
                      $
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-satoshi uppercase tracking-widest text-white/50">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  rows={5}
                  placeholder="Describe your project"
                  className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi capitalize placeholder:text-white/50 placeholder:font-satoshi resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto bg-white text-black font-patung uppercase tracking-widest px-12 py-4 rounded-lg cursor-pointer select-none hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="text-green-400 font-satoshi">
                    Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 font-satoshi">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </Container>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}</style>
    </div>
  );
}
