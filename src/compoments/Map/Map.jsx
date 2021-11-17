import React from "react"
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyle from './styles'

const Map = ({ data }) => {
    const classes = useStyle();
    const isDesktop = useMediaQuery('(min-width:600px)')

    const mapData = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 0
    };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBL7aRxlsq3Z_vtVMak8UKHZeYU_PGxVLI" }}
                defaultCenter={mapData.center}
                defaultZoom={mapData.zoom}
                margin={[50, 50, 50, 50]}
            >
                {data?.map((location, i) => (
                    <div className={classes.markerContainer}
                        lat={Number(location.countryInfo.lat)}
                        lng={Number(location.countryInfo.long)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />

                            ) : (
                                <Paper elevation={3} className={classes.paper}
                                >
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {location.country}
                                    </Typography>
                                    <Typography variant='subtitle2'>Total Cases: {location.cases}</Typography>
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
