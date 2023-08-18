import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    // <footer className="bg-green-200">
    //   <div className="container mx-auto p-10">
    //     <div className="flex flex-row justify-between">
    //       <div className="flex gap-2">
    //         <span>0411215554</span>
    //         <span>@coalservices</span>
    //         <span>Mines Rescue ABN: 15 099 078 261</span>
    //       </div>
    //       <div className="flex gap-2">
    //         <FaLinkedin />
    //         <FaFacebookSquare />
    //         <FaTwitter />
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    // <footer className="footer-container">
    //   <div className="footer-content">
    //     <div className="footer-section">
    //       <h4>Contact</h4>
    //       <p>Email: hello@hello.com</p>
    //       <p>Phone: 041212121</p>
    //     </div>
    //     <div className="footer-section">
    //       <h4>Follow Us</h4>
    //       <p>
    //         <a href="#">Facebook</a>
    //       </p>
    //       <p>
    //         <a href="#">Twitter</a>
    //       </p>
    //       <p>
    //         <a href="#">Instagram</a>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="footer-bottom">
    //     <p>&copy; 2023 utshuk . All rights reserved.</p>
    //   </div>
    // </footer>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section contact">
          <h4>Contact</h4>
          <div>
            <FaEnvelope className="icon" />
            <span>
              Email: <a href="mailto:support@example.com">utshuk@utshuk.com</a>
            </span>
          </div>
          <div>
            <FaPhone className="icon" />
            <span>
              Phone: <a href="tel:+11234567890">041231231</a>
            </span>
          </div>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="flex ">
            <a href="#">
              <FaFacebookF className="icon" />
            </a>
            <a href="#">
              <FaTwitter className="icon" />
            </a>
            <a href="#">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Utshuk. </p>
      </div>
    </footer>
    // <footer className="bg-gray-900 text-gray-400 py-10">
    //   <div className="container mx-auto px-4 flex flex-wrap justify-between">
    //     {/* Contact Section */}
    //     <div className="w-full md:w-1/2 mb-8 md:mb-0">
    //       <h4 className="text-white text-lg mb-4 border-b-2 border-gray-700 pb-2">
    //         Contact
    //       </h4>
    //       <div className="flex items-center mb-4">
    //         <FaEnvelope className="mr-2 text-yellow-400" />
    //         <span>
    //           Email:{" "}
    //           <a
    //             href="mailto:support@example.com"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             support@example.com
    //           </a>
    //         </span>
    //       </div>
    //       <div className="flex items-center">
    //         <FaPhone className="mr-2 text-yellow-400" />
    //         <span>
    //           Phone:{" "}
    //           <a
    //             href="tel:+11234567890"
    //             className="hover:text-blue-500 transition-colors duration-300"
    //           >
    //             +1 (123) 456-7890
    //           </a>
    //         </span>
    //       </div>
    //     </div>

    //     {/* Social Media Section */}
    //     <div className="w-full md:w-1/2">
    //       <h4 className="text-white text-lg mb-4 border-b-2 border-gray-700 pb-2">
    //         Follow Us
    //       </h4>
    //       <div className="flex space-x-4">
    //         <a
    //           href="#"
    //           className="hover:text-blue-500 transition-colors duration-300"
    //         >
    //           <FaFacebookF />
    //         </a>
    //         <a
    //           href="#"
    //           className="hover:text-blue-500 transition-colors duration-300"
    //         >
    //           <FaTwitter />
    //         </a>
    //         <a
    //           href="#"
    //           className="hover:text-blue-500 transition-colors duration-300"
    //         >
    //           <FaInstagram />
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Footer Bottom */}
    //   <div className="text-center mt-8 text-gray-600">
    //     <p>&copy; 2023 Utshuk</p>
    //   </div>
    // </footer>
  );
}
