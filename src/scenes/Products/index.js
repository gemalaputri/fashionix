import React from 'react'
import { connect } from 'react-redux'

class Products extends React.Component {
  render () {
    return (
      <div>content</div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
