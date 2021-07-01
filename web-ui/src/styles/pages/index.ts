import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: min-content;
  min-width: 40rem;

  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`
