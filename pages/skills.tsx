import React from 'react';
import styled from 'styled-components';
import HeroHeader from '../src/components/base/HeroHeader';
import { SkillsList } from '../src/components/parts/Skills';
import SkillItem from '../src/components/parts/Skills/SkillItem';
import { useContent } from '../src/content';

const Wrapper = styled.section`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
`;

const Skills: React.FC = () => {
    const content = useContent();

    return (
        <>
            <HeroHeader
                pageTitle={content.skills.title}
                description={content.skills.description}
            />
            <Wrapper>
                <div>
                    <SkillsList>
                        {content.skills.list.map(skill => (
                            <SkillItem skill={skill} />
                        ))}
                    </SkillsList>
                </div>
            </Wrapper>
        </>
    );
};

export default Skills;
