import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import RoundButton from '../../../base/RoundButton';
import LanguageSelector from './LanguageSelector';
import ThemeSwitcher from './ThemeSwitcher';

const Wrapper = styled.nav`
    display: flex;
    margin: 1rem 0;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        max-width: 768px;
    }
`;

const ButtonList = styled.ul`
    display: flex;

    li {
        margin-left: 0.75rem;
    }
`;

const NavBar: React.FC = () => {
    const router = useRouter();

    return (
        <Wrapper>
            <RoundButton
                imageUrl="/initial-state.png"
                alt="icon: circle with point on center"
                style={{ padding: 0, width: '2.5rem', height: '2.5rem' }}
                onClick={() => {
                    router.push('/');
                }}
            />
            <ButtonList>
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <LanguageSelector />
                </li>
            </ButtonList>
        </Wrapper>
    );
};

export default NavBar;
