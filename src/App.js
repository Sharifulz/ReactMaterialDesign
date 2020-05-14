import React from 'react';
import {Grid} from '@material-ui/core'
import BodyContent from './Component/API/BodyContent'


const App = ()=>{
  return(
    <Grid container direction='column'>
      <Grid item xs={12} sm={12}>
        <BodyContent/>
      </Grid>
    </Grid>
  );
};

export default App;
