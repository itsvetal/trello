import React, { useState } from 'react';
import { isValid } from '../../../../utils/isValid';
import { IBoard } from '../../../../common/interfaces/IBoards';
import { putBoard } from '../../../../api/board/putBoard';

interface ITitleInput {
  id: number | null;
  title: string;
}

function TitleInput({ id, title }: ITitleInput): React.ReactElement {
  const [value, setValue] = useState(title);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const eventHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (event.type === 'blur') {
      console.log('Blur');
    }

    if (isValid(value)) {
      setError('Please enter a value');
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: IBoard = {
      title: value,
    };

    putBoard(id?.toString(), data).then((res) => console.log('Result: ', res.result));
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
        value={value}
        onChange={onChangeHandler}
        onBlur={eventHandler}
        onKeyDown={KeyDownHandler}
        type="text"
      />
    </div>
  );
}

export default TitleInput;
