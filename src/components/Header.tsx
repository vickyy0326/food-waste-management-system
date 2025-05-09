import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Food Waste Tracker</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li className="hover:text-green-200 transition-colors duration-200">Dashboard</li>
            <li className="hover:text-green-200 transition-colors duration-200">Reports</li>
            <li className="hover:text-green-200 transition-colors duration-200">Analytics</li>
            <li className="hover:text-green-200 transition-colors duration-200">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;