import { useState } from 'react';

export default function ScaleQuestion({ data, isSelected, onClick, disabled }) {
  const min = data.min || 1;
  const max = data.max || 5;
  const [value, setValue] = useState(Math.floor((min + max) / 2)); // midpoint default

  return (
    <div onClick={onClick} className={`p-2 ${isSelected ? "bg-blue-50" : ""}`}>
      <label className="block font-medium mb-2">
        {data.label || "Scale Question"}
        {data.required && <span className="text-red-500">*</span>}
      </label>

      <div className="flex items-center space-x-4">
        <span className="w-8 text-right text-sm font-semibold text-gray-700">{value}</span>
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          disabled={disabled}
          className="flex-1 appearance-none h-2 bg-blue-600 rounded-full outline-none"
        />
        <span className="w-8 text-left text-sm text-gray-500">{max}</span>
      </div>

      {data.description && (
        <p className="text-sm text-gray-500 mt-1">{data.description}</p>
      )}
    </div>
  );
}
