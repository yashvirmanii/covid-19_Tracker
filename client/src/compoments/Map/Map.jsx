import React from "react"
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyle from './styles'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const classes = useStyle();
    const isMobile = useMediaQuery('(min-width:600px)')

    const mapData = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBL7aRxlsq3Z_vtVMak8UKHZeYU_PGxVLI" }}
                defaultCenter={mapData.center}
                defaultZoom={mapData.zoom}
                margin={[50, 50, 50, 50]}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map
