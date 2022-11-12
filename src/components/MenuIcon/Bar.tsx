import styled from 'styled-components';

const Bar = styled.div`
    width: 24px;
    height: 4px;
    background-color: ${props => props.theme.palette.common.dark};
    margin: 4px 0;
    transition: transform 0.2s ease-in-out;

    &.bar1.change {
        transform: translate(0, 8px) rotate(-45deg);
    }

    &.bar2.change{
        opacity: 0;
    }

    &.bar3.change{
        transform: translate(0, -8px) rotate(45deg);
    }    
`;

export default Bar;

