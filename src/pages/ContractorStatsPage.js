import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from '@mui/material/Container';
//import Layout from "../components/layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Box, Typography, Paper, Button, Stack } from '@mui/material';
import { useNavigate,Link } from 'react-router-dom';
//import CJobList from "../components/home/c-job-list";
import ContractorStatsList from "../components/contractor/contractor-stats-list";
import { getUserCourses } from "../redux/actions/job.action";
import { useLocation} from 'react-router-dom';
import {Skeleton} from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import CJobList from "../components/home/c-job-list";


const theme = createTheme();



export default function ContractorStatsPage() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.jobs);
  const { userCourses } = useSelector((state) => state.jobs);

  const [jobArr, setJobArr] = useState(userCourses);
  const navigate = useNavigate()
  const location = useLocation()

  //const { userDetails, error,message, isLoading } = useSelector((state) => state.loggedIn);
    
   /* useEffect(() => {
      console.log(userDetails)
     if(userDetails === '' ){
       
        navigate('/login')
        
      }
       
       
    }, [])*/

    const [state, setState] = useState({
      series: [{
        data: [700, 240, 748, 470, 590, 680, 800]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 250,
          toolbar: {
            show: false
          },
          background: 'transparent',
          // background: '#fff',
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: false,
            dataLabels: {
              position: 'top',
              style: {
                colors: ['#ffffff'],
              },
            },
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        colors: ['#000000', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B', '#F97D0B']
      }
    });
 
 
 
 useEffect(() => {
   dispatch(getUserCourses(location.state.id.trim()));  
   setTimeout(setJobArr([...userCourses]), 1000);
  }, [location.state.id])


  useEffect(() => {
    if(jobArr.length === 0 ){
      setJobArr([...userCourses]);
       }  
       //dispatch(getUserCourses(location.state.id.trim())); 
     }, [userCourses])

  console.log('cmc user data is: ', userCourses);

  return (
      
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
       <h1 style={{position:"relative",fontWeight:"bold",left:"0px",marginBottom:"40px",fontSize:"30px"}}>CONTRACTOR STATS</h1>
     

       {/*jobArr.length &&*/ userCourses ?
           
           <ContractorStatsList jobs={jobArr} />
           
           :
           <center>
           <Box sx={{ width: 300 }}>
           <Skeleton />
           <Skeleton animation="wave" />
           <Skeleton animation={false} />
         </Box>
         </center>
      }
        </Container>
     
  );
}
