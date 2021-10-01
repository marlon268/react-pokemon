import React, { memo, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'react-redux';
import { red } from '@mui/material/colors';
import { Box } from '@mui/system';

const styleOfBox = {
    position: 'relative',
    transformStyle: 'preserve-3d',
    width: { xs: '330px', sm: '280px', xl: '330px' },
    height: '475px',
    transition: '0.75s linear',
};

const styleOfBoxBack = {
    ...styleOfBox,
    transform: 'rotateY(180deg)',
};

const styleOfCardFront = {
    width: { xs: '330px', sm: '280px', xl: '330px' },
    height: '470px',
    boxShadow: '2px 2px 5px black, -2px 0px 5px black',
    background:
        'linear-gradient(0deg, rgba(253,209,45,1) 0%, rgba(123,31,162,1) 100%)',
    position: 'absolute',
    backfaceVisibility: 'hidden',
};

const styleOfCardBack = {
    ...styleOfCardFront,
    transform: 'rotateY(180deg)',
};

export const MyCardContent = memo(({ pokemon, index }) => {
    const { storeInfo } = useSelector((state) => state.pokemons);
    const [rotate, setRotate] = useState(false);

    const handleRotate = () => {
        setRotate(!rotate);
    };

    const image = storeInfo[index]?.sprites.other.dream_world.front_default;
    const stats = storeInfo[index]?.stats;

    return (
        <Box sx={rotate ? styleOfBoxBack : styleOfBox}>
            <Card sx={styleOfCardFront}>
                <CardHeader
                    sx={{ color: 'white', textAlign: 'center' }}
                    title={pokemon.name.toUpperCase()} /* subheader="September 14, 2016" */
                />

                <CardMedia
                    component="img"
                    height="350px"
                    sx={{ objectFit: 'contain' }}
                    image={image && image}
                    alt={pokemon.name}
                />

                {/*  <CardContent>
                    <Typography variant="body1" color="black"></Typography>
                </CardContent> */}

                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: red[900] }} />
                    </IconButton>
                    <IconButton
                        onClick={handleRotate}
                        aria-label="add to favorites"
                    >
                        <ArrowBackIcon sx={{ color: red[900] }} />
                    </IconButton>
                </CardActions>
            </Card>

            <Card sx={styleOfCardBack}>
                <CardHeader
                    sx={{ color: 'white', textAlign: 'center' }}
                    title={pokemon.name.toUpperCase()} /* subheader="September 14, 2016" */
                />

                {/* <CardMedia
                    component="img"
                    height="300px"
                    sx={{ objectFit: 'contain' }}
                    image={image && image}
                    alt={pokemon.name}
                /> */}

                <CardContent sx={{ height: '350px' }}>
                    <label htmlFor="hp">
                        {stats[0].stat.name.toUpperCase()}: {stats[0].base_stat}
                    </label>

                    <progress id="hp" max="150" value={stats[0].base_stat} />

                    <label htmlFor="attack">
                        {stats[1].stat.name.toUpperCase()}: {stats[1].base_stat}
                    </label>
                    <progress
                        id="attack"
                        max="150"
                        value={stats[1].base_stat}
                    />

                    <label htmlFor="defense">
                        {stats[2].stat.name.toUpperCase()}: {stats[2].base_stat}
                    </label>
                    <progress
                        id="defense"
                        max="150"
                        value={stats[2].base_stat}
                    />

                    <label htmlFor="special-attack">
                        {stats[3].stat.name.toUpperCase()}: {stats[3].base_stat}
                    </label>
                    <progress
                        id="special-attack"
                        max="150"
                        value={stats[3].base_stat}
                    />

                    <label htmlFor="special-defense">
                        {stats[4].stat.name.toUpperCase()}: {stats[4].base_stat}
                    </label>
                    <progress
                        id="special-defense"
                        max="150"
                        value={stats[4].base_stat}
                    />

                    <label htmlFor="speed">
                        {stats[5].stat.name.toUpperCase()}: {stats[5].base_stat}
                    </label>
                    <progress id="speed" max="150" value={stats[5].base_stat}>
                        10
                    </progress>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: red[900] }} />
                    </IconButton>
                    <IconButton
                        onClick={handleRotate}
                        aria-label="add to favorites"
                    >
                        <ArrowBackIcon sx={{ color: red[900] }} />
                    </IconButton>
                    {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon sx={{ color: red[900] }} />
                    </IconButton> */}
                </CardActions>
            </Card>
        </Box>
    );
});
