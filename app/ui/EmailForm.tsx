import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import Image from "next/image";
import VideoBackground from "./VideoBackground";
import { cn } from "@/lib/utils";

const EmailForm: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsHovered(false);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const size = isHovered ? 400 : 40;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const envelopeAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, -20, 0],
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-5 md:py-10 lg:py-15 xl:py-20 overflow-hidden">
      <VideoBackground videoSrc="/sea.mp4" />
      <div className="relative z-10 mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full sm:max-w-xl md:max-w-4xl">
          <div className="grid md:grid-cols-2">
            <motion.div
              className="p-8"
              initial="hidden"
              animate="visible"
              variants={formAnimation}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Contact Me</h2>
              <form onSubmit={handleSubmit}>
                {["name", "email", "subject"].map((field) => (
                  <motion.div
                    key={field}
                    className="mb-4"
                    variants={inputAnimation}
                  >
                    <label
                      htmlFor={field}
                      className="block text-[--color-test] text-sm font-semibold mb-2 capitalize"
                    >
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                      required
                    />
                  </motion.div>
                ))}
                <motion.div className="mb-6" variants={inputAnimation}>
                  <label
                    htmlFor="message"
                    className="block text-[--color-test] text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 h-32"
                    required
                  ></textarea>
                </motion.div>
                <motion.div variants={inputAnimation}>
                  <button
                    type="submit"
                    className="bg-[--color-test] hover:bg-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </motion.div>
              </form>
            </motion.div>
            <motion.div
              className="bg-[--color-test] flex items-center justify-center p-8 relative w-full  overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={formAnimation}
              ref={sectionRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-lg"
                initial="initial"
                animate="animate"
                variants={envelopeAnimation}
              >
                <Mail size={64} className="text-[--color-test]" />
              </motion.div>
              <motion.div
                className={cn(
                  "mask",
                  "absolute inset-0 pointer-events-none",
                  "bg-white"
                )}
                animate={{
                  WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                    mousePosition.y - size / 2
                  }px`,
                  WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
              >
                <Image
                  src="/back.jpg"
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
