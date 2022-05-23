import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'; // taken from alan SDK 

import wordToNumbers from 'words-to-numbers';
import { Switch, Route, Link } from 'react-router-dom';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'; // styling hook.
import { Button, Typography } from '@material-ui/core';

import LearnMore from './components/LearnMore/LearnMore';
import Background from './Background';

const alanKey = 'c464231c47b8ad2748fe0fe5720862822e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => { // use Effect hook.
        alanBtn({ //Alan Btn on click
            key: alanKey,
            onCommand: ({ command, articles, number }) => { //Check command
                if(command === 'newHeadlines') { // news command
                    setNewsArticles(articles);
                    setActiveArticle(-1); // direct to beginning of article list
                } else if(command === 'highlight'){ // headline command
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1); // iterate through list
                } else if(command === 'open') { // open article command
                    const parsedNumber = number.length > 2 ? wordToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) { //If article index is non existant.
                        alanBtn().playText('Please try that again');
                    } else if(article) { // else ...
                    window.open(article.url, '_blank');
                    alanBtn().playText('Opening...');
                    }
                }
            }
        })
    }, []);

    const Home = () => { { /* Home component */}
        return(
            
            <>
            {/* Home components */}
                <div className={classes.logoContainer}>
                    <img src='https://alan.app/static/mainIll.35028f97.svg' className={classes.alanLogo} alt="Alan logo" />
                </div>
                <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                <div className='Btn__container'>
                    <Link to={'/learn-more'}>
                        <Button className={classes.learnMoreBtn}>Learn More</Button>
                    </Link>
                </div>
            </>
        )
    }

  return (
    <div>
        <Switch> {/* react router dom implementation, creating routes. Use react-router-dom@5.2 */}
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/learn-more'>
                <LearnMore />
            </Route>
        </Switch>
        <div>
            <Background />
            <Typography varient='h5' color='textSecondary' className={classes.creds}>
                Built by Azmayen Murshid
            </Typography>
        </div>
    </div>
  )
}

export default App