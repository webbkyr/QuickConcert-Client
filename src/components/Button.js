import React from 'react';
import './Button.css'

export function Button(props) {
  return (
    <button className='button-main' id={props.id} onClick={() => props.onClick()}>{props.buttonText}</button>
  )
}