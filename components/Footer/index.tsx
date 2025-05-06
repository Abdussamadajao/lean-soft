import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image src={"/logo/logo-white.png"} width={100} height={10} alt="logo" />
              <span className="text-white text-[30px]">LeanSoftWorks</span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              LeanSoftWorks is a leading software development company
              specializing in AI-driven solutions, dedicated to transforming
              industries through innovative technology and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Projects", link: "/projects" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center group text-lg text-gray-300 hover:text-electblue transition-colors">
                    <HiOutlineChevronRight className="mr-2 text-electblue transition-transform group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaLinkedinIn, link: "#" },
                { icon: FaFacebookF, link: "#" },
                { icon: FaXTwitter, link: "#" },
                { icon: FaInstagram, link: "#" },
                { icon: FaSkype, link: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-electblue/10 hover:bg-electblue/20 rounded-full transition-colors">
                  <social.icon size={20} className="text-electblue" />
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-3">Let's Collaborate</h4>
              <p className="text-gray-300">
                Reach out to discuss how we can transform your ideas into
                reality.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-electblue font-semibold hover:underline">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#121212] py-4">
        <div className="container-custom mx-auto text-center">
          <span className="text-sm text-gray-400">
            © 2024{" "}
            <Link href="#" className="text-electblue hover:underline">
              LeanSoftWorks Inc.
            </Link>{" "}
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
