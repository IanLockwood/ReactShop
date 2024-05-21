import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const MenuItem = ({
  id,
  name,
  description,
  price,
  imageUrl
}) => {

  const free = "Free!"

  return (
    <Box>
      <Box
        component="img"
        sx={{
          display: { xs: 'flex'},
          maxWidth: '100%'
        }}
        alt={name}
        src={imageUrl}
      />
      <Box
        sx={{
          p: 1,
          minHeight: 150
        }}
      >
        <Typography sx={{fontWeight: 'bold'}}>{name}</Typography>
        <Typography>{price/100 || free}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
