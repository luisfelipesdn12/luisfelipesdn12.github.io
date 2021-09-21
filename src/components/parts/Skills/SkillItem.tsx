import React from 'react';
import styled from 'styled-components';
import { BaseCard } from '../../../models';
import RoundButton from '../../base/RoundButton';

const Wrapper = styled.li`
    text-align: center;
    margin: 2rem 1rem;
    max-width: 15rem;
`;

const Using = styled.p``;

interface SkillItemProps {
    skill: BaseCard;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
    <Wrapper>
        <RoundButton
            imageUrl={skill.imageUrl}
            alt={skill.name}
            style={{
                padding: '0.5rem',
                marginBottom: '0.5rem',
                width: '3.25rem',
                height: '3.25rem',
            }}
        />
        <br />
        <strong>{skill.name}</strong>
        <br />
        <Using>{skill.description}</Using>
    </Wrapper>
);

export default SkillItem;
