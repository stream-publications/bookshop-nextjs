import { useRouter } from 'next/router';


import {
    ProductsRow,
    ProductsCol,
    ButtonWrapper,
    LoaderWrapper,
    LoaderItem,
    ProductCardWrapper,
  } from './book-list.style';
import client from "../../../apollo-client";
import BookCard from "../../book-card/book-crad"
import { GET_BOOKS } from '../../../graphql/query/books.query'
import { useQuery } from '@apollo/client';

  
 const Books =  () => {
    const router = useRouter();

    const {loading, error, data:{site: books} = {} } = useQuery(GET_BOOKS);
    if (error) return `Error! ${error.message}`;
    
    if(books){
        console.log(books);
        
        //console.log('test', books)
    }else{
    }
    return (

        <ProductsRow>
          {loading?(
              <h1>Loading posts..</h1> 
          ):(
            books&&books.products.edges.map(element => {
              return (
                <ProductsCol key={element.node.id} 
                style= {{ paddingLeft: 0, paddingRight: 1 }} >
                  <ProductCardWrapper>
                    <BookCard
  
                      title={element.node.name}
                      image={element.node.defaultImage.url}
                      onClick={() => {
                        router.push('/book/[slug]', `/book/${element.node.entityId}`);
                        if (typeof window !== 'undefined') {
                          window.scrollTo(0, 0);
                        }
                      }}
                    />
                  </ProductCardWrapper>
                </ProductsCol>
  
  
              )
          })
          )}
        </ProductsRow>
    );
  }
  export default Books;