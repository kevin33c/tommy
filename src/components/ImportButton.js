import Button from '@mui/material/Button';
import { ChromeServices } from '../services/chrome.services';


const chromeService = new ChromeServices();


export default function ImportButton() {

  function test() {
    chromeService.onClick();
  }

  return (
    <Button
      onClick={test}
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
  );
}