import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import { Container, Separator } from './styles';

function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <a href="/acessorios">
            Acessorios
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/brincadeiras">
            Brincadeiras
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/cosmeticos">
            Cosméticos
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/lingeries">
            Lingeries
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/masturbadores">
            Masturbadores
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/penis">
            Pênis
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/anal">
            Para uso anal
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/sado">
            Sadomasoquismo
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/vibradores">
            Vibradores
          <FiChevronRight />
          </a>
        </li>

        <Separator />

        <li>
          <a href="/Promocoes">
            Promoções
          <FiChevronRight />
          </a>
        </li>

      </ul>

    </Container>

  );
}

export default Menu;
