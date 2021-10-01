import React from 'react';
import { Box } from '@mui/material';

import { MyCard } from '../components/card/MyCard';

export const Home = React.memo(() => {
    return (
        <Box
            component="main"
            sx={{
                p: 1,
                flexGrow: 1,
                justifyContent: 'center',
                bgcolor: '#ccc',
                paddingTop: '80px',
            }}
        >
            <MyCard />
        </Box>
    );
});
