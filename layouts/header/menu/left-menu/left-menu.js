import React from 'react';
import Logo from './logo';
import { LeftMenuBox } from './left-menu.style';



export const LeftMenu = ({ logo }) =>  (
    <LeftMenuBox>

      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
      />
    </LeftMenuBox>
  );

