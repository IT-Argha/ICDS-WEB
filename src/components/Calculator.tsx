import React, { useState } from 'react';
import BeneficiaryInput from './BeneficiaryInput';
import ResultsDisplay from './ResultsDisplay';
import { BeneficiaryValues } from '../types';
import { calculateResults } from '../utils/calculations';

interface CalculatorProps {
  title: string;
  isSection1: boolean;
}

export default function Calculator({ title, isSection1 }: CalculatorProps) {
  const [values, setValues] = useState<BeneficiaryValues>({
    pregnant: '',
    severe: '',
    general: ''
  });

  const [results, setResults] = useState<any>(null);

  const handleInputChange = (field: string, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    const calculatedResults = calculateResults(values, isSection1);
    setResults(calculatedResults);
  };

  const handleClear = () => {
    setValues({
      pregnant: '',
      severe: '',
      general: ''
    });
    setResults(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <BeneficiaryInput values={values} onChange={handleInputChange} />

      <button 
        onClick={handleCalculate}
        className="w-full bg-purple-600 text-white py-3 rounded-lg text-xl font-bold"
      >
        CALCULATE
      </button>

      {results && (
        <>
          <div className="bg-[#51B435] p-4 text-white rounded">
            <div>মোট বেনিফিসারি: {results.totalBeneficiaries}</div>
          </div>

          <ResultsDisplay
            title="ডিমের খরচ"
            headers={['গর্ভবতী ও প্রসূতি', 'অপুষ্ট শিশু', 'সাধারণ শিশু', 'ডিমের মোট খরচ']}
            values={results.eggCosts}
          />

          <ResultsDisplay
            title={isSection1 ? 'অনন্যা ও আলুর খরচ' : 'সব্জী, সয়াবিন এর বরাদ্দ'}
            headers={['গর্ভবতী ও প্রসূতি', 'অপুষ্ট শিশু', 'সাধারণ শিশু', isSection1 ? 'অনন্যা ও আলুর মোট খরচ' : 'সব্জী, সয়াবিন এর বরাদ্দ']}
            values={results.vegetableCosts}
          />

          <ResultsDisplay
            title="বেনিফিসারি সংখ্যা সকালের জল খাবার"
            headers={['সাধারণ শিশু', 'অপুষ্ট শিশু']}
            values={results.morningSnackCount}
          />

          <ResultsDisplay
            title="ছাতু + চিনির খরচ"
            headers={['সাধারণ শিশুর খরচ', 'অপুষ্ট শিশুর খরচ']}
            values={results.chatuSugarCosts}
          />

          <div className="bg-[#51B435] p-4 text-white rounded">
            <div>ছাতু ও চিনির মোট খরচ: {results.totalCosts.chatuSugarTotal.toFixed(2)}</div>
          </div>

          <div className="bg-[#51B435] p-4 text-white rounded">
            <div>সর্বমোট খরচ: {results.totalCosts.grandTotal.toFixed(2)}</div>
          </div>
        </>
      )}

      <button 
        onClick={handleClear}
        className="w-full bg-purple-600 text-white py-3 rounded-lg text-xl font-bold"
      >
        CLEAR
      </button>
    </div>
  );
}