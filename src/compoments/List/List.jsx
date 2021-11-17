import React from "react"
import { CircularProgress, Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import Summary from '../Summary/Summary'

const List = ({ data, isLoading }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant='h4' style={{ marginBottom: '2rem' }}>COVID-19 CORONAVIRUS PANDEMIC</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size='5rem' />
                </div>
            ) : (
                <>
                    <Grid container spacing={3} className={classes.list}>
                        {data?.map((country, index) => (
                            <Grid item key={index} xs={12}>
                                <Summary country={country} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default List
