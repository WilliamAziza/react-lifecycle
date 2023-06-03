import { Container, Row } from 'react-bootstrap';
import UsersClass from './components/UsersClass';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
import UsersFunction from './components/UsersFunction';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <UsersClass/>
      <UsersFunction/>

      </Row>
      
    </Container>
  );
}

export default App;
