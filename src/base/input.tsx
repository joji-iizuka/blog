import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, TextField, TextFieldProps } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});


export const Input:FC<TextFieldProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField {...props} size="small" />
  );
}
