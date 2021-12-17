const principalBox = document.querySelector("#principal")
const interestBox = document.querySelector("#rate")
const timesBox = document.querySelector("#timescompounded")
const yearsBox = document.querySelector("#years")
const interestSpan = document.querySelector("#interest")

function computeInterest(){
  const principal = principalBox.value
  const rate = interestBox.value
  const times = timesBox.value
  const years = yearsBox.value
  const nt = years * times
  const rt = rate / times
  const calculatedInterest = principal * (1 + rt) ** nt
  interestSpan.textContent = calculatedInterest
}

