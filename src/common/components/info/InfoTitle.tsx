import React from 'react';
import Typography from '../typography/Typography';

interface Title {
  title: string;
}

export default function InfoTitle({ title }: Title) {
  return (
    <Typography variant="subtitle1" align="left">
      {title}
    </Typography>
  );
}
