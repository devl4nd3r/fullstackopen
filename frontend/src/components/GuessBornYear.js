const GuessBornYear = ({ name, years }) => {
  const bornYear = () => new Date().getFullYear() - years

  return (
    <>
      <p>
        Hola {name}, si tienes {years}
      </p>
      <p>Naciste en {bornYear()}</p>
      <hr size="2px" color="gray" />
    </>
  )
}

export default GuessBornYear
