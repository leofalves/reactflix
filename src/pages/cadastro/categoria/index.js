import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  // Valores iniciais para a categoria da tela
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(valoresIniciais);

  // atualiza a categoria atual com o valor do input
  function setValue(chave, valor) {
    setCategoria({
      ...categoria,
      [chave]: valor, // nome: 'valor'
    });
  }

  // Captura as mudanças e reflete na categoria
  function handleChange(evt) {
    setValue(evt.target.getAttribute('name'), evt.target.value);
    // ##### Refactor para não usar evt.target deu ruim
    // const { getAttribute, value } = evt.target;
    // setValue(getAttribute('name'), value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(evt) {
        evt.preventDefault();
        setCategorias([
          ...categorias,
          categoria,
        ]);
        setCategoria(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          value={categoria.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />

        <FormField
          label="Descrição da Categoria"
          value={categoria.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          value={categoria.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor"
        />

        <Button>Cadastrar</Button>
      </form>
      <br />
      <br />
      <ul>
        {categorias.map((categoria, idx) => (
          <li key={`${categoria}${idx}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
