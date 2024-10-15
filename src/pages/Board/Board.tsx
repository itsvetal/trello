import React, { useState } from 'react';

interface TitleProps {
  title: string;
}

interface ListProps {
  id: number;
  title: string;
  cards: { id: number; title: string }[];
}

export function Board(): React.ReactElement {
  const boardTitle = { title: 'Моя тестова дошка' };
  const boardLists = [
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useState<TitleProps>(boardTitle);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lists, setLists] = useState<ListProps[]>(boardLists);

  return <div>{title.title}</div>;
}
