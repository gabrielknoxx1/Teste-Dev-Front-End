import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  height: 95vh;
  background: #EDE4EA;
  position: absolute;
  left: 8px;
  top: 55px;


  ul {
    height: 100%;
    list-style: none;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    li {
      width: 320px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        font-size: 20px;
        color: #635E61;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
         color: #000;
         svg {
          color: #D91B5B;
         }
      }

      svg {
        width: 24px;
        height: 24px;
        color: #34152E;
        margin-right: 16px;
      }
    }


    }
  }

  @media (min-width: 1280px) {
    width: 25%;
  height: 85vh;
  position: absolute;
  left: 8px;
  top: 55px;
  }


`;

export const Separator = styled.div`
  width: 95%;
  height: 2px;
  background: #B09FAA;
`;
