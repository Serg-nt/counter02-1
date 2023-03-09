import React, {useEffect, useState } from 'react';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import {Box, Button, InputLabel, TextField, Typography} from "@mui/material";
import SuperButton from './SuperButton';
import ValueBoard from './components/ValueBoard';
import Counter from './components/Counter';

function App() {

    const localMinValue = localStorage.getItem('minValue') ? Number(localStorage.getItem('minValue')) : 0
    const localMaxValue = localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 5

    const [minValue, setMinValue] = useState<number>(localMinValue)
    const [maxValue, setMaxValue] = useState<number>(localMaxValue)
    const [value, setValue] = useState<number>(localMinValue)
    const [error, setError] = useState<string>('')
    const [massage, setMassage] = useState<string>('')

    const IncrementValue = () => {
        setValue(value + 1)
    }
    const ResetValue = () => {
        setValue(minValue)
    }
    const SetPointValue = (inputMinPoint: number, inputMaxPoint: number) => {
        localStorage.setItem('minValue', inputMinPoint.toString())
        localStorage.setItem('maxValue', inputMaxPoint.toString())
        setMinValue(Number(inputMinPoint))
        setMaxValue(Number(inputMaxPoint))
        setValue(Number(inputMinPoint))
        setMassage('')
    }

    const SetErrorMessage = (title: string) => {
        setError(title)
    }
    const SetMessage = (title: string) => {
        setMassage(title)
    }

    const boxStyleElementBlock = {
        height: 270,
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }

    return (
        <div className="App">
            <Grid container spacing={3} sx={{m: 5, width: 800,}}>
                <Grid xs={6}>
                    <Box sx={boxStyleElementBlock}>
                        <ValueBoard minValue={minValue}
                                    maxValue={maxValue}
                                    SetPointValue={SetPointValue}
                                    SetErrorMessage={SetErrorMessage}
                                    SetMessage={SetMessage}
                        />
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box sx={boxStyleElementBlock}>
                        <Counter value={value}
                                 minValue={minValue}
                                 maxValue={maxValue}
                                 error={error}
                                 IncrementValue={IncrementValue}
                                 ResetValue={ResetValue}
                                 message={massage}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
