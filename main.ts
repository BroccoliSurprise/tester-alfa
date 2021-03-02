input.onButtonPressed(Button.A, function () {
    teller += 1
    basic.showNumber(teller)
    if (teller == 1) {
        bitbot.goms(BBDirection.Forward, 100, 3000)
        basic.pause(200)
        bitbot.rotatems(BBRobotDirection.Left, 60, 500)
        basic.pause(200)
        bitbot.goms(BBDirection.Forward, 100, 3000)
    } else if (teller == 2) {
        bitbot.setLedColor(0xFF0000)
        for (let indeks = 0; indeks <= 5; indeks++) {
            bitbot.setPixelColor(indeks * 2, 0x0000FF)
        }
        bitbot.ledShow()
    } else if (teller == 3) {
        bitbot.ledRainbow()
        bitbot.ledShow()
    } else if (teller > 9) {
        teller = 0
        basic.showNumber(teller)
    } else {
    	
    }
})
let teller = 0
bitbot.select_model(BBModel.Auto)
led.setBrightness(5)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
led.setBrightness(255)
basic.pause(50)
led.setBrightness(100)
basic.pause(50)
basic.clearScreen()
teller = 0
basic.forever(function () {
    if (teller != 0) {
        bitbot.ledRotate()
        bitbot.ledShow()
        basic.pause(15)
    }
})
