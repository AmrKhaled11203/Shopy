import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
  FaApplePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-8 lg:pb-0">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              SHOPY
            </h3>
            <p className="text-sm text-gray-600 mb-6 max-w-xs leading-relaxed">
              We have cloths that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaTwitter width={18} height={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaFacebook width={18} height={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaInstagram width={18} height={18} />
              </a>
              <a
                href="#"
                aria-label="Github"
                className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
              >
                <FaGithub width={18} height={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Help</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">FAQ</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Payments
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-4 sm:mb-0 text-center sm:text-left">
            Shopy © 2025-2026, All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {" "}
            {/* Using gap for spacing between images */}
            <FaCcVisa
              width={44}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <FaCcMastercard
              width={44}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <FaCcPaypal
              width={44}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <FaApplePay
              width={44}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <FaGooglePay
              width={44}
              height={28}
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
