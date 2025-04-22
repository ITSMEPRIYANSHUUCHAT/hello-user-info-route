
import { useState } from "react";
import Navbar from "../components/Navbar";
import users from "../data/users.json";

type User = {
  username: string;
  email: string;
  phone: string;
};

async function fetchUserWithDelay(username: string): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = (users as User[]).find(u => u.username.toLowerCase() === username.trim().toLowerCase());
      resolve(user || null);
    }, 2000);
  });
}

export default function Index() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchedUser, setFetchedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    setFetchedUser(null);
    setError(null);
    setLoading(true);

    const found = await fetchUserWithDelay(input);
    setLoading(false);

    if (found) {
      setFetchedUser(found);
    } else {
      setError("User not found. Try 'alice', 'bob', or 'charlie'.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-2">
        <form
          onSubmit={handleFetch}
          className="bg-white rounded-xl shadow max-w-md w-full p-8 flex flex-col gap-6"
        >
          <label className="text-lg font-semibold text-gray-800 mb-2" htmlFor="username">
            Enter Username
          </label>
          <input
            id="username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            placeholder="e.g. alice"
            value={input}
            autoComplete="off"
            onChange={e => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-indigo-600 text-white rounded-lg px-4 py-2 font-medium text-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Fetching...
              </span>
            ) : (
              "Fetch Info"
            )}
          </button>
          {fetchedUser && (
            <div className="mt-4 bg-indigo-50 rounded-lg p-4 flex flex-col gap-2">
              <span className="text-xl font-semibold text-indigo-800">
                Hello, {fetchedUser.username}!
              </span>
              <span>
                <span className="font-medium text-gray-700">Email:</span> {fetchedUser.email}
              </span>
              <span>
                <span className="font-medium text-gray-700">Phone:</span> {fetchedUser.phone}
              </span>
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-600 text-sm">{error}</div>
          )}
        </form>
        <div className="mt-8 text-gray-400 text-xs italic">
          Try: <span className="text-indigo-600">alice</span>, <span className="text-indigo-600">bob</span>, or <span className="text-indigo-600">charlie</span>
        </div>
      </div>
    </div>
  );
}
