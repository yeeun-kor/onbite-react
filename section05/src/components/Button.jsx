import React from 'react'

function Button(props) {
  console.log(props);
  return (
  
    <button style={{ color: props.color }}>{props.text} - {props.color}</button>
  )
}

export default Button