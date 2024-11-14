import React, { useState } from 'react';
import './BoardFom.scss';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { postBoard } from '../../../../api/board/postBoard';
import Error from '../../../../components/Error/Error';
import { isValid } from '../../../../utils/isValid';

interface BoardFormProps {
  onCardCreated: (message: string) => void;
}

function BoardForm({ onCardCreated }: BoardFormProps): React.ReactElement {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (isValid(title)) {
      setError('Please enter a title');
      return;
    }

    const data: IBoard = {
      title,
      custom: { description: info },
    };

    postBoard('/board', data)
      .then((response) => {
        onCardCreated(response.result);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        setError(err.message);
      });
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    setError('');
  };

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInfo(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-container">
        <div className="form-inputs">
          <div className="form-title">
            <label htmlFor="board-title">Title:</label>
            <div className="form-title__input">
              <input
                id="board-title"
                type="text"
                placeholder="Enter the board name..."
                value={title}
                onChange={titleChangeHandler}
              />
              <div className="form-title__input__error">{error && <Error error={error} />}</div>
            </div>
          </div>
          <div className="form-title">
            <label htmlFor="board-desc">Description:</label>
            <input
              id="board-desc"
              type="text"
              placeholder="Enter description"
              value={info}
              onChange={colorChangeHandler}
            />
          </div>
        </div>
        <div>
          <button className="form-button" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default BoardForm;
