import React from 'react';
import { CardContent } from '@mui/material';
import { StyledCard } from '@components/card';
import { CardTitle, Typography } from '@components/typography';
import { Button } from '@components/button';
import { Grid, Box } from '@components/index';

export default function FinancialWellness() {
  return (
    <StyledCard sx={{ padding: 2 }}>
      <CardContent className="p-4 h-full w-full">
        <CardTitle title="Check your financial wellness" variant="title" />
        <CardTitle
          title="Planning for retirement is an important step on your financial wellness journey"
          variant="subTitle"
        />
        <Grid container sx={{ height: 150 }}>
          <Grid item xs={3}>
            <Typography
              variant="subtitle2"
              sx={{ color: 'info.contrastText', textTransform: 'uppercase', textAlign: 'center' }}
            >
              YOUR SCORE
            </Typography>
            <Typography className="py-2">
              <span className="m-2" />
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <p className="text-black text-sm font-regular text-left">
              Based on your personalized MapMyFinance
              <sup className="text-xs">SM</sup>
              game plan, you can afford 10
              save 10% per paycheck towards your retirement
            </p>
          </Grid>
        </Grid>
        <Box component="div">
          <table className="table-auto w-full text-black">
            <thead>
              <tr className="border-b-gray-200 text-left">
                <th>{' '}</th>
                <th>YOU&apos;RE SAVING</th>
                <th>YOU CAN AFFORD</th>
                <th>YOUR GOAL IS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-gray-200 text-left">
                <td>Retirements savings per paycheck</td>
                <td>5%</td>
                <td>10%</td>
                <td>12%</td>
              </tr>
              <tr className="border-b-gray-200 text-left">
                <td>Estimated monthly retirement income</td>
                <td>$3,385</td>
                <td>$4,065</td>
                <td>$4,312</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </CardContent>
      <Grid container justifyContent="flex-end" gap={2}>
        <Button variant="outlined" color="primary">Improve my Score</Button>
        <Button variant="contained" color="primary">Update my Contribution Rate</Button>
      </Grid>
    </StyledCard>
  );
}
