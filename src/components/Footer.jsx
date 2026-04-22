import { easeInOut, motion } from "framer-motion";
import Container from "./Container";

const FacebookIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="flex items-center justify-center font-sans selection:bg-red-600 selection:text-white border-t border-white/10 pt-10 pb-25 select-none ">
      <Container className=" text-white flex flex-col justify-between relative ">
        <header className="flex flex-col md:flex-row justify-between items-start gap-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              stiffness: 70,
              type: "spring",
            }}
            viewport={{ amount: 0.3 }}
            className="max-w-md"
          >
            <p className="text-gray-300 text-lg font-satoshi leading-snug tracking-tight">
              At Drago studio™, we design digital experiences that captivate,
              connect, and inspire.
            </p>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            stiffness: 70,
            type: "spring",
          }}
          viewport={{ amount: 0.3 }}
          className="mt-auto pt-24 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 z-10"
        >
          <p className="text-white text-sm tracking-wide">
            Designed & Developed
            <a
              href="#"
              target="_blank"
              className=" underline font-bold ml-1  hover:text-redd duration-400 ease-in-out "
            >
              LazyStudio
            </a>
          </p>

          <div className="flex gap-4">
            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f0f0f] border border-white/5 hover:border-white/20 transition-all"
              >
                <Icon size={18} className="text-gray-400 hover:text-white" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="relative mt-8 select-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            className="text-[285px] font-anton leading-[0.85] tracking-tight text-center flex justify-center whitespace-nowrap uppercase "
          >
            Tanvir Rahman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="absolute -bottom-25 right-75 pointer-events-none text-[140px] text-redd font-patung italic "
          >
            Video Editor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ amount: 0.2 }}
            className="absolute -top-4 -right-8 pointer-events-none text-[15px] text-white font-anton "
          >
            TM
          </motion.p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
