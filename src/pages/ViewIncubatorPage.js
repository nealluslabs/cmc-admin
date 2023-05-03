import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
// import { Grid, Container, Typography, Paper, Button } from '@mui/material';
import { Button, TextField } from '@mui/material';
import {Box,Icon,Typography,CardMedia,CssBaseline,Grid,Container,FormControlLabel, Checkbox, makeStyles} from '@material-ui/core';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import DEFAULTIMG from '../assets/images/video-player.png';
import ListRowCard from 'src/components/incubator/list-card';



const useStyles = makeStyles((theme) => ({
  textField: {
  padding: '8px',
   border: '0px solid grey',
  },
  paper: {
    display: "flex",
    width: "auto",
  },
  grid: {
    width: "auto",
  },
  arrow: {
    padding: theme.spacing(3),
  },
  box: {
  //   padding: theme.spacing(3),
    paddingLeft: theme.spacing(8),
  },
}));

export default function ViewIncubatorPage() {
 const navigate = useNavigate() 
const data = [
    {id: 1, title: "General (16 mins)", desc: "Lorem ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
    {id: 2, title: "Public (11 mins)", desc: "Tetsla ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
    {id: 3, title: "Future (39 mins)", desc: "Lorem ipsum dolor sit amet consectetur tesdsjk. Eget cursus..."},
];

  return (
    <>
      <Helmet>
        <title> View | Incubator </title>
      </Helmet>

      <Container maxWidth="xl">
      <h1 style={{position:"relative",fontWeight:"bold",left:"0px",marginBottom:"40px",fontSize:"30px"}}>ORGANIZATION</h1>
      <CssBaseline/> 
       <>
        <Grid container spacing={2} justify="center" style={{marginLeft:"-20px",width:"99%",marginTop:"2rem",padding:"50px", marginBottom:"2rem",boxShadow: "-5px 5px 8px 3px rgba(0,0,0,0.24)"}}>
       
        <Grid item xs={6}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardMedia
            style={{ border: '0.2px solid black', backgroundColor: '#fff', width: '540px' }}
            component="img"
            // height="140"
            // width="540"
            image={DEFAULTIMG}
            alt="IMG"
        />
        </div>  
    </Grid>
  
      </Grid>

      <br/><br/> <br/><br/>
     

      <Grid item xs container direction="column" spacing={6} style={{paddingLeft: '100px', paddingRight: '300px',paddingTop:"30px",paddingBottom:"30px",boxShadow: "-5px 5px 8px 3px rgba(0,0,0,0.24)"}}>
      <h2><b>General Information</b></h2>
      <br/>

          <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet consectetur. Eget ac risus ipsum maecenas cursus adipiscing eros. Mi viverra semper gravida pretium elementum. Pellentesque lacus ultrices luctus sit semper. Elementum tortor donec adipiscing tortor ut mollis quis. Molestie ipsum libero euismod ut eu quis.</p>
                <br/><br/>
               {/*data.map((dt => {
                return (
                    <ListRowCard data={dt}/>
                )
               }))*/}

    <p style={{color: 'grey'}}>Lorem ipsum dolor sit amet consectetur. Eget ac risus ipsum maecenas 
 cursus adipiscing eros. Mi viverra semper gravida pretium elementum.
  Pellentesque lacus ultrices luctus sit semper. Elementum 
  tortor donec adipiscing tortor ut mollis quis. Molestie ipsum 
  libero euismod ut eu quis.
  cursus adipiscing eros. Mi viverra semper gravida pretium elementum.
  Pellentesque lacus ultrices luctus sit semper. Elementum 
  tortor donec adipiscing tortor ut mollis quis. Molestie ipsum 
  libero euismod ut eu quis.
  cursus adipiscing eros. Mi viverra semper gravida pretium elementum.
  Pellentesque lacus ultrices luctus sit semper. Elementum 
  tortor donec adipiscing tortor ut mollis quis. Molestie ipsum 
  libero euismod ut eu quis.
   
  </p>
 </Grid>

 <br/><br/><br/><br/>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button  onClick={() => { navigate('/dashboard/settings')}} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    EDIT
  </Button>
</div>
    </>
      </Container>
    </>
  );
}
