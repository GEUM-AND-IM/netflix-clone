import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
`;

export const SearchLoader = styled.div`
  width: 100%;
  text-align: center;
  color: white;
`;

export const SearchResultWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: ${(props) => props.theme.black.veryDark};
  box-sizing: border-box;
  padding: 60px;
  padding-top: 195px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
  justify-content: center;
  position: relative;
  z-index: 0;
`;

export const SearchNotice = styled.p`
  position: absolute;
  font-size: 35px;
  top: 110px;
  left: 60px;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 250px;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
    margin-left: 10px;
    color: grey;
  }

  span {
    width: 100%;
    display: flex;
    align-items: center;

    &:last-child {
      margin-top: auto;
    }
  }
`;

export const SearchInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  font-size: 15px;

  h1 {
  }
`;

export const SearchImg = styled.img`
  width: 300px;
  height: 100%;
  margin-left: auto;
`;
