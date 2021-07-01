import React from 'react'

import styled from 'styled-components'

interface CardProps {
  readonly background: string
}

const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  border-radius: 7px;
  transition: 0.4s;

  color: ${props => props.theme.colors.text};

  background: ${props => props.theme.colors.section};

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 5rem;
    height: 5rem;

    border-radius: 20px;

    background: ${props => props.background};
  }
`

type Props = {
  children: React.ReactNode
  url: string
  background: string
}

const LinkCard = ({ children, url, background }: Props) => (
  <a href={url}>
    <Card background={background}>
      <div>{children}</div>
    </Card>
  </a>
)

export default LinkCard
