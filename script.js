
const tabela = document.querySelector("#boletim tbody")

let continuar = true

while (continuar) {
    const disciplina = prompt("Nome da disciplina")
    const nota = prompt("Nota da disciplina")
    
    tabela.innerHTML += `
        <tr>
            <td>${disciplina}</td>
            <td>${nota}</td>
        </tr>
    `
    continuar = confirm("Inserir mais disciplinas?")
}