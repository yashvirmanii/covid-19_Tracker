import React, { useState, createRef, useEffect } from "react"
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
import useStyles from './styles'
import Summary from '../Summary/Summary'

const List = ({ data, childClicked, isLoading, country }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        const refs = Array(data?.length).fill().map((_, i) => elRefs[i] || createRef());

        setElRefs(refs)
    }, [data])

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
                                <Summary country={country}
                                    selected={Number(childClicked) === index}
                                    refProp={elRefs[index]}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    )
}

export default List
