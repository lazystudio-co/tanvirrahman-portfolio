import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronDown, Calendar } from "lucide-react";
import Container from "../components/Container";
import { db } from "../../firebaseConfig";
import { push, ref } from "firebase/database";

export default function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, budget, message } = formData;

    if (!name || !email || !phone || !budget || !message) {
      alert("Please fill all the forms");
      return;
    }

    if (email !== email.toLowerCase()) {
      alert("Please enter your email in lowercase letters only");
      return;
    } else if (
      !formData.email.includes("@") ||
      !formData.email.endsWith(".com")
    ) {
      alert("please enter a valid email");
      return;
    }

    push(ref(db, "clients"), {
      name,
      email,
      phone,
      budget,
      message,
    })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error writing to database", error);
        alert("Error submitting your message. Please try again.");
      });
  };

  return (
    <div
      id={id}
      className=" 2xl:my-20 xl:my-20 lg:my-20 md:my-10 my-10 2xl:pt-20 xl:pt-20 lg:pt-0 md:pt-10 pt-10 text-white selection:bg-red-600 selection:text-white font-sans overflow-x-hidden"
    >
      <Container className="  ">
        <div className="relative mb-10 md:mb-10 lg:mb-20 xl:mb-18 2xl:mb-20 text-center pointer-events-none ">
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
            className="absolute 2xl:top-8 xl:top-6 lg:top-14 md:top-1 sm:top-4 top-2 left-[50%] translate-x-[-50%] 2xl:text-[12vw] xl:text-[12vw] lg:text-[14vw] md:text-[16vw] sm:text-[14vw] text-[14vw] font-patung text-red-600 z-10 whitespace-nowrap"
          >
            connect
          </motion.span>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 z-50 "
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    value={formData.email}
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
                    value={formData.phone}
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
                  <div className=" relative ">
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      placeholder="Your budget in USD "
                      className="w-full bg-[#111] border border-white/5 rounded-lg px-9 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi
                    placeholder:text-white/50 placeholder:font-satoshi "
                      onChange={handleChange}
                    />
                    <span className=" text-white/50 absolute top-[50%] translate-y-[-50%] left-6 text-xl ">
                      $
                    </span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-xs font-satoshi uppercase tracking-widest text-white/50 ">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  rows={5}
                  placeholder="Describe your project"
                  className="w-full bg-[#111] border border-white/5 rounded-lg px-6 py-4 focus:outline-none focus:border-red-600 transition-all text-gray-200 font-satoshi capitalize
                   placeholder:text-white/50 placeholder:font-satoshi  resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Footer Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-8">
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
