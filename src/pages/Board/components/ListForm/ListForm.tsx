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
    <div className="form-container">
      <form action="" onSubmit={submitHandler}>
        <div className="form-inputs">
          <div className="form-input">
            <label htmlFor="input-title">Title:</label>
            <div>
              <input id="input-title" type="text" value={title} onChange={titleHandler} />
              {error && <Error error={error} />}
            </div>
          </div>
          <div className="form-input">
            <label htmlFor="input-position">Position:</label>
            <div>
              <input id="input-position" type="number" value={position} onChange={positionHandler} />
            </div>
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

export default ListForm;
