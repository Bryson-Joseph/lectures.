import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  )
}

function mapStateToProps(state, ownProps) {
  return { toDo: state.find((toDo) => toDo.id === parseInt(ownProps.id)) }
}

const ConnectedDetail = connect(mapStateToProps)(Detail)

const ParentComponent = () => {
  const { id } = useParams()
  return <ConnectedDetail id={id} />
}

export default ParentComponent
