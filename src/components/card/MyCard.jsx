import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { MyCardContent } from './MyCardContent';

export const MyCard = () => {
    const { store, storeInfo } = useSelector((state) => state.pokemons);

    if (storeInfo.length < store.length) {
        return <h1>Cargando...</h1>;
    }

    return (
        <Grid container spacing={2}>
            {store.map((pokemon, index) => {
                return (
                    <Grid
                        key={index}
                        container
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        xl={3}
                        justifyContent="center"
                    >
                        <MyCardContent item pokemon={pokemon} index={index} />
                    </Grid>
                );
            })}
        </Grid>
    );
};
