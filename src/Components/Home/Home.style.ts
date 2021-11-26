import { motion } from "framer-motion";
import styled from "styled-components";
import { isBlock } from "typescript";

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

export const Slider = styled.div`
  position: relative;
  top: -200px;
`;

export const Row = styled(motion.div)`
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(6, 1fr); */
  display: flex;
  justify-content: center;
  column-gap: 10px;
  position: absolute;
  padding: 0px 60px;
  box-sizing: border-box;
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth,
  },
};

export const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.black.lighter};
  height: 180px;
  position: relative;
  width: 16%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 99,
    width: 360,
    height: 358,
    y: -100,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

export const BoxImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const boxImgVariants = {
  hover: {
    height: 179,
    transition: {
      delay: 0.5,
    },
  },
};

export const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  display: none;
  opacity: 0;

  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

export const infoVariants = {
  hover: {
    display: "block",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
