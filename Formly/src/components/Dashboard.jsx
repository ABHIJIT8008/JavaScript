import { Link } from "react-router-dom";
import FormCard from './FormCard';

const templates = [
  {
    id: 1,
    title: "Customer Feedback",
    createdAt: "2025-06-17",
    responses: 12,
    templateKey: "feedback"
  },
  {
    id: 2,
    title: "Registration Form",
    createdAt: "2025-06-14",
    responses: 8,
    templateKey: "registration"
  },
  {
    id: 3,
    title: "Bio Data Form",
    createdAt: "2025-06-14",
    responses: 8,
    templateKey: "biodata"
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">My Forms</h1>
        <Link to="/builder" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Create New Form
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((form) => (
          <FormCard key={form.id} form={form} />
        ))}
      </div>
    </div>
  );
}
