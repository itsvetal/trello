import React, { useState } from 'react';
import '../../../../styles/form.scss';
import { isValidLetter } from '../../../../utils/isValidLetter';
import Error from '../../../../components/Error/Error';
import { validationError } from '../../../../common/constants/errors';
import { IList } from '../../../../common/interfaces/IList';
import { postList } from '../../../../api/list/postList';

export interface IListForm {
  id: string;
}

function ListForm({ id }: IListForm): React.ReactElement {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState(0);
  const [error, setError] = useState('');

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    setError('');
  };
  const positionHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPosition(+event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!isValidLetter(title)) {
      setError(validationError);
      return;
    }

    const data: IList = {
      title,
      position,
    };

    postList(id, data).then((res) => console.log(res.result));
  };

  return (
    <form className="form-items" onSubmit={submitHandler}>
      <input
        className="form-item"
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
        className="form-item"
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