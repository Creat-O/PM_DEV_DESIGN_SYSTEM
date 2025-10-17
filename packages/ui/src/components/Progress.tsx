import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const progressVariants = cva('w-full bg-gray-200 rounded-full overflow-hidden', {
  variants: {
    size: {
      sm: 'h-1',
      default: 'h-2',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const progressBarVariants = cva('h-full transition-all duration-300 ease-in-out rounded-full', {
  variants: {
    variant: {
      default: 'bg-primary-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      danger: 'bg-red-600',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, size, variant, value, max = 100, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className='w-full'>
        <div
          ref={ref}
          role='progressbar'
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className={cn(progressVariants({ size }), className)}
          {...props}
        >
          <div className={cn(progressBarVariants({ variant }))} style={{ width: `${percentage}%` }} />
        </div>
        {showLabel && <div className='mt-1 text-xs text-gray-600 text-right'>{Math.round(percentage)}%</div>}
      </div>
    );
  },
);

Progress.displayName = 'Progress';
