/* eslint-disable linebreak-style */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({titulo}) => titulo);

  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(evt) => {
        evt.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >

        <FormField
          label="Título do Vídeo"
          value={values.titulo}
          onChange={handleChange}
          type="text"
          name="titulo"
        />

        <FormField
          label="URL do Vídeo"
          value={values.url}
          onChange={handleChange}
          type="text"
          name="url"
        />

        <FormField
          label="Categoria do Vídeo"
          value={values.categoria}
          onChange={handleChange}
          type="text"
          name="categoria"
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <br />
      <br />
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
