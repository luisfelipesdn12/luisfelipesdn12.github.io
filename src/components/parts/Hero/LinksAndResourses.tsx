import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { useContent } from '../../../content';
import Button from '../../base/Button';
import RoundButton from '../../base/RoundButton';

const SocialLinksList = styled.ul`
    display: flex;
    margin-top: 3rem;
    justify-content: center;
`;

const roundButtonAditionalStyling: CSSProperties = {
    margin: '0.5rem',
    boxShadow:
        '1px 2px 3px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
};

/**
 * Social links and buttons to resources
 * (eg. Resume).
 */
const LinksAndResourses: React.FC = () => {
    const content = useContent();

    return (
        <>
            <SocialLinksList>
                {content.hero.socialLinks.map((socialLink, index) => (
                    <li key={index}>
                        <RoundButton
                            imageUrl={socialLink.imageUrl}
                            alt={socialLink.alt}
                            onClick={() => {
                                open(socialLink.link, '_blank');
                            }}
                            style={
                                // The GitHub's logo looks nicier
                                // with smaller padding.
                                socialLink.alt === 'GitHub'
                                    ? {
                                          padding: '0.25rem',
                                          ...roundButtonAditionalStyling,
                                      }
                                    : roundButtonAditionalStyling
                            }
                        />
                    </li>
                ))}
            </SocialLinksList>
            <Button
                label={content.hero.resumeButton.label}
                onClick={() => {
                    open(content.hero.resumeButton.link, '_blank');
                }}
            />
        </>
    );
};

export default LinksAndResourses;
