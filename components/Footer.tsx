import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-blue-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/10 pb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              World Concepts
            </h3>
            <p className="text-slate-400 text-sm">
              Empowering Africa through strategic innovation and sustainable
              development.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Solutions
            </h4>
            <ul className="space-y-2">
              {[
                "Investment Portals",
                "Strategic Advisory",
                "Market Analysis",
                "Project Funding",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Compliance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Connect
            </h4>
            <div className="flex space-x-4">
              {[
                { platform: "linkedin", icon: <FaLinkedin size={24} /> },
                { platform: "twitter", icon: <FaTwitter size={24} /> },
                { platform: "facebook", icon: <FaFacebook size={24} /> },
                { platform: "instagram", icon: <FaInstagram size={24} /> },
              ].map(({ platform, icon }) => (
                <Link
                  key={platform}
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-slate-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} World Concepts Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
