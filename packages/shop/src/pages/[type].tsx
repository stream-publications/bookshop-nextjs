import React from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { Banner } from 'components/banner/banner-two';

import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import { sitePages } from 'site-settings/site-pages';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { initializeApollo } from 'utils/apollo';
import { GET_PRODUCTS } from 'graphql/query/products.query';
import { GET_CATEGORIES } from 'graphql/query/category.query';
import { ModalProvider } from 'contexts/modal/modal.provider';

import GroceryImgOne from 'assets/images/banner/grocery-banner-img-one.jpg';
import GroceryImgTwo from 'assets/images/banner/grocery-banner-img-two.jpg';

const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

const CategoryPage: React.FC<any> = ({ deviceType }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];

  const bannerSlides = [
    {
      img: GroceryImgOne,
      alt: 'Slide One',
    },
    {
      img: GroceryImgTwo,
      alt: 'Slide Two',
    },
  ];



  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />
      <ModalProvider>
        <Modal>
          <Banner data={bannerSlides} />

          <MobileCarouselDropdown>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </MobileCarouselDropdown>
          <MainContentArea>
            <SidebarSection>
              <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
            </SidebarSection>
            <ContentSection>
              <div ref={targetRef}>
                <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20}
                />
              </div>
            </ContentSection>
          </MainContentArea>
          <CartPopUp deviceType={deviceType} />
        </Modal>
      </ModalProvider>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS,
    variables: {
      type: params.type,
      offset: 0,
      limit: 20,
    },
  });
  await apolloClient.query({
    query: GET_CATEGORIES,
    variables: {
      type: params.type,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'grocery' } },
      { params: { type: 'makeup' } },
      { params: { type: 'bags' } },
      { params: { type: 'book' } },
      { params: { type: 'medicine' } },
      { params: { type: 'furniture' } },
      { params: { type: 'clothing' } },
    ],
    fallback: false,
  };
}
export default CategoryPage;
