import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="amount">
          Atributo 1
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="type">
          Atributo 2
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="type2">
          Atributo 3
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
