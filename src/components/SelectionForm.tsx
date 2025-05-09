import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FormData, MealType, MessType } from '../types';
import { getMealTypes, getMessTypes } from '../data/wasteData';

interface SelectionFormProps {
  onSubmit: (formData: FormData) => void;
}

const SelectionForm: React.FC<SelectionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    date: new Date().toISOString().split('T')[0],
    mealType: 'Lunch' as MealType,
    messType: 'SANNASI MESS' as MessType,
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const mealTypes = getMealTypes();
  const messTypes = getMessTypes();

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      date: date.toISOString().split('T')[0]
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto my-8 transform transition-all hover:scale-[1.01]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Mess, Date, and Meal Type</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 py-2 px-3 border"
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mealType" className="block text-sm font-medium text-gray-700">
              Meal Type
            </label>
            <select
              id="mealType"
              name="mealType"
              value={formData.mealType}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 py-2 px-3 border"
            >
              {mealTypes.map(mealType => (
                <option key={mealType} value={mealType}>
                  {mealType}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="messType" className="block text-sm font-medium text-gray-700">
              Mess Type
            </label>
            <select
              id="messType"
              name="messType"
              value={formData.messType}
              onChange={handleChange}
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 py-2 px-3 border"
            >
              {messTypes.map(messType => (
                <option key={messType} value={messType}>
                  {messType}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md shadow-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            View Waste Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectionForm;