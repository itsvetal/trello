import React, { useState } from 'react';
import '../../../../styles/form.scss';
import './BoardForm.scss';
import Error from '../../../../components/Error/Error';
import { isValidLetter } from '../../../../utils/isValidLetter';
import { validationError } from '../../../../common/constants/errors';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { IPostBoardData, postBoard } from '../../../../store/homeBoardsSlice';

function BoardForm(): React.ReactElement {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [color, setColor] = useState('#000000');
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isValidLetter(title)) {
      setError(validationError);
      return;
    }

    const data: IPostBoardData = {
      path: '/board',
      item: { title, custom: { description: info, color } },
    };
    dispatch(postBoard(data));
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    setError('');
  };

  return (
    <form className="form-items" onSubmit={submitHandler}>
      <input
        className="form-item"
        id="board-title"
        type="text"
        placeholder="Enter the board name..."
        value={title}
        onChange={titleChangeHandler}
      />
      {error && (
        <div className="error-container">
          <Error error={error} />
        </div>
      )}
      <textarea
        className="form-item"
        id="board-desc"
        placeholder="Enter description"
        value={info}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setInfo(event.target.value)}
      />
      <label className="color-container">
        <span>Select color:</span>
        <input
          className="form-item"
          type="color"
          value={color}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setColor(event.target.value)}
        />
      </label>
      <button className="form-button" type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}

export default BoardForm;
