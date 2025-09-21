import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Clock-in Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-semibold text-lg">Clock-in</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#technology"
              className="hover:text-white transition-colors"
            >
              Technology
            </a>
            <a
              href="mailto:gdgiilmu@iilm.edu"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2025 Clock-in. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/gdgiilm/"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/GDG-IILM"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/gdg_iilm?igsh=azdvbWlzNXVmc2tt"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Large DevStudio Text at Bottom */}
      <div className="w-full bg-black overflow-hidden">
        <div className="flex justify-center">
          <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold text-white/10 leading-none select-none whitespace-nowrap">
           Clock-In
          </div>
        </div>
      </div>
    </footer>
  );
}
