import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { useCharacters } from '../hooks/useCharacters';
import { MyCard } from '../components/card/MyCard';

const API = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

export const Home = () => {
   const characters = useCharacters(API);

   if (characters.length === 0) {
      return (
         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography variant="body1">Cargando</Typography>
         </Box>
      );
   }

   return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Toolbar />
         {characters.map((character, index) => {
            return <MyCard key={index} character={character} />;
         })}
      </Box>
   );
};
