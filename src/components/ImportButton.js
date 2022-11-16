import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ChromeServices } from '../services/chrome.services';
import { HubSpotServices } from '../services/hubspot.services';


const chromeService = new ChromeServices();
const hubSpotServices = new HubSpotServices();


export default function ImportButton() {

  const [profile, setProfile] = useState([]);

  async function importProfile() {
    const res = await chromeService.getProfileData();
    setProfile(res);
    
    hubSpotServices.createContact();
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
        {profile?.name}
        {profile?.city}
        {profile?.region}
        {profile?.country}
      </Typography>
    </>
  );
}