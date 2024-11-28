import { IDetailBoard } from '../interfaces/boards';

export const detailBoardPlug: IDetailBoard = {
  title: '',
  custom: { description: '', color: '' },
  users: [{ id: 0, username: '' }],
  lists: [
    {
      id: 0,
      title: '',
      cards: [
        {
          id: 0,
          title: '',
          color: '',
          description: '',
          custom: { deadline: '' },
          users: [0],
          created_at: Date.now(),
        },
      ],
    },
  ],
};
