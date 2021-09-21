import React, { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '../parts/Hero/NavBar';

export const HeroWrapper = styled.header`
    margin: 0;
    padding: 0.75rem;
    padding-bottom: 5rem;
    background-color: ${props =>
        props.theme.colors.background.accent + (125).toString(16)};

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

const HeroGreeting = styled.h1`
    margin-top: 4rem;
    margin-bottom: 1.25rem;
`;

const PageTitle = styled.h1`
    margin-top: 4rem;
    margin-bottom: 1.25rem;
`;

const Description = styled.p`
    font-size: 1.5rem;

    strong {
        color: ${props => props.theme.colors.text.link};
        font-weight: 600;
    }
`;

interface HeroHeaderProps {
    pageTitle?: string | ReactNode;
    description?: string | ReactNode;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({
    pageTitle,
    description,
    children,
}) => {
    return (
        <HeroWrapper>
            <div>
                <NavBar />
                {pageTitle ? <PageTitle>{pageTitle}</PageTitle> : null}
                {description ? <Description>{description}</Description> : null}
                {children}
            </div>
        </HeroWrapper>
    );
};

export default HeroHeader;
