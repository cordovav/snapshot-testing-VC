import GitHubCard from './GitHub/GitHubCard'
import './App.css';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App" pt-4>
      <Row>
        <Col style={{ display: 'flex', justifyContent:'center'}}>
        <GitHubCard/>
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
