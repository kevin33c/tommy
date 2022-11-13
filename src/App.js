import Grid from '@mui/material/Grid';
import Navbar from './components/Navbar'
import ImportButton from './components/ImportButton'

function App() {
  return (
    <div>
      <Navbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}>
        <Grid item xs={8}>
          <ImportButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
