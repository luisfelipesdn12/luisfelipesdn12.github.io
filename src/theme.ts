export interface ThemeProps {
    themeName: string;
    colors: {
        text: {
            title: string;
            simple: string;
            link: string;
        };
        background: {
            simple: string;
            accent: string;
        };
    };
}

export const lightTheme: ThemeProps = {
    themeName: 'light',
    colors: {
        text: {
            title: '#1A202C',
            simple: '#4A5568',
            link: '#2B6CB0',
        },
        background: {
            simple: '#FFFFFF',
            accent: '#EBF4FF',
        },
    },
};

export const darkTheme: ThemeProps = {
    themeName: 'dark',
    colors: {
        text: {
            title: '#D3D9E5',
            simple: '#D3D9E5DD',
            link: '#3078C4',
        },
        background: {
            simple: '#0D0D0D',
            accent: '#171717',
        },
    },
};
