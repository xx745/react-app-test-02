import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { sharedPropShape } from './Trigger';

const MyAlert = ({ type, title, content }) => { // could be named function
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};

MyAlert.propTypes = sharedPropShape;

export default MyAlert;
