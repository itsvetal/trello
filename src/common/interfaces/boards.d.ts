export interface IBoard {
  id?: number;
  title: string;
  custom?: {
    description: string;
    color: string;
  };
}

export interface IBoardForm {
  onCardCreated: () => void;
}

export interface IPostBoardArgs {
  item: IBoard;
  path: string;
}

export interface IPostBoard {
  result: string;
  id: number;
}

export interface IDeleteBoard {
  result: string;
}

export interface IFetchBoardsResponse {
  boards: IBoard[];
}

export interface IHomeBoardsSlice {
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
