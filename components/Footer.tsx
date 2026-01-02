import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">
            Horizon<span className="text-gray-400">Estate</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            We help you find the home that truly feels yours — combining comfort,
            design, and trust.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-page" className="hover:text-white">Privacy Policy</Link></li>
            {/* <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white">FAQs</Link></li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: contact@HorizonEstate.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Noida, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HorizonEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
