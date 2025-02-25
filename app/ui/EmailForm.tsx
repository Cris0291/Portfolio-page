"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import VideoBackground from "./VideoBackground";
import { cn } from "@/lib/utils";
import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const EmailForm: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [submittedErrors, setSubmittedErrors] = useState<
    (string | undefined)[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current && !isMobile) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsHovered(false);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = isHovered ? 400 : 40;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "",
        form.current ?? "",
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          reset();
          toast.success("Email was successfully sent");
        },
        (error) => {
          toast.error("Email was not sent. Something unexpected happened");
        }
      );
  };

  const onError = () => {
    const newErrors: (string | undefined)[] = [];
    const values = Object.values(errors);
    values.forEach((value) => newErrors.push(value.message));
    setSubmittedErrors(newErrors);
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
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full py-5 md:py-10 lg:py-15 xl:py-20 overflow-hidden scroll-smooth"
    >
      <VideoBackground videoSrc="/sea.mp4" />
      <div className="relative z-10 mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-4xl">
          <div className="grid md:grid-cols-2">
            <motion.div
              className="p-4 sm:p-8"
              initial="hidden"
              animate="visible"
              variants={formAnimation}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                Contact Me
              </h2>
              <form ref={form} onSubmit={handleSubmit(onSubmit, onError)}>
                <motion.div className="mb-4" variants={inputAnimation}>
                  <label
                    htmlFor="name"
                    className="block text-[--color-test] text-sm font-semibold mb-2 capitalize"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name must not exceed 50 characters",
                      },
                    })}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  />
                </motion.div>
                <motion.div className="mb-4" variants={inputAnimation}>
                  <label
                    htmlFor="email"
                    className="block text-[--color-test] text-sm font-semibold mb-2 capitalize"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email is invalid",
                      },
                    })}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  />
                </motion.div>
                <motion.div className="mb-4" variants={inputAnimation}>
                  <label
                    htmlFor="subject"
                    className="block text-[--color-test] text-sm font-semibold mb-2 capitalize"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                  />
                </motion.div>
                <motion.div className="mb-6" variants={inputAnimation}>
                  <label
                    htmlFor="message"
                    className="block text-[--color-test] text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 h-32"
                  ></textarea>
                </motion.div>
                <motion.div variants={inputAnimation}>
                  {submittedErrors.length > 0 && (
                    <Alert variant="destructive" className="mb-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {submittedErrors.map((error, index) => (
                          <p key={index}>{error}</p>
                        ))}
                      </AlertDescription>
                    </Alert>
                  )}
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
              className="bg-[--color-test] flex items-center justify-center p-8 relative w-full overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={formAnimation}
              ref={sectionRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              <motion.div
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg"
                initial="initial"
                animate="animate"
                variants={envelopeAnimation}
              >
                <Mail
                  size={42}
                  className="text-[--color-test] sm:text-5xl md:text-6xl"
                />
              </motion.div>
              {!isMobile && (
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
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
