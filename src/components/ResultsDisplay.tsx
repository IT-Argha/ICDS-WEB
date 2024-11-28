import React from 'react';

interface ResultsDisplayProps {
  title: string;
  headers: string[];
  values: number[];
  total?: number;
  bgColor?: string;
}

export default function ResultsDisplay({ title, headers, values, total, bgColor = '#51B435' }: ResultsDisplayProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className={`col-span-4 grid grid-cols-${headers.length} gap-4`} style={{ backgroundColor: bgColor, padding: '10px' }}>
          {headers.map((header, index) => (
            <div key={index} className="text-white font-semibold">{header}</div>
          ))}
        </div>
        <div className={`col-span-4 grid grid-cols-${values.length} gap-4 bg-[#F0F7F7] p-4`}>
          {values.map((value, index) => (
            <div key={index} className="text-lg">{value.toFixed(2)}</div>
          ))}
        </div>
      </div>
      {total !== undefined && (
        <div className="bg-[#51B435] p-4 text-white font-semibold">
          <div>মোট খরচ: {total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}