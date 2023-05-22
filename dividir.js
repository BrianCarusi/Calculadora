function dividir(a,b){
    if(a / b === 0 || a / b === Infinity){
        return "No se puede dividir por cero."
    }else{
        return a / b
    }
}

module.exports = dividir;

