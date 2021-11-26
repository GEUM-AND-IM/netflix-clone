import { motion } from "framer-motion";
import styled from "styled-components";

export const BigMovie = styled(motion.div)`
  position: absolute;
  width: 48vw;
  height: 88vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  z-index: 2;
`;

export const OverLay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
