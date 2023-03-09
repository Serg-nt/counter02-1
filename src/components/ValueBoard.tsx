import {Box, TextField} from '@mui/material';
import React, {useState, useEffect} from 'react';
import SuperButton from '../SuperButton';
import {
    ChangeEvent
} from "../../../../../../Applications/IntelliJ IDEA.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

type ValueBoardPropsType = {
    minValue: number
    maxValue: number
    SetPointValue: (inputMinPoint: number, inputMaxPoint: number) => void
    SetErrorMessage: (title: string) => void
    SetMessage: (title: string) => void
}

const ValueBoard = (props: ValueBoardPropsType) => {
    const [inputMinValue, setInputMinValue] = useState<number>(props.minValue)
    const [inputMaxValue, setInputMaxValue] = useState<number>(props.maxValue)
    const [errorMin, setErrorMin] = useState<boolean>(false)
    const [errorMax, setErrorMax] = useState<boolean>(false)

    useEffect(() => {
        if (inputMinValue < 0) {
            setErrorMin(true)
            props.SetErrorMessage('Value cannot be negative')
        } else if (inputMinValue == inputMaxValue) {
            setErrorMin(true)
            setErrorMax(true)
            props.SetErrorMessage('Start value cannot be equal Max value')
        } else if (inputMinValue > inputMaxValue) {
            setErrorMin(true)
            props.SetErrorMessage('Start value cannot be greater than the Max value')
        } else if (inputMaxValue > 99) {
            setErrorMax(true)
            props.SetErrorMessage('Maxvalue cannot be more than 99')
        } else {
            setErrorMin(false)
            setErrorMax(false)
            props.SetErrorMessage('')
        }
    }, [inputMinValue, inputMaxValue])

    const disabled = errorMin || errorMax || (props.maxValue === inputMaxValue && props.minValue === inputMinValue) ? true : false

    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(Number(e.currentTarget.value))
        props.SetMessage('enter values and press Set')
    }
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMaxValue(Number(e.currentTarget.value))
        props.SetMessage('enter values and press Set')
    }

    const boxStyleElementCounterAndInput = {
        height: 150,
        m: 2,
        p: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }
    const buttonSetStyle = {
        m: 2,
        p: 1,
        border: '2px solid rgb(29,178,241)',
        borderRadius: 2
    }

    return (
        <>
            <Box sx={{...boxStyleElementCounterAndInput, flexDirection: 'column', gap: 2}}>
                <TextField
                    error={errorMin}
                    value={inputMinValue}
                    onChange={onChangeMinValueHandler}
                    type="number"
                    label="Start value"
                    variant="outlined"
                />
                <TextField
                    error={errorMax}
                    value={inputMaxValue}
                    onChange={onChangeMaxValueHandler}
                    type="number"
                    label="Max value"
                    variant="outlined"
                />
            </Box>
            <Box sx={buttonSetStyle}>
                <SuperButton
                    disabled={disabled}
                    name='set'
                    onClick={() => props.SetPointValue(inputMinValue, inputMaxValue)}
                />
            </Box>
        </>
    );
};

export default ValueBoard;