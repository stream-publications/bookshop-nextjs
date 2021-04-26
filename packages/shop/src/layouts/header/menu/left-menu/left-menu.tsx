import React from 'react';
import Logo from 'layouts/logo/logo';
import {
  LeftMenuBox,
} from './left-menu.style';

type Props = {
  logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) =>  (
    <LeftMenuBox>
      <Logo
        imageUrl={logo}
        alt={'Shop Logo'}
      />
    </LeftMenuBox>
  );

