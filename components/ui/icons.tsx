'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

function IconAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 256 256"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"></path>
    </svg>
  );
}

function IconGinetta({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-label="Ginetta logomark"
      role="img"
      className={cn('h-16 w-16', className)}
      {...props}
    >
      <path
        d="M32 47C36.4183 47 40 43.4183 40 39H24C24 43.4183 27.5817 47 32 47Z"
        fill="currentColor"
      />
      <circle cx="32" cy="26" r="8" fill="currentColor" />
    </svg>
  );
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  );
}

function IconSystem({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        fill="currentColor"
        d="M238.8,103.1H217c-2-7.2-4.8-14.1-8.4-20.4L224,67.3c2.8-2.8,2.8-7.4,0-10.3l-25-24.9c-1.4-1.4-3.3-2.1-5.1-2.1c-1.9,0-3.7,0.7-5.1,2.1l-15.4,15.4c-6.4-3.6-13.2-6.4-20.4-8.4V17.2c0-4-3.3-7.2-7.2-7.2h-35.3c-4,0-7.2,3.3-7.2,7.2v21.8c-7.2,2-14.1,4.8-20.4,8.4L67.3,32.1C65.9,30.7,64,30,62.2,30c-1.8,0-3.7,0.7-5.1,2.1l-25,25c-2.8,2.8-2.8,7.4,0,10.3l15.4,15.4c-3.6,6.4-6.4,13.2-8.4,20.4H17.2c-4,0-7.2,3.3-7.2,7.2v35.2c0,4,3.3,7.2,7.2,7.2h21.8c2,7.2,4.8,14.1,8.4,20.4l-15.4,15.4c-2.8,2.8-2.8,7.4,0,10.3l25,24.9c1.4,1.4,3.3,2.1,5.1,2.1c1.8,0,3.7-0.7,5.1-2.1l15.4-15.4c6.4,3.6,13.2,6.4,20.4,8.4v21.8c0,4,3.3,7.3,7.2,7.3h35.2c4,0,7.3-3.3,7.3-7.3v-21.8c7.2-2,14.1-4.8,20.4-8.4l15.4,15.4c1.4,1.4,3.3,2.1,5.1,2.1c1.9,0,3.7-0.7,5.1-2.1l25-24.9c2.8-2.8,2.8-7.4,0-10.3l-15.4-15.4c3.6-6.4,6.4-13.2,8.4-20.4h21.8c4,0,7.2-3.3,7.2-7.2v-35.2C246,106.4,242.8,103.1,238.8,103.1z M231.3,138.1H217h-11.2l-3,10.8c-1.7,6.1-4.1,11.8-7.1,17.2l-5.5,9.8l7.9,7.9l10.1,10.1l-14.3,14.3l-10.1-10.1l-7.9-7.9l-9.8,5.5c-5.3,3-11.1,5.4-17.2,7.1l-10.8,3V217v14.3h-20.2v-14.3v-11.2l-10.8-3c-6.1-1.7-11.8-4.1-17.2-7.1l-9.8-5.5l-7.9,7.9l-10.1,10.1l-14.3-14.3l10.1-10.1l7.9-7.9l-5.5-9.8c-3-5.3-5.4-11.1-7.1-17.2l-3-10.8H39H24.8v-20.2h14.3h11.2l3-10.8c1.7-6.1,4.1-11.8,7.1-17.2l5.5-9.8L58,72.2L47.9,62.1l14.3-14.3l10.1,10.1l7.9,7.9l9.8-5.5c5.3-3,11.1-5.4,17.2-7.1l10.8-3V39V24.8h20.2v14.3v11.2l10.8,3c6.1,1.7,11.8,4.1,17.2,7.1l9.8,5.5l7.9-7.9l10.1-10.1l14.3,14.3l-10.1,10.1l-7.9,7.9l5.5,9.8c3,5.3,5.4,11.1,7.1,17.2l3,10.8H217h14.3L231.3,138.1L231.3,138.1z"
      />
      <path
        fill="currentColor"
        d="M128,83.8c-24.4,0-44.3,19.8-44.3,44.3c0,24.4,19.8,44.2,44.3,44.2c24.4,0,44.3-19.8,44.3-44.3S152.5,83.8,128,83.8z M148.9,148.9c-5.6,5.6-13,8.6-20.9,8.6c-7.9,0-15.3-3.1-20.9-8.6c-5.6-5.6-8.6-13-8.6-20.9c0-7.9,3.1-15.3,8.6-20.9c5.6-5.6,13-8.6,20.9-8.6c7.9,0,15.3,3.1,20.9,8.6c5.6,5.6,8.6,13,8.6,20.9C157.5,135.9,154.5,143.3,148.9,148.9z"
      />
    </svg>
  );
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  );
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  );
}

function IconInfo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export {
  IconAI,
  IconGinetta,
  IconUser,
  IconSystem,
  IconPlus,
  IconArrowElbow,
  IconInfo,
};
