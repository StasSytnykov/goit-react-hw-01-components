import { Container } from './Container';
import { Profile } from './Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <Container>
      <Profile userData={user} />
    </Container>
  );
};
