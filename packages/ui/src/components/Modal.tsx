import * as React from 'react';
import { cn } from '../lib/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer, size = 'md' }) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity' onClick={onClose} />

      {/* Modal */}
      <div className={cn('relative w-full mx-4 bg-white rounded-lg shadow-xl', sizeClasses[size])}>
        {/* Header */}
        {title && (
          <div className='flex items-center justify-between p-6 border-b border-gray-200'>
            <h2 className='text-xl font-semibold text-gray-900'>{title}</h2>
            <button onClick={onClose} className='text-gray-400 hover:text-gray-600 transition-colors'>
              <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className='p-6'>{children}</div>

        {/* Footer */}
        {footer && <div className='flex items-center justify-end gap-3 p-6 border-t border-gray-200'>{footer}</div>}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
