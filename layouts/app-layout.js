
import Header from './header/menu/header';
import { LayoutWrapper } from './layout.style';



const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
        <Header
          className={'sticky'} 
        />
        { children }
        </LayoutWrapper>

     );
}
 
export default Layout; 