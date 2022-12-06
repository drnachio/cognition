import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const buttonStyles = cva([
  'aria-pressed:text-amber-400 relative z-10 transition-colors lg:hover:text-amber-400',
]);

const badgeStyles = cva([
  'absolute top-0 right-0 flex h-4 w-4 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-xs text-white',
]);

export interface SideButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  pressed: boolean;
  badgeNumber: number;
  icon: React.FC;
}

export const SideButton: React.FC<SideButtonProps> = ({
  pressed = false,
  badgeNumber = 0,
  icon: Icon,
  ...props
}) => (
  <button
    {...props}
    type="button"
    aria-pressed={pressed}
    className={buttonStyles()}
  >
    <Icon />
    {badgeNumber ? <span className={badgeStyles()}>{badgeNumber}</span> : null}
  </button>
);
