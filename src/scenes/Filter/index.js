import React, {Component} from 'react'
import FilterSelect from './components/Select'
import './styles.scss'

class Filter extends Component {
  render () {
    return (
      <div className="filter">
        <h1>Women's Top</h1>
        <FilterSelect />
      </div>
    )
  }
}

export default Filter
