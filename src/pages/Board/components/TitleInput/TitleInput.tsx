import React, { useState } from 'react';
import { isValid } from '../../../../utils/isValid';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { putBoard } from '../../../../api/board/putBoard';

interface ITitleInput {
  id: string | undefined;
}

function TitleInput(props: ITitleInput): React.ReactElement {
  const [title, setTitle] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const eventHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (event.type === 'blur') {
      console.log('Blur');
    }

    if (isValid(title)) {
      setError('Please enter a title');
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: IBoard = {
      title,
    };

    putBoard(props?.id, data).then((res) => console.log('Result: ', res.result));
  };

  const KeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      console.log('Enter');
    }
  };
  return (
    <div>
      <input
        placeholder="Введіть назву дошки"
        value={title}
        onChange={onChangeHandler}
        onBlur={eventHandler}
        onKeyDown={KeyDownHandler}
        type="text"
      />
    </div>
  );
}

export default TitleInput;
