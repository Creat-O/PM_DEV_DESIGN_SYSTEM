import * as React from 'react';
import { cn } from '../lib/utils';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ className, label, id, ...props }, ref) => {
  const generatedId = React.useId();
  const radioId = id || generatedId;

  return (
    <div className='flex items-center'>
      <input
        type='radio'
        id={radioId}
        ref={ref}
        className={cn(
          'h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
      {label && (
        <label htmlFor={radioId} className='ml-2 text-sm text-gray-700 cursor-pointer select-none'>
          {label}
        </label>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

export interface RadioGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children, className }) => {
  return <div className={cn('space-y-2', className)}>{children}</div>;
};
