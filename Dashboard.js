import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import Typography from '@mui/material/Typography';
function CardComponent({ hotelName }) {
 return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {hotelName}
        </Typography>
      </CardContent>
    </Card>
 );
}

export default CardComponent;