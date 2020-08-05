/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import './categoria.css';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://leofalves-reactflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (RespostaDoServer) => {
        const RespostaConvertida = await RespostaDoServer.json();
        console.log(RespostaConvertida);
        setCategorias([
          ...RespostaConvertida,
        ]);
      });

  //     setTimeout(() => {
  //       setCategorias([
  //         ...categorias,
  //         {
  //           id: 1,
  //           nome: 'Nordeste Brasileiro',
  //           descricao: 'Sol e Praia o ano inteiro',
  //           cor: '#CBD1FF',
  //         },
  //         {
  //           id: 2,
  //           nome: 'Sul do Brasil',
  //           descricao: 'Uma Europa ao seu alcance',
  //           cor: '#CBD1FF',
  //         },
  //       ]);
  //     }, 4 * 1000);
  },
  []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(evt) {
        evt.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}
      >
        <FormField
          label="Título da Categoria"
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
        />

        <FormField
          label="Descrição da Categoria"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
          label="Cor"
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (<div className="lds-dual-ring" />
      )}
      <br />
      <br />
      <ul>
        {categorias.map((categoria, idx) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
      <br />
      <br />
      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
