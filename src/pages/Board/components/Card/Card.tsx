import React from 'react';
import './Card.scss';
import '../../../../styles/_variables.scss';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps): React.ReactElement {
  return <div className="card-container">{title}</div>;
}
