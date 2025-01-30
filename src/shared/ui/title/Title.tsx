import { FC, ReactNode } from 'react';
import clsx from 'clsx';

const sizeStyles = {
  h1: 'text-4xl md:text-5xl lg:text-7xl',
  h2: 'text-[40px] md:text-5xl lg:text-[53px]',
  h3: 'text-[32px] md:text-5xl lg:text-[53px]',
  h4: 'text-[36px] lg:text-[46px]',
  h5: 'text-2xl',
  h6: 'text-lg md:text-xl',
};

interface TitleProps {
  children: ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Title: FC<TitleProps> = ({ children, type = 'h1', className }) => {
  const Component = type;

  return (
    <Component
      className={clsx(
        'text-center font-bold !leading-tight text-light-text md:text-start',
        sizeStyles[type],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Title;
