export interface IList {
  id?: string;
  title: string;
  position: number;
}

export interface IPostList {
  result: string;
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
}
