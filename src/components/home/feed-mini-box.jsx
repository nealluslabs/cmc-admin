import * as React from 'react';
import { Avatar, Button, Divider, FormControlLabel, Grid, Paper, Typography,  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { fCurrency } from 'src/utils/formatNumber';
import AvatarIcon from 'src/assets/images/rec.png';
import logo1 from 'src/assets/images/logo1.png';
import logo2 from 'src/assets/images/logo2.png';
import logo3 from 'src/assets/images/logo3.png';
import logo4 from 'src/assets/images/logo4.png';
import logo5 from 'src/assets/images/logo5.png';
import logo6 from 'src/assets/images/logo6.png';
import logo7 from 'src/assets/images/logo7.png';
import logo8 from 'src/assets/images/logo8.png';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      borderTop: `1px solid lightgray`,
      // borderBottom: `1px solid black`,
      padding: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
      },
  }));
  
  function Row({ title, avatarSrc, time }) {
    const classes = useStyles();
    return (
      <Paper className={classes.paper} square>
      <Avatar className={classes.avatar} src={avatarSrc} />
      <Typography variant="h6" style={{ flex: 1, fontWeight: 'lighter' }}>{title}</Typography>
      <Typography variant="h6" style={{ textAlign: "right", marginRight: '10px', fontWeight: 'lighter' }}>
        {time}
      </Typography>
    </Paper>
    );
  }

export default function FeedMiniBox(feed) {
  //const { user } = useSelector((state) => state.auth);
  //const { transactions } = useSelector((state) => state.transaction);
  const classes = useStyles();
   console.log("feed is :",feed)

 

  const rowData = [
    { img: '21-01-2023', title: '2B Socket Wrench', time: '4:00PM' },
    { img: '21-01-2023', title: 'Networking Event', time: '2:00PM' },
    { img: '21-01-2023', title: 'Manhattan Project ', time: '10:20AM'},
    { img: '21-01-2023', title: 'Window Sponsorship ', time: '4:30PM' },
    { img: '21-01-2023', title: 'Eft Equipment Building ', time: '8:00AM' },

   /* feed?feed.feed.map((item)=>{
      return( { img: '21-01-2023', title:item.title, time: '4:00PM' })
    }):
    { img: '21-01-2023', title: '2B Socket Wrench', time: '4:00PM' },
    { img: '21-01-2023', title: 'Networking Event', time: '2:00PM' },
    { img: '21-01-2023', title: 'Manhattan Project ', time: '10:20AM'},
    { img: '21-01-2023', title: 'Window Sponsorship ', time: '4:30PM' },
    { img: '21-01-2023', title: 'Eft Equipment Building ', time: '8:00AM' }*/
  ];

  const imageData = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8
  ]

  return (
    <>
      <Grid container alignItems="center" spacing={2}>
       
       
      </Grid>
      <br/>
      <Grid container spacing={1} className={classes.container}>
      {rowData.map((row,i) => (
        <Grid item xs={12} key={row.title}>
          <Row title={feed.feed?feed.feed[feed.feed.length-(i+1)].title:row.title} avatarSrc={imageData[imageData.length -(i+1)]} />
        </Grid>
      ))}
    </Grid>
    <div style={{borderTop: '1px solid lightgray'}}></div>
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: '10px' }}>
      <div></div>
      
    </div>
    </>
  );
}
