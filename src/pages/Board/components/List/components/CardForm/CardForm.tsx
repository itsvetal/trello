import React, { useState } from 'react';
import '../../../../../../styles/form.scss';
import Error from '../../../../../../components/Error/Error';
import { isValidLetter } from '../../../../../../utils/isValidLetter';
import { validationError } from '../../../../../../common/constants/errors';
import { IPostCardArgs } from '../../../../../../common/interfaces/ICard';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/reduxHooks';
import { postCard } from '../../../../../../store/thunks/cardThunks';

export interface ICardForm {
  onCardCreated: () => void;
  listId: number;
}
function CardForm({ listId, onCardCreated }: ICardForm): React.ReactElement {
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState(0);
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const { boardId } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!title || !isValidLetter(title)) {
      setError(validationError);
      return;
    }
    const data: IPostCardArgs = {
      card: {
        title,
        list_id: listId,
        position,
        description,
        custom: {
          deadline,
        },
      },
      id: boardId,
    };
    dispatch(postCard(data));
    onCardCreated();
  };

  return (
    <form className="form-items" onSubmit={submitHandler}>
      <input
        className="form-item-input"
        type="text"
        placeholder="Enter the card title"
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
          setTitle(event.target.value);
          setError('');
        }}
      />
      {error && (
        <div className="error-container">
          <Error error={error} />
        </div>
      )}
      <input
        type="number"
        className="form-item-input"
        value={position}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setPosition(+event.target.value)}
      />
      <textarea
        className="form-item-input"
        placeholder="Enter the description"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setDescription(event.target.value)}
      />
      <div className="form-item-container">
        <label htmlFor="date">Select deadline date:</label>
        <input
          className="form-item-input"
          id="date"
          type="date"
          value={deadline}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setDeadline(event.target.value)}
        />
      </div>
      <button className="form-button" type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}

export default CardForm;
