import React from 'react';
import './Button.css'

export function Button(props) {
  console.log('Button props', props)
  return (
    <button className='button-main' id={props.id} onClick={() => props.onClick()}>{props.buttonText}</button>
  )
}