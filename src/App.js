import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };

  enableButtonSubmit = () => {
    const maxAttr = 90;
    const maxTotal = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    if (cardName && cardDescription && cardImage
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
      <= maxTotal && cardAttr1 <= maxAttr && cardAttr1 >= 0
      && cardAttr2 <= maxAttr && cardAttr2 >= 0
      && cardAttr3 <= maxAttr && cardAttr3 >= 0) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

    changeState = ({ target }) => {
      const { id } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [id]: value }, this.enableButtonSubmit);
    };

    tryunfo = () => {
      const { cardTrunfo } = this.state;
      if (cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
    }

    btnClear = (card) => {
      const { deck } = this.state;
      const trunfo = deck.find(() => (card.cardTrunfo === true));
      if (trunfo.cardTrunfo === true) {
        this.setState({ hasTrunfo: false });
      }
      const clear = deck.filter((deck2) => (card.cardName !== deck2.cardName));
      this.setState({ deck: clear });
    }

    Saved = () => {
      this.tryunfo();
      this.setState((previous) => ({
        deck: [...previous.deck, previous],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      }));
    }

    render() {
      const { deck } = this.state;
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form
            { ...this.state }
            onInputChange={ this.changeState }
            onSaveButtonClick={ this.Saved }
          />
          <Card
            { ...this.state }
          />
          <div>
            { deck.map((cards, i) => (
              <div key={ `${cards.cardName} ${i}` }>
                <Card
                  cardName={ cards.cardName }
                  cardDescription={ cards.cardDescription }
                  cardAttr1={ cards.cardAttr1 }
                  cardAttr2={ cards.cardAttr2 }
                  cardAttr3={ cards.cardAttr3 }
                  cardImage={ cards.cardImage }
                  cardRare={ cards.cardRare }
                  cardTrunfo={ cards.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.btnClear(cards) }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
}

export default App;
