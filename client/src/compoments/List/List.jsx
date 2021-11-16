import React, { useState } from "react"
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
import useStyles from './styles'
import Summary from '../Summary/Summary'
const List = () => {
    const classes = useStyles();
    const [continent, setContinent] = useState('all');
    const [country, setCountry] = useState('');

    // Static demo data
    const covidData = [{
        "country": "Italy",
        "code": "IT",
        "confirmed": 219070,
        "recovered": 105186,
        "critical": 1027,
        "deaths": 30560,
        "latitude": 41.87194,
        "longitude": 12.56738,
        "lastChange": "2020-05-10T18:12:02+02:00",
        "lastUpdate": "2020-05-11T04:00:03+02:00",
    },
    {
        "country": "India",
        "code": "IN",
        "confirmed": 34456401,
        "recovered": 33861756,
        "critical": 8944,
        "deaths": 463852,
        "latitude": 20.593684,
        "longitude": 78.96288,
        "lastChange": "2021-11-16T04:45:16+01:00",
        "lastUpdate": "2021-11-16T07:30:03+01:00",
    }]

    return (
        <div className={classes.container}>
            <Typography variant='h4'>COVID-19 CORONAVIRUS PANDEMIC</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Continents</InputLabel>
                <Select value={continent} onChange={(e) => setContinent(e.target.value)}>
                    <MenuItem value={'all'}>All Continents</MenuItem>
                    <MenuItem value={'africa'}>Africa</MenuItem>
                    <MenuItem value={'antartica'}>Antartica</MenuItem>
                    <MenuItem value={'asia'}>Asia</MenuItem>
                    <MenuItem value={'australia'}>Australia/Oceania</MenuItem>
                    <MenuItem value={'europe'}>Europe</MenuItem>
                    <MenuItem value={'north_america'}>North America</MenuItem>
                    <MenuItem value={'south_america'}>South America</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Countries</InputLabel>
                <Select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <MenuItem value={'all'}>All Country</MenuItem>
                    <MenuItem value={'africa'}>Africa</MenuItem>
                    <MenuItem value={'antartica'}>Antartica</MenuItem>
                    <MenuItem value={'asia'}>Asia</MenuItem>
                    <MenuItem value={'australia'}>Australia/Oceania</MenuItem>
                    <MenuItem value={'europe'}>Europe</MenuItem>
                    <MenuItem value={'north_america'}>North America</MenuItem>
                    <MenuItem value={'south_america'}>South America</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {covidData?.map((country, index) => (
                    <Grid item key={index} xs={12}>
                        <Summary country={country} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default List
