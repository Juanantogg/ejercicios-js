const celcius = document.getElementById('celsius')
const farenheit = document.getElementById('farenheit')

const leerGrados = (e) => {
  if (e.target.id === 'celsius') {
    let valorC = e.target.value
    let resultadoF = ((9 / 5) * valorC) + 32
    farenheit.value = resultadoF.toFixed(2)
  }

  if (e.target.id === 'farenheit') {
    let valorF = e.target.value
    let resultadoC = (valorF - 32) * (5 / 9)
    celcius.value = resultadoC.toFixed(2)
  }
}

celcius.addEventListener('keyup', (e) => leerGrados(e))
farenheit.addEventListener('keyup', (e) => leerGrados(e))
