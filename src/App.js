import React from 'react';
import Px from './asset/image/surface.jpg';
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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card: {
    margin: '300px auto',
    [theme.breakpoints.down('1034')] : {
      margin:'260px 100px 0 100px',
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
    fontStyle: 'italic',
    color:'black',
    [theme.breakpoints.down('946')] : {
      fontSize:'20px',
      
    },
  },
  btn: {
    borderRadius:'6px',
    width: 100,
    height: 30,
    margin:'65px 100px',
    [theme.breakpoints.down('946')] : {
      marginLeft: '50px',
    },
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
        <div className={classes.title} >
          <p className={classes.text}> Welcome to SEAHQ Kiswire Sales System</p>
          <Button variant="contained" color="primary" className={classes.btn}>
            Primary
          </Button>
        </div>
      <div className={classes.card}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require ("./asset/image/wire.jpg")}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Steel Cord
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="button">
              Share
            </Button>
            <Button size="small" color="primary">
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
            image={require ("./asset/image/wire.jpg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Bead Wire
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
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
            image={require ("./asset/image/wire.jpg")}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Wire Rope
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  </div> 
  );
}