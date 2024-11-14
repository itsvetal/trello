export interface IBoard {
  id?: number;
  title: string;
  custom?: { description: string };
}

export interface IBoards {
  boards: IBoard[];
}
