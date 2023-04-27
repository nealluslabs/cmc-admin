import { Container,Grid, TextField, Typography, TextareaAutosize, Button, Paper,Divider,Box} from '@mui/material';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UPLOADIMG from '../assets/images/upload.png';
import { fetchGroups, fetchMyGroups, uploadGroupImage} from 'src/redux/actions/group.action';

import { useDispatch, useSelector } from 'react-redux';
import { notifyErrorFxn } from 'src/utils/toast-fxn';

function SettingsPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [file2, setFile2] = useState();
  const [fileSize, setFileSize] = useState();
  const [fileSize2, setFileSize2] = useState();
  const [selectedFile, setSelectedFile] = useState({selectedFile: [], selectedFileName: []});
  const [selectedFile2, setSelectedFile2] = useState({selectedFile2: [], selectedFileName2: []});
  const dispatch = useDispatch();

  const [title,setTitle] =useState('')
  const [genre,setGenre] =useState('')
  const [releaseDate,setReleaseDate] =useState('')
  const [director,setDirector] =useState('')
  const [cast,setCast] =useState([])
  const [description,setDescription] =useState('')
  const [trivia,setTrivia] =useState('')
  
  const groupData = {
    title,
    genre,
    releaseDate,
    director,
    cast,
    description,
    trivia
  }


  const handleselectedFile = event => {
    console.log("these are the picture deets!",event.target.files[0])
    setSelectedFile({
        selectedFile: event.target.files[0],
        selectedFileName: event.target.files[0].name
    });
    
    setFile(URL.createObjectURL(event.target.files[0]));
    setFileSize(event.target.files[0].size)
};
  const handleselectedFile2 = event => {
    console.log("these are the video deets!",event.target.files[0])
    setSelectedFile2({
        selectedFile2: event.target.files[0],
        selectedFileName2: event.target.files[0].name
    });
    setFile2(URL.createObjectURL(event.target.files[0]));
    setFileSize2(event.target.files[0].size)
};



const uploadMovie = (movieData,video,image,navigate) => {
if(!title.length || !genre.length ||!releaseDate.length ||!director.length ||!cast.length ||!trivia.length || !description.length || file === undefined || file2 === undefined){
  console.log("THE EMPTY FIELDS ARE:",file)
  notifyErrorFxn("Please make sure to fill in all fields")
}else{
 if( fileSize  > 10000000){
  notifyErrorFxn("Image size too large! please upload a smaller picture.")
 }
 else if( fileSize2  > 20000000){
  notifyErrorFxn("Video size too large! please upload a smaller video.")
 }else{
  dispatch(uploadGroupImage(movieData,video,image,navigate))
 }
}
}

  return (
    <>
    <Container maxWidth="xl">

    <Grid item xs={12} sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" component="p">
              UPLOAD DOCUMENT
              </Typography>
            </Box>
            <br/> <br/> <br/>
            <br/> 
          </Grid>
   

     <Grid container spacing={2}>
         <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography variant="p" component="p">
            SECTION
            </Typography>
           {/* <TextField
            fullWidth
            placeholder="password"
            variant="outlined"
            multiline
            maxRows={4}
            value= {title}
            onChange = {(e)=>{setTitle(e.target.value)}}
            />*/}
            <br/><br/>
            
            <br/><br/>
           
          </Grid>
          <Grid item xs={9}>
          {/*<Typography variant="p" component="p">
            Confirm Password
            </Typography>*/}
            <TextField
            fullWidth
            placeholder=" section header"
            variant="outlined"
            multiline
            maxRows={4}
            value= {title}
            onChange = {(e)=>{setTitle(e.target.value)}}
            
            />
            
            <br/><br/><br/>

         
            
          </Grid>
        </Grid>


        <Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography variant="p" component="p">
            SUB-SECTION
            </Typography>
           {/* <TextField
            fullWidth
            placeholder="password"
            variant="outlined"
            multiline
            maxRows={4}
            value= {title}
            onChange = {(e)=>{setTitle(e.target.value)}}
            />*/}
            <br/><br/>
            
            <br/><br/>
           
          </Grid>
          <Grid item xs={9}>
          {/*<Typography variant="p" component="p">
            Confirm Password
            </Typography>*/}
            <TextField
            fullWidth
            placeholder=" sub-section header"
            variant="outlined"
            multiline
            maxRows={4}
            value= {title}
            onChange = {(e)=>{setTitle(e.target.value)}}
            
            />
            
            <br/><br/><br/>

         
            
          </Grid>
        </Grid>

       
        {<Grid container item xs={12} spacing={2}>
          <Grid item xs={3}>
            <Typography variant="p" component="p">
            DETAILS
            </Typography>
           {/* <TextField
            fullWidth
            placeholder="Enter Release Date"
            variant="outlined"
            type="date"
            multiline
            maxRows={4}
            value= {releaseDate}
            onChange = {(e)=>{setReleaseDate(e.target.value)}}
            />*/}
          </Grid>
          <Grid item xs={9}>
            {/*<Typography variant="p" component="p">
            Film Description (max 450 characters)
            </Typography>*/}
             <TextField
             placeholder="Enter Desciption"
                multiline
                rows={10}
                style={{ width: '100%', padding: '8px'}}
                value= {description}
                onChange = {(e)=>{setDescription(e.target.value)}}
                />
          </Grid>
        </Grid>}
        {/*<Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="p" component="p">
            Director
            </Typography>
            <TextField
            fullWidth
            placeholder="Enter Director"
            variant="outlined"
            multiline
            maxRows={4}
            value= {director}
            onChange = {(e)=>{setDirector(e.target.value)}}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p" component="p">
            Trivia Fact (max 160 characters)
            </Typography>
             <TextField
             placeholder="...."
                multiline
                rows={4}
                style={{ width: '100%', padding: '8px'}}
                value= {trivia}
                onChange = {(e)=>{setTrivia(e.target.value)}}
                />
          </Grid>
        </Grid>*/}
        {/* upload section */}
        
        <Grid container item xs={12} spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
      <br/>
      <Divider variant="fullWidth"  /> 
      <br/><br/>

      <Typography variant="p" component="p">
      COVER 
       </Typography>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 200,
          border: '1px solid grey'
        }}
      >
        <center>
        <Typography
            color="textPrimary"
            variant="h3"
            component="p"
          >
          <Button component="label" style={{backgroundColor: 'white' }}>
         <img src={UPLOADIMG} width='120px' />
         <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleselectedFile}
            />
            </Button>
      </Typography>
      <Typography
            color="textPrimary"
            variant="p"
            component="p"
          >
        Browse files to upload
      </Typography>
      </center>
      </Paper>
      <p>{selectedFile?.selectedFileName}</p>
    </Grid>
    <Grid item xs={12} md={8} lg={6}>
      <br/>
     <Divider variant="fullWidth" />
     <br/><br/>
   <Typography variant="p" component="p">
      DOCUMENT
       </Typography>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 200,
          border: '1px solid grey'
        }}
      >
        <center>
        <Typography
            color="textPrimary"
            variant="h3"
            component="p"
          >
          <Button component="label" style={{backgroundColor: 'white' }}>
         <img src={UPLOADIMG} width='120px' />
         <input
            type="file"
            style={{ display: 'none' }}
            onChange={handleselectedFile2}
            />
            </Button>
      </Typography>
      <Typography
            color="textPrimary"
            variant="p"
            component="p"
          >
        Browse your document to upload
      </Typography>
      </center>
      </Paper>
      <p>{selectedFile2?.selectedFileName2}</p>
    </Grid>
        </Grid>
      </Grid>
      <br/><br/><br/><br/>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button  onClick={() => { uploadMovie(groupData,selectedFile2.selectedFile2,selectedFile.selectedFile,navigate)}} variant="contained" 
  style={{ backgroundColor: "#000000"/*"#F97D0B"*/, paddingTop: '10px', paddingBottom: '10px', 
  paddingRight: '30px', paddingLeft: '30px'}}
>
    SUBMIT
  </Button>
</div>
</Container>
    </>
  );
}

export default SettingsPage;