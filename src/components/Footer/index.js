import React from 'react';
import { FaEnvelopeOpenText, FaWhatsapp} from 'react-icons/fa';
import { FiMail, FiPhone} from 'react-icons/fi';

import { Container, Form, Contact, Separator, Telefone, Whatsapp, Email } from './styles';

function Footer() {
  return (
    <Container>
      <Form>
          <FaEnvelopeOpenText />
          <h1>Cadastre-se e receba <br/>
            novidades super picantes!
          </h1>
          <h2>Novidades e promoções quentíssimas <br/>
             semanalmente em seu e-mail
          </h2>

          <input type="text" name="name" id="name" placeholder="Seu Nome" />
          <input type="email" name="email" id="email" placeholder="Seu E-mail"/>

          <button type="submit">Cadastrar</button>

        </Form>
        <Contact>
          <h1>Contato & Televendas</h1>
          <Separator />

          <Telefone>
            <FiPhone />
            <h3>(11) 2250-7200</h3>
          </Telefone>

          <p>Seg. a Sex. das 09:00h à 01:00h</p>
          <p>Sabados das 12:00h à 00:00h</p>

          <Whatsapp>
            <FaWhatsapp />
            <p>Whatsapp: (11) 96820.0020</p>
          </Whatsapp>

          <Email>
            <FiMail />
            <p>sac@exclusivasex.com.br</p>
          </Email>
        </Contact>
    </Container>
  );
}

export default Footer;
