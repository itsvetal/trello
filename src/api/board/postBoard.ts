import { IBoard } from '../../common/interfaces/IBoards';
import instance from '../request';
import { IPostBoard } from '../../common/interfaces/IPostBoard';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postBoard = async (path: string, data: IBoard): Promise<IPostBoard> => {
  return instance.post('/board', data);
};
