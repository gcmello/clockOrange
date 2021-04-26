setInterval(setClock, 1000)//Aplica um intervalo de 1000ms na função setClock


const hourHand = document.querySelector('.hand.hour')
const minuteHand = document.querySelector('.hand.minute')
const secondHand = document.querySelector('.hand.second')





function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
    
}

function setRotation(element, rotationRatio) {
    
    if (element !== null) {
        element.style.setProperty('--rotation', rotationRatio * 360)
    }
}
setClock()

