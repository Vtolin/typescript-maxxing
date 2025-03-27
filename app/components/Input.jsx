import React from "react";

const InputComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-white text-2xl font-semibold mb-4 text-center">Morse Code Translator</h2>
                
                <input 
                    type="text" 
                    id="input1" 
                    placeholder="Enter text..." 
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none transition"
                />

                <textarea 
                    id="morse" 
                    readOnly 
                    className="w-full h-32 mt-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
                    placeholder="Translated Morse Code will appear here..."
                ></textarea>

                <button 
                    id="translateBtn" 
                    className="mt-4 w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                    Translate
                </button>
            </div>
        </div>
    );
};

export default InputComponent;
