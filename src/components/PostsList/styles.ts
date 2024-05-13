import { styled } from 'styled-components'

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const PostsLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export {
  PostsLoading,
  PostsList
}
