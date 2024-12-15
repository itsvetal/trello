import React, { useState } from 'react';
import '../../../../styles/form.scss';
import { isValidLetter } from '../../../../utils/isValidLetter';
import Error from '../../../../components/Error/Error';
import { validationError } from '../../../../common/constants/errors';
import { IListForm, IPostListArgs } from '../../../../common/interfaces/lists';
import { postList } from '../../../../store/thunks/listThunks';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';

function ListForm({ onCreateList }: IListForm): React.ReactElement {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState(0);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { boardId } = useAppSelector((state) => state.board);
  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    setError('');
  };
  const positionHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPosition(+event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!title || !isValidLetter(title)) {
      setError(validationError);
      return;
    }

    const data: IPostListArgs = {
      item: {
        title,
        position: +position,
      },
      id: boardId,
    };
    dispatch(postList(data));
    onCreateList();
  };

  return (
    <form className="form-items" onSubmit={submitHandler}>
      <input
        className="form-item-input"
        placeholder="Enter the list name..."
        type="text"
        value={title}
        onChange={titleHandler}
      />
      {error && (
        <div className="error-container">
          <Error error={error} />
        </div>
      )}
      <input
        className="form-item-input"
        placeholder="Enter the list position..."
        type="number"
        value={position}
        onChange={positionHandler}
      />

      <button className="form-button" type="submit">
        <span>Submit</span>
      </button>
    </form>
  );
}

export default ListForm;
