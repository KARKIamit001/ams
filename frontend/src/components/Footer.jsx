import React from "react";
import stock from "../../public/stock.png";
import esewa from "../../public/sewa.png";
import { HandCoins } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-purple-500">
      <div className="flex  items-start justify-between w-11/12 mx-auto text-white px-16 py-20">
        <div className="space-y-6">
          <p>
            <img src={stock} alt="" className="h-16 rounded-md bg-white" />
          </p>
          <p className="text-sm">
            Take full control of your inventory, billing, and POS <br /> without
            the hassle. Our system helps you track stock <br /> in real-time,
            automate orders, and avoid mistakes, <br /> making your business
            faster, smarter, and more <br /> efficient.
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
            Free Consultation
          </p>
          <div>
            <p className="flex items-center gap-2 mb-1">
              {" "}
              <HandCoins size={20} />
              We accept
            </p>
            <p>
              <img src={esewa} alt="" className="h-14 w-80 rounded-md" />
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className=" font-bold">Quick Links</p>
          <p className="flex items-center gap-1 cursor-pointer">
            Home
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Features
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Testimonials
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Contact
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Pricing
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Try Demo
            <ArrowUpRight size={16} />
          </p>
        </div>
        <div className="space-y-3">
          <p className=" font-bold">Other Products</p>
          <p className="flex items-center gap-1 cursor-pointer">
            Restronp
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Zylux IT Solution
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Fenzora
            <ArrowUpRight size={16} />
          </p>
        </div>
        <div className="space-y-3">
          <p className=" font-bold">Socials</p>
          <p className="flex items-center gap-2 cursor-pointer">
            {" "}
            <Facebook size={16} />
            Facebook
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-2 cursor-pointer">
            {" "}
            <Instagram size={18} />
            Instagram
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-2 cursor-pointer">
            <Twitter size={18} />
            Twitter
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-2 cursor-pointer">
            {" "}
            <Linkedin size={18} />
            LinkedIn
            <ArrowUpRight size={16} />
          </p>
        </div>
        <div className="space-y-3">
          <p className=" font-bold">Legal </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Privacy Policy
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Terms of Service
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Cookies Policy
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Terms of Use
            <ArrowUpRight size={16} />
          </p>
          <p className="flex items-center gap-1 cursor-pointer">
            Refund Policy
            <ArrowUpRight size={16} />
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto flex justify-between items-center text-white border-t-2 py-4 border-t-violet-500">
        <p>© 2025 stocknp. All rights reserved.</p>
        <p>Powered by Zylux IT Solution</p>
      </div>
    </div>
  );
}
