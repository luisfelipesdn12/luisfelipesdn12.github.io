import React from 'react';
import styled from 'styled-components';
import { BaseCard } from '../../../models';

import Image from 'next/image';
import { useRouter } from 'next/router';

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

const SkillIcon = styled.span<{ index: number }>`
    width: 2rem;
    height: 2rem;
    user-select: none;
    opacity: ${props => (props.theme.themeName === 'dark' ? '15%' : '75%')};
    grid-row: ${props => Math.floor(props.index / 3) + 1};
`;

interface SeeMoreSkillsProps {
    nextSkills: BaseCard[];
}

const SeeMoreSkills: React.FC<SeeMoreSkillsProps> = ({ nextSkills }) => {
    const router = useRouter();

    return (
        <Wrapper
            onClick={() => {
                router.push('/skills');
            }}
        >
            <Mosaic>
                {nextSkills.slice(0, 9).map((skill, index) => (
                    <SkillIcon index={index}>
                        <Image
                            src={skill.imageUrl}
                            width={30}
                            height={30}
                            quality={100}
                        />
                    </SkillIcon>
                ))}
            </Mosaic>
            <strong>See more</strong>
            <p>Click here to see the complete set of skills</p>
        </Wrapper>
    );
};

export default SeeMoreSkills;
