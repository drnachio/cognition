import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button: React.FC<Props> = ({
  children,
  intent,
  size,
  ...props
}) => {
  return (
    <button {...props} className={buttonStyles({ intent, size })}>
      {children}
    </button>
  );
};
