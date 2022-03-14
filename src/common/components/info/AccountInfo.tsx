import React from 'react';
import { Box } from '@common/components';
import InfoTitle from './InfoTitle';
import InfoSubTitle from './InfoSubTitle';
import InfoContent, { Variant } from './InfoContent';

interface AccountInfoProps {
  title: string;
  subTitle?: string;
  content: string;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
}

export default function AccountInfo({
  title,
  subTitle = '',
  content,
  variant,
  size,
}: AccountInfoProps) {
  return (
    <>
      <InfoTitle title={title} />
      {
        subTitle ? (
          <InfoSubTitle subTitle={subTitle} />
        ) : null
      }
      <InfoContent content={content} variant={variant} size={size} />
    </>
  );
}
