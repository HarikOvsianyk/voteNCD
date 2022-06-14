import { FunctionComponent }from 'react';
import {Box, Button, Card as BasicCard, CardContent, Typography } from '@mui/material';
import { ICardProps } from '../interfaces/interfaces';


export const Card: FunctionComponent<ICardProps> = ({ lawTitle, lawName, expirationDate, inFavor, against}) => {
  return (
    <BasicCard sx={{ maxWidth: 275, p:2, m:2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {lawTitle}
        </Typography>
        <Typography variant="h5" component="div" sx={{ color: '#00bfb2'}}>
          {lawName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Until: {expirationDate}
        </Typography>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Box>
            <Typography>
                In favor: {inFavor}
            </Typography>
            </Box>
            <Box>
            <Typography>
                Against: {against}
            </Typography>
            </Box>
        </Box>
        <Button>View more</Button>
      </CardContent>
    </BasicCard>
  );
}
