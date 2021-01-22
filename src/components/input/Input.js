
import React from 'react';
import PropTypes from 'prop-types';

import {  StyledInput } from './styles';

const Input = ({disabled = false, placeholder, type = null}) => {
  return (
    <StyledInput 
      placeholder={placeholder} 
      disabled={disabled} 
      type={type}
    />
    
  );
}

Input.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  
};

export default Input;
