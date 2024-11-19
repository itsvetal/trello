import { IList, IPostList } from '../../common/interfaces/IList';
import instance from '../request';

export const postList = async (id: string, data: IList): Promise<IPostList> => {
  return instance.post(`/board/${id}/list`, data);
};
