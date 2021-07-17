import { TextField } from '@material-ui/core';
import React from 'react';
const Screen = ({text}) => {
  return ( <TextField variant="outlined" label="" value={text}  fullWidth/> );
}
 
export default Screen;