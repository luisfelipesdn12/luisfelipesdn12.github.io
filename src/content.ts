import { NextRouter, useRouter } from 'next/router';
import { Content } from './models';

type Language = 'en-US' | 'pt-BR';
type LocatedContent = {
    [language in Language]: Content;
};

export const content: LocatedContent = {
    'en-US': {
        meta: {
            title: 'Luis Felipe - Code Development',
        },
        hero: {
            navBar: {
                themeSwitcher: {
                    turnToDark: 'Turn to Dark mode',
                    turnToLight: 'Turn to Light mode',
                },
                languageSelector: {
                    title: 'Language Selector',
                    turnToEn: 'Turn to English',
                    turnToPt: 'Turn to Portuguese',
                },
            },
            greeting: "Hello, I'm Luis Felipe!",
            description: {
                prefix: "I'm a computer science student and I can code for: automations, websites, machine learning, APIs and data science. My main languages are ",
                languages: ['Python', 'TypeScript', 'Go'],
                and: 'and',
                suffix: '.',
            },
            socialLinks: [
                {
                    imageUrl: '/social/github.png',
                    link: 'https://github.com/luisfelipesdn12',
                    alt: 'GitHub',
                },
                {
                    imageUrl: '/social/gmail.png',
                    link: 'mailto:luisfelipesdn12@gmail.com',
                    alt: 'Email',
                },
                {
                    imageUrl: '/social/linkedin.png',
                    link: 'https://www.linkedin.com/in/luisfelipesdn12',
                    alt: 'LinkedIn',
                },
            ],
            resumeButton: {
                label: 'Resume',
                link: '/resume/Luis Felipe - Resume.pdf',
            },
        },
        skills: {
            title: 'Skills',
            description: 'Programming languages and tools.',
            list: [
                {
                    name: 'Python',
                    description:
                        'Automation, data science, bots, machine learning, graphic interface and competittive programming',
                    imageUrl: '/skills/python.png',
                },
                {
                    name: 'Typescript/Javascript',
                    description:
                        'APIs development (REST and GraphQL), web development, NodeJS',
                    imageUrl: '/skills/typescript.png',
                },
                {
                    name: 'HTML & CSS',
                    description:
                        'Web development, best pratices, semantic tags, SEO metatags',
                    imageUrl: '/skills/html-5.png',
                },
                {
                    name: 'Go',
                    description: 'APIs development, packages, automation',
                    imageUrl: '/skills/golang.png',
                },
                {
                    name: 'Java',
                    description: 'REST APIs, Graddle, Spring Boot, etc',
                    imageUrl: '/skills/java.png',
                },
                {
                    name: 'React.js',
                    description:
                        'Components, hooks, GraphQL and REST clients, etc',
                    imageUrl: '/skills/react.png',
                },
                {
                    name: 'Next.js',
                    description:
                        'Type safety with Typescript, both frontend with React and backend with REST API, optimizations',
                    imageUrl: '/skills/nextjs.png',
                },
                {
                    name: 'Jupyter/Google Colab Notebooks',
                    description:
                        'Data science, exploratory analysis, data visualization',
                    imageUrl: '/skills/notebook-emoji.png',
                },
                {
                    name: 'Electron',
                    description: 'Desktop Graphic User Interface',
                    imageUrl: '/skills/electron.png',
                },
                {
                    name: 'Linux/Shell',
                    description:
                        'Command line interface, tools, process, packages',
                    imageUrl: '/skills/console.png',
                },
                {
                    name: 'Arduino',
                    description:
                        'Automations, electronic, embeded systems, projects development',
                    imageUrl: '/skills/arduino.png',
                },
                {
                    name: 'PostgreSQL',
                    description:
                        'Best pratices, TypeORM, security, data protection laws, etc',
                    imageUrl: '/skills/postgresql.png',
                },
                {
                    name: 'Jest',
                    description: 'Unit tests, Mocks, type safety, etc',
                    imageUrl: '/skills/joker.png',
                },
            ],
        },
        projects: {
            title: 'Projects',
            description:
                'My knowledge applied in personal projects. Click in the project to see more.',
            list: [
                {
                    imageUrl: '/projects/prime-numbers.jpg',
                    name: 'Infinite prime numbers generator',
                    description:
                        "Algorithm to generate prime numbers infinitely, using iterations, arrays and divisibility tests. I've made a YouTube video explain the logic.",
                    link: 'https://github.com/luisfelipesdn12/Numeros-Primos/',
                },
                {
                    imageUrl: '/projects/where-the-office.png',
                    name: 'Where Am I In The Office',
                    description:
                        'A website that shows my progress when watching The Office series. Created with the purpose of showing my friends how much they can give me spoilers :)',
                    link: 'https://github.com/luisfelipesdn12/where-am-i-in-the-office',
                },
                {
                    imageUrl: '/projects/pytosis_demo.gif',
                    name: 'Pytosis Simulator',
                    description:
                        "A simple simulator to the cell's reproduction using Python and Pygame.",
                    link: 'https://github.com/luisfelipesdn12/pytosis-simulator',
                },
                {
                    imageUrl: '/projects/wca-comp-alert.png',
                    name: 'WCA Competitions Alert',
                    description:
                        "A script which send an e-mail when there's a new WCA competition. Integrates the WCA's and the Google Sheets API, the subscription is made by the Google Forms.",
                    link: 'https://github.com/luisfelipesdn12/Alerta-de-Campeonatos-WCA',
                },
                {
                    imageUrl: '/projects/trabalhos-escolares-automaticos.jpg',
                    name: 'Automatic schoolwork',
                    description:
                        'A program that, from a subject, extracts content from Wikipedia, summarizes and adds images, then formats and exports a document in the form of schoolwork.',
                    link: 'https://github.com/luisfelipesdn12/trabalhos-escolares-automaticos',
                },
                {
                    imageUrl: '/projects/gihub-demo.jpg',
                    name: 'See more!',
                    description:
                        'Explore all my projects in my GitHub profile.',
                    link: 'https://github.com/luisfelipesdn12',
                },
            ],
        },
        education: {
            title: 'Education',
            description:
                'My background in formal education, in addition to technologies courses and studies of interest.',
            list: [
                {
                    imageUrl: '/education/python-curso-em-video.jpg',
                    name: 'Python 3 Course',
                    description:
                        'Created by Prof. Gustavo Guanabara to "Curso em Vídeo", it shows from basics concepts to errors handling with the Python programming language.',
                    institution: 'Curso em Vídeo',
                    hours: 120,
                    link: 'https://www.cursoemvideo.com/cursos/',
                },
                {
                    imageUrl: '/education/saga.png',
                    name: '<abbr title="Computer Graphic">CG</abbr> Course',
                    description:
                        'Made by <abbr title="School of Art Game and Animation">SAGA</abbr> it addresses a broad and updated view on digital art, computer graphics, prototyping and immersive technologies. In it, I improved and developed concepts about vector art, image editing, 3D modeling, animation and video editing.',
                    institution: 'SAGA',
                    hours: 220,
                    link: 'https://saga.art.br/cursos/presencial/start/',
                },
                {
                    imageUrl: '/education/data_visualization_python.jpg',
                    name: 'Data Science: Data Visualization with Python',
                    description:
                        'The course is created by Diego Mariano and approaches some important concepts for the creation of graphs and data visualization with the Python programming language. It shows even some HTML concepts to create an RNA comparison with real genomes. It is used the Python libraries matplotlib and pandas with data from DataSUS and in biotech databases.',
                    institution: 'Udemy - Diego Mariano',
                    hours: 2,
                    link: 'https://www.udemy.com/course/visualizacao-de-dados-com-python/',
                },
                {
                    imageUrl: '/education/backend.jpg',
                    name: 'Backend Developer Course',
                    description:
                        "A full backend course. Showing Git Flow, Systems Architecture, Java, Spring Boot, testing, best practices with SQL, SCRUM, JavaScript ES6, Node.js with Express, best practices with API's and laws about data security.",
                    institution: 'Digital Innovation One',
                    hours: 100,
                    link: 'https://certificates.digitalinnovation.one/6CB93EFF',
                },
                {
                    imageUrl: '/education/golang.jpg',
                    name: 'Golang Course',
                    description:
                        'Brazilian version made by Ellen Körbes of a course originally made by Todd McLeod. It shows all the advantages of using the Go Programming Language, fundamental concepts and best practices to code in Go.',
                    institution: 'Aprenda Go - Ellen Körbes',
                    hours: 22,
                    link: 'https://www.youtube.com/playlist?list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg',
                },
                {
                    imageUrl: '/education/high-school.jpg',
                    name: 'High School',
                    description:
                        'Brazilian High School. Subjects as Portuguese Language, Mathematics, Chemistry, Sociology, Arts, Physics, English Language, Geography, Philosophy, Biology, etc.',
                    institution: 'State of Sao Paulo',
                    hours: '1050 of 3150',
                    link: 'https://inova.educacao.sp.gov.br/',
                },
            ],
        },
        footer: {
            prefix: 'Developed with HTML, CSS and TypeScript by ',
            author: 'Luis Felipe',
            suffix: '.',
        },
    },
    'pt-BR': {
        meta: {
            title: 'Luis Felipe - Desenvolvimento de Software',
        },
        hero: {
            navBar: {
                themeSwitcher: {
                    turnToDark: 'Trocar para modo Escuro',
                    turnToLight: 'Trocar para modo Claro',
                },
                languageSelector: {
                    title: 'Seletor de idioma',
                    turnToEn: 'Trocar para Inglês',
                    turnToPt: 'Trocar para Português',
                },
            },
            greeting: 'Olá, eu sou o Luis Felipe!',
            description: {
                prefix: 'Sou um estudante de ciência da computação e posso desenvolver: automações, sites, machine learning, APIs e data science. Minhas principais linguagens de programação são ',
                languages: ['Python', 'TypeScript', 'Go'],
                and: 'e',
                suffix: '.',
            },
            socialLinks: [
                {
                    imageUrl: '/social/github.png',
                    link: 'https://github.com/luisfelipesdn12',
                    alt: 'GitHub',
                },
                {
                    imageUrl: '/social/gmail.png',
                    link: 'mailto:luisfelipesdn12@gmail.com',
                    alt: 'Email',
                },
                {
                    imageUrl: '/social/linkedin.png',
                    link: 'https://www.linkedin.com/in/luisfelipesdn12',
                    alt: 'LinkedIn',
                },
            ],
            resumeButton: {
                label: 'Currículo',
                link: '/resume/Luis Felipe - Currículo.pdf',
            },
        },
        skills: {
            title: 'Habilidades',
            description: 'Linguagens de programação e ferramentas.',
            list: [
                {
                    name: 'Python',
                    description: 'I do things',
                    imageUrl: '/skills/python.png',
                },
                {
                    name: 'Typescript',
                    description: 'I do things with types too',
                    imageUrl: '/skills/typescript.png',
                },
            ],
        },
        projects: {
            title: 'Projetos',
            description:
                'Meus conhecimentos aplicados em projetos pessoais. Clique no projeto para ver mais.',
            list: [
                {
                    imageUrl: '/projects/prime-numbers.jpg',
                    name: 'Gerador infinito de números primos',
                    description:
                        'Agoritimo para gerar números primos infinitamente, usando iterações, arrays e testes de divisibilidade. Eu fiz um vídeo no YouTube explicando a lógica.',
                    link: 'https://github.com/luisfelipesdn12/Numeros-Primos/',
                },
                {
                    imageUrl: '/projects/where-the-office.png',
                    name: 'Onde Estou Em The Office',
                    description:
                        'Um site que mostra meu progresso ao assistir a série The Office. Criado com a proposta de mostrar aos meus amigos o quanto eles podem me dar spoilers:)',
                    link: 'https://github.com/luisfelipesdn12/where-am-i-in-the-office',
                },
                {
                    imageUrl: '/projects/pytosis_demo.gif',
                    name: 'Pytosis Simulator',
                    description:
                        'Um simulador simples da reprodução celular, utilizando Python e Pygame.',
                    link: 'https://github.com/luisfelipesdn12/pytosis-simulator',
                },
                {
                    imageUrl: '/projects/wca-comp-alert.png',
                    name: 'Alerta de Campeonatos WCA',
                    description:
                        'Um script que envia um e-mail quando há uma nova competição da WCA. Integra as APIs da WCA e a do Planilhas Google, a inscrição é feita pelo Formulários Google.',
                    link: 'https://github.com/luisfelipesdn12/Alerta-de-Campeonatos-WCA',
                },
                {
                    imageUrl: '/projects/trabalhos-escolares-automaticos.jpg',
                    name: 'Trabalhos Escolares Automáticos',
                    description:
                        'Um programa que, a partir de um assunto, extrai conteúdo da Wikipedia, resume e adiciona imagens, depois formata e exporta um documento em forma de trabalho escolar.',
                    link: 'https://github.com/luisfelipesdn12/trabalhos-escolares-automaticos',
                },
                {
                    imageUrl: '/projects/gihub-demo.jpg',
                    name: 'Veja mais!',
                    description:
                        'Explore todos os meus projetos no meu perfil do GitHub!',
                    link: 'https://github.com/luisfelipesdn12',
                },
            ],
        },
        education: {
            title: 'Educação',
            description:
                'Minha formação em educação formal, além de cursos de tecnologia e estudos de interesse.',
            list: [
                {
                    imageUrl: '/education/python-curso-em-video.jpg',
                    name: 'Curso de Python 3',
                    description:
                        'Criado pelo Prof. Gustavo Guanabara para o "Curso em Vídeo", aborda desde conceitos básicos até tratamento de erros com a linguagem de programação Python.',
                    institution: 'Curso em Vídeo',
                    hours: 120,
                    link: 'https://www.cursoemvideo.com/cursos/',
                },
                {
                    imageUrl: '/education/saga.png',
                    name: 'Curso de Computação Gráfica',
                    description:
                        'Curso feito pela <abbr title="School of Art Game and Animation">SAGA</abbr> que aborda uma visão ampla e atualizada sobre a arte digital, computação gráfica, prototipagem e tecnologias imersivas. Nele, aprimorei e desenvolvi conceitos sobre arte vetorial, edição de imagens, modelagem, animação 3D e edição de vídeos.',
                    institution: 'SAGA',
                    hours: 220,
                    link: 'https://saga.art.br/cursos/presencial/start/',
                },
                {
                    imageUrl: '/education/data_visualization_python.jpg',
                    name: 'Data Science: Visualização de Dados com Python',
                    description:
                        'O curso é criado por Diego Mariano, e aborda alguns conceitos importantes para a criação de gráficos e vizualização de dados com a linguagem de programação Python. Ele aborda até mesmo alguns conceitos sobre HTML para criar uma comparação de RNA com genomas reais. São usados as bibliotecas do Python matplotlib e pandas com dados do DataSUS e de banco de dados de biotecnologia.',
                    institution: 'Udemy - Diego Mariano',
                    hours: 2,
                    link: 'https://www.udemy.com/course/visualizacao-de-dados-com-python/',
                },
                {
                    imageUrl: '/education/backend.jpg',
                    name: 'Curso Backend Developer',
                    description:
                        "Um curso de back-end completo. Abordando Git Flow, Arquitetura de Sistemas, Java, Spring Boot, testes, melhores práticas com SQL, SCRUM, JavaScript ES6, Node.js com Express, melhores práticas com API's e leis sobre segurança de dados.",
                    institution: 'Digital Innovation One',
                    hours: 100,
                    link: 'https://certificates.digitalinnovation.one/6CB93EFF',
                },
                {
                    imageUrl: '/education/golang.jpg',
                    name: 'Curso Golang',
                    description:
                        'Versão brasileira feita por Ellen Körbes do curso originalmente feito por Todd McLeod. O curso aborda todas as vantagens de usar a Linguagem de Programação Go, conceitos fundamentais e boas práticas para desenvolver em Go.',
                    institution: 'Aprenda Go - Ellen Körbes',
                    hours: 22,
                    link: 'https://www.youtube.com/playlist?list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg',
                },
                {
                    imageUrl: '/education/high-school.jpg',
                    name: 'Ensino Médio',
                    description:
                        'Ensino Médio Brasileiro. Disciplinas como Língua Portuguesa, Matemática, Química, Sociologia, Artes, Física, Língua Inglesa, Geografia, Filosofia, Biologia, etc.',
                    institution: 'Estado de São Paulo',
                    hours: '1050 de 3150',
                    link: 'https://inova.educacao.sp.gov.br/',
                },
            ],
        },
        footer: {
            prefix: 'Desenvolvido com HTML, CSS e TypeScript por ',
            author: 'Luis Felipe',
            suffix: '.',
        },
    },
};

export const getLocatedContent = (router: NextRouter): Content => {
    const contentSelected =
        content[router.locale] || content[router.defaultLocale] || {};

    return {
        ...content['en-US'],
        ...contentSelected,
    };
};

/**
 * Returns the content with the
 * current idiom.
 */
export const useContent = (): Content => {
    const router = useRouter();
    return getLocatedContent(router);
};
