import AppLogo from '@/components/common/AppLogo';
import Link from 'next/link';
import AppHeaderMenu from '@/components/layout/header/AppHeaderMenu';
import { menuItems } from '@/constants/menu-items';

export default function AppHeaderNav() {
  return (
    <div className="app-header-nav">
      <Link href="/" aria-label="صفحه اول">
        <AppLogo />
      </Link>
      <AppHeaderMenu menuItems={menuItems} />
    </div>
  );
}
