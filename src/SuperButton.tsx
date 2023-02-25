import Button from '@mui/material/Button';
import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
}

const SuperButton = (props: ButtonPropsType) => {
    return (
        <Button variant="contained" onClick={props.onClick}>{props.name}</Button>
    );
};

export default SuperButton;