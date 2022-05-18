import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Grow, Typography, Button } from '@material-ui/core'

import useStyles from './styles.js';

const LearnMore = () => {
    const classes = useStyles()
    const learnMoreCards = [
        {color: '#00838f',title: 'News', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#1565c0',title: 'Weather Forecast', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#4527a0',title: 'Calendar', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#283593',title: 'Calculator', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#1565c0',title: 'Small Talk', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#0d47a1',title: 'Yoda quotes', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#225599',title: 'News', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},
        {color: '#153b6e',title: 'News', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources'},


    ]
  return (
    <>
        <Typography 
            variant='h4' 
            color='textPrimary' 
            style={{ color: '#FFF', width: '100%', textAlign:'center', padding: 100 }
            }>
            Learn More
        </Typography>
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {
                learnMoreCards.map((card, index) => (
                    <>
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: card.color }}>
                                <Typography variant='h5'>
                                    {card.title}
                                </Typography>
                                <Typography>
                                    {card.info}
                                </Typography>
                                <Typography variant='body1'>
                                    {card.text}
                                </Typography>
                            </div>
                        </Grid>
                    </>
                ))
            }
            </Grid>
        </Grow>
        <div className='Btn__container'>
            <Link to={'/'}>
                <Button className={classes.returnBtn}>Return</Button>
            </Link>
        </div>
    </>
    
    
  )
}

export default LearnMore