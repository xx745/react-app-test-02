import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Trigger({ updateAlertMessage }) {
    const [alertState, setAlertState] = useState('info');

    const handleSelectionChange = event => {
        setAlertState(event.target.value);
    };

    useEffect(() => {
        updateAlertMessage(alertState);
    }, [alertState]);

    return (
        <Fragment>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Alert</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Alert"
                    value={alertState}
                    onChange={handleSelectionChange}>
                    <MenuItem value={'info'}>Info</MenuItem>
                    <MenuItem value={'warning'}>Warning</MenuItem>
                    <MenuItem value={'error'}>Error</MenuItem>
                </Select>
            </FormControl>
        </Fragment>
    )
}