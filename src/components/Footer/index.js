import logo from '../../assets/images/logo.svg';
import Container from './styles';

function Footer() {
  return (
    <Container>
      <div className="footer-container">
        <section>
          {[
            {
              title: 'ASSUNTO 1',
              options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
            },
            {
              title: 'ASSUNTO 2',
              options: [
                'Opção 1',
                'Opção 2',
                'Opção 3',
                'Opção 4',
                'Opção 5',
                'Opção 6',
              ],
            },
            {
              title: 'ASSUNTO 3',
              options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5'],
            },
          ].map((section, index) => (
            <div key={index}>
              <h1>{section.title}</h1>
              {section.options.map((option, idx) => (
                <a key={idx} href="/">
                  {option}
                </a>
              ))}
            </div>
          ))}
        </section>

        <div>
          <h1>REDES</h1>
          {['Rede 1', 'Rede 2', 'Rede 3'].map((network, index) => (
            <a key={index} href="/">
              {network}
            </a>
          ))}
        </div>
      </div>

      <hr />

      <div className="footer-logo">
        <img src={logo} alt="Paróquia Nossa Senhora da Glória Horizontal" />
        <h1>Paróquia Nossa Senhora da Glória</h1>
        <p>"Nossa senhora da Glória, rogai por nós"</p>
      </div>
    </Container>
  );
}

export default Footer;
