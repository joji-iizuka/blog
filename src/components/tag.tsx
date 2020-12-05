import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});

interface IProps {
  str: string;
  onClick: (str: string) => void;
  isActive: boolean;
}
export const Tag:FC<IProps> = ({str, onClick, isActive}) => {
  const classes = useStyles();
  const color = isActive ? 'primary' : undefined;

  return (
    <Chip label={str} onClick={() => onClick(str)} variant="outlined" color={color}/>
  );
}
