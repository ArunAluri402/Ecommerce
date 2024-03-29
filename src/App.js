import logo from './logo.svg';
import './App.css';
import { RouterWrapper } from './router/RouterWrapper';
import { Route } from 'react-router-dom';
import { routerElements, routerEndPoints } from './router';

function App() {
  return (
    <div className="App">
      <RouterWrapper children={<>
        <Route path={routerEndPoints?.landingPage} element={routerElements?.landingPage} />
        <Route path={routerEndPoints?.myAccount} element={routerElements?.myAccount} />
        <Route path={routerEndPoints?.shoppingCartPage} element={routerElements?.shoppingCartPage} />

      </>} />
    </div>
  );
}

export default App;
