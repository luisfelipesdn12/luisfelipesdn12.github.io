import React from 'react';
import styled from 'styled-components';
import { useContent } from '../../../content';

export const DescriptionWrapper = styled.p`
    font-size: 1.5rem;

    strong {
        color: ${props => props.theme.colors.text.link};
        font-weight: 600;
    }
`;

/**
 * The "biography-like" description of me.
 */
const Description: React.FC = () => {
    const content = useContent();

    return (
        <DescriptionWrapper>
            {content.hero.description.prefix}
            {content.hero.description.languages.map(
                (language, index, array) => {
                    let separator: string;

                    switch (index) {
                        // If is the last language,
                        // do not include any separator.
                        case array.length - 1:
                            separator = '';
                            break;
                        case array.length - 2:
                            separator = ` ${content.hero.description.and} `;
                            break;
                        default:
                            separator = ', ';
                            break;
                    }

                    return (
                        <span key={index}>
                            <strong>{language}</strong>
                            {separator}
                        </span>
                    );
                },
            )}
            {content.hero.description.suffix}
        </DescriptionWrapper>
    );
};

export default Description;
