// product card for book
import React from 'react';
import {
  BookCardWrapper,
  BookImageWrapper,
  BookInfo,
  ProductName,
  AuthorInfo,
  DiscountPercent,
} from './book-card.style';






const BookCard = ({
    title,
    image,
    name,
    discountInPercent,
    onChange,
    increment,
    decrement,
    data,
    deviceType,
    onClick,
    ...props
  }) => {
    return (
      <BookCardWrapper onClick={onClick} className="book-card">
        <BookImageWrapper>
          <img
            src= {image}
          />
        </BookImageWrapper>
        <BookInfo>
          <ProductName>{title}</ProductName>
        </BookInfo>
      </BookCardWrapper>
    );
  };
  
  export default BookCard;
  