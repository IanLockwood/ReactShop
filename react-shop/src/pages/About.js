import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box
      sx={{
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" sx={{p: 3}}>Our Story</Typography>
      <Typography sx={{p: 3, mx: {sm: 1, md: '20%'}}}>When we were in school, there were two choices: food that was slow, expensive, and fresh—or fast, cheap, and unhealthy. We saw an opportunity to create a business where quality was never sacrificed for convenience.  On August 1st 2007, two months after graduating, we opened sweetgreen in Washington DC, and served our first customers with a vision to reimagine fast food. This is the Sweetgreen "our story" section, if you're curious.</Typography>
    </Box>
  )
};

export default About;
