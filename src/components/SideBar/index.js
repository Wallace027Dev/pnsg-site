import logo from '../../assets/images/logo.svg';
import Container from './styles';
import scrollToSection from '../../utils/scrollToSection';

function SideBar({ isOpen, onLinkClick }) {
  return (
    <Container id="sidebar" style={{ width: isOpen ? '250px' : '0' }}>
      <div className="nav-header">
        <img src={logo} alt="Paróquia Nossa Senhora da Glória Horizontal" />
        <h1>Paróquia Nossa Senhora da Glória</h1>
        <p>"Nossa senhora da Glória, rogai por nós"</p>
      </div>
      <button
        onClick={() => {
          scrollToSection('artigos-e-noticias');
          onLinkClick();
        }}
      >
        Artigos e Notícias
      </button>
      <button
        onClick={() => {
          scrollToSection('homilias');
          onLinkClick();
        }}
      >
        Homilias
      </button>
      <button
        onClick={() => {
          scrollToSection('indicacao-de-livros');
          onLinkClick();
        }}
      >
        Indicação de Livros
      </button>
      <button
        onClick={() => {
          scrollToSection('indicacao-de-filmes');
          onLinkClick();
        }}
      >
        Indicação de Filmes
      </button>
      <button
        onClick={() => {
          scrollToSection('redes');
          onLinkClick();
        }}
      >
        Redes
      </button>
      <button className="close-btn" onClick={onLinkClick}>
        X
      </button>
    </Container>
  );
}
export default SideBar;
