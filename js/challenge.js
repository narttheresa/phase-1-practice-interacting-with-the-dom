
// See the timer increment every second once the page has loaded. 
//DOM elements
const timer = document.querySelector('#counter')
const buttonContainer = document.querySelector('#button-container')  //selects all the buttons
const likeList = document.querySelector('ul.likes')
const commentForm = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')

let counterRun = true;  //the counter will continue to run once DOM is loaded unless the statement is false
let likedNumbers = {};




//events

commentForm.addEventListener('submit', e => {
    e.preventDefault()
    const p = document.createElement('p')
    const input = document.querySelector('#comment-input')

    p.textContent = input.value
    commentList.append(p)

    input.value = ""
})

buttonContainer.addEventListener('click', e => {
    
    if(e.target.id === 'plus') {
        changeCounter(1)
    } else if( e.target.id === 'minus') {
        changeCounter(-1)
    } else if ( e.target.id === 'pause') {
        togglePause()                        
    } else if (e.target.id === 'heart') {
        updateLikes()
    }
})


//function for how many likes are being clicked

function updateLikes() {
    if(likedNumbers[currentNumber]) {
    const li = document.querySelector(`[data-number='${currentNumber}']`)
    likedNumbers[currentNumber] += 1
    li.textContent = `This number ${currentNumber} has been liked ${likedNumbers[currentNumber]} times`  
    } else {
    likedNumbers[currentNumber] = 1  
    const li = document.createElement('li')
    li.dataset.number = currentNumber
    li.textContent = `The number ${currentNumber} has been liked 1 time `
    likeList.appendChild(li)
    }  
}

//function for disabling buttons except for pause
function togglePause() {
    counterRun = !counterRun    //counterRun is not 'true'
    document.querySelectorAll('button').forEach(button => {
        if(button.id !== 'pause'){
           button.disabled = !counterRun 
        } else {
            if(counterRun) {
                button.textContent = 'pause'
        } else {
            button.textContent = 'resume'
        }
    }
    })
}

//function for in/decrement of counter
function changeCounter(number) {
    currentNumber = parseInt(timer.textContent) + number
    timer.textContent = currentNumber
}

// setInterval run code for every second. 


setInterval(() => {
    if(counterRun) {
      changeCounter(1);  
    }
    
},1000);







// Leave comments on my gameplay, such as: "Wow, what a fun game this is."