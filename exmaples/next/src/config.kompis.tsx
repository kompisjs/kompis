import { KompisProps, ComponentConfig } from './package';
import Button, { ButtonProps } from './common/Button/Button';

const components: ComponentConfig[] = [
  {
    title: "Header",
    controllers: [
      {
        name: 'title',
        description: 'Title in header',
        defaultValue: 'Title',
        control: {
          type: 'string'
        }
      }
    ],
    template: ({ title }) => (
      <h1>{title}</h1>
    )
  },
  {
    title: "Button",
    controllers: [
      {
        name: 'size',
        description: 'Size of button',
        control: {
          type: 'select',
          options: ['large', 'medium', 'small']
        }
      },
      {
        name: 'style',
        description: 'Style of button',
        control: {
          type: 'select',
          options: ['primary', 'secondary', 'outline', 'link']
        }
      },
      {
        name: 'disabled',
        description: 'Is Button disabled?',
        defaultValue: false,
        control: {
          type: 'boolean'
        }
      },
      {
        name: 'loading',
        description: 'Is Button loading?',
        defaultValue: false,
        control: {
          type: 'boolean'
        }
      },
      {
        name: 'block',
        description: 'Is Button block?',
        defaultValue: false,
        control: {
          type: 'boolean'
        }
      }
    ],
    template: (props: ButtonProps) => (
      <Button {...props}>Button</Button>
    )
  }
];

const args: KompisProps = {
  components
};

export default args;