import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function CadastroVideo() {
  return (
    <div>
      <h1>Cadastro de novo vídeo</h1>
    </div>
  );
}

const Page404 = () => { return <div>404 - NOT FOUND</div> };

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Page404} /> // Carrega se não encontrar rota específica
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);