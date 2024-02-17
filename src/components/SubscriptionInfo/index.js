import { useState } from 'react';
import { Container } from './styles';
import FormGroup from '../FormGroup';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import isEmailValid from '../../utils/isEmailValid';

function SubscriptionForm() {
  const [community, setCommunity] = useState('');
  const [subscribe, setSubscribe] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleSubmit(e) {
    e.preventDefault();

    console.log(community, subscribe, name, phone, email);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
    if (!e.target.value) {
      setError({
        field: 'phone',
        message: 'O número de telefone é obrigatório.',
      });
    } else {
      removeError('phone');
    }
  }

  return (
    <Container noValidate onSubmit={handleSubmit}>
      <h2>JUNTE-SE A NOSSA FAMÍLIA</h2>
      <label htmlFor="Community">Comunidade</label>
      <FormGroup error={getErrorMessageByFieldName('community')}>
        <select
          name="Community"
          id="Community"
          onChange={(e) => setCommunity(e.target.value)}
          error={getErrorMessageByFieldName('community')}
          defaultValue={''}
        >
          <option value="" disabled>
            informe de qual comunidade você é
          </option>
          <option value="Matriz">Nossa Senhora da Glória (Matriz)</option>
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
      </FormGroup>

      <label htmlFor="subscribe">Inscrição</label>
      <FormGroup error={getErrorMessageByFieldName('subscribe')}>
        <select
          name="subscribe"
          id="subscribe"
          onChange={(e) => setSubscribe(e.target.value)}
          error={getErrorMessageByFieldName('subscribe')}
          defaultValue={''}
        >
          <option value="" disabled>
            informe qual inscrição você fará
          </option>
          <option value="Catequese">Catequese</option>
          <option value="Crisma">Crisma</option>
        </select>
      </FormGroup>

      <label htmlFor="name">Nome Completo</label>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Digite o seu nome e sobrenome"
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <label htmlFor="phone">Telefone</label>
      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phone}
          maxLength={15}
          placeholder="(##) #####-####"
          onChange={handlePhoneChange}
          error={getErrorMessageByFieldName('phone')}
        />
      </FormGroup>

      <label htmlFor="mail">Email</label>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Digite o seu principal e-mail"
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <button disabled={!isFormValid} type="submit">
        INSCREVER-SE
      </button>
    </Container>
  );
}

export default SubscriptionForm;
