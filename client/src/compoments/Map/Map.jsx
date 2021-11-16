import React from "react"
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyle from './styles'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ data, setchildClicked }) => {
    const classes = useStyle();
    const isDesktop = useMediaQuery('(min-width:600px)')

    const mapData = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 0
    };

    // const getCountryLocations = data.map((d, index) => {
    //     return (
    //         <div
    //             key={index}
    //             lat={data.countryInfo.lat}
    //             lng={data.countryInfo.long}
    //             style={{
    //                 color: 'red',
    //                 backgroundColor: '#FFF',
    //                 height: '25px',
    //                 width: '35px'
    //             }}
    //         >
    //             {data.cases}
    //         </div>
    //     )
    // })
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBL7aRxlsq3Z_vtVMak8UKHZeYU_PGxVLI" }}
                defaultCenter={mapData.center}
                defaultZoom={mapData.zoom}
                margin={[50, 50, 50, 50]}
                onChildClick={(child) => setchildClicked(child)}
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
