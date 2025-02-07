import { FC } from 'react';
import { navLinks } from '@/shared/config';

const Navigation: FC = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-3 md:items-start">
        {navLinks.map(({ shortTitle, link }) => (
          <li key={link}>
            <a
              href={link}
              className="text-sm text-light-text"
              aria-label={shortTitle}
            >
              {shortTitle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
