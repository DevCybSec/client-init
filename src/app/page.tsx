import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to DevCybSec</h1>
            <input
                type="text"
                placeholder="Type something nasty..."
                className="px-4 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
    </div>);
}
