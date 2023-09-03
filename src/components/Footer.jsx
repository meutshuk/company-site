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
    // <footer className="bg-ascent text-white py-10">
    //   <div className="container mx-auto px-6 lg:px-16">
    //     <div className="flex flex-wrap justify-between">
    //       <div className="w-full md:w-1/2 mb-6 md:mb-0">
    //         <h4 className="text-xl font-bold mb-4 text-color">Contact</h4>
    //         <div className="flex items-center mb-4">
    //           <FaEnvelope className="mr-4 text-lg text-red " />
    //           <span className="text-color">
    //             Email:{" "}
    //             <a
    //               href="mailto:support@example.com"
    //               className="text-red hover:underline"
    //             >
    //               utshuk@utshuk.com
    //             </a>
    //           </span>
    //         </div>
    //         <div className="flex items-center">
    //           <FaPhone className="mr-4 text-lg text-red" />
    //           <span className="text-color">
    //             Phone:{" "}
    //             <a href="tel:+11234567890" className="text-red hover:underline">
    //               041231231
    //             </a>
    //           </span>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/2">
    //         <h4 className="text-xl font-bold mb-4 text-color">Follow Us</h4>
    //         <div className="flex space-x-4">
    //           <a href="#" className="text-red hover:text-blue-400">
    //             <FaFacebookF className="text-2xl " />
    //           </a>
    //           <a href="#" className="text-red hover:text-blue-400">
    //             <FaTwitter className="text-2xl" />
    //           </a>
    //           <a href="#" className="text-red hover:text-blue-400">
    //             <FaInstagram className="text-2xl" />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-10 border-t pt-6 flex justify-center border-gray-700">
    //       <p className="text-sm text-red">© Utshuk.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="flex justify-center bg-red py-6">
      <div className="container ">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-white font-bold">Logo</div>

          <div className="flex space-x-6">
            <div className="space-y-2">
              <div className="text-white cursor-pointer">Home</div>
              <div className="text-white cursor-pointer">About</div>
              <div className="text-white cursor-pointer">Contact</div>
            </div>
            <div className="space-y-2">
              <div className="text-white cursor-pointer">Facebook</div>
              <div className="text-white cursor-pointer">Insta</div>
              <div className="text-white cursor-pointer">Twitter</div>
            </div>
            <div className="space-y-2">
              <div className="text-white">Email</div>
              <div className="text-white">Phone number</div>
            </div>
          </div>
        </div>
        <div className="text-center">@utshuk</div>
      </div>
    </footer>
  );
}
