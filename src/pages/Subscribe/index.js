import { Container } from './styles';

import ParishInfo from '../../components/ParishInfo';
import SubscriptionForm from '../../components/SubscriptionInfo';

function Subscribe() {
  return (
    <Container>
      <SubscriptionForm />
      <ParishInfo />
    </Container>
  );
}

export default Subscribe;
