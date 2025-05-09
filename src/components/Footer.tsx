import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">About Food Waste Tracker</h3>
            <p className="text-green-100">
              Our mission is to help organizations track and reduce food waste through 
              data-driven insights and sustainable practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors duration-200">Reports</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors duration-200">Analytics</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors duration-200">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-green-100 mb-2">
              Have questions or feedback? Reach out to our team.
            </p>
            <a href="mailto:support@foodwastetracker.com" className="text-white hover:text-green-200 underline transition-colors duration-200">
              support@foodwastetracker.com
            </a>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-4 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Food Waste Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;