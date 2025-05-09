import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectionForm from './components/SelectionForm';
import WasteDisplay from './components/WasteDisplay';
import InfoCard from './components/InfoCard';
import { FormData } from './types';

function App() {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Food Waste Tracking System</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Track and analyze food waste data across different dining facilities to identify patterns
              and implement sustainable waste reduction strategies.
            </p>
          </div>
          
          <SelectionForm onSubmit={handleFormSubmit} />
          
          {formData && (
            <div className="space-y-6 animate-fadeIn">
              <WasteDisplay formData={formData} />
              <InfoCard formData={formData} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;