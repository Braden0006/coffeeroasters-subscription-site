import React from 'react'

import './Questions.css';

export default function Questions(props) {
  return (
    <section className="questions">
        {props.children}
    </section>
  )
}
