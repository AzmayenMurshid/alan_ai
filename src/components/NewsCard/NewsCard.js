import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


import useStyles from './styles';

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
  //Desturcting elements
  const classes = useStyles(); // Styling hook for material UI.
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50); //initial scrolling reference point

  //useEffect hook to autoscroll when Alan reads headlines.
  useEffect(() => {
    window.scroll(0, 0);
    // iterate through cards and autoscroll to article reading.
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => { // check article index in array.
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  {/* news article component rendering */}
  return (
    <Card ref={elRefs[i]} className={ activeArticle === i ? classes.activeCard : classes.card}> {/* auto read highlight class activation */}
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} title={title} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url}>Learn More</Button>
        <Typography variant="h5" color="textSecondary" component="h2">{i + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;