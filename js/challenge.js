const selectCounter = document.querySelector('#counter')
let timer = selectCounter.innerText 
const pause = document.querySelector('#pause')
// moves counter up
let timerId= setInterval(countUp, 1000)
// function for the count up timer

// changes pause button --> resume and vice versa
function clock (){
if( pause.innerText=== 'pause' ){
    pause.innerText = 'resume'
        clearInterval(timerId)
        plus.disabled = true
        minus.disabled = true
        document.querySelector('#submit').disabled = true
    } else{
        pause.innerText = 'pause'
        //timerId = setInterval(countUp, 1000)
        setInterval(countUp, 1000)
        plus.disabled = false
        minus.disabled = false
        document.querySelector('#submit').disabled = false
    }
}
const pauseResumeButton = pause.addEventListener('click',clock)

function countUp(){
    selectCounter.innerText = timer
   timer++  
}

//plus and minus
const plus = document.querySelector("#plus")
plus.addEventListener('click',()=> {
    timer.innerText= timer++
    selectCounter.innerText = timer
})
const minus = document.querySelector('#minus')
minus.addEventListener('click',()=> {
    timer.innerText=timer--
    selectCounter.innerText = timer
})
//heart button and log to comments

const heartButton= document.querySelector('#heart')
const comments= document.querySelector('#list')
heartButton.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.textContent= `${timer} was favorited!`
    console.log(li)
    console.log(timer)
    comments.appendChild(li)
})

//leave a comment

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        let leaveComment = document.getElementById('comment-input')
        console.log(leaveComment)
        handleLeaveComment(leaveComment.value)
        document.querySelector('form').reset()
    })
})
function handleLeaveComment(leaveComment){
    const li = document.createElement('li')
    li.textContent =leaveComment
    comments.appendChild(li)
}




