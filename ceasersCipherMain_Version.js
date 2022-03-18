function rot13(str) {
    // 'space' is a vector that will store the indexes in which the spaces are in the original string
    let space = []
    for(let i=0; i<str.length; i++){
        if(str[i] === ' '){
            space.push(i)
            }
    }
    // Finding matches
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let stringLetters= str.split('')
    let newString = []
    // Capturing the same letters of string and alphabet
    
    // Using one for the letters of the original string and one for those of the
    // alphabet in order to find equal letters and find out the position of the 
    // new letter in the alphabet that replace the old
    for(let i=0; i< stringLetters.length; i++){
        for(let j=0; j<alphabet.length; j++){
            if(stringLetters[i] === alphabet[j]){
                
                // Variable 'find_position' searches for the position of the letter that will replace the letter of the original string
                // this is done adding up with 13
                let find_position = j +13
                // If find_position is larger than the length of the alphabet, we subtract the value of the variable
                // minus the size of the alphabet(26)
                
                // If not, just pass the variable 'find_position' as an index of the 'alphabet string'
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
    // Adding spaces in the array 'newString', so it can look like the original string after using the join method
    if(space.length){
        for(let n in space){
            newString.splice(space[n], 0, ' ')
        }
    }
    // Here you add an end point if the last element of the original string has one
    if(str[str.length -1] === '.'){
        newString.push('.')
    }
    // Here you add an exclamation if the last element of the original sequence has one
    else if(str[str.length -1] === '!'){
        newString.push('!')
    }
    // Here you add an interrogation if the last element of the original sequence has one
    else if(str[str.length -1] === '?'){
        newString.push('?')
    }
    return newString.join('')
}
// Here below are some examples of 'strings' for you to see the I/0
console.log(rot13("SERR PBQR PNZC."))
console.log(rot13("SERR CVMMN!"))
console.log(rot13("SERR YBIR?"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))

