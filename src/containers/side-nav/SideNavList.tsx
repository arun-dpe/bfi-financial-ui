import React from 'react';
import { NavLink } from 'react-router-dom';

import { MenuList } from '@common/components';
import { SideNavMenuItem } from '@components/menu';
import { Sidenav } from '@models/sidenav';
import { navlist } from '@config/sidenav';

const navItems = navlist.map((navItem: Sidenav) => (
  <SideNavMenuItem key={navItem.name}>
    <NavLink to={navItem.path} key={navItem.name}>
      { navItem.name}
    </NavLink>
  </SideNavMenuItem>
));

export default function SideNavList() {
  return <MenuList>{navItems}</MenuList>;
}
