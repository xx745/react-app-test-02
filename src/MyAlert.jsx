import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const MyAlert = ({ type, title, content }) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};

export default MyAlert;
