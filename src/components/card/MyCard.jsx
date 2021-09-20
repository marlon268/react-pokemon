import React from 'react';
import { useCharacterInfo } from '../../hooks/useCharacterInfo';

export const MyCard = ({ character }) => {
   const { sprites } = useCharacterInfo(character.url);

   if (!sprites) {
      console.log(sprites);
      return <div>Cargando</div>;
   }
   console.log(sprites.other.dream_world.front_default);
   return (
      <div>
         <h4>{character.name}</h4>
         <img
            style={{ width: 200 }}
            src={sprites.other.dream_world.front_default}
            alt={sprites.other.dream_world.front_default}
         />
      </div>
   );
};
