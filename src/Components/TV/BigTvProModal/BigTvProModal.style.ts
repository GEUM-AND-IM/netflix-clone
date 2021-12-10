import { motion } from "framer-motion";
import styled from "styled-components";

export const TvModalOvreLay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 3;
`;

export const BigTvpro = styled(motion.div)`
  position: absolute;
  width: 924px;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.black.lighter};
  z-index: 4;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const BigTvCover = styled.div<{ bgPhoto: string }>`
  width: 100%;
  min-height: 400px;
  background-image: linear-gradient(to top, #181818, transparent 50%),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const BigTvTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 46px;
  position: absolute;
  padding: 20px;
  padding-left: 48px;
  bottom: 0px;
`;

export const BigTvInfoWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 48px;
  padding-top: 20px;
  box-sizing: border-box;
  height: 100%;
`;

export const BigTvLeftInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const BigTvLeftTopWrap = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  column-gap: 20px;

  h3 {
    color: #46d369;
  }
`;

export const BigTvOverView = styled.p`
  width: 100%;
  height: 100%;
  margin: 0px;
  margin-top: 18px;
  line-height: 20px;
`;

export const BigTvHd = styled.div`
  width: 16px;
  height: 15px;
  text-align: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: rgba(255, 255, 255, 0.9);
  padding: 0 0.5em;
  font-size: 0.7em;
  border-radius: 3px;
  white-space: nowrap;
`;

export const BigTvRightInfo = styled.div`
  width: 265px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-left: 40px;

  p {
    span {
      min-width: 32px;
      margin-right: 3px;
      color: #777;
    }

    p {
      color: white;
      margin-right: auto;
    }
  }
`;
