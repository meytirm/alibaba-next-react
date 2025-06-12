import { MenuItem } from '@/types/menu-items';
import RawButton from '@/components/common/buttons/RawButton';
import AppMenu from '@/components/common/AppMenu';
import { Fragment } from 'react';
import AppDivider from '@/components/common/AppDivider';

export default function AppHeaderMenu({ menuItems = [] } : Props) {

  const menuItemsMapped = menuItems
    .map((menuItem, index) =>
      <Fragment key={index}>
        <li>
          {
            menuItem.subMenuItems && menuItem.subMenuItems.length > 0 ?
              <AppMenu title={menuItem.label} menuItems={menuItem.subMenuItems} /> :
              <RawButton>
                {menuItem.label}
              </RawButton>
          }
        </li>
        {index !== menuItems.length - 1 && <AppDivider className="!my-2 !mx-2"/>}
      </Fragment>,
    );
  return (
    <ul className="app-header-menu">
      {menuItemsMapped}
    </ul>
  );
}

interface Props {
  menuItems: MenuItem[];
}
