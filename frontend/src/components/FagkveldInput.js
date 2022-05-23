import React, { useState, useEffect } from 'react';

import Card from './UI/Card';

function FagkveldInput(props) {
  const [enteredTittelText, setEnteredTittelText] = useState('');
  const [enteredTemaText, setEnteredTemaText] = useState('');

  function updateTittelTextHandler(event) {
    setEnteredTittelText(event.target.value);
  }
  function updateTemaTextHandler(event){
    setEnteredTemaText(event.target.value);
  }
  function fagkveldSubmitHandler(event) {
    event.preventDefault();

    if (enteredTittelText.trim().length === 0) {
      alert('Invalid text - please enter a longer one!');
      return;
    }

    props.onAddFagkveld({tittel : enteredTittelText,tema: enteredTemaText});

    setEnteredTittelText('');
    setEnteredTemaText('');

}

  return (
    <section id='fagkveld-input'>
      <Card>
        <form onSubmit={fagkveldSubmitHandler}>
          <label htmlFor='text'>Titell</label>
          <input
            type='text'
            id='text'
            value={enteredTittelText}
            onChange={updateTittelTextHandler}
          />
          <label htmlFor='text'>Tema</label>

                    <input
            type='text'
            id='text'
            value={enteredTemaText}
            onChange={updateTemaTextHandler}
          />
          <button>Legg til fagkveld</button>
        </form>
      </Card>
    </section>
  );
}

export default FagkveldInput;
