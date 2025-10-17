import * as React from 'react';
import { cn } from '../lib/utils';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    const generatedId = React.useId();
    const switchId = id || generatedId;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
      onChange?.(e);
    };

    const currentChecked = checked !== undefined ? checked : isChecked;

    return (
      <div className='flex items-center'>
        <button
          type='button'
          role='switch'
          aria-checked={currentChecked}
          onClick={() => {
            const input = document.getElementById(switchId) as HTMLInputElement;
            input?.click();
          }}
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
            currentChecked ? 'bg-primary-600' : 'bg-gray-200',
            props.disabled && 'opacity-50 cursor-not-allowed',
          )}
          disabled={props.disabled}
        >
          <span
            className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
              currentChecked ? 'translate-x-6' : 'translate-x-1',
            )}
          />
        </button>
        <input
          type='checkbox'
          id={switchId}
          ref={ref}
          className='sr-only'
          checked={currentChecked}
          onChange={handleChange}
          {...props}
        />
        {label && (
          <label htmlFor={switchId} className='ml-3 text-sm text-gray-700 cursor-pointer select-none'>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Switch.displayName = 'Switch';
