import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Tag } from './tag';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      '& img': {
        opacity: 0.5,
      }
    }
  },
  tags: {
    padding: '16px 0px',
    margin: '0px 8px',
    borderBottom: 'solid 1px #ddd',
    '& > div:not(:last-child)': {
      marginRight: 8,
    }
  },
});

interface IProps {
  title: string;
  image?: string; // src
  description: string;
  tags: string[];
}
export const BlogCard:FC<IProps> = ({image, title, description, tags}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {image && <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={image}
          title="Contemplative Reptile"
        />}
        <Box className={classes.tags}>
          {tags.map(tag => <Tag key={tag} str={tag} />)}
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
