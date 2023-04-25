import { Helmet } from 'react-helmet-async';
import { Grid, Container} from '@mui/material';
import Post from '../components/feed/post'
import FeedList from './FeedList';

export default function FeedPage() {
  return (
    <>
      <Helmet>
        <title> CMC | FEED </title>
      </Helmet>

      <Container maxWidth="xl">

  <Grid container spacing={2} style={{border: '0px solid red', paddingLeft: '40px', paddingRight: '40px'}}>
    <Post />
    <FeedList />
    </Grid>


      </Container>
    </>
  );
}
