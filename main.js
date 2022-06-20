
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.addEventListener('DOMContentLoaded',()=>{
  const likers = document.querySelectorAll('span.like-glyph')
  likers.forEach(liker=>{
    liker.addEventListener('click',()=>{
      if (liker.innerText === FULL_HEART ) {
        liker.classList.remove('activated-heart')
        liker.innerText = EMPTY_HEART
      }else{
        mimicServerCall()
        .then(()=>{
          liker.innerText = FULL_HEART
          liker.classList.add('activated-heart')
        })
        .catch(()=>{
          let error = document.getElementById('modal')
          error.classList.remove('hidden')
          let message = document.getElementById('modal-message')
          message.innerText = "Random server error. Try again."
          setTimeout(()=>{
            error.classList.add('hidden')
          },3000)
        })
      }
    })
  })
})

