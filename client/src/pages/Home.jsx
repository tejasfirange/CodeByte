import { Typography, Paper, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to CodeByte
        </Typography>
        <Typography variant="body1" paragraph>
          Your modern full-stack application template with React and Node.js
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/dashboard')}
            sx={{ mr: 2 }}
          >
            Go to Dashboard
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/about')}
          >
            Learn More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Home; 