import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  background-color: black;
  height: 68px;
  font-size: 14px;
  padding: 0px 60px;
  color: white;
`;

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
    stroke: white;
  }
`;

export const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

export const Search = styled.svg`
  color: white;
  height: 25px;
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

export const Circle = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${(props) => props.theme.red};
  border-radius: 50px;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
