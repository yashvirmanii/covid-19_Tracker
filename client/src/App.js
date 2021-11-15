import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
// Custom Components
import Header from './compoments/Header/Header';
import List from './compoments/List/List';
import Map from './compoments/Map/Map';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
