var uniqueMorseRepresentations = function(words) {
    const lettersAlph= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    const morseAlph =[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    let hash = {}, arrayValues = []
    
    lettersAlph.forEach((letter,i) => hash[letter] = morseAlph[i])
    
    words.forEach(
        (word) => {
            const splitWord = word.split('')
            const morseCode = splitWord.map(letter => hash[letter]).join('')
            if(!arrayValues.includes(morseCode)) arrayValues.push(morseCode)
        }
    )
    return arrayValues.length 
};

// O(nˆ2)