import React from "react"
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core'

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    Covid-19 Tracker
                </Typography>
                <Box display="flex">
                    <Typography variant='h6' className={classes.title}>
                        Monitor Covid-19 impact
                    </Typography>
                    {/* <Autocomplete> */}
                    <div className={classes.search}>
                        <InputBase placeholder="Search country" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
