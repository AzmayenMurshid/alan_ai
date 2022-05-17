import React from 'react'
import useStyles from './styles.js';
import { Grid, Grow, Typography } from '@material-ui/core';


const LearnMore = () => {
    const classes = useStyles();
    const learnMoreCards = [
        { color: '#00838f', title: 'Latest World News', info: 'Latest world news from top sources', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me news from CNN' },
        { color: '#1565c0', title: 'Ask Alan questions', info: 'Alan is programmed to handle small talk and personal questions, Such as: How are you? What is your name?', text: 'What is your name?' },
        { color: '#0d47a1', title: 'Ask about weather', info: 'Real time weather forecast of any location', text: 'How is the weather today' },
        { color: '#225599', title: 'Ask about Date', info: 'Alan is smart enough to understand the concept of date', text: 'What date is it Today? Or What day will it be tomorrow?' },
        { color: '#153b6e', title: 'Ask Yoda Quotes', info: 'To make Alan fun and more engaging, it can say a set of Yoda phrases', text: 'What would Yoda say? Or What would Yoda tell me?' },
        { color: '#5077b5', title: 'Ask simple questions', info: 'Alan can calculate arithematic operations and give you the answer.', text: 'What is 115 times 12?' }
    ]
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                   learnMoreCards.map((learnMoreCard) => (
                       <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                           <div className={classes.card} style={{ backgroundColor: learnMoreCards.color }}>
                                <Typography variant='h5'>
                                    {learnMoreCards.title}
                                </Typography>
                                {/*TODO Finish Card Layout */}
                           </div>
                       </Grid>
                   ))
                }
            </Grid>
        </Grow>
    )
}

{/* <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
    <div className={classes.card} style={{ backgroundColor: learnMoreCards.color }}>
        <Typography variant='h5'>
            {learnMoreCards.title}
        </Typography>
        {learnMoreCards.info 
        ? (<Typography variant='h6'>
            <strong>
                {learnMoreCards.title.split(' ')[2]}:
            </strong>
                <br />
                {learnMoreCards.info}
        </Typography>) : null}
        <Typography variant='h6'>Try saying: <br/><i>{learnMoreCards.text}</i></Typography>
    </div>
</Grid> */}

export default LearnMore