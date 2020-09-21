import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height:70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #83496B;

  h1 {
    font-size: 16px;
  }

  > svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: #fff;

    &:hover {
        color: #000;
      }
  }

  div {
    display: flex;
    align-items: center;

    input {
      display: none;
     }

    > svg {
      width: 32px;
      height: 32px;
      margin-left: 16px;
      cursor: pointer;
      color: #fff;

      &:hover {
        color: #000;
      }

    }
  }

   @media (min-width: 1280px) {
   > svg {
      width: 32px;
      height: 32px;
      cursor: pointer;
      color: #fff;

      &:hover {
        color: #000;
      }
  }

  h1 {
       font-size: 24px;
     }

     div {
      input{
      display: inherit;
      width: 220px;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding: 0 16px;
  }
     }
  }


`;
