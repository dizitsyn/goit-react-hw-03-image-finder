import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        query:'',
    }



    onSerchButtonHandler = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.query)
        this.setState({query:''})
    }

    onChangeHandler = e => {
        this.setState({query: e.target.value})
    }
    render() {
        return (
             <header className="Searchbar">
  <form className="SearchForm">
                    <button type="submit" className="SearchForm-button" onClick={ this.onSerchButtonHandler}>
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={ this.onChangeHandler}
    />
  </form>
</header>
        )
    }
}
