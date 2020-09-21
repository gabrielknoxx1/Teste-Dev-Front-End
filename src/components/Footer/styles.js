import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display:  flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;


  @media (min-width: 1280px) {
    width: 100%;
    display:  flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
  }
`;




export const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;


  > svg {
    width: 64px;
    height: 64px;
    color: #d91b5b;
  }

  h1 {
    font-size: 20px;
    margin-top: 16px;
    color: #34152E;
    text-align: center;
  }

  h2 {
    font-size: 16px;
    margin-top: 8px;
    color: #d91b5b;
    text-align: center;
  }

  input {
    width: 280px;
    height: 48px;
    margin-top: 24px;
    padding: 0 16px;
  }

  button {
    width: 280px;
    height: 48px;
    margin-top: 16px;
    background: #34152E;
    color: #FFF;
    border-radius: 8px;
    border: none;

    &:hover{
      background: #5F2353;
      color: #ccc;
    }

  }

  @media (min-width: 1280px) {
    display:  flex;
    width: 50%;
    align-items: center;
    margin-top: 32px;
  }

`;


export const Contact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  background: #45213E;

  h1 {
    font-size: 24px;
    color: #fff;
    margin-top: 16px;
  }

  > p {
    color: #fff;
    font-size: 16px;
    margin-top: 8px;
  }

  @media (min-width: 1280px) {
    display:  flex;
    width: 50%;
    height: 400px;
    align-items: center;
    margin-top: 32px;
  }

`;


export const Separator = styled.div`
  width: 90px;
  height: 2px;
  background: #83496B;
  margin-top: 4px;
`;


export const Telefone = styled.div`
  display: flex;
  align-items: center;
  color: #d91b5b;
  font-size: 24px;
  margin-top: 16px;

  > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }

`;

export const Whatsapp = styled.div`
  display: flex;
  align-items: center;
  color: #d91b5b;
  margin-top: 16px;
  font-size: 16px;


  > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
export const Email = styled.div`
  display: flex;
  align-items: center;
  color: #d91b5b;
  margin-top: 16px;
  margin-bottom: 32px;
  font-size: 16px;


  > svg {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }

`;
