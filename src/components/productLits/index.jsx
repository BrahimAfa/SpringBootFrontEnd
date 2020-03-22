import React, { useContext, useEffect } from 'react';
import Product from '../productDetaills';
import { ProductContext } from '../../contexts/productContext';
import { Container, Row } from 'react-bootstrap';

const ProductList = () => {
  const { products } = useContext(ProductContext)
  return (
    <div>
      <Container>
        <Row style={{ justifyContent: "space-evenly" }}>
          {
            products.map(product => (
              <Product
                key={product.id}
                product={product} />
            ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default ProductList;