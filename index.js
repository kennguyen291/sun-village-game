const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width, canvas.height)

const image = new Image()
image.src = './img/World02 Map.png'

const playerImage = new Image()
playerImage.src = './img/player-still.png'

image.onload = () => {
    c.drawImage(image,-700, -700)
    c.drawImage(
        playerImage,
        0, 
        0,
        playerImage.width / 6,
        playerImage.height,
        canvas.width / 2 - (playerImage.width / 6) / 2 ,
        canvas.height / 2 - playerImage.height/2,
        playerImage.width / 6,
        playerImage.height
        )
}

