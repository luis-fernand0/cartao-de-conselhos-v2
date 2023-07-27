let btn = document.querySelector(`.botao`)

async function gerarConselho() {
    const url = `https://api.adviceslip.com/advice`
    const resposta = await fetch(url)
    return await resposta.json()
}

btn.addEventListener(`click`, async () => {
    const conselho = await gerarConselho()

    let mostrarConselho = document.getElementById(`conselho`)
    let numeroDoConselho = document.getElementById('numero-do-conselho')

    mostrarConselho.innerHTML = `"${conselho.slip.advice}"`
    numeroDoConselho.innerHTML = `Conselho #${conselho.slip.id}`
})