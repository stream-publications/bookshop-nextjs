import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from '../assets/styles/pages.style';
import { Banner } from '../components/banner/banner';

import Books from "../components/book-grid/book-list/book-list"

import Sidebar from "../layouts/sidebar/sidebar"

import GroceryImgOne from '../assets/images/banner/grocery-banner-img-one.jpg';
import GroceryImgTwo from '../assets/images/banner/grocery-banner-img-two.jpg';

export default function Home() {
  const bannerSlides = [
    {
      img: GroceryImgOne,
      alt: 'Slide One',
    }
  ];
  return (
    <div>
      <Banner data={bannerSlides} />
      <MainContentArea>
        <SidebarSection>
          <Sidebar />
        </SidebarSection>
        <ContentSection>
          <Books />
        </ContentSection>
      </MainContentArea>
    </div>
  );
}
