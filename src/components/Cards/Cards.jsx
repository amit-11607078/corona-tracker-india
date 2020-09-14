import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ( {data}) => {
console.log(data);
    const newData = data[0];
   
    if(!data[0]) {
        return 'loading...';
    }

    const {active, confirmed, recovered, deaths, lastupdatedtime}  = newData;
  
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} sx={12} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ parseInt(confirmed) } duration={3.5} separator="," ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdatedtime).toDateString() }</Typography>
                        <Typography variant="body2" > Number of active cases of Covid-19</Typography>
                    </CardContent> 
                </Grid>
                <Grid item component={Card} sx={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end= {parseInt(recovered)} duration={3} separator="," ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdatedtime).toDateString() }</Typography>
                        <Typography variant="body2" > Number of recovered patients of covid-19</Typography>
                    </CardContent> 
                </Grid>
                <Grid item component={Card} sx={12} md={2} className={cx(styles.card, styles.active)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ parseInt(active) } duration={2.8} separator="," ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdatedtime).toDateString() }</Typography>
                        <Typography variant="body2" > Number of active cases of Covid-19</Typography>
                    </CardContent> 
                </Grid>
                <Grid item component={Card} sx={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end= {parseInt(deaths)} duration={2.5} separator="," ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastupdatedtime).toDateString() }</Typography>
                        <Typography variant="body2" > Number of deaths from covid-19</Typography>
                    </CardContent> 
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;