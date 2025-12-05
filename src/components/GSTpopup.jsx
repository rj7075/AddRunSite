// PopupForm.jsx
import InlineForm from "./InlineForm";

export default function GSTForm({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative rounded-xl w-full max-w-md p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-6 text-gray-800 text-xl"
        >
          ✖
        </button>

        {/* Your same InlineForm here */}
        <InlineForm />
      </div>
    </div>
  );
}
