"use client";

import { useState, useEffect } from "react";
import { isValidWord } from "../utils/wordlist";

export default function Home() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const targetWord = "bratwurst";

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input - only accept 9 letter words
    if (guess.length !== 9) {
      setMessage("Please enter a 9-letter word");
      return;
    }
    
    // Check if the word is valid (in our dictionary)
    if (!isValidWord(guess)) {
      setMessage("Not a valid English or Norwegian word");
      return;
    }
    
    // Check if already guessed
    if (guesses.includes(guess)) {
      setMessage("You already guessed that word");
      return;
    }
    
    // Add guess to the list
    setGuesses([...guesses, guess]);
    setGuess("");
    
    // Check if correct
    if (guess === targetWord) {
      setMessage("🎉 Congratulations! You found the word!");
    }
  };

  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (letter === targetWord[index]) {
      return "correct"; // Green
    } else if (targetWord.includes(letter)) {
      return "present"; // Yellow
    } else {
      return "absent"; // Gray
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">BLåtur 2025, horer</h1>
      
      <div className="mb-6 w-full max-w-md">
        {guesses.map((word, wordIndex) => (
          <div key={wordIndex} className="flex mb-1 sm:mb-2 justify-center">
            {Array.from(word).map((letter, letterIndex) => {
              const status = getLetterStatus(letter, letterIndex, word);
              return (
                <div
                  key={letterIndex}
                  className={`
                    w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 border border-black flex items-center justify-center 
                    text-sm sm:text-base md:text-xl font-bold uppercase mx-0.5 sm:mx-1
                    ${status === "correct" ? "bg-green-500 text-white" : ""}
                    ${status === "present" ? "bg-yellow-500 text-white" : ""}
                    ${status === "absent" ? "bg-gray-300 text-black" : ""}
                  `}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
        
        {guesses.length < 6 && (
          <div className="flex mb-1 sm:mb-2 justify-center">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 border border-black flex items-center justify-center 
                text-sm sm:text-base md:text-xl font-bold uppercase mx-0.5 sm:mx-1"
              >
                {guess[index] || ""}
              </div>
            ))}
          </div>
        )}
        
        {/* Empty rows */}
        {[...Array(Math.max(0, 5 - guesses.length))].map((_, rowIndex) => (
          <div key={rowIndex} className="flex mb-1 sm:mb-2 justify-center">
            {[...Array(9)].map((_, cellIndex) => (
              <div
                key={cellIndex}
                className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 border border-black mx-0.5 sm:mx-1"
              ></div>
            ))}
          </div>
        ))}
      </div>
      
      {message && (
        <div className="mb-4 text-center font-bold text-base sm:text-lg px-4">{message}</div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md px-2">
        <div className="flex flex-col sm:flex-row w-full mb-4 gap-2">
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="9-letter word"
            className="p-2 border border-gray-300 rounded w-full"
            maxLength={9}
            disabled={guesses.includes(targetWord)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 w-full sm:w-auto"
            disabled={guesses.includes(targetWord)}
          >
            Submit
          </button>
        </div>
        
        <div className="mb-4 px-2">
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            🟩 = Correct letter, correct position<br />
            🟨 = Correct letter, wrong position<br />
            ⬜ = Letter not in the word
          </p>
        </div>
      </form>
    </div>
  );
}
