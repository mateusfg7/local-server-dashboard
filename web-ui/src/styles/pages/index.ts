import styled from 'styled-components'

interface ContentProps {
  color: string
}

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: url(${props => props.theme.assets.backgroundImage}) no-repeat
    center;
  background-size: cover;
`

export const Main = styled.main`
  display: flex;

  border-radius: 10px;

  box-shadow: 0 0 100px black;
`

export const Clock = styled.section`
  padding: 1rem;

  font-size: 1.5rem;
  border-radius: 10px 0 0 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Content = styled.div`
  padding: 1rem;
  border-radius: 0 10px 10px 0;

  background: ${props => props.theme.colors.background};

  header {
    h1 {
      font-size: 1.5rem;
    }
  }

  div.services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 0;
    gap: 0.5rem;
    width: min-content;
  }

  div.search {
    display: flex;
    gap: 1rem;
    align-items: center;

    form {
      flex: 1;
      input {
        width: 100%;
        background: none;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        font-size: 1rem;
        color: white;

        padding: 0.3rem;

        &:hover,
        &:focus {
          border-bottom: 1px solid white;
        }
      }
    }
  }
`

export const Host = styled.a<ContentProps>`
  color: white;

  div {
    width: max-content;
    padding: 0.3rem;
    transition: 0.2s;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`
