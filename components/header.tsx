import Link from 'next/link';

import { IconGinetta } from '@/components/ui/icons';

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full shrink-0 items-center justify-between border-b bg-background/60 px-4 backdrop-blur-xl">
      <span className="home-links inline-flex items-center whitespace-nowrap">
        <Link href="/">
          <IconGinetta className="h-12 w-12" />
        </Link>
        <h1 className="text-strong my-auto flex text-lg font-bold">
          Prompt Engineering Practice
        </h1>
      </span>
    </header>
  );
}
