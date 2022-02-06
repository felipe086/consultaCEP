const cepField = document.querySelector('#cep')
const search = document.querySelector('.searchBtn')
const dataField = document.querySelector('.data')

const showData = value => {
  dataField.innerHTML = ''
  output = `
    <p><span>Logradouro:</span> ${value.logradouro}</p>
    <p><span>Complemento:</span> ${value.complemento}</p>
    <p><span>Bairro:</span> ${value.bairro}</p>
    <p><span>Localidade/UF:</span> ${value.localidade}/${value.uf}</p> 
  `
  dataField.innerHTML = output
}

const invalidCep = () => {
  dataField.innerHTML = ''
  dataField.innerHTML = '<p>CEP inválido!</p>'
}

const searchCEP = async () => {
  let cep = cepField.value

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    if (data.hasOwnProperty('erro')) {
      invalidCep()
    } else {
      showData(data)
    }
  } catch (error) {
    invalidCep()
  }
}

search.addEventListener('click', event => {
  event.preventDefault()
  searchCEP()
})
