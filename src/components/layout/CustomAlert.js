import React from 'react';
import { Alert } from 'reactstrap';

const CustomAlert = ({ alert }) => {
  return (
    alert !== null && (
      <Alert color={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    )
  );
};

export default CustomAlert;
