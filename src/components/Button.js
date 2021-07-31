// Create button component.
import React from 'react';

const Button = (props) => {
  const {
    className,
    children,
    onClick,
    ...rest
  } = props;

  return (
    <Button
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
}