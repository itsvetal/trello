export interface IList {
  id?: string;
  title: string;
  position: number;
}

export interface IListForm {
  onCreateList: () => void;
}

export interface IPostList {
  result: string;
}

export interface IPostListArgs {
  item: IList;
  id: string | undefined;
}

export interface IDetailList {
  list: {
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
  };
  textColor: string;
  boardId: string | undefined;
}
