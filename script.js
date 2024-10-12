document.getElementById('verificarTurma').addEventListener('click', determinarTurma);

function determinarTurma() {
    const dataInput = document.getElementById('dataNascimento').value;
    const resultadoDiv = document.getElementById('resultado');

    if (!dataInput) {
        resultadoDiv.innerHTML = "Por favor, insira uma data de nascimento.";
        resultadoDiv.style.color = "red";
        return;
    }

    const dataNascimento = new Date(dataInput);
    let turma = '';

    if (dataNascimento >= new Date(2024, 3, 1) && dataNascimento <= new Date(2025, 11, 31)) {
        turma = "Berçário I";
    } else if (dataNascimento >= new Date(2023, 3, 1) && dataNascimento <= new Date(2024, 2, 31)) {
        turma = "Berçário II";
    } else if (dataNascimento >= new Date(2022, 3, 1) && dataNascimento <= new Date(2023, 2, 31)) {
        turma = "Maternal 1 (Mini Maternal)";
    } else if (dataNascimento >= new Date(2021, 3, 1) && dataNascimento <= new Date(2022, 2, 31)) {
        turma = "Maternal 2 (Maternal)";
    } else if (dataNascimento >= new Date(2020, 3, 1) && dataNascimento <= new Date(2021, 2, 31)) {
        turma = "1ª Etapa Pré-Escolar (JDI)";
    } else if (dataNascimento >= new Date(2019, 3, 1) && dataNascimento <= new Date(2020, 2, 31)) {
        turma = "2ª Etapa Pré-Escolar (JDII)";
    } else {
        turma = "Fora do período de matrícula";
    }

    resultadoDiv.innerHTML = `A criança será matriculada na: <strong>${turma}</strong>`;
    resultadoDiv.style.color = "#333"; 
}
