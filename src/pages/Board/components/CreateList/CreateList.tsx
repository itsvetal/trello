import React from 'react';
import './CreateList.scss';
import { AddButton } from '../../../../components/AddButton/AddButton';

interface ICreateList {
  onCreateList: () => void;
}

function CreateList({ onCreateList }: ICreateList): React.ReactElement {
  const onClickHandler = (): void => {
    console.log('Click');
    onCreateList();
  };
  return (
    <div className="create-list-container">
      <AddButton label="Add another list" onButtonClick={onClickHandler} />
    </div>
  );
}

export default CreateList;
