import React from 'react';
import { NextPage } from 'next';
//import dynamic from 'next/dynamic';
//import { Modal } from '@redq/reuse-modal';
import ProductSingleWrapper, {
  ProductSingleContainer,
} from '../../assets/styles/product-single.style';
//import { GET_PRODUCT_DETAILS } from 'graphql/query/product.query';
import client from '../../apollo-client';
import { GET_BOOK_DETAILS } from '../../graphql/query/book.query'
import BookDetails  from '../../components/book-details/book-details'





const BookPage = ({ data, deviceType }) => {


       return (
       <>

          {/* <Modal> */}
            <ProductSingleWrapper>
              <ProductSingleContainer>
              <BookDetails product={data.site.product} deviceType={deviceType} />
                {/* <CartPopUp deviceType={deviceType} /> */}
              </ProductSingleContainer>
            </ProductSingleWrapper>
          {/* </Modal> */}
        </>
      );

};
export async function getServerSideProps({ params }) {
    console.log(typeof(params.slug))
    const { data } = await client.query({
        query: GET_BOOK_DETAILS,
        variables: {
          productId: parseInt(params.slug)
        },
    });
    //console.log('test', data.site.products.edges[1].prices.price)
    //const index = data.site.products.edges.map(e => e.node.id).indexOf(params.slug);
    //const book = {...data.site.products.edges[index]}
    console.log(data.site.product)
    return {
        props: {
            data,
        },
    };
}
export default BookPage;
