import { Container, Grid } from '@mui/material';
import CreatePost from '@/components/createPost';
import ProfileCard from '@/components/profileCard';
import PostsList from '@/components/PostsList';

import * as S from './styles';

function Feed() {
  return (
    <S.Feed>
      <Container maxWidth="xl">
        <Grid container columnGap={5} rowGap={5}>
          <Grid xs={12} md={3} item>
            <ProfileCard />
          </Grid>

          <Grid xs={12} md={8} item>
            <CreatePost />
          </Grid>

          <Grid xs={12} md={3} item></Grid>

          <Grid xs={12} md={8} item>
            <PostsList />
          </Grid>
        </Grid>
      </Container>
    </S.Feed>
  );
}

export default Feed;
