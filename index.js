const express = require('express');
const app = express();
const letters = require("./letters.json")
const position = require("./position.json")

function getLetter(l) {
    const letter = Object.keys(letters)
    const encLetter = Object.values(letters)
    return letter[encLetter.indexOf(l)]
}

app.get('/', (req, res)=>{
    const encryptedLetter = Object.keys(position)
    const positionLetter = Object.values(position)
    const dencryptedLetter = encryptedLetter.map(l => getLetter(l))
    let result = []
    dencryptedLetter.forEach((l, index) => {
        positionLetter[index].forEach(p => result[p] = l)
    })
    res.send(result.join(""))
})

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
});