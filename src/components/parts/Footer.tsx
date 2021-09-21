import styled from 'styled-components';
import { useContent } from '../../content';

const Wrapper = styled.footer`
    padding: 1.5rem 3rem;
`;

const DevelopedBySentence = styled.p`
    font-weight: 500;
`;

const Footer: React.FC = () => {
    const content = useContent();

    return (
        <Wrapper>
            <DevelopedBySentence>
                {content.footer.prefix}
                <a
                    target="_blank"
                    href="https://github.com/luisfelipesdn12/luisfelipesdn12-personal-site"
                >
                    {content.footer.author}
                </a>
                {content.footer.suffix}
            </DevelopedBySentence>
        </Wrapper>
    );
};

export default Footer;
