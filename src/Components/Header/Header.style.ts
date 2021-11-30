import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: black;
  padding: 0px 60px;
  color: white;
  top: 0px;
  font-size: 14px;
  box-sizing: border-box;
  z-index: 2;
`;

export const navVariants = {
  top: { backgroundColor: "rgba(0,0,0,0)" },
  scroll: { backgroundColor: "rgba(0,0,0,1)" },
};

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
  }
`;

export const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    transition: {
      repeat: Infinity,
    },
  },
};

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
    cursor: pointer;
  }
`;

export const Input = styled(motion.input)`
  width: 268px;
  height: 36px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.white.lighter};
  background-color: transparent;
  z-index: -1;
  outline: none;
  color: white;
  padding: 5px 10px;
  padding-left: 40px;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li<{ isActive: boolean }>`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  cursor: pointer;
  a {
    font-weight: ${(props) => (props.isActive ? "bold" : "300")};
    color: ${(props) => (props.isActive ? "white" : "#e5e5e5")};
    text-decoration: none;
  }
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.red};
  border-radius: 50px;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
