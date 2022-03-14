import React from 'react';
import {
  SideNavList, SideNavFooter, Nav, SideNavLogo,
} from '.';

export default function SideNav() {
  return (
    <Nav>
      <SideNavList />
      <SideNavFooter />
      <SideNavLogo />
    </Nav>
  );
}
