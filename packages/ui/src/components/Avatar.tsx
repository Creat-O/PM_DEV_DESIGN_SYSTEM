import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-100',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        default: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <div ref={ref} className={cn(avatarVariants({ size }), className)} {...props}>
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            className='h-full w-full object-cover'
            onError={() => setImageError(true)}
          />
        ) : (
          <span className='font-medium text-gray-600'>{fallback || '?'}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';
