import React, { useState } from 'react';
import './List.scss';
import { Card } from './components/Card/Card';
import { AddButton } from '../../../../components/AddButton/AddButton';
import { IDetailList } from '../../../../common/interfaces/lists';
import CloseButton from '../../../../components/CloseButton/CloseButton';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { IRemoveListArgs, removeList } from '../../../../store/thunks/listThunks';
import { IDetailCard } from '../../../../common/interfaces/ICard';
import Modal from '../../../../components/Modal/Modal';
import CardForm from './components/CardForm/CardForm';

export function List({ list, textColor }: IDetailList): React.ReactElement {
  const [cardModal, setCardModal] = useState(false);
  const { boardId } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  const onListRemoveHandler = (): void => {
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
          <Card key={card.id * Math.random()} {...card} />
        ))}
      </div>
      <AddButton onButtonClick={(): void => setCardModal(true)} label="add card" color={textColor} />
      {cardModal && (
        <Modal title="Add card" onClose={(): void => setCardModal(false)}>
          <CardForm onCardCreated={(): void => setCardModal(false)} listId={list.id} />
        </Modal>
      )}
    </div>
  );
}
