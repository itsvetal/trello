import React, { useState } from 'react';
import './BoardFom.scss';
import { IBoard } from '../../../../../../common/interfaces/IBoards';
import { postBoard } from '../../../../../../api/board/postBoard';
import { deleteBoard } from '../../../../../../api/board/deleteBoard';
import Error from '../../../../../../components/Error/Error';

interface BoardFormProps {
  onCardCreated: (message: string) => void;
}

function BoardForm({ onCardCreated }: BoardFormProps): React.ReactElement {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#000000');
  const [error, setError] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const isValid = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ0-9 ._-]+$/.test(title);

    console.log(title.trim().length === 0);
    console.log(isValid);

    if (!isValid || title.trim().length === 0) {
      setError('Please enter a title');
      return;
    }

    setError('');

    const data: IBoard = {
      title,
      custom: { color },
    };

    postBoard('/board', data)
      .then((response) => {
        return response.result;
      })
      .then((result) => {
        onCardCreated(result);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {});
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setColor(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    deleteBoard('1731236317243');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <div className="form-inputs">
            <div className="form-title">
              <label htmlFor="board-title">Title:</label>
              <input
                id="board-title"
                type="text"
                placeholder="Enter the board name..."
                value={title}
                onChange={titleChangeHandler}
              />
            </div>
            {error && <Error error={error} />}
            <div className="form-custom">
              <label htmlFor="board-color">Color:</label>
              <input id="board-color" type="color" value={color} onChange={colorChangeHandler} />
            </div>
          </div>
          <div>
            <button className="form-button" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
      <div>
        <button className="delete-button" onClick={clickHandler}>
          Delete
        </button>
      </div>
    </>
  );
}

export default BoardForm;
