import { Container } from './styles';

function SubscriptionForm() {
  return (
    <Container>
      <h2>JUNTE-SE A NOSSA FAMÍLIA</h2>
      <label htmlFor="comunity">Comunidade</label>
      <select name="comunity" id="comunity">
        <option value="Matrix">Nossa Senhora da Glória (Matrix)</option>
        <option value="Nossa Senhora das Gracas">
          Nossa Senhora das Graças
        </option>
        <option value="Nossa Senhora dos Navegantes">
          Nossa Senhora dos Navegantes
        </option>
        <option value="Santo Expedito">Santo Expedito</option>
        <option value="Santa Luzia">Santa Luzia</option>
        <option value="Sao Pedro">São Pedro</option>
        <option value="São Francisco">São Francisco</option>
      </select>
      <label htmlFor="subscribe">Inscrição</label>
      <select name="subscribe" id="subscribe">
        <option value="Catequese">Catequese</option>
        <option value="Crisma">Crisma</option>
      </select>
      <label htmlFor="name">Nome Completo</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Digite o seu nome e sobrenome"
      />
      <label htmlFor="phone">Telefone</label>
      <input type="tel" name="phone" id="phone" placeholder="(##) #####-####" />
      <label htmlFor="mail">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Digite o seu principal e-mail"
      />

      <button>INSCREVER-SE</button>
    </Container>
  );
}

export default SubscriptionForm;
