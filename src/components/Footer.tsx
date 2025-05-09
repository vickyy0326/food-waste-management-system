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
            <div className="text-green-100 space-y-4">
              <div>
                <h4 className="font-medium">Faculty Mentor</h4>
                <p>Dr. S. Padmini</p>
              </div>
              <div>
                <h4 className="font-medium">Students Team</h4>
                <ul className="space-y-2">
                  <li>
                    <p>L.Chethan (RA2311003010515)</p>
                    <a href="mail