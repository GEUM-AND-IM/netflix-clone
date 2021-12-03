import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  margin-top: 70px;
`;

export const SearchLoader = styled.div`
  width: 100%;
  text-align: center;
  color: white;
`;

export const SearchResultWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.black.veryDark};
  box-sizing: border-box;
  padding: 60px;
  padding-top: 125px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 105px;
  justify-content: center;
  position: relative;
  z-index: 0;
`;
