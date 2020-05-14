import React, { Component } from 'react'
import axios from 'axios';
import {Grid} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import { red } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

class BodyContent extends Component{

      state = {
        persons: []
      }

      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            console.log(persons);
            this.setState({ persons });
          })
      }

     // { this.state.persons.map(person =><h1>{person.email}</h1>)}


    render(){
        return(
            <div>
              <Grid container
              direction="row"
              justify="center"
                    alignItems="center"
                    spacing={1}
                    style={{ marginTop:10}}>
                <Grid iteem sm={3} style={{ marginTop:25}}>Name</Grid>
                <Grid iteem sm={3} style={{ marginTop:25}}>Email</Grid>
                <Grid iteem sm={3} style={{ marginTop:25}}>Contacts</Grid>
                <Grid iteem sm={3} style={{ marginTop:25}}>Website</Grid>
              </Grid>

                { this.state.persons.map(person =>
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    style={{ marginTop:10}}>
                        <Grid item sm={3}>
                            <Grid container
                            direction="row">
                            <Grid item sm={2}><Avatar style={{ backgroundColor: red[500]}}><AccountCircleIcon/></Avatar></Grid>
                            <Grid item sm={10}><Typography noWrap>{person.name}</Typography></Grid> 
                            </Grid>  
                        </Grid>
                        <Grid item sm={3}>
                            <Grid container
                            direction="row">
                            <Grid item sm={2}><Avatar style={{ backgroundColor: red[400]}}><EmailIcon/></Avatar></Grid>
                            <Grid item sm={10}><Typography noWrap>{person.email}</Typography></Grid> 
                            </Grid>  
                        </Grid>
                        <Grid item sm={3}>
                            <Grid container
                            direction="row">
                            <Grid item sm={2}><Avatar style={{ backgroundColor: red[300]}}><PhoneIcon/></Avatar></Grid>
                            <Grid item sm={10}><Typography noWrap>{person.phone}</Typography></Grid> 
                            </Grid>  
                        </Grid>
                        <Grid item sm={3}>
                            <Grid container
                            direction="row">
                            <Grid item sm={2}><Avatar style={{ backgroundColor: red[200]}}><LanguageIcon/></Avatar></Grid>
                            <Grid item sm={10}><Typography noWrap>{person.website}</Typography></Grid> 
                            </Grid>  
                        </Grid>
                    </Grid>
                    )}
            </div>
        );
    }
}

export default BodyContent;