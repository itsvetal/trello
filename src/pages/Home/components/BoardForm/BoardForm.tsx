import React, { useState } from 'react';
import '../../../../styles/form.scss';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { postBoard } from '../../../../api/board/postBoard';
import Error from '../../../../components/Error/Error';
import { isValidLetter } from '../../../../utils/isValidLetter';
import { validationError } from '../../../../common/constants/errors';

interface BoardFormProps {
  onCardCreated: (message: string) => void;
}

function BoardForm({ onCardCreated }: BoardFormProps): React.ReactElement {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [color, setColor] = useState('#000000');
  const [error, setError] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isValidLetter(title)) {
      setError(validationError);
      return;
    }

    const data: IBoard = {
      title,
      custom: { description: info, color },
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

  const descChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInfo(event.target.value);
  };

  const colorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setColor(event.target.value);
  };
  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="board-title">Title:</label>
            <div>
              <input
                id="board-title"
                type="text"
                placeholder="Enter the board name..."
                value={title}
                onChange={titleChangeHandler}
              />
              {error && <Error error={error} />}
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="board-desc">Description:</label>
            <textarea
              id="board-desc"
              placeholder="Enter description"
              value={info}
              onChange={descChangeHandler}
              cols={30}
              rows={5}
            />
          </div>
          <div className="form-input">
            <label htmlFor="board-color">Color:</label>
            <input id="board-color" type="color" value={color} onChange={colorChangeHandler} />
          </div>
        </div>
        <div>
          <button className="form-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardForm;
