import React from 'react'

function Country({ name, flag = "🏳️" }) {
  return (
    <p>{name} {flag}</p>
  )
}

export default Country