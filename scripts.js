function verificar(){
    let notatxt = document.getElementById("notatxt")
    let res = document.getElementById("result")
    let nota = Number(notatxt.value)
    let notaResult = '' 

    if (nota >= 0 && nota <= 60){
        notaResult = 'F'
    }else if(nota > 60 && nota <= 69){
        notaResult = 'D'
    }else if(nota > 69 && nota <= 79){
        notaResult = 'C'
    }else if(nota > 79 && nota <= 89){
        notaResult = 'B'
    }else if(nota > 89 && nota <= 100){
        notaResult = 'A'
    }else{
        window.alert(`Nota inválida, selecione a nota corretamente...`)
    }

    res.innerHTML  = `<p>A nota do aluno(a) foi: ${notaResult}</p>`
}

