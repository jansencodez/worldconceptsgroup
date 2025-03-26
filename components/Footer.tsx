import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 to-blue-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-12">
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
              {["Investment Portals", "Project Funding"].map((item) => (
                <li key={item}>
                  <Link
                    href="/solutions"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
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
              {["Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link
                    href="/legal"
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-slate-400 text-sm">
          <p>
            © {new Date().getFullYear()} World Concepts Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
