export interface IBoard {
  id?: number;
  title: string;
  custom?: {
    description: string;
    color: string;
  };
}

export interface IBoardsResponse {
  boards: IBoard[];
}

export interface IHomeBoardsState {
  list: IBoard[];
  status: string;
  error: string;
}

export interface IDetailBoard {
  title?: string;
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
