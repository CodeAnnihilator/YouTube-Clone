
// Подключение всей библиотеки React, не всегда полезно
/*
  import React from 'react'
*/

// Подключение только того, что нужно из библиотеки React
import React, { Component } from 'react'


// FUNCTIONAL COMPONENT (1)
/*
  const SearchBar = () => {
    return <input />
  }
*/

// CLASS BASED COMPONENT (2). Можно по-другому подключить React и его модуль Component
/*
  class SearchBar extends React.Component { // React.Component дает весь свой дополнительный функционал
    render() {
      return <input />
    }
  }
*/

// CLASS BASED COMPONENT (только такие компоненты имеют state, функциональные его не имеют)
class SearchBar extends Component { // Подключение не React.Component, а просто Component, так как другой import

  constructor(props) { // автоматически будет вызвано, если быдет создан компонент. В этом случае, компонент <SearchBar />, в index.js
    super(props) // super позволяет вызвать конструктор на родительском классе, в этом случае, на классе Component
    this.state = { term: '' } // в this.state хранится состояние
  }

  render() { // Если в DOM есть изменения, произойдет render и создастся новый объект, в конструкторе находится объект состояний
    // return <input onChange = { this.onInputChange } /> // событие через event handler
    return (
      <div className = "search-bar">
        <input
          value = { this.state.term }
          onChange = { event => this.onInputChange(event.target.value) } /><br />
      </div>
    )
  } // Чтобы изменить состояние, ВСЕГДА нужно использовать setState и ничего другого

  onInputChange(term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  // СОБЫТИЕ ЧЕРЕЗ EVENT HANDLER
  /*
    onInputChange(event) {
      console.log(event.target.value)
    }
  */
}


export default SearchBar
