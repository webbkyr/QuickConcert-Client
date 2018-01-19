import React from 'react';
import './Button.css'

export function Button(props) {
  // console.log('Button props', props)

  if (props.onClick) {
    return (
      <button className={props.className ? props.className : 'button-main'} id={props.id} onClick={() => props.onClick()}>{props.buttonText}</button>
    )
  } else {
    return (
      <button className={props.className ? props.className : 'button-main'} id={props.id}>{props.buttonText}</button>
    )
  }

}