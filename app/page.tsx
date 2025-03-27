import React from "react";
import Input from "./components/Input"

export default function Home() {
  return (
    <>
    <section>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-white text-2xl font-semibold mb-4 text-center">Morse Code Translator</h2>
                <Input />
            </div>
    </div>
    </section>
    </>
  );
}
