import React from 'react';
import './card.scss';
import '../variables.scss';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps): React.ReactElement {
  return <div className="card-container">{title}</div>;
}
