import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodosProductos from './components/TodosProductos';
import Producto from './components/Producto';
import NuevoProducto from './components/NuevoProducto';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=> <TodosProductos/>} />
          <Route path="/producto/:id" exact render={()=> <Producto/>} />
          <Route path="/nuevo" render={()=> <NuevoProducto/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
