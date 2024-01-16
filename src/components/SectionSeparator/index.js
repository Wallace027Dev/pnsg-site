import Container from './styles';
import ellipsis from '../../assets/icons/ellipsis.svg';

function SectionSeparator({ id, sectionName }) {
  return (
    <Container id={id} className="section-homilia">
      <span>
        <img src={ellipsis} alt="Ellipsis Menu" />
        <h1>{sectionName}</h1>
      </span>
      <hr />
    </Container>
  );
}

export default SectionSeparator;
