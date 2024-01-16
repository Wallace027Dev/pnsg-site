import logo from '../../assets/images/logo.svg';
import Container from './styles';

function Footer() {
  const shortcuts = [
    {
      title: 'POSTAGENS',
      options: [
        { name: 'Artigos e Notícias', shortcut: 'artigos-e-noticias' },
        { name: 'Homilias', shortcut: 'homilias' },
      ],
    },
    {
      title: 'INDICAÇÕES',
      options: [
        { name: 'Indicação de Livros', shortcut: 'indicacao-de-livros' },
        { name: 'Indicação de Filmes', shortcut: 'indicacao-de-filmes' },
      ],
    },
  ];

  return (
    <Container>
      <div className="footer-container">
        <section>
          {shortcuts.map((section, index) => (
            <div key={index}>
              <h1>{section.title}</h1>
              {section.options.map((option, idx) => (
                <a key={idx} href={option.shortcut}>
                  {option.name}
                </a>
              ))}
            </div>
          ))}
        </section>

        <div id="redes">
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
