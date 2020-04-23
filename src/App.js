import React from 'react';
import Px from './asset/image/book.jpg';
import Icon from './asset/image/elephant.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${Px})`,
    backgroundPosition:'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    minHeight: '100vh !important',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
  },
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
  card: {
    margin: '300px auto',
    [theme.breakpoints.down('1034')] : {
      margin:'150px 100px 15px 100px',
    },
  },
  title: {
    display: 'flex',
    textAlign:'center',
    maxHeight:200,
    position:'absolute',
    top:'0',
    fontFamily:'sans-serif',
    margin:'100px auto',
    fontSize:'50px',
    fontStyle: 'oblique',
    fontWeight:'bold',
    color:'black',
    [theme.breakpoints.down('1046')] : {
      fontSize:'20px',
      margin: '10px 50px'
      
    },
  },
  btn: {
    borderRadius:'6px',
    width: 'auto',
    height: 'auto',
    margin:'60px 100px',
    backgroundColor:'brown',
    [theme.breakpoints.down('1046')] : {
      margin:'10px 10px',
    },
  },
  icon: {
    backgroundImage: `url(${Icon})`,
    height:20,
    width:20,
    display: 'block',
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
        <div className={classes.title} >
          <p className={classes.text}>Welcome to SEAHQ Kiswire Sales System</p>
          <Button variant="contained" color="primary" className={classes.btn}>
            Get Started
          </Button>
        </div>
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require ("./asset/image/rnd.jpg")}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Research & Development
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href='http://www.kiswire.com/english/index.asp'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.card}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require ("./asset/image/ong.jpg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Oil & Gas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='http://www.kiswire.com/english/index.asp'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
    <div className={classes.card}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require ("./asset/image/automotive.png")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Automotive
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  </div> 
  );
}