import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        React学習
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header