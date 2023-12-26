import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        colorPrimary: '#F21F1F',
        fontFamily: 'var(--font-inter)'
    },
    components: {
        Carousel: {
            colorBgContainer: 'var(--primary-main)'
        }
    }
};

export default theme;
