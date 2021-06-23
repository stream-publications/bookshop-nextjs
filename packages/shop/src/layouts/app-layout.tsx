import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import Header from './header/header';
import { LayoutWrapper } from './layout.style';
const MobileHeader = dynamic(() => import('./header/mobile-header'), {
  ssr: false,
});

type LayoutProps = {
  className?: string;
  token?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  // deviceType: { mobile, tablet, desktop },
  token,
}) => {
  const { pathname, query } = useRouter();
  return (
    <LayoutWrapper className={`layoutWrapper ${className}`}>
      <Sticky  innerZ={1001}>
        <MobileHeader
          className= 'sticky'
        />
        <Header
          className= 'sticky'
        />
      </Sticky>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
