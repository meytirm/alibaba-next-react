'use client';
import RawButton from '@/components/common/buttons/RawButton';
import { MenuItem } from '@/types/menu-items';
import { Fragment, useEffect, useRef, useState } from 'react';
import AppDivider from '@/components/common/AppDivider';

function AppMenu({ title, menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef<null | HTMLUListElement>(null);
  const appMenuRef = useRef<null | HTMLDivElement>(null);
  const arrowDownIcon = <i className="icon icon-arrow-down flex"></i>;

  const menuList = menuItems.map((menuItem, index) =>
    <Fragment key={index}>
      <li className="app-menu-list__item" >
        <RawButton className="justify-start w-full">{menuItem.label}</RawButton>
      </li>
      {index !== menuItems.length - 1 && <AppDivider className="!mx-3" />}
    </Fragment>,
  );


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLElement;
      if (
        (menuListRef.current && appMenuRef.current) &&
        !menuListRef.current.contains(eventTarget) &&
        !appMenuRef.current.contains(eventTarget)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  return (
    <div className="app-menu" ref={appMenuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <RawButton append={arrowDownIcon}>{title}</RawButton>
      </div>
      {
        isOpen && <ul className="app-menu-list" ref={menuListRef}>
          {menuList}
        </ul>
      }
    </div>
  );
}

export default AppMenu;

interface Props {
  title: string;
  menuItems: Omit<MenuItem, 'subMenuItems'>[];
}
