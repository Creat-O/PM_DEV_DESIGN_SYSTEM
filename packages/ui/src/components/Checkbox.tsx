import * as React from 'react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, label, id, ...props }, ref) => {
  const generatedId = React.useId();
  const checkboxId = id || generatedId;

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        id={checkboxId}
        ref={ref}
        className={cn(
          'h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className='ml-2 text-sm text-gray-700 cursor-pointer select-none'>
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
