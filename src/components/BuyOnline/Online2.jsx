import React from 'react';
import { Grid, Card,  Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const packages = [
  {
    title: 'HOT-VACANCY',
    price: '₹1650',
    features: [
      'Detailed job description',
      '3 Job locations',
      'Unlimited applies',
      'Applies expiry 90 days',
      'Boost on Job Search Page',
      'Job Branding'
    ],
    quantity: 1,
    validity: '30 days',
  },
  {
    title: 'CLASSIFIED',
    price: '₹850',
    features: [
      'Up to 250 character job description',
      '3 Job locations',
      'Unlimited applies',
      'Applies expiry 90 days',
      'Boost on Job Search Page',
      'Job Branding'
    ],
    quantity: 1,
    validity: '30 days',
  },
  {
    title: 'STANDARD',
    price: '₹400',
    features: [
      'Up to 250 character job description',
      '1 job location',
      '200 applies',
      'Applies expiry 30 days',
      'Boost on Job Search Page',
      'Job Branding'
    ],
    quantity: 1,
    validity: '15 days',
  },
];

const PricingCard = ({ title, price, features, quantity, validity }) => (
  <Card variant="outlined" style={{ padding: '20px' }}>
    <Typography variant="h5" color="primary" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h3" gutterBottom>
      {price}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      For all cities
    </Typography>
    <List>
      {features.map((feature, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            {feature.includes('X') ? <CloseIcon color="error" /> : <CheckCircleIcon color="primary" />}
          </ListItemIcon>
          <ListItemText primary={feature.replace('X', '')} />
        </ListItem>
      ))}
    </List>
    <Typography variant="body2" color="textSecondary">
      Job validity {validity}
    </Typography>
    <Button variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
      Buy now
    </Button>
    <Button variant="outlined" color="primary" fullWidth style={{ marginTop: '10px' }}>
      Add to cart
    </Button>
  </Card>
);

const PricingSection = () => (
  <Grid container spacing={3} justifyContent="center" style={{ padding: '20px' }}>
    {packages.map((pkg, index) => (
      <Grid item xs={12} md={4} key={index}>
        <PricingCard {...pkg} />
      </Grid>
    ))}
  </Grid>
);

export default PricingSection;
