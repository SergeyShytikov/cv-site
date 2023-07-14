import Link from 'next/link';
import Image from 'next/image';

export default function TheHeader() {
  return (
    <header className="header">
      <div>
        <Link href="/">
          <Image
            src="/../public/Logo.png"
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
}
