import React from 'react';
import Router from 'next/router';
import { LogoBox, LogoImage } from './logo.style';
import Image from 'next/image'


const Logo = ({ imageUrl, alt, onClick }) => {
  function onLogoClick() {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  }

  return (
    
    <LogoBox onClick={onLogoClick}>
      <LogoImage>
      <Image src={imageUrl} alt="Stream Publications" />
      </LogoImage>
    </LogoBox>
  );
};

export default Logo;
