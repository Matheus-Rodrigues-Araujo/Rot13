function rot13(str) {
    let space = []
    // Get index of spaces
    for(let i=0; i<str.length; i++){
        if(str[i] === ' '){
            space.push(i)
            }
    }
    // Finding matches
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let stringLetters= str.split('')
    let newString = []
    // Capturando as letras iguais da string e do alfabeto
    // Utilizando um for para as letras do alfabeto
    for(let i=0; i< stringLetters.length; i++){
        for(let j=0; j<alphabet.length; j++){
            if(stringLetters[i] === alphabet[j]){
                let find_position = j +13
                // console.log(stringLetters[i], j, letter_position)
                if (find_position >= alphabet.length){
                    let new_position = find_position - alphabet.length
                    newString.push(alphabet[new_position])
                }
                else{
                    newString.push(alphabet[find_position])
                }
            }
        }
    }
    
    if(space.length){
        for(let n in space){
            newString.splice(space[n], 0, ' ')
        }
    }
    // Add dots
    if(str[str.length -1] === '.'){
        newString.push('.')
    }
    // Add dots
    else if(str[str.length -1] === '!'){
        newString.push('!')
    }
    // Add dots
    else if(str[str.length -1] === '?'){
        newString.push('?')
    }
    return newString.join('')
}
    
console.log(rot13("SERR PBQR PNZC."))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

