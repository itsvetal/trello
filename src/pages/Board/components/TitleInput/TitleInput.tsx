import React, { useState } from 'react';

function MyComponent(): React.ReactElement {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(true);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const eventHandler = (event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    console.log('Type of event: ', event.type);
    setFocused(false);
  };

  console.log('Focused: ', focused);

  return (
    <div>
      <input value={value} onChange={onChangeHandler} onBlur={eventHandler} onKeyDown={eventHandler} type="text" />
    </div>
  );
}

export default MyComponent;
