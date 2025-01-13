import React from 'react';
import './CardContent.scss';

interface ICardContent {
  description: string;
}

function CardContent({ description }: ICardContent): React.ReactElement {
  return (
    <div className="board-card-content">
      <p>{description}</p>
    </div>
  );
}

export default CardContent;
