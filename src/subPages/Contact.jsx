import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown, Calendar } from "lucide-react";
import Container from "../components/Container";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={id}
      className=" 2xl:my-20 xl:my-0 lg:my-20 md:my-0 my-4 2xl:pt-20 xl:pt-20 lg:pt-0 md:pt-10 pt-0 text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden"
    >
      <Container className="  ">
        <div className="relative mb-10 md:mb-10 lg:mb-32 xl:mb-32 2xl:mb-32 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="2xl:text-[12vw] xl:text-[12vw] lg:text-[180px] md:text-[110px] sm:text-[80px] text-[60px] font-anton tracking-tight leading-none text-white uppercase select-none opacity-90"
          >
            CONTACT
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="absolute 2xl:top-0 xl:top-6 lg:top-14 md:top-1 sm:top-4 top-2 left-[50%] translate-x-[-50%] 2xl:text-[12vw] xl:text-[12vw] lg:text-[14vw] md:text-[16vw] sm:text-[14vw] text-[14vw] font-patung text-red-600 z-10 whitespace-nowrap"
          >
            connect
          </motion.span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <p className="text-white/50  font-satoshi text-lg lg:text-xl leading-relaxed max-w-md">
                At Drago, we blend strategy, design, and technology to craft
                stunning websites, compelling brands, and seamless user
                experiences that drive success.
              </p>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h3 className="text-2xl font-satoshi mb-10 tracking-widest uppercase">
                Contact Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-8 gap-6 ">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-satoshi">
                    Phone/WhatsApp:
                  </p>
                  <a
                    href="tel:+441234567890"
                    className="text-lg hover:text-red-500 transition-colors duration-300"
                  >
                    +880 1735 035182
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-satoshi">
                    Email:
                  </p>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-lg hover:text-red-500 transition-colors duration-300"
                  >
                    tanvirrahman2111@gmail.com Tools
                  </a>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-satoshi">
                    Based In:
                  </p>
                  <p className="text-lg text-gray-300 leading-snug">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Don Trevon"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi capitalize
                     placeholder:text-white/50 placeholder:font-satoshi "
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@gmail.com"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi
                     placeholder:text-white/50 placeholder:font-satoshi "
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+44 1234 567 890"
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi
                     placeholder:text-white/50 placeholder:font-satoshi "
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                    Project Budget
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your budget in USD "
                    className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi
                     placeholder:text-white/50 placeholder:font-satoshi "
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Describe your project"
                  className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi capitalize
                   placeholder:text-white/50 placeholder:font-satoshi  resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Footer Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-6">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white text-black font-patung uppercase tracking-widest px-12 py-4 rounded-lg cursor-pointer select-none
                   hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>

      {/* Global CSS for Script Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
      `}</style>
    </div>
  );
}
