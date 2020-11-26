function Spielen () {
    led.toggle(LED_y, LED_y)
    LED_y += pins.map(
    input.acceleration(Dimension.X) * Schwiergkeit,
    -1823,
    1023,
    0,
    5
    )
    LED_y += pins.map(
    input.acceleration(Dimension.X) * Schwiergkeit,
    0,
    1023,
    0,
    5
    )
    led.plot(LED_y, LED_y)
    basic.setLedColor(0x00ff00)
    if (true) {
    	
    }
}
radio.onReceivedString(function (receivedString) {
    let schwer = ""
    let mittel = ""
    let leicht = ""
    let spielen = ""
    let receivedstring = ""
    if (receivedstring == spielen) {
        Spielphase += spielen
    } else if (receivedstring == leicht) {
        Schwiergkeit += 1
    } else if (receivedstring == mittel) {
        Schwiergkeit += 3
    } else if (receivedstring == schwer) {
        Schwiergkeit += 5
    }
})
let LED_y = 0
let Schwiergkeit = 0
radio.setGroup(2)
let Spielphase = "warten"
Schwiergkeit = 1
let Platzhalter = input.acceleration(Dimension.X)
basic.forever(function () {
    if (Spielphase == "warten") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (Spielphase == "warten") {
    	
    } else {
    	
    }
})
