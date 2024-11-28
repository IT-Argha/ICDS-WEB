import React from 'react';

interface BeneficiaryInputProps {
  values: {
    pregnant: string;
    severe: string;
    general: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function BeneficiaryInput({ values, onChange }: BeneficiaryInputProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">বেনিফিসারির সংখ্যা</h2>
      <div className="grid grid-cols-3 gap-4 bg-[#046B5F] p-4 text-white font-semibold">
        <div>গর্ভবতী ও প্রসূতি</div>
        <div>অপুষ্ট শিশু</div>
        <div>সাধারণ শিশু</div>
      </div>
      <div className="grid grid-cols-3 gap-4 bg-[#F0F7F7] p-4">
        <input
          type="number"
          value={values.pregnant}
          onChange={(e) => onChange('pregnant', e.target.value)}
          className="p-2 border rounded"
          placeholder="গর্ভবতী ও প্রসূতি"
        />
        <input
          type="number"
          value={values.severe}
          onChange={(e) => onChange('severe', e.target.value)}
          className="p-2 border rounded"
          placeholder="অপুষ্ট শিশু"
        />
        <input
          type="number"
          value={values.general}
          onChange={(e) => onChange('general', e.target.value)}
          className="p-2 border rounded"
          placeholder="সাধারণ শিশু"
        />
      </div>
    </div>
  );
}