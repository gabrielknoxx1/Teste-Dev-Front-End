import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;


  div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

  @media (min-width: 1280px) {
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

      div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 16px 16px;

      }


  }

`;



export const Vibradores = styled.a`
  width: 334px;
  height: 116px;
  background: #45213E;
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;

  &:hover {
    color: #c6c6c6;
    font-size: 40px;
  }

 `;

export const Acessorios = styled.a`
  background: #db658c;
  width: 334px;
  height: 116px;
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;



  &:hover {
    color: #c6c6c6;
    font-size: 40px;
  }

`;

export const Anal = styled.a`
  background: #d91b5b;
  width: 334px;
  height: 116px;
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;



  &:hover {
    color: #c6c6c6;
    font-size: 40px;
  }

`;

export const Sado = styled.a`
  background: #d91b5b;
  width: 334px;
  height: 116px;
  text-decoration: none;
  font-size: 32px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  border-radius: 8px;



  &:hover {
    color: #c6c6c6;
    font-size: 40px;
  }
`;

export const Lingeries = styled.a`
  width: 334px;
  height: 200px;
  background: #000;
  text-decoration: none;
  font-size: 26px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  border-radius: 8px;


  &:hover {
    color: #c6c6c6;
    font-size: 32px;
  }


  @media (min-width: 1280px) {
    width: 334px;
    height: 260px;
    margin-top: 20px;
  }
`;
