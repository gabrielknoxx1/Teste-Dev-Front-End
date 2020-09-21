import React from 'react';
import {FiLock} from 'react-icons/fi';

import { Container } from './styles';

function Banner() {
  return (
    <Container>
      <FiLock />
      <h1>Compre tranquilo, nossa loja é 100% SEGURA</h1>
    </Container>
  );
}

export default Banner;
