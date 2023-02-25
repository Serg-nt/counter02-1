import React, { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import {Box, Button, InputLabel, TextField, Typography} from "@mui/material";
import SuperButton from './SuperButton';
import {
    ChangeEvent
} from "../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

function App() {

    const [value, setValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<any>()
    const [maxValue, setMaxValue] = useState<any>()

    const IncrementValue = () => {
        setValue(value + 1)
    }
    const ResetValue = () => {
        setValue(minValue)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.currentTarget.value)
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }

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
                            <TextField
                                value={minValue}
                                onChange={onChangeMinValueHandler}
                                sx={{mb: 2}}
                                type="number"
                                label="Min value"
                                variant="outlined"
                            />
                            <TextField
                                value={maxValue}
                                onChange={onChangeMaxValueHandler}
                                type="number"
                                label="Max value"
                                variant="outlined"
                            />
                        </Box>
                        <Box sx={buttonSetStyle}>
                            <SuperButton name='set' onClick={() => {}} />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box sx={boxStyleElementBlock}>
                        <Box sx={boxStyleElementCounterAndInput}>
                            <Typography variant="h1">
                                {value}
                            </Typography>
                        </Box>
                        <Box sx={buttonIncResetStyle}>
                            <SuperButton name='inc' onClick={IncrementValue} />
                            <SuperButton name='reset' onClick={ResetValue} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
