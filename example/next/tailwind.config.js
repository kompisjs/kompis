module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/common/**/*.{ts,tsx}',
      './src/kompis/**/*.{ts,tsx}',
      './src/pages/*.{ts,tsx}'
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'white': '#ffffff',
        'black': '#000000',
        'ink': {
          'lightest': '#72777A',
          'lighter': '#6C7072',
          'light': '#404446',
          'base': '#303437',
          'darkest': '#202325',
        },
        'sky': {
          'lightest': '#F7F9FA',
          'lighter': '#F2F4F5',
          'light': '#E3E5E5',
          'base': '#CDCFD0',
          'darkest': '#979C9E',
        },
        'primary': {
          'lightest': '#E7E7FF',
          'lighter': '#C6C4FF',
          'light': '#9990FF',
          'base': '#6B4EFF',
          'darkest': '#5538EE',
        }, 
        'red': {
          'lightest': '#FFE5E5',
          'lighter': '#FF9898',
          'light': '#FF6D6D',
          'base': '#FF5247',
          'darkest': '#D3180C',
        },
        'green': {
          'lightest': '#ECFCE5',
          'lighter': '#7DDE86',
          'light': '#4CD471',
          'base': '#23C16B',
          'darkest': '#198155',
        },
        'yellow': {
          'lightest': '#FFEFD7',
          'lighter': '#FFD188',
          'light': '#FFC462',
          'base': '#FFB323',
          'darkest': '#A05E03',
        },
        'blue': {
          'lightest': '#C9F0FF',
          'lighter': '#9BDCFD',
          'light': '#6EC2FB',
          'base': '#48A7F8',
          'darkest': '#0065D0',
        },
      },
      boxShadow: {
        small: '0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)',
        medium: '0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08)',
        large: '0px 1px 24px 8px rgba(20, 20, 20, 0.08)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '32px',
        'h3': '24px',
        'large': '18px',
        'regular': '16px',
        'small': '14px',
        'tiny': '12px',
      },
      fontWeight: {
        'bold': '700',
        'medium': '500',
        'normal': '400'
      },
      lineHeight: {
        'h1': '56px',
        'h2': '36px',
        'h3': '32px',
        'large': {
          'none': '18px',
          'tight': '20px',
          'normal': '24px'
        },
        'regular': {
          'none': '16px',
          'tight': '20px',
          'normal': '24px'
        },
        'small': {
          'none': '14px',
          'tight': '16px',
          'normal': '20px'
        },
        'tiny': {
          'none': '12px',
          'tight': '14px',
          'normal': '16px'
        },
      }
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      borderWidth: ['first', 'last'],
      padding: ['first', 'last'],
    },
  },
  plugins: [],
}