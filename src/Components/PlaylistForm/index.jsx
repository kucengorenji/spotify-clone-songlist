import { Container, Input, Button, Grid } from "@chakra-ui/react"


const PlaylistForm = ({ form, handleSubmit, handleFormChanges }) => {
    return (
      <Container >
        <h3>Create Playlist</h3>
        <form onSubmit={handleSubmit}>
          <Grid>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              name="title"
              minLength="10"
              onChange={handleFormChanges}
              value={form.title}
            />
            <label htmlFor="description">Description</label>
            <Input
              name="description"
              minLength="10"
              onChange={handleFormChanges}
              value={form.description}
            ></Input>
            <Button m={3} type="submit" value="Create">Buat playlist</Button>
          </Grid>
        </form>
      </Container>
    )
  }
  
  export default PlaylistForm;