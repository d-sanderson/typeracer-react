import React, { useState, useEffect } from "react";

export const useRandomQuote = () => {

    const [data, setData] = useState(null)
    const [currentQuote, setCurrentQuote] = useState(null)

useEffect(async() => {
    const response = await fetch(
        `https://raw.githack.com/fortrabbit/quotes/master/quotes.json`
      );
      const data = await response.json();
      setData({ data });
      setCurrentQuote(data[Math.floor(Math.random() * data.length)].text)
    return () => {
    }
}, [])
  return {data, currentQuote};
};
