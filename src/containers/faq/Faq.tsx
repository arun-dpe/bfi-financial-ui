import React from 'react';
import { StyledCard } from '@common/components/card';
import { Typography } from '@common/components/typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@common/components';
import { faqs } from '@config/faq';
import { theme } from 'src/theme/CustomThemeProvider';

export default function Faq() {
  return (
    <StyledCard>
      <Typography variant="h6" sx={{ color: theme.palette.info.contrastText, fontWeight: 'bold' }}>FAQs</Typography>
      <Box component="div">
        {faqs.map((faq) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color={theme.palette.info.contrastText} sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color={theme.palette.info.contrastText}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </StyledCard>
  );
}
