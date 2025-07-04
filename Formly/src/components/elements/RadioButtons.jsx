import {
  RadioIcon} from '@heroicons/react/24/outline';

export default function RadioButtons({ data, onClick, isSelected, disabled, deleteElement, duplicateElement }) {
  return (
    <div onClick={onClick} className="mb-4">
      <label className="font-medium flex">
        <RadioIcon className="w-5 h-5 mr-2" />
        {data.label}
        {data.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {data.options.map((option, index) => (
        <div key={index} className="mt-1">
          <input type="radio" name={`radio-${data.id}`} disabled={disabled} />
          <span className="ml-2">{option}</span>
        </div>
      ))}
    </div>
  );
}
