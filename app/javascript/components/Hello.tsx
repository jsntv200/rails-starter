import React, { useCallback, useState } from 'react';
import { useToggle } from '../hooks';

type Props = {
  name: string;
};

const Hello: React.FC<Props> = (props) => {
  const [name, handleToggle] = useToggle(props.name, 'Foo Bar');

  return (
    <div>
      <h4>Hello There {name}!</h4>
      <button onClick={handleToggle}>Change</button>
    </div>
  );
};

export default Hello;
