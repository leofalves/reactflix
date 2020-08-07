/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  // atualiza o campo atual do formulário com o valor do input
  function setValue(chave, valor) {
    if(chave === 'link_extra.url') {
      setValues({
        ...values,
        link_extra: {
          url: valor, 
        }
      });
    }
    else
    {
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  }

  function handleChange(evt) {
    setValue(evt.target.getAttribute('name'), evt.target.value);
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return { values, handleChange, clearForm };
}

export default useForm;
