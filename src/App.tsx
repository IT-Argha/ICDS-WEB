import React, { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [activeSection, setActiveSection] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 space-y-6">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveSection(1)}
            className={`flex-1 p-4 rounded-lg text-center text-xl font-bold ${
              activeSection === 1 ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'
            }`}
          >
            ডিমের ঝোল এবং ভাত (বিভাগ-১)
          </button>
          <button
            onClick={() => setActiveSection(2)}
            className={`flex-1 p-4 rounded-lg text-center text-xl font-bold ${
              activeSection === 2 ? 'bg-purple-600 text-white' : 'bg-white text-purple-600'
            }`}
          >
            ভাত, ডাল, সব্জী এবং সয়াবিন/ খেচুড়ি (বিভাগ-২)
          </button>
        </div>

        {activeSection === 1 ? (
          <Calculator 
            title="ডিমের ঝোল এবং ভাত (বিভাগ-১)" 
            isSection1={true} 
          />
        ) : (
          <Calculator 
            title="ভাত, ডাল, সব্জী এবং সয়াবিন/ খেচুড়ি (বিভাগ-২)" 
            isSection1={false} 
          />
        )}
      </div>
    </div>
  );
}

export default App;