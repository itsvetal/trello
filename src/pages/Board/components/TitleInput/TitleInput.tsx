import React, { useEffect, useRef, useState } from 'react';
import { isValidLetter } from '../../../../utils/isValidLetter';
import { IPutBoardArgs } from '../../../../common/interfaces/boards';
import './TitleInput.scss';
import { validationError } from '../../../../common/constants/errors';
import Error from '../../../../components/Error/Error';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { putBoard } from '../../../../store/thunks/boardThunks';

interface ITitleInput {
  title: string | null;
  onTitleChanged: () => void;
}

function TitleInput({ title, onTitleChanged }: ITitleInput): React.ReactElement {
  const [value, setValue] = useState<string>(title || '');
  const [error, setError] = useState('');
  const focusInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { boardId } = useAppSelector((state) => state.board);

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
      if (!value || !isValidLetter(value)) {
        setError(validationError);
        return;
      }
      const data: IPutBoardArgs = {
        id: boardId,
        item: {
          title: value,
        },
      };
      dispatch(putBoard(data));
      onTitleChanged();
    }
  };

  return (
    <>
      {error && (
        <div className="title-error-container">
          <Error error={error} />
        </div>
      )}
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
