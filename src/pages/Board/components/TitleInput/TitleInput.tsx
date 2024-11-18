import React, { useEffect, useRef, useState } from 'react';
import { isValid } from '../../../../utils/isValid';
import { IDetailBoard } from '../../../../common/interfaces/IBoards';
import { putBoard } from '../../../../api/board/putBoard';
import './TitleInput.scss';
import { validationError } from '../../../../common/constants/errors';
import Error from '../../../../components/Error/Error';

interface ITitleInput {
  id: number | null;
  title: string;
  onTitleChanged: (data: string) => void;
}

function TitleInput({ id, title, onTitleChanged }: ITitleInput): React.ReactElement {
  const [value, setValue] = useState(title);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState('');
  const focusInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInputRef.current?.focus();
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    setError('');
  };

  const onDataEnteredHandler = (
    event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.type === 'blur' || (event.type === 'keydown' && 'key' in event && event.key === 'Enter')) {
      if (isValid(value)) {
        setError(validationError);
        return;
      }

      const data: IDetailBoard = {
        title: value,
      };

      putBoard(id?.toString(), data)
        .then((res) => {
          onTitleChanged(res.result);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <>
      {error && <Error error={error} />}
      <input
        className="title-input"
        placeholder="Введіть назву дошки"
        value={value}
        onChange={onChangeHandler}
        onBlur={onDataEnteredHandler}
        onKeyDown={onDataEnteredHandler}
        type="text"
        ref={focusInputRef}
      />
    </>
  );
}

export default TitleInput;
