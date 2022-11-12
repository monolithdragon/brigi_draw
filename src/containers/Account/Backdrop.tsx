import styled from 'styled-components';
import { motion } from 'framer-motion';

export const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)'
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg)'
  }
};

export const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30
};

const Backdrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background: ${props => props.theme.palette.primary.main};
  background: linear-gradient(58deg, ${props => props.theme.palette.primary.main} 20%, ${props => props.theme.palette.accent.main} 100%);
`;

export default Backdrop;