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
