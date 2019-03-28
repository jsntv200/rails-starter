import React from 'react'

type Props = {
  name: string
}

export const Hello: React.SFC<Props> = (props) => {
  return <div>Hello {props.name}!</div>
}
