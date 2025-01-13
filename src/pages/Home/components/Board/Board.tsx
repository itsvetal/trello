import React from 'react';
import './Board.scss';
import CloseButton from '../../../../components/CloseButton/CloseButton';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { removeBoard } from '../../../../store/thunks/boardThunks';
import { IHomeBoard } from '../../../../common/interfaces/boards';

export function Board({ custom, title, id }: IHomeBoard): React.ReactElement {
  const dispatch = useAppDispatch();
  function getDescription(customObj: { [key: string]: string } | undefined): string | null {
    if (customObj) {
      const key = Object.keys(customObj).find((element: string) => element === 'description');
      if (key) {
        return customObj[key];
      }
    }
    return null;
  }

  const description = getDescription(custom);
  const onBoardRemoveHandler = (): void => {
    if (id) {
      dispatch(removeBoard(id));
    }
  };

  return (
    <div className="home-board-content">
      <div className="home-board-content__title">
        <h2>{title}</h2>
        <CloseButton onClick={onBoardRemoveHandler} />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
