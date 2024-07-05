import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  background: #fff; /* color de fondo */
  color: #0f58b8; /* color de fuente */
  border: 2px solid #0f58b8; /* tamaño y color de borde */
  padding: 16px 20px;
  border-radius: 3px; /* redondear bordes */
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 95%;
    color: #ffffff;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:after {
    content: "";
    background: #0f58b8; /* color de fondo hover */
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.3s ease;
  }
  &:hover:after {
    transition: all 0.3s ease-out;
    transform: skewX(-45deg) scale(1, 1);
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #252525;
      & span {
        background: var(--btn-gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
`;
