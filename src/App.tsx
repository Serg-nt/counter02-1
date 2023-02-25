import React from 'react';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import {Box, Button, InputLabel, TextField, Typography} from "@mui/material";

function App() {

    const boxStyleElementBlock = {
        height: 270,
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }
    const boxStyleElementCounterAndInput = {
        height: 150,
        m:2,
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }
    const buttonSetStyle = {
        m:2,
        p: 1,
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }
    const buttonIncResetStyle = {...buttonSetStyle, display: 'flex', justifyContent: 'space-evenly'}

    return (
        <div className="App">
            <Grid container spacing={3}
                  sx={{
                      m: 5,
                      width: 800,
                  }}>
                <Grid xs={6}>
                    <Box sx={boxStyleElementBlock}>
                        <Box sx={{...boxStyleElementCounterAndInput, flexDirection: 'column'}}>
                            <TextField sx={{mb: 2}} type="number" id="outlined-basic" label="Min value" variant="outlined" />
                            <TextField type="number" id="outlined-basic" label="Max value" variant="outlined" />
                        </Box>
                        <Box sx={buttonSetStyle}>
                            <Button name='' onClick={() => {}} />
                            <Button variant="contained">set</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box sx={boxStyleElementBlock}>
                        <Box sx={boxStyleElementCounterAndInput}>
                            <Typography variant="h3">
                                Counter
                            </Typography>
                        </Box>
                        <Box sx={buttonIncResetStyle}>
                            <Button variant="contained">inc</Button>
                            <Button variant="contained">reset</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
