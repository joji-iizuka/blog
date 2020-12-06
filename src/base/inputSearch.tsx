import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from './input';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

interface IProps {
  str: string;
  onChange: (value: string) => void;
}
export const InputSearch:FC<IProps> = ({str, onChange}) => {
  const classes = useStyles();

  return (
    <Input
      className={classes.root}
      value={str}
      label="検索"
      type="search"
      variant="outlined"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}
