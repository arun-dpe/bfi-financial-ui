import React from 'react';
import { Typography } from '@common/components/typography';

interface SubTitle {
  subTitle: string;
}

export default function InfoSubTitle({ subTitle }: SubTitle) {
  return <Typography variant="overline">{subTitle}</Typography>;
}
