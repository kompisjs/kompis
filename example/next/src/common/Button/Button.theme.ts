const theme = {
  base: 'focus:outline-none inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 text-regular',
  block: 'w-full',
  icon: {
    large: 'h-5 w-5',
    medium: 'h-5 w-5',
    small: 'h-5 w-5',
    tiny: 'h-5 w-5',
    round: 'h-4 w-4',
    'round-big': 'h-5 w-5'
  },
  size: {
    large: 'px-7 py-3',
    medium: 'px-6 py-2',
    small: 'px-5 py-1',
    tiny: '',
    round: 'p-2',
    'round-big': 'p-3'
  },
  styles: {
    primary: {
      base: 'border-none border-transparent rounded-full',
      active: 'text-white bg-primary-base hover:bg-primary-darkest active:bg-primary-darkest focus:ring focus:ring-primary-light',
      disabled: 'cursor-not-allowed bg-ink-base text-ink-lighter',
    },
    secondary: {
      base: 'border-none border-transparent rounded-full',
      active: 'text-primary-dark bg-primary-lighter hover:bg-primary-light active:bg-primary-light focus:ring focus:ring-primary-light',
      disabled: 'cursor-not-allowed bg-ink-base text-ink-lighter',
    },
    outline: {
      base: 'border border-transparent rounded-full',
      active: 'text-primary-light border-primary-light hover:text-primary-base active:border-primary-base hover:text-primary-base active:border-primary-base focus:ring focus:ring-primary-light',
      disabled: 'cursor-not-allowed text-ink-lighter border-ink-lighter',
    },
    link: {
      base: 'border-none border-transparent rounded-full',
      active: 'text-primary-light hover:bg-primary-lighter hover:text-primary-base active:bg-primary-lighter active:text-primary-base focus:ring focus:ring-primary-light',
      disabled: 'cursor-not-allowed text-ink-lighter',
    },
    unstyled: {
      base: 'border-none border-transparent',
      active: 'focus:ring focus:ring-primary-light',
      disabled: 'cursor-not-allowed',
    }
  }
};

export default theme;