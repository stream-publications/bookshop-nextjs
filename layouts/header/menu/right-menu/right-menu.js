import React from 'react';
import Link from 'next/link'
import { RightMenuBox } from './right-menu.style';


export const RightMenu = ({
}) => {
  return (
    <RightMenuBox>
      <Link href="#"><a>Log In</a></Link>


    </RightMenuBox>
  );
};
