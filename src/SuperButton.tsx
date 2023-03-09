import Button from '@mui/material/Button';
import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

const SuperButton = (props: ButtonPropsType) => {
    return (
        <Button disabled={props.disabled} variant="contained" onClick={props.onClick}>{props.name}</Button>
    );
};

export default SuperButton;