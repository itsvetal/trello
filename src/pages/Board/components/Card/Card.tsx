import React from 'react';

interface CardProps {
  title: string;
}

export function Card({ title }: CardProps): React.ReactElement {
  return <div className="card-container">{title}</div>;
}
