import { useDarkMode } from 'next-dark-mode';
import styled from 'styled-components';
import { useContent } from '../../../../content';

const Container = styled.div`
    display: inline-block;
    position: relative;

    display: block;
    font-weight: 600;
    line-height: 1.25;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: white;
    user-select: none;
    cursor: pointer;

    box-shadow: 0 4px 6px -1px ${props => props.theme.colors.text.title}15,
        0 2px 4px -1px ${props => props.theme.colors.text.title}15;
`;

const ThemeSwitcher: React.FC = () => {
    const { darkModeActive, switchToDarkMode, switchToLightMode } =
        useDarkMode();

    const content = useContent();

    return (
        <Container
            title={
                darkModeActive
                    ? content.hero.navBar.themeSwitcher.turnToLight
                    : content.hero.navBar.themeSwitcher.turnToDark
            }
            onClick={darkModeActive ? switchToLightMode : switchToDarkMode}
        >
            {darkModeActive ? '🌔' : '🌒'}
        </Container>
    );
};

export default ThemeSwitcher;
