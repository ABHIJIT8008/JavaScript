import {
  PencilSquareIcon} from '@heroicons/react/24/outline';

export default function TextInput({ data, disabled, onClick }) {
  const isNumber = data.inputType === "number";

  return (
    <div onClick={onClick} className="mb-4">
      <label className="block font-medium mb-1">
        <PencilSquareIcon className="w-5 h-5 mr-2" />
        {data.label}
        {data.required && <span className="text-red-500">*</span>}
        {data.description && (
          <p className="text-sm text-gray-500 mt-1">{data.description}</p>
        )}
      </label>
      <input
        type={isNumber ? "text" : data.inputType || "text"} // prevent using native "number" type for strict digit control
        disabled={disabled}
        required={data.required}
        className="border rounded p-2 w-full"
        placeholder={data.label}
        pattern={isNumber ? "\\d{10}" : undefined}
        inputMode={isNumber ? "numeric" : undefined}
        maxLength={isNumber ? 10 : undefined}
        minLength={isNumber ? 10 : undefined}
        onInput={(e) => {
          if (isNumber) {
            e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
          }
        }}
      />
    </div>
  );
}
