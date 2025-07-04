import {
  EllipsisVerticalIcon,
  TrashIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';

import TextInput from './elements/TextInput';
import TextArea from './elements/TextArea';
import RadioButtons from './elements/RadioButtons';
import Checkboxes from './elements/Checkboxes';
import ScaleQuestion from './elements/ScaleQuestion';

export default function FormCanvas({
  formElements,
  setSelectedId,
  selectedId,
  deleteElement,
  duplicateElement,
  formTitle,
  setFormTitle
}) {
  const renderElement = (el) => {
    const isSelected = el.id === selectedId;
    const border = isSelected ? "border-blue-500 border-2" : "border";

    const commonProps = {
      data: el,
      isSelected,
      onClick: () => setSelectedId(el.id),
      disabled: true
    };

    const renderByType = () => {
      switch (el.type) {
        case 'Text Input':
          return <TextInput {...commonProps} />;
        case 'Text Area':
          return <TextArea {...commonProps} />;
        case 'Radio Buttons':
          return <RadioButtons {...commonProps} />;
        case 'Checkboxes':
          return <Checkboxes {...commonProps} />;
        case 'Scale Question':
          return <ScaleQuestion {...commonProps} />;
        default:
          return null;
      }
    };

    return (
      <div
        key={el.id}
        className={`${border} p-4 rounded mb-4 relative bg-white`}
        onClick={() => setSelectedId(el.id)}
      >
        <div className="absolute top-2 right-2">
          <EllipsisVerticalIcon className="w-5 h-5 text-gray-500" />
        </div>

        {renderByType()}

        <div className="flex gap-4 mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              duplicateElement(el.id);
            }}
            className="flex items-center text-blue-600 text-sm"
          >
            <SquaresPlusIcon className="w-4 h-4 mr-1" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteElement(el.id);
            }}
            className="flex items-center text-red-600 text-sm"
          >
            <TrashIcon className="w-4 h-4 mr-1" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-3/5 m-2 border-2 rounded-lg p-4 overflow-y-scroll bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Build Your Form</h2>

      {/* Editable Form Title Input */}
      <input
        type="text"
        className="text-2xl font-semibold mb-6 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-400"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        placeholder="Form Title"
      />

      {formElements.map(renderElement)}
    </div>
  );
}
