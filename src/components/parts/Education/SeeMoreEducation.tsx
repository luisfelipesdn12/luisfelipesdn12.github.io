import React from 'react';
import styled from 'styled-components';
import { BaseCard } from '../../../models';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContent } from '../../../content';

const Wrapper = styled.div`
    display: block;
    text-align: center;
    cursor: default;
    max-width: 15rem;
`;

const Mosaic = styled.div`
    display: grid;
    width: fit-content;
    height: fit-content;
    grid-template-rows: repeat(3, 1fr);
    background-color: ${props => props.theme.colors.text.title}05;
    padding: 0.75rem;
    border-radius: 1rem;
    cursor: pointer;

    margin: 0.5rem auto;

    -webkit-filter: blur(0.05rem);
    -moz-filter: blur(0.05rem);
    -o-filter: blur(0.05rem);
    -ms-filter: blur(0.05rem);
    filter: blur(0.05rem);

    :hover {
        background-color: ${props => props.theme.colors.text.title}10;
    }
`;

const EducationIcon = styled.span<{ index: number }>`
    width: 2rem;
    height: 2rem;
    user-select: none;
    opacity: ${props => (props.theme.themeName === 'dark' ? '15%' : '75%')};
    grid-row: ${props => Math.floor(props.index / 3) + 1};
`;

interface SeeMoreEducationsProps {
    nextEducations: BaseCard[];
}

const SeeMoreEducations: React.FC<SeeMoreEducationsProps> = ({ nextEducations }) => {
    const content = useContent();
    const router = useRouter();

    return (
        <Wrapper
            onClick={() => {
                router.push('/education');
            }}
        >
            <Mosaic>
                {nextEducations.slice(0, 9).map((education, index) => (
                    <EducationIcon index={index}>
                        <Image
                            alt={education.name}
                            src={education.imageUrl}
                            width={30}
                            height={30}
                            quality={100}
                        />
                    </EducationIcon>
                ))}
            </Mosaic>
            <strong>{content.common.seeMore}</strong>
            <p>{content.common.clickToSeeMore} {content.education.title.toLowerCase()}</p>
        </Wrapper>
    );
};

export default SeeMoreEducations;
