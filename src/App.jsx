import './App.scss';
import { Content, Header, Left, Right } from './components';

const components = [<Header />, <Content />, <Left />, <Right />];

const App = () => {
  return <div className="content">{components}</div>;
};

export default App;
