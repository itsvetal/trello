import React from 'react';
import './CreateList.scss';
import { AddButton } from '../../../../components/AddButton/AddButton';

interface ICreateList {
  onCreateList: () => void;
  textColor: string;
}

function CreateList({ onCreateList, textColor }: ICreateList): React.ReactElement {
  const onClickHandler = (): void => {
    console.log('Click');
    onCreateList();
  };
  return (
    <div className="create-list-container">
      <AddButton label="Add another list" onButtonClick={onClickHandler} color={textColor} />
    </div>
  );
}

export default CreateList;
