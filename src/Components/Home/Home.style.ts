import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
`;

export const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 68px;
  margin-bottom: 20px;
`;

export const Overview = styled.p`
  font-size: 1.4vw;
  width: 50%;
`;
