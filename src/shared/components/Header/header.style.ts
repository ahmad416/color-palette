import styled from "styled-components";

export const HeaderStyledComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;
`;

export const TitleStyledComponent = styled.div`
    margin-right: 15px;
    padding: 0 13px;
    font-size: 22px;
    background-color: #eceff1;
    font-family: 'Roboto';
    height: 100%;
    display: flex;
    align-items: center;
    & a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  
`
