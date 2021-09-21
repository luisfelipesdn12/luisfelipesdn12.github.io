import React from 'react';
import { useContent } from '../../../content';
import HeroHeader from '../../base/HeroHeader';
import Description from './Description';
import LinksAndResourses from './LinksAndResourses';

const Hero: React.FC = () => {
    const content = useContent();

    return (
        <HeroHeader pageTitle={content.hero.greeting}>
            <Description />
            <LinksAndResourses />
        </HeroHeader>
    );
};

export default Hero;
