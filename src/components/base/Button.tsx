import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: 12rem;
    height: 3rem;
    margin: 0.5rem;
    cursor: pointer;
    font-weight: 700;
    padding: 0.25rem 0;
    border-radius: 9999px;
    color: ${props => props.theme.colors.background.simple};
    background-color: ${props => props.theme.colors.text.title};

    box-shadow: 0 4px 6px -1px ${props => props.theme.colors.text.title}15,
        0 2px 4px -1px ${props => props.theme.colors.text.title}15;
`;

interface ButtonProps {
    /** Text displayed on button */
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Simple button.
 */
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <Wrapper onClick={onClick}>{label}</Wrapper>;
};

export default Button;
