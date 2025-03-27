"use client"
import React, { useState } from "react"

const morseToText: Record<string, string> = {
  '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
  '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
  '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
  '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
  '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
  '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
  '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
  '-----': '0', '--..--': ',', '.-.-.-': '.', '..--..': '?',
  '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
  '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
  '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
  '.--.-.': '@', '': ' '
}

const textToMorse: Record<string, string> = {}
for (let key in morseToText) textToMorse[morseToText[key]] = key

const isMorse = (input: string) => /^[.\-/ ]*$/.test(input)

const morseText = (morse: string) => morse.split(' ').map(code => morseToText[code] || '').join(' ')

const textMorse = (text: string) => text.toUpperCase().split('').map(char => textToMorse[char] || (char === ' ' ? '/' : '')).join(' ')

const InputComponent = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const translate = () => {
    if (!input.trim()) {
      setOutput("")
      return
    }

    if (isMorse(input)) {
      const cleaned = input.replace(/\s+/g, ' ').replace(/\s*\/\s*/g, " / ")
      setOutput(morseText(cleaned))
    } else {
      setOutput(textMorse(input))
    }
  }

  return (
    <section>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text..."
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none transition"
        />

        <textarea
          readOnly
          value={output}
          className="w-full h-32 mt-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 outline-none"
          placeholder="Translated Morse Code will appear here..."
        ></textarea>

        <button
          onClick={translate}
          className="mt-4 w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          Translate
        </button>
  </section>
  )
}

export default InputComponent
