import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-600 hover:text-gray-800">Product</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">First Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Second Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Third Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">First Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Second Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Third Link</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden"/>waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">DeliverySight</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Deliverysight —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link to="#" className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 7.66 11.03 11.03 0 01-7.88 3.34c-3.67 0-6.99-1.81-9-4.57a10.78 10.78 0 00-.37 2.76A10.91 10.91 0 019.1 22c5.91 0 10.68-4.56 11-10.31.03-.39.1-.77.2-1.15A7.999 7.999 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M7 12h4l3 8v-6h5l3-8H7v6z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M8 11h2v2h-2z"></path>
                <path d="M14 11h2v2h-2z"></path>
                <path d="M11 8h2v2h-2z"></path>
                <path d="M11 14h2v2h-2z"></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
