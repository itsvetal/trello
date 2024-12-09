import React from 'react';
import './List.scss';
import { Card } from './components/Card/Card';
import { AddButton } from '../../../../components/AddButton/AddButton';
import { IDetailList } from '../../../../common/interfaces/lists';
import CloseButton from '../../../../components/CloseButton/CloseButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { IRemoveListArgs, removeList } from '../../../../store/thunks/listThunks';
import { IDetailCard } from '../../../../common/interfaces/ICard';

export function List({ list, textColor }: IDetailList): React.ReactElement {
  const { boardId } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();
  const onClickHandler = (): void => {
    console.log('Click');
  };
  const onListRemoveHandler = (): void => {
    console.log('Remove list');

    const data: IRemoveListArgs = {
      boardId,
      listId: list.id,
    };
    dispatch(removeList(data));
  };

  return (
    <div className="list-container">
      <CloseButton onClick={onListRemoveHandler} />
      <div className="list-title">
        <h2>{list.title}</h2>
      </div>
      <div>
        {list.cards.map((card: IDetailCard) => (
          <Card title={card.title} key={card.id * Math.random()} />
        ))}
      </div>
      <AddButton onButtonClick={onClickHandler} label="add card" color={textColor} />
    </div>
  );
}
