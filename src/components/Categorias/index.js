import React from 'react';

import { Container, Vibradores, Acessorios, Anal, Sado, Lingeries } from './styles';

function Categorias() {
  return (
    <Container>
      <div>
        <Vibradores href="/vibradores">
          Vibradores
        </Vibradores>

        <Acessorios href="/acessorios">
          Acessórios
        </Acessorios>

        <Anal href="/anal">
          Anal
        </Anal>

        <Sado href="/sado">
          Sado
        </Sado>

      </div>
        <Lingeries href="/lingeries">
          Lingeries e Fantasias
        </Lingeries>
    </Container>
  );
}

export default Categorias;
