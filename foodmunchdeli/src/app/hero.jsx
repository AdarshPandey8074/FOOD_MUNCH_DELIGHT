"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function FoodMunch() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "wcuSection",
        "exploreMenuSection",
        "deliveryPaymentSection",
        "followUsSection",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Food Munch Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-6">
            {[
              { id: "wcuSection", label: "Why Choose Us?" },
              { id: "exploreMenuSection", label: "Explore Menu" },
              { id: "deliveryPaymentSection", label: "Delivery & Payment" },
              { id: "followUsSection", label: "Follow Us" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-amber-500"
                    : "text-gray-700 hover:text-amber-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-4 py-2 space-y-3">
                {[
                  { id: "wcuSection", label: "Why Choose Us?" },
                  { id: "exploreMenuSection", label: "Explore Menu" },
                  { id: "deliveryPaymentSection", label: "Delivery & Payment" },
                  { id: "followUsSection", label: "Follow Us" },
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm font-medium ${
                      activeSection === item.id
                        ? "text-amber-500"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Banner Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-amber-50 to-orange-50 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center bg-blend-overlay"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-3"
          >
            Get Delicious Food Anytime
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Eat Smart & Healthy
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-amber-500 text-white font-medium rounded-full shadow-md hover:bg-amber-600 transition-colors duration-300"
            >
              View Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-amber-500 text-amber-500 font-medium rounded-full hover:bg-amber-50 transition-colors duration-300"
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <section id="wcuSection" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We use both original recipes and classic versions of famous food
              items.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                image: "/placeholder.svg?height=80&width=80",
                title: "Food Service",
                description:
                  "Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect.",
              },
              {
                image: "/placeholder.svg?height=80&width=80",
                title: "Fresh Food",
                description:
                  "The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.",
              },
              {
                image: "/placeholder.svg?height=80&width=80",
                title: "Best Offers",
                description:
                  "Food Coupons & Offers upto 50% OFF and Exclusive Promo Codes on All Online Food Orders.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.title === "Best Offers" ? (
                    <>
                      Food Coupons & Offers upto{" "}
                      <span className="text-amber-500 font-semibold">
                        50% OFF
                      </span>{" "}
                      and Exclusive Promo Codes on All Online Food Orders.
                    </>
                  ) : (
                    card.description
                  )}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore Menu Section */}
      <section id="exploreMenuSection" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Explore Menu
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Non-Veg Starters",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Veg Starters",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Soups",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Fish & Sea food",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Main Course",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Noodles",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Salads",
              },
              {
                image: "/placeholder.svg?height=200&width=300",
                title: "Desserts",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <Link
                    href="#"
                    className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium"
                  >
                    View All
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Healthy Food Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12"
            >
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Healthy Food Plate"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Fresh, Healthy, Organic, Delicious Fruits
              </h2>
              <p className="text-gray-600 mb-6">
                Say no to harmful chemicals and go fully organic with our range
                of fresh fruits and veggies. Pamper your body and your senses
                with the true and unadulterated gifts from mother nature. with
                the true and unadulterated gifts from mother nature.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-full shadow-md hover:bg-amber-600 transition-colors duration-300"
              >
                Watch Video
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery and Payment Section */}
      <section id="deliveryPaymentSection" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-5/12"
            >
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Delivery and Payment"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Delivery and Payment
              </h2>
              <p className="text-gray-600 mb-6">
                Enjoy hassle-free payment with the plenitude of payment options
                available for you. Get live tracking and locate your food on a
                live map. It's quite a sight to see your food arrive to your
                door. Plus, you get a 5% discount on every order every time you
                pay online.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-full shadow-md hover:bg-amber-600 transition-colors duration-300 mb-4"
              >
                Order Now
              </motion.button>

              <div className="flex gap-4 mt-4">
                {[
                  "/placeholder.svg?height=40&width=60",
                  "/placeholder.svg?height=40&width=60",
                  "/placeholder.svg?height=40&width=60",
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Image
                      src={card || "/placeholder.svg"}
                      alt={`Payment Method ${index + 1}`}
                      width={60}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:w-7/12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Thank you for being a valuable customer to us.
              </h2>
              <p className="text-gray-600 mb-6">
                We have a surprise gift for you
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-full shadow-md hover:bg-amber-600 transition-colors duration-300"
              >
                Redeem Gift
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-5/12"
            >
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Thank You"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800">
                  Gift Voucher
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Gift Voucher"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <div className="p-4 border-t flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Follow Us Section */}
      <section id="followUsSection" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800">Follow Us</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex justify-center gap-6"
          >
            {[
              { icon: <Twitter className="h-6 w-6" />, color: "bg-blue-400" },
              { icon: <Instagram className="h-6 w-6" />, color: "bg-pink-500" },
              { icon: <Facebook className="h-6 w-6" />, color: "bg-blue-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className={`${social.color} text-white p-4 rounded-full flex items-center justify-center shadow-md`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Food Munch Logo"
              width={120}
              height={40}
              className="h-10 w-auto mx-auto mb-4"
            />
            <p className="text-lg mb-2">foodmunch@email.com</p>
            <p className="text-gray-400">
              Chandigarh University Mohali, Punjab, India.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
