import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
  return <h1>{props.nimi}</h1>
}

const Sisalto = (props) => {
  return props.osat.map(i => {
    return <Osa nimi={i.nimi} tehtavia={i.tehtavia} />
  })
}

const Osa = (props) => {
  return <p>{props.nimi} {props.tehtavia}</p>
}

const Yhteensa = (props) => {
  let maara = 0

  props.osat.map(i => {
    maara += i.tehtavia
  })

  return <p>yhteensä {maara}</p>
}

ReactDOM.render(<App />, document.getElementById('root'))