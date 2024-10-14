import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-primary">The Dashboard</h1>
      <ul className="text-center mb-6">
        <li className="text-secondary">Nama: Valencio Arjun</li>
        <li className="text-secondary">NPM: 2327250049</li>
      </ul>
      <div className="flex space-x-4">
        <Link href="/dashboard/user">
          <button className="bg-highlight text-white px-4 py-2 rounded shadow">
            List of Our Users
          </button>
        </Link>
        <Link href="/dashboard/form">
          <button className="bg-secondary text-white px-4 py-2 rounded shadow">
            Register for Users
          </button>
        </Link>
      </div>
    </div>
  );
}
