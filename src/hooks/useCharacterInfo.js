import { useState, useEffect } from 'react';

export const useCharacterInfo = (url) => {
   const [characters, setCharacters] = useState([]);
   useEffect(() => {
      fetch(url)
         .then((response) => response.json())
         .then((data) => setCharacters(data));
   }, [url]);
   return characters;
};
