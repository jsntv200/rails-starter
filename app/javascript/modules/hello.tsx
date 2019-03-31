import React, { useCallback, useState } from 'react';

type Props = {
  name: string;
};

export const Hello: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.name);

  const handleClick = useCallback(() => {
    setTitle(title === props.name ? 'Foo' : props.name);
  }, [props.name, title]);

  return (
    <div>
      <h4>Hello There {title}!</h4>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};
