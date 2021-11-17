import React from 'react'
import styles from './styles.module.css'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'
function Cards({ data }) {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={data.updated}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            Updated Today
                        </Typography>
                        <Typography variant='body2'>
                            Number of active cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={data.recovered}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            Updated Today
                        </Typography>
                        <Typography variant='body2'>
                            Number of recoveries from covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={data.recovered}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            Updated Today
                        </Typography>
                        <Typography variant='body2'>
                            Number of deaths from covid-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
