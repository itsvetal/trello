export interface IBoard {
  id?: number;
  title: string;
  custom?: { [key: string]: string };
}

export interface IBoards {
  boards: IBoard[];
}
