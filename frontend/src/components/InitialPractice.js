const InitialPractice = () => {
  const now = new Date()
  const a = 10
  const b = 20

  console.log(`Esto es un log inicial de InitialPractice`)
  const Saludo = (props) => {
    return (
      <p>
        Hola {props.name} {props.apellido}
      </p>
    )
  }

  return (
    <div>
      <p>Mi Hola mundo en react</p>
      <p>son las {now.toString()}</p>
      <p>
        la suma entre {a} y {b} es: {a + b}
      </p>
      <Saludo name="Jairo" apellido="Rey" />
      <hr size="2px" color="gray" />
    </div>
  )
}

export default InitialPractice
