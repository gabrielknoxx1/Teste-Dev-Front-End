import React,  {useState } from 'react';
import {FiMenu, FiShoppingCart, FiSearch} from 'react-icons/fi';
import Menu from '../../components/Menu';


import { Container } from './styles';

function Header() {

  const [ menu, SetMenu] = useState(false);

    function handleMenu() {
      SetMenu(true);

      if(menu ===  true) {
        SetMenu(false);
      }

      console.log(menu);
    }



  return (
      <Container>
        <FiMenu onClick={handleMenu}/>
        {menu === true && (
          <Menu />
        )}

        <h1>Exclusiva Sex Shop</h1>

        <div>
          <input type="text" placeholder="Pesquisar"/>
          <FiSearch />
          <FiShoppingCart />
        </div>
      </Container>
  );
}

export default Header;
