import React from 'react';
import './card.scss';
import '../../../../styles/_variables.scss';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps): React.ReactElement {
  return <div className="card-container">{title}</div>;
}
