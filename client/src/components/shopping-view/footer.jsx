


// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer bg-gray-700 rounded-3xl text-gray-100  p-10">
//       <div>
//         <svg
//           width="50"
//           height="50"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           fillRule="evenodd"
//           clipRule="evenodd"
//           className="fill-current"
//         >
//           <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
//         </svg>
//         <p>
//           Everything Computers
//           <br />
//           D-3 45/A SDV Lakkarpur, Faridabad <br />
//           Phone: <a href="tel:9315170823" className="text-sky-400 hover:underline">9315170823</a>
//           <br />
//           Your trusted partner in technology solutions and services.
//         </p>
//       </div>
//       <div>
//         <h6 className="footer-title">Services</h6>
//         <a className="link link-hover">Computer Repairs</a>
//         <a className="link link-hover">Software Installation</a>
//         <a className="link link-hover">Network Solutions</a>
//         <a className="link link-hover">Custom Builds</a>
//       </div>
//       <div>
//         <h6 className="footer-title">Company</h6>
//         <a className="link link-hover">About us</a>
//         <a className="link link-hover">Contact</a>
//         <a className="link link-hover">Jobs</a>
//         <a className="link link-hover">Press kit</a>
//       </div>
//       <div>
//         <h6 className="footer-title">Legal</h6>
//         <a className="link link-hover">Terms of use</a>
//         <a className="link link-hover">Privacy policy</a>
//         <a className="link link-hover">Cookie policy</a>
//       </div>
//       <div className="mt-4 flex space-x-4 text-gray-400">
//         <a href="#" className="hover:text-sky-500"><FaFacebook size={20} /></a>
//         <a href="#" className="hover:text-sky-500"><FaTwitter size={20} /></a>
//         <a href="#" className="hover:text-sky-500"><FaInstagram size={20} /></a>
//         <a href="#" className="hover:text-sky-500"><FaLinkedin size={20} /></a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-3xl text-gray-100 p-10 md:flex md:justify-between md:items-start">
      <div className="mb-6 md:mb-0">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current mb-4"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>
          Everything Computers
          <br />
          D-3 45/A SDV Lakkarpur, Faridabad <br />
          Phone:{" "}
          <a
            href="tel:9315170823"
            className="text-sky-400 hover:underline"
          >
            9315170823
          </a>
          <br />
          Your trusted partner in technology solutions and services.
        </p>
      </div>

      <div>
        <h6 className="footer-title text-lg font-semibold mb-2">Services</h6>
        <a className="link link-hover transition hover:text-sky-400">Computer Repairs</a>
        <a className="link link-hover transition hover:text-sky-400">Software Installation</a>
        <a className="link link-hover transition hover:text-sky-400">Network Solutions</a>
        <a className="link link-hover transition hover:text-sky-400">Custom Builds</a>
      </div>

      <div>
        <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
        <a className="link link-hover transition hover:text-sky-400">About us</a>
        <a className="link link-hover transition hover:text-sky-400">Contact</a>
        <a className="link link-hover transition hover:text-sky-400">Jobs</a>
        <a className="link link-hover transition hover:text-sky-400">Press kit</a>
      </div>

      <div>
        <h6 className="footer-title text-lg font-semibold mb-2">Legal</h6>
        <a className="link link-hover transition hover:text-sky-400">Terms of use</a>
        <a className="link link-hover transition hover:text-sky-400">Privacy policy</a>
        <a className="link link-hover transition hover:text-sky-400">Cookie policy</a>
      </div>

      <div className="mt-6 flex space-x-4 text-gray-400 md:mt-0">
        <a href="#" className="hover:text-sky-400 transform transition hover:scale-110"><FaFacebook size={24} /></a>
        <a href="#" className="hover:text-sky-400 transform transition hover:scale-110"><FaTwitter size={24} /></a>
        <a href="#" className="hover:text-sky-400 transform transition hover:scale-110"><FaInstagram size={24} /></a>
        <a href="#" className="hover:text-sky-400 transform transition hover:scale-110"><FaLinkedin size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;
