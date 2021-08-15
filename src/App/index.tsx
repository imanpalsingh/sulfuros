import { Home } from '../features/home';
import { Panel } from '../features/panel';
import Image from '../assets/Background.jpg';

const App = () => {
  return (
    <Home backgroundImage={Image}>
      <Panel title="An Empty Panel">Hello world</Panel>
    </Home>
  );
};

export default App;
