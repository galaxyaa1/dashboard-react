import React from 'react';
import { Grid, Card, CardContent, Typography,} from '@mui/material';
import { TrendingUp, BarChart, PieChart, Assessment } from '@mui/icons-material';

const AnalysisCard = ({ icon, title, color, size }) => (
  <Card sx={{backgroundColor:'grey', minWidth: 250, margin: '0 10px', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
    <CardContent>
      <Grid container alignItems="center">
        <Grid item xs={3}>
          {React.cloneElement(icon, { style: { color: color || 'inherit', fontSize: size || 24 } })}
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          {/* Add progress report content here */}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const HomeCard = () => {
  return (
    <div style={{ marginTop: '100px', marginLeft: '300px', display: 'flex', overflowX: 'auto' }}>
      <AnalysisCard icon={<TrendingUp />} title="Progress Report 50%" color="red" size={30} />
      <AnalysisCard icon={<BarChart />} title="Progress Report 65%" color="green" size={40} />
      <AnalysisCard icon={<PieChart />} title="Progress Report 75%" color="yellow" size={50} />
      <AnalysisCard icon={<Assessment />} title="Progress Report 85%" color="blue" size={60} />
    </div>
  );
};

export default HomeCard;

