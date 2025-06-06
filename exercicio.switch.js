let variavel = "Sticth"

switch (typeof variavel){
    case "boolean": {
        console.log("Tipo Boolean.")
    break
    }
    
    case "string": {
        console.log("Tipo String.")
    break
    }

    case "number": {
        console.log("Tipo Number.")
    break
    }
    case "object": {
        console.log("Tipo Object.")
    break
    }

    case "function": {
        console.log("Tipo Function.")
    break
    }
    default : {
        console.log("Não sei que coisa é essa.")
    break
    }
}