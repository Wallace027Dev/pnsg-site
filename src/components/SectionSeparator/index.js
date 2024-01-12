import Container from './styles';
import ellipsis from '../../assets/icons/ellipsis.svg';

function SectionSeparator({ sectionName }) {
  return (
    <Container>
      <img src={ellipsis} alt="Ellipsis Menu" />
      <h1>{sectionName}</h1>
      <hr />
    </Container>
  );
}

export default SectionSeparator;
