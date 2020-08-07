/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import '../../../components/loading.css';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
    link_extra: {
      text: "",
      url: ""
    }
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
          label="Link Extra"
          value={values.link_extra.url}
          onChange={handleChange}
          type="text"
          name="link_extra.url"
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
      <table>
        <thead><th colspan="4">Categorias</th></thead>
        <thead>
          <th>Título</th>
          <th>Cor</th>
          <th>Link Extra</th>
        </thead>
        {categorias.map((categoria, idx) => (
          <tr key={categoria.id}>
            <td>{categoria.titulo}</td>
            <td>{categoria.cor}</td>
            <td>{categoria.link_extra.url}</td>
          </tr>
        ))}
      </table>
      <br />
      <br />
      <Link to="/cadastro/video">
        Cadastrar Vídeo
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
