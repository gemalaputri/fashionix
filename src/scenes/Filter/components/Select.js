import React, {Component} from 'react'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFilter: '',
    }
  }

  handleChangeFilter = (e) => {
    this.setState({
      selectedFilter: e.target.value,
    })
  }

  render () {
    return (
      <select onChange={this.handleChangeFilter} value={this.selectedFilter}>
        <option value="">Filter by</option>
        <option value="size">Filter by size</option>
        <option value="price">Filter by price</option>
      </select>
    )
  }
}

export default Select
