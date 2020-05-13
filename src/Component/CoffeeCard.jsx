import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
      },
      margintop10:{
        marginTop:10
      }
  });

const CoffeeCard = props=>{

    const classes = useStyles();
    const { avatarSrc, title, subtitle, description, imageUrl } = props;
 
    return(
        <Card className={classes.margintop10}>
            <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={avatarSrc}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon/>
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
       <CardMedia style={{height:"200px"}}
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Buy Now</Button>
        <Button size="small" color="primary">Apply Coupon</Button>

      </CardActions>
    </Card>
    );
};

export default CoffeeCard