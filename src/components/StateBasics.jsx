import { Typography, TextField, Button, Container, Box } from '@mui/material';
import React from 'react';

const StateBasics = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h3" style={{ color: "#213547", marginBottom: '20px', textAlign: 'center' }}>
        EMPLOYEE FORM
      </Typography>
      <form>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Designation"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            required
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Salary"
            variant="outlined"
            type="number"
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default StateBasics;