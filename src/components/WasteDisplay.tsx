import React from 'react';
import { FormData } from '../types';
import { getWasteData } from '../data/wasteData';

interface WasteDisplayProps {
  formData: FormData | null;
}

const WasteDisplay: React.FC<WasteDisplayProps> = ({ formData }) => {
  if (!formData || !formData.date || !formData.mealType || !formData.messType) {
    return null;
  }

  const wasteData = getWasteData(formData.date, formData.mealType, formData.messType);

  if (!wasteData) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-2xl mx-auto">
        <div className="text-center py-8">
          <h3 className="text-lg font-medium text-gray-700">No waste data available for the selected criteria</h3>
        </div>
      </div>
    );
  }

  // Determine color based on waste quantity
  let colorClass = 'bg-green-500';
  if (wasteData.quantity > 50) {
    colorClass = 'bg-red-500';
  } else if (wasteData.quantity > 30) {
    colorClass = 'bg-yellow-500';
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-2xl mx-auto transform transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
        Food Waste Results
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Selected Parameters</h3>
          <ul className="space-y-2 text-gray-600">
            <li><span className="font-medium">Date:</span> {formData.date}</li>
            <li><span className="font-medium">Meal Type:</span> {formData.mealType}</li>
            <li><span className="font-medium">Mess Type:</span> {formData.messType}</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Waste Information</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Quantity:</span>
              <span className="text-2xl font-bold">{wasteData.quantity} {wasteData.uom}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Waste Level</h3>
        <div className="w-full bg-gray-200 rounded-full h-6">
          <div 
            className={`${colorClass} h-6 rounded-full transition-all duration-500 ease-in-out`} 
            style={{ width: `${Math.min((wasteData.quantity / 100) * 100, 100)}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mr-2 shadow-sm transition duration-200 ease-in-out">
          Download Report
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200 ease-in-out">
          Share Results
        </button>
      </div>
    </div>
  );
};

export default WasteDisplay;