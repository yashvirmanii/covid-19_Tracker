import React, { useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
// Custom Components
import Header from './compoments/Header/Header';
import List from './compoments/List/List';
import Map from './compoments/Map/Map';
import Cards from './compoments/Cards/Cards'
import Charts from './compoments/Charts/Charts'
import CountryPicker from './compoments/CountryPicker/CountryPicker'
import { getCountryReport, getGobalStatus } from './api';

const App = () => {
  const [childClicked, setchildClicked] = useState(null)
  const [countries, setCountries] = useState([]);
  const [gobalStatus, setGobalStatus] = useState([]);
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCountryReport()
      .then(({ data }) => {
        setCountries(data)
        setIsLoading(false)
      })
    getGobalStatus()
      .then(({ data }) => {
        setGobalStatus(data)
      })
  }, []);

  return (
    <>
      <CssBaseline />
      <Header setCountry={setCountry} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List data={countries}
            childClicked={childClicked}
            isLoading={isLoading}
            country={country}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map data={countries}
            setchildClicked={setchildClicked}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ width: '100%', height: '100vh', alignItems: 'center', flexDirection: 'column', marginTop: '200px' }}>
        <Cards data={gobalStatus} />
        <CountryPicker />
        <Charts data={countries} />
      </Grid>
    </>
  );
}

export default App;
