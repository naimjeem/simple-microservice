function randomNumber (){
   return Math.random();
}

module.exports = (req, res) => {
 
    const number = randomNumber();
    return {
        num: number
    }
}