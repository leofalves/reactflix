import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom"

function CadastroCategoria() {

    // Valores iniciais para a categoria da tela
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    };

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState(valoresIniciais);



    // atualiza a categoria atual com o valor do input
    function setValue(chave, valor) {
        setCategoria({
            ...categoria,
            [chave]: valor, // nome: 'valor'
        })
    }

    // Captura as mudanças e reflete na categoria
    function handleChange(evt) {
        setValue(evt.target.getAttribute('name'), evt.target.value);
        // ##### Refactor para não usar evt.target deu ruim
        //const { getAttribute, value } = evt.target;
        //setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <form onSubmit={function handleSubmit(evt) {
                evt.preventDefault();
                setCategorias([
                    ...categorias,
                    categoria
                ]);
                setCategoria(valoresIniciais);
            }}>

                <div>
                    <label>Nome da Categoria:
                        <input type="text"
                            value={categoria.nome}
                            name="nome"
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Descrição:
                    <textarea
                            value={categoria.descricao}
                            name="descricao"
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Cor:
                    <input
                            type="color"
                            value={categoria.cor}
                            name="cor"
                            onChange={handleChange} />
                    </label>
                </div>
                <button>Cadastrar</button>
            </form>
            <br />
            <br />
            <ul>
                {categorias.map((categoria, idx) => {
                    return (
                        <li key={`${categoria}${idx}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/cadastro/video">
                Cadastrar Vídeo
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;