import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Avatar } from '@material-ui/core'

import useStyles from './styles'

const Summary = ({ country }) => {
    const classes = useStyles();

    return (
        <Card elevation={6} style={{ cursor: 'pointer' }}>
            <CardMedia
                title={country.country}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' style={{ display: 'flex' }}>      {country.country}
                    <Avatar alt="" src={country.countryInfo.flag} style={{ marginLeft: '10px' }} />
                </Typography>
                <Box display='flex' justifyContent='space-around'>
                    <div>
                        <Typography variant='subtitle1'>Population: {country.population}</Typography>
                        <Typography variant='subtitle1'>Total Cases: {country.cases}</Typography>
                        <Typography variant='subtitle1'>Total Deaths: {country.deaths}</Typography>
                        <Typography variant='subtitle1'>Critical: {country.critical}</Typography>
                        <Typography variant='subtitle1'>Total Recovered: {country.recovered}</Typography>
                    </div>
                    <div>
                        <Typography variant='subtitle1'>Active Cases: {country.active}</Typography>
                        <Typography variant='subtitle1'>Today Cases: {country.todayCases}</Typography>
                        <Typography variant='subtitle1'>Today Deaths: {country.todayDeaths}</Typography>
                        <Typography variant='subtitle1'>Today Recovered: {country.todayRecovered}</Typography>
                    </div>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Summary
