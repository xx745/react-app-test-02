import React, { useState } from 'react';
import { Fragment } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function Trigger({ updateAlertMessage, alertTypes }) {
  const [alertState, setAlertState] = useState(alertTypes.info.type);

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
