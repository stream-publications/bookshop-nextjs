import { gql } from '@apollo/client';

export const GET_BOOK_DETAILS = gql`
    query productById(
  $productId: Int!, $imageSize: Int = 500
  # Use GraphQL Query Variables to inject your product ID
) {
  site {
    product(entityId: $productId) {
      id
      entityId
      name 
      defaultImage {
            url(width: $imageSize, height: $imageSize)
      }
      prices {
            price {
              currencyCode
              value
                }
            
            }
      
    }
  }
}
`