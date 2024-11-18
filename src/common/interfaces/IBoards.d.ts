export interface IBoard {
  id?: number;
  title: string;
  custom?: {
    description: string;
    color: string;
  };
}

export interface IBoards {
  boards: IBoard[];
}

export interface IDetailBoard {
  title: string;
  custom?: { description: string; color: string };
  users?: [{ id: number; username: string }];
  lists?: [
    {
      id: number;
      title: string;
      cards: [
        {
          id: number;
          title: string;
          color: string;
          description: string;
          custom: { deadline: string };
          users: number[];
          created_at: number;
        },
      ];
    },
  ];
}
