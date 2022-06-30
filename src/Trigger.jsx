import React, { useState } from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Trigger({ updateAlertMessage, alertTypes }) { // could be arrow function
  const { type: infoAlert } = alertTypes.info;
  const [alertState, setAlertState] = useState(infoAlert);

  const updateParentAndLocalState = newValue => {
    updateAlertMessage(newValue);
    setAlertState(newValue);
  };

  const renderMenuItems = alertTypes => (
    Object
      .keys(alertTypes)
      .map(type => (
        <MenuItem
          key={type}
          value={type}>
          {alertTypes[type].title}
        </MenuItem>
      ))
  );

  return (
    <Fragment>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Alert</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Alert"
          value={alertState}
          onChange={event => updateParentAndLocalState(event.target.value)}>
          {renderMenuItems(alertTypes)}
        </Select>
      </FormControl>
    </Fragment>
  );
}

export const sharedPropShape = { // could be exported to separate file
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

Trigger.propTypes = {
  updateAlertMessage: PropTypes.func.isRequired,
  alertTypes: PropTypes.shape({
    info: PropTypes.shape(sharedPropShape).isRequired,
    warning: PropTypes.shape(sharedPropShape).isRequired,
    error: PropTypes.shape(sharedPropShape).isRequired
  }).isRequired
};

export default Trigger;
