import React from 'react';
import {Grid} from '@material-ui/core'
import Header from './Component/Header.jsx'
import Content from './Component/Content.jsx'

const App = ()=>{
  return(
    <Grid container direction='column'>
      <Grid item><Header></Header></Grid>
      <Grid item container>
          <Grid item xs={false} sm={2}/>
            <Grid item xs={12} sm={8}><Content></Content></Grid>
          <Grid item  xs={false} sm={2}/>
        </Grid>
    </Grid>
  );
};

export default App;
