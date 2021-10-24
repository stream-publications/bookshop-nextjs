import React from 'react';
import Router, { useRouter } from 'next/router';
import { RightMenu } from './right-menu/right-menu';
import { LeftMenu } from './left-menu/left-menu';

import HeaderWrapper  from './header.style';

import imageUrl from '../../../assets/images/StreamPublication-small.png';
// import Search from 'features/search/search';


const header = ({className}) => {
//   const {
//     authState: { isAuthenticated },
//     authDispatch,
//   } = useContext(AuthContext);
  return (

  
    <HeaderWrapper className={className} id="layout-header">
     
      <LeftMenu logo={imageUrl} />

      <RightMenu/>

      </HeaderWrapper>

  );

};

export default header;

