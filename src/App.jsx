import React, { useState } from 'react';
import MyAlert from './MyAlert';
import { Stack, Typography } from '@mui/material';
import Trigger from './Trigger';

const App = () => {
  const ALERTS = { // ideally it would be in a separate file with other constants
    info: {
      type: 'info',
      title: 'Information',
      content: 'This is an information message'
    },
    warning: {
      type: 'warning',
      title: 'Warning',
      content: 'This is a warning message'
    },
    error: {
      type: 'error',
      title: 'Error',
      content: 'This is an error message'
    }
  };

  const [selectedAlert, setSelectedAlert] = useState(ALERTS.info);

  const handleAlertUpdate = value => {
    setSelectedAlert(ALERTS[value]);
  };

  return (
    <>
      <Stack
        sx={{ width: '600px', padding: '20px' }}
        spacing={2}>
        <Typography variant={'h4'}>Alerts</Typography>
        <MyAlert
          type={selectedAlert.type}
          title={selectedAlert.title}
          content={selectedAlert.content} />
        <Trigger
          alertTypes={ALERTS}
          updateAlertMessage={handleAlertUpdate} />
      </Stack>

    </>
  );
};

export default App;
