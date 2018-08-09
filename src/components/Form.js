import React from 'react';

class Form extends React.Component {

  state = {
    id: '',
    shopname: '',
    amount: 0,
    url: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('inside test')
    this.props.addCoupon(this.state)
    this.setState({ id: '', shopname: '', amount: '', url: ''})
  }

  render () {
    return (
      <div>
        <h2>{this.props.formAddCoupon}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='number'
            placeholder='id'
            value={this.state.id}
            onChange={(event) => this.setState({ id: event.target.value})}/>
          <input type='text'
            placeholder='Nom du magasin'
            value={this.state.shopname}
            onChange={(event) => this.setState({ shopname: event.target.value})}/>
          <input type='number'
            placeholder='Montant'
            value={this.state.amount}
            onChange={(event) => this.setState({ amount: event.target.value})}/>
          <input type='url'
            placeholder='Lien'
            value={this.state.url}
            onChange={(event) => this.setState({ url: event.target.value})}/>
          <button type='submit'>Ajouter</button>
        </form>
      </div>
    )
  }
}

export default Form