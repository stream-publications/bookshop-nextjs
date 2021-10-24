import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
    query paginateProducts($pageSize: Int = 12, $imageSize: Int = 300){
            site{
              products(first: $pageSize) {
                  edges {
                      cursor
                      node {
                      id
                      entityId
                      name
                      defaultImage {
                          url(width: $imageSize, height: $imageSize)
                      }
                      
                      
                      }
                  }
              }
           }
      }
`