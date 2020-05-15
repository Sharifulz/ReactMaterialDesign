import React from 'react';
import {Grid} from '@material-ui/core'
import Counter from './Component/counter'
import 'bootstrap/dist/css/bootstrap.css'


const App = ()=>{
  return(
    <Grid container direction='column'>
      <Grid item xs={12} sm={12}>
        <Counter/>
      </Grid>
    </Grid>
  );
};

export default App;
