import React from 'react';
import './AddList.scss';
import { AddButton } from '../../../../components/AddButton/AddButton';

interface ICreateList {
  onCreateList: () => void;
  textColor: string;
}

function AddList({ onCreateList, textColor }: ICreateList): React.ReactElement {
  const onClickHandler = (): void => {
    onCreateList();
  };
  return (
    <div className="create-list-container">
      <AddButton label="Add another list" onButtonClick={onClickHandler} color={textColor} />
    </div>
  );
}

export default AddList;
