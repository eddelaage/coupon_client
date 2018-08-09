import React from 'react';

class Coupon extends React.Component {

  state = { isInEditMode: false}

  toggleEditMode = () => {
    this.setState({isInEditMode: !this.state.isInEditMode})
  }

  handleIdEdit = (event, coupon) => {
    coupon.id = event.target.value
    this.props.editCoupon(coupon)
  }

  handleShopNameEdit = (event, coupon) => {
    coupon.shopname = event.target.value
    this.props.editCoupon(coupon)
  }

  handleAmountEdit = (event, coupon) => {
    coupon.amount = event.target.value
    this.props.editCoupon(coupon)
  }

  handleUrlEdit = (event, coupon) => {
    coupon.url = event.target.value
    this.props.editCoupon(coupon)
  }


  render() {
    return (
      <div>
      <button className= "btn btn-warning btn-xs edit" onClick={ () => this.toggleEditMode() }>modifier</button>
        {
          this.state.isInEditMode ?
          <span>
            <input type='number' value={this.props.data.id}
              onChange={(event) => this.handleIdEdit(event, this.props.data)}/>
            <input type='text' value={this.props.data.shopname}
              onChange={(event) => this.handleShopNameEdit(event, this.props.data)}/>
            <input type='number' value={this.props.data.amount}
              onChange={(event) => this.handleAmountEdit(event, this.props.data)}/>
            <input type='url' value={this.props.data.url}
              onChange={(event) => this.handleUrlEdit(event, this.props.data)}/>
          </span>
          : <span>{this.props.data.id} {this.props.data.shopname} {this.props.data.amount} {this.props.data.url}</span>
        }
      </div>
    )
  }
}


export default Coupon