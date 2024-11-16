import React from 'react';
import './Board.scss';
import CloseButton from '../../../../components/CloseButton/CloseButton';
import { deleteBoard } from '../../../../api/board/deleteBoard';
import { IDeleteBoard } from '../../../../common/interfaces/IDeleteBoard';

interface IHomeBoard {
  onClose: (message: string) => void;
  id: number | undefined;
  title: string;
  custom: { description: string } | undefined;
}

export function Board({ onClose, custom, title, id }: IHomeBoard): React.ReactElement {
  function getDescription(customObj: { [key: string]: string } | undefined): string | null {
    if (customObj) {
      const key = Object.keys(customObj).find((element: string) => element === 'description');
      if (key) {
        return customObj[key];
      }
    }
    return null;
  }

  const description = getDescription(custom);
  const onCloseHandler = (): void => {
    console.log('Close button clicked');
    if (id) {
      deleteBoard(id.toString()).then((data: IDeleteBoard) => {
        if (data.result === 'Deleted') {
          console.log('Board deleted');
          onClose(data.result);
        }
      });
    }
  };
  return (
    <div>
      <CloseButton onClick={onCloseHandler} />
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
