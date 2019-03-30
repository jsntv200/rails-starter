import React, { useMemo } from 'react';

type Props = {
  name: string;
};

export const Hello: React.FC<Props> = (props) => {
  const title = useMemo(() => `Hello There ${props.name}`, [props.name]);
  return <div>{title}!</div>;
};
