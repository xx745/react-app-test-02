import React, { useState, useEffect } from 'react';
import MyAlert from './MyAlert';
import { Stack, Typography } from '@mui/material';
import Trigger from './Trigger';

const App = () => {
    const [alertInfo, setAlertInfo] = useState(true);
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertError, setAlertError] = useState(false);

    useEffect(() => {
        // setAlertInfo(true);
        // setAlertWarning(true);
        // setAlertError(true);
    }, [alertInfo, alertWarning, alertError]);

    const handleMessageUpdate = value => {
        switch (value) {
            case value === 'info':
                console.log('--info case')
                setAlertInfo(true)
                setAlertWarning(false)
                setAlertError(false)
                break;
            case value === 'warning':
                console.log('--warning case')
                setAlertWarning(false)
                setAlertWarning(true)
                setAlertError(false)
                break;
            case value === 'error':
                console.log('--error case')
                setAlertError(false)
                setAlertWarning(false)
                setAlertError(true)
                break;
        };
    };

    return (
        <>
            <Stack sx={{ width: '600px', padding: '20px' }} spacing={2}>
                <Typography variant={'h4'}>Alerts</Typography>
                {
                    alertInfo
                    ? <MyAlert
                    type={'info'}
                    title={'Information'}
                    content={'This is an information message'} /> 
                    : null
                }
                {
                    alertWarning
                    ? <MyAlert
                        type={'warning'}
                        title={'Warning'}
                        content={'This is a warning message'} /> 
                    : null
                }
                {
                    alertError
                    ? <MyAlert
                        type={'error'}
                        title={'Error'}
                        content={'This is an error message'} />
                    : null
                }
                <Trigger updateAlertMessage={handleMessageUpdate} />
            </Stack>

        </>
    );
};

export default App;
