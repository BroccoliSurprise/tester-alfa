input.onButtonPressed(Button.A, function () {
    tellerA += 1
    tellerB = 0
    basic.showNumber(tellerA)
    if (tellerA == 1) {
        bitbot.goms(BBDirection.Forward, 100, 3000)
        basic.pause(200)
        bitbot.rotatems(BBRobotDirection.Left, 60, 500)
        basic.pause(200)
        bitbot.goms(BBDirection.Forward, 100, 3000)
    } else if (tellerA == 2) {
        bitbot.setLedColor(0xFF0000)
        for (let indeks = 0; indeks <= 5; indeks++) {
            bitbot.setPixelColor(indeks * 2, 0x0000FF)
        }
        bitbot.ledShow()
    } else if (tellerA == 3) {
        bitbot.ledRainbow()
        bitbot.ledShow()
    } else if (tellerA > 9) {
        bitbot.ledClear()
        tellerA = 0
        basic.showNumber(tellerA)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    tellerB += 1
    if (tellerB > 5) {
        tellerB = 0
    }
})
let tellerB = 0
let tellerA = 0
bitbot.select_model(BBModel.Auto)
bitbot.ledClear()
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
tellerA = 0
tellerB = 0
basic.forever(function () {
    if (tellerA != 0) {
        bitbot.ledRotate()
        bitbot.ledShow()
        basic.pause(15)
    }
})
basic.forever(function () {
    if (tellerB == 1) {
        basic.showNumber(bitbot.sonar(BBPingUnit.Centimeters))
        basic.showString("cm")
        basic.pause(500)
    } else if (tellerB == 2) {
        basic.showNumber(bitbot.readLine(BBLineSensor.Left))
    } else if (tellerB == 3) {
        basic.showNumber(bitbot.readLight(BBLightSensor.Left))
    } else {
    	
    }
})
