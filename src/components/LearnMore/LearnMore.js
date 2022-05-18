import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Grow, Typography, Button } from '@material-ui/core'

import useStyles from './styles.js';

const LearnMore = () => {
    const classes = useStyles()
    const learnMoreCards = [
        {color: '#225599',title: 'Who is Alan?', info: 'Alan is a personal assistant who gets you the latest news, weather, and other day to day information. In order to talk to him, press the mic button on your screen', text: 'Try asking Alan who he is!'},
        {color: '#153b6e',title: 'What is Alan\'s purpose?', info: 'Alan is here for your convenience, getting latest information around the world and to keep you entertained!', text: 'Try asking Alan his abilities'},
        {color: '#00838f',title: 'News', info: 'Alan able to fetch news articles from top sources', text: 'Try out searching for Latest news, news by Term, Category and sources. To see the news, return to the Home page'},
        {color: '#1565c0',title: 'Weather Forecast', info: 'Alan is able to get weather forecast for current weather in a specific location', text: 'Get the weather forecast by states and countries through Alan.'},
        {color: '#4527a0',title: 'Calendar', info: 'Alan is able to check the calendar for you and track dates!', text: 'Test out his calendar abilities by asking him what would the date be next Saturday.'},
        {color: '#283593',title: 'Calculator', info: 'Alan is able to do simple arithmatic problems similar to phone calculators!', text: 'Test Alan\'s math skills by giving him any math operation question!'},
        {color: '#1565c0',title: 'Small Talk', info: 'Want to know more about Alan? Talk to him personally and get to know him more!', text: 'Get to know your virtual friend by asking him personal questions'},
        {color: '#0d47a1',title: 'Yoda quotes', info: 'Alan can keep you entertained with wise Yoda quotes from Star Wars!', text: 'Test his Yoda quotes by asking him what would Yoda say.'},
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