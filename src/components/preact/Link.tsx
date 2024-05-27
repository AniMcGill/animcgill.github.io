import type { ReactNode } from 'preact/compat';

type Props = {
  href: string;
  children: ReactNode;
};

export const Link = ({ href, children }: Props) => (
  <a
    class='text-grey-800 underline duration-200 hover:text-rose-400'
    target='_blank'
    href={href}
  >
    {children}
  </a>
);
