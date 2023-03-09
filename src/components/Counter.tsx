import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SuperButton from '../SuperButton';

type CounterPropsType = {
    value: number
    minValue: number
    maxValue: number
    IncrementValue: () => void
    ResetValue: () => void
    error?: string
    message?: string
}

const Counter = (props: CounterPropsType) => {

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

    let counterText: any = props.value
    if(props.message) counterText = props.message
    if(props.error) counterText = props.error

    return (
        <>
            <Box sx={boxStyleElementCounterAndInput}>
                <Typography
                    variant={props.error || props.message ? 'h5' : 'h1'}
                    sx={props.error || (props.value === props.maxValue) ? {color: 'red', fontWeight: 'bold'} : {}}>
                    {counterText}
                </Typography>
            </Box>
            <Box sx={buttonIncResetStyle}>
                <SuperButton disabled={props.error || props.value === props.maxValue ? true : false} name='inc' onClick={props.IncrementValue}/>
                <SuperButton disabled={props.error || props.value === props.minValue ? true : false} name='reset' onClick={props.ResetValue}/>
            </Box>
        </>
    );
};

export default Counter;