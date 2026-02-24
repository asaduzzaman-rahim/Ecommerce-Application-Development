import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductListCart from "../Component/ProductListCart";


// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, allProducts }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
            
         allProducts && 
            allProducts.map((items, key) => {
              return(
                <ProductListCart key={key}
                ProductImage={items.thumbnail}
                Discount={items.discountPercentage}
                Heading={items.title}
                DiscountPrice=""
                MainPrice={items.price}
                total=""
                Icon1={<CiHeart/>}
                Icon2={<IoEyeOutline/>}
                />
              )
        })
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {

    
  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems