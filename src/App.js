import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import wordToNumbers from 'words-to-numbers';
import { Switch, Route, Link } from 'react-router-dom';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import { Button, Typography } from '@material-ui/core';

import LearnMore from './components/LearnMore/LearnMore';

const alanKey = 'c464231c47b8ad2748fe0fe5720862822e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight'){
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if(command === 'open') {
                    const parsedNumber = number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try that again');
                    } else if(article) {
                    window.open(article.url, '_blank');
                    alanBtn().playText('Opening...');
                    }
                }
            }
        })
    }, []);

    const Footer = () => {
        return(
            <div>
                <Typography varient='h5' color='textSecondary' className={classes.creds}>Built by Azmayen Murshid</Typography>
            </div>
        )
    }

  return (
    <div>
        <Switch>
            <Route exact path='/'>
                <div className={classes.logoContainer}>
                    <img src='https://alan.app/static/mainIll.35028f97.svg' className={classes.alanLogo} alt="Alan logo" />
                </div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                <div className='learnMoreBtn__container'>
                <Link to='/learn-more'>
                    <Button className={classes.learnMoreBtn}>Learn More</Button>
                </Link>
        </div>
            </Route>
            <Route exact path='/learn-more'>
                <LearnMore />
            </Route>
        </Switch>
        
        <Footer />
    </div>
  )
}

export default App