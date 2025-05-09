import React from 'react';
import { FormData } from '../types';
import { getTotalWasteForDay } from '../data/wasteData';

interface InfoCardProps {
  formData: FormData | null;
}

const InfoCard: React.FC<InfoCardProps> = ({ formData }) => {
  if (!formData || !formData.date || !formData.mealType) {
    return null;
  }

  const totalWaste = getTotalWasteForDay(formData.date, formData.mealType);
  
  // These would come from actual calculations in a real app
  const averageWaste = 200; // Example value
  const comparisonPercentage = Math.round((totalWaste / averageWaste) * 100) - 100;
  const isAboveAverage = comparisonPercentage > 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Waste Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Comparison to Average</h3>
          <div className={`text-xl font-bold ${isAboveAverage ? 'text-red-600' : 'text-green-600'}`}>
            {isAboveAverage ? '+' : ''}{comparisonPercentage}%
          </div>
          <p className="text-gray-600 text-sm mt-1">
            {isAboveAverage 
              ? 'Above average waste for this meal type' 
              : 'Below average waste for this meal type'}
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Environmental Impact</h3>
          <div className="text-base text-gray-800">
            <p>CO₂ Equivalent: <span className="font-semibold">{(totalWaste * 2.5).toFixed(1)} kg</span></p>
            <p>Water Usage: <span className="font-semibold">{(totalWaste * 1000).toFixed(0)} liters</span></p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Recommendations</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Consider portion control adjustments for {formData.mealType.toLowerCase()}</li>
          <li>Review popularity of menu items for this meal type</li>
          <li>Implement food waste training for kitchen staff</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoCard;