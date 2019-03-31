import React from 'react';
import { useToggle } from '../hooks/useToggle';

type Props = {
  name: string;
};

export const Hello: React.FC<Props> = (props) => {
  const [name, handleToggle] = useToggle(props.name, 'Foo Bar');

  return (
    <div>
      <h4>Hello There {name}!</h4>
      <button onClick={handleToggle}>Change</button>
    </div>
  );
};
