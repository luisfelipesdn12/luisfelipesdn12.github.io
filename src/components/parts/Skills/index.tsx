import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../../content';
import SeeMoreSkills from './SeeMoreSkills';
import SkillItem from './SkillItem';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

export const SkillsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`;

interface SkillsProps {
    /**
     * The number of skills that
     * must be showed in the home.
     * */
    previewCont?: number;
}

const Skills: React.FC<SkillsProps> = ({ previewCont = 5 }) => {
    const content = useContent();

    return (
        <Wrapper>
            <div>
                <h1>{content.skills.title}</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    {content.skills.description}
                </p>
                <SkillsList>
                    {content.skills.list.slice(0, previewCont).map(skill => (
                        <SkillItem skill={skill} />
                    ))}
                    <SeeMoreSkills
                        nextSkills={content.skills.list.slice(previewCont)}
                    />
                </SkillsList>
            </div>
        </Wrapper>
    );
};

export default Skills;
