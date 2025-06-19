"use client";
import React, { useState } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { sendContactMessage } from "@/services/apiService";
import { toast } from "sonner"; // Import toast

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendContactMessage(formData);
      toast.success(response.message || "Message sent successfully!");

      // Clear the form on success
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(
        error?.message || "Failed to send message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] flex items-center justify-center py-[2%] px-[2%]">
      <div className="relative z-10 max-w-[90%] mx-auto">
        <h1 className="text-[0.8125rem] font-bold text-white text-center mb-[5%] relative">
          <AuroraText className="text-white" colors={["#3b82f6", "#8b5cf6"]}>
            Contact Me
          </AuroraText>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent h-full w-full" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black border border-neutral-700 rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-[0.75rem] font-semibold text-white mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="text-[0.75rem] text-gray-300 mb-1 block"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-neutral-800 text-white border-neutral-600 focus:border-blue-500 text-[0.625rem]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-[0.75rem] text-gray-300 mb-1 block"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="bg-neutral-800 text-white border-neutral-600 focus:border-blue-500 text-[0.625rem]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-[0.75rem] text-gray-300 mb-1 block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  className="bg-neutral-800 text-white border-neutral-600 focus:border-blue-500 text-[0.625rem] h-32"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white text-[0.625rem] px-4 py-2 rounded-full w-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-[0.625rem] text-gray-400">
                Note: Form submission is disabled due to sandbox restrictions.
                This form would typically submit to a backend endpoint.
              </p>
            </form>
          </div>

          <div className="bg-black border border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <h2 className="text-[0.75rem] font-semibold text-white mb-6">
              Connect with Me
            </h2>
            <div className="flex gap-6 mb-4">
              <a
                href="http://linkedin.com/in/mabusubhani-shaik-839b561b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <IconBrandLinkedin size={40} />
              </a>
              <a
                href="https://github.com/Mabusubhani786"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <IconBrandGithub size={40} />
              </a>
            </div>
            <AuroraText
              className="text-[1rem] text-center"
              colors={["#3b82f6", "#8b5cf6"]}
            >
              subhanishaik3849@gmail.com
            </AuroraText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
