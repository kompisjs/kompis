import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from "react"

import theme from './Button.theme';

export type ButtonSize = 'round' | 'round-big' | 'tiny' | 'small' | 'medium' | 'large';
export type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'link' | 'unstyled';

export type ButtonProps = {
  size?: ButtonSize;
  style?: ButtonStyle;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  min?: boolean;
  Icon?: React.FC<{ className?: string; 'aria-hidden'?: boolean }>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Ref = ReactNode | HTMLElement | string;

const Button = React.forwardRef<Ref, ButtonProps>(({
  style = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  loading = false,
  block = false,
  Icon,
  children,
  ...props
}, ref) => {
  const isDisabled = !!disabled;
  const isShowingIcon = !!Icon;
  const ButtonIcon = Icon;
  const typeStyles = theme.styles[style];

  console.log(typeStyles);

  const buttonStyles = classNames(
    theme.base,
    block && theme.block,
    theme.size[size],
    typeStyles.base,
    isDisabled && typeStyles.disabled, 
    !isDisabled && typeStyles.active,
    className
  );

  return React.createElement(
    'button',
    {      
      ref,
      disabled: isDisabled,
      className: buttonStyles,
      tabIndex: isDisabled ? -1 : 0,
      ...props,
    },
    !loading && children,
    isShowingIcon && React.createElement(ButtonIcon, { className: theme.icon[size] })
  )
})

Button.displayName = "Button";

export default Button
