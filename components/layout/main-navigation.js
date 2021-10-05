import Link from 'next/link';
import Logo from './logo';

function MianNavigation() {
  return (
    <header>
        {/* Para cualquier elemento */}
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MianNavigation;