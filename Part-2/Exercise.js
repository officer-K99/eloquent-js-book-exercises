let value = '#'
let counter = 0

while(counter < 7){
    console.log(value)

    value += '#'
    counter += 1
}

// =========================== LOOPING A TRIANGLE ================================

for(let i = 1 ; i <= 100 ; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
        continue
    }else if(i % 3 == 0){
        console.log('Fizz')
        continue
    } else if(i % 5 == 0){
        console.log('Buzz')
        continue
    }
    console.log(i)
} 

// ============================== FIZZ & BUZZ CHALLENGE ===========================

let result = ''
const size = 8


for(let y = 0 ; y < size; y++){
    if(y % 2 == 0){
        
        for(let x = 0 ; x < size ; x++){
            result += ' # # # #\n'
            break
        }
        
    }else if(y % 2 !== 0){

        for(let x = 0 ; x < size ; x++){
            result += '# # # # \n'
            break
        }
        
    }
}

console.log(result)

// ================================ CHESSBOARD =====================================