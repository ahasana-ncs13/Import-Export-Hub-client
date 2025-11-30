import React from 'react';

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const  Footer =()=> {
  return (
    <footer className="bg-cyan-950 text-gray-300 py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white"> <span className='text-secondary'>ImportExport</span><sub>Hub</sub></h2>
          <p className="mt-3 text-sm text-gray-400">
            A modern platform to explore global products, manage exports, and import anything with one click.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>How It Works</li>
            <li>My Imports</li>
            <li>Browse Products</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@imexhub.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank"  className="hover:text-white"><Facebook size={20} /></a>
            <a href="https://twitter.com" 
    target="_blank"  className="hover:text-white"><Twitter size={20} /></a>
            <a href="https://instagram.com" 
    target="_blank"  className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Import Export Hub. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer;