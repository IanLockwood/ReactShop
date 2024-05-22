import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const OrderPlaced = () => {
  return (
    <Box
      sx={{
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" sx={{p: 3}}>Thank you for your order!</Typography>
      <Typography sx={{p: 1, mx: {sm: 1, md: '20%'}}}>
        Of course, I didn't *really* place your order, because I don't have a real endpoint for that.
      </Typography>
      <Typography sx={{p: 1, mx: {sm: 1, md: '20%'}}}>
        Instead, I just cleared localStorage as well as everything in the CartContext.
      </Typography>
      <Typography sx={{p: 1, mx: {sm: 1, md: '20%'}}}>
        If I *did* have an endpoint, that checkout button would have sent the request to the API, and I would have waited for a success response before bringing you here!
      </Typography>
    </Box>
  )
};

export default OrderPlaced;
