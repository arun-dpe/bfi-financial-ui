import React from 'react'
import { StyledCard } from '@common/components/card'
import { Typography } from '@mui/material'
import { theme } from 'src/theme/CustomThemeProvider'
import { NavLink } from 'react-router-dom'

export default function ClosedLoans() {
  return (
      <StyledCard>
          <Typography variant="h6" color={theme.palette.info.contrastText} fontWeight={'bold'} gutterBottom>Closed Loans</Typography>
          <Typography paragraph>You've paid off 1 loans. To view closed loan details, please visit <NavLink to={'../transaction_history'}>transaction history</NavLink> </Typography>
      </StyledCard>
  )
}
