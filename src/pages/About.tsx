
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-12 bg-white shadow rounded-xl p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">About UserInfoApp</h2>
        <p className="text-gray-700 text-lg text-center mb-2">
          This is a simple demo React app that fetches user information by username, simulating an API call, using only local static data.
        </p>
        <p className="text-gray-500 text-sm text-center">
          Built with React, shadcn/ui, Tailwind CSS, and Lovable.
        </p>
      </div>
    </div>
  );
}
