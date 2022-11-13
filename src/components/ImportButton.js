import Button from '@mui/material/Button';

export default function ImportButton() {
  return (
    <Button
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