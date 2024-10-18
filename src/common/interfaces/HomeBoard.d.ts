import React from 'react';

export interface HomeBoard {
  children?: React.ReactNode;
  title?: string;
  custom?: { [key: string]: string };
}
