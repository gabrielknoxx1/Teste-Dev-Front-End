import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Categorias from '../../components/Categorias';
import Footer from '../../components/Footer';



import { Container } from './styles';

function Home() {

  return (
    <Container>
      <Header />

      <Banner />

      <Categorias />

      <Footer />

    </Container>
  );
}

export default Home;
