import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ChromeServices } from '../services/chrome.services';


const chromeService = new ChromeServices();


export default function ImportButton() {

  const [profile, setProfile] = useState("");

  async function importProfile() {
    const a = await chromeService.getProfileData();
    setProfile(a);
  }

  return (
    <>
      <Button
        onClick={importProfile}
        fullWidth
        variant="outlined"
        color="inherit"
        sx={{
          mt: 5,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        Import
      </Button>
      <Typography align='center' variant='subtitle2' sx={{ mt: '15px' }}>
        {profile}
      </Typography>
    </>
  );
}