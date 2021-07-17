import { Button, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
const NumberButton = ({ number = 0, alphabets = [], onClick, ...rest }) => {
  const buttonAphabets = useMemo(() => {
    return alphabets
      .reduce((acc, curr) => {
        acc.push(curr);
        return acc;
      }, [])
      .join("");
  }, [alphabets]);

  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      
      onClick={onClick}
      {...rest}
      style={{height:'70px',display:'block'}}
    >
      {number}
      <br/>
      <Typography variant="caption">
        {!rest.hideAphabets && buttonAphabets}
      </Typography>
    </Button>
  );
};

export default NumberButton;
