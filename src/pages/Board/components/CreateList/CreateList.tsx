import React from 'react';
import './CreateList.scss';
import { AddButton } from '../../../../components/AddButton/AddButton';

function CreateList(): React.ReactElement {
  const onClickHandler = (): void => {
    console.log('Click');
  };
  return (
    <div className="create-list-container">
      <AddButton label="Add another list" onClick={onClickHandler} />
    </div>
  );
}

export default CreateList;
