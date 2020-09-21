import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  background: #45213E;
  display:  flex;
  align-items: center;
  justify-content: space-around;
  color: #DB658C;

  h1 {
    font-size: 13px;
  }

  > svg {
    width: 24px;
    height: 24px;

    &:hover {
      color: #D91B5B;

    }
  }

  @media (min-width: 1280px) {
    display:  flex;
    align-items: center;
    justify-content: center;

    > svg {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }

  h1 {
    font-size: 24px;
  }

  }

`;
