input.onButtonPressed(Button.A, function () {
    basic.showNumber(123456789)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("labas")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        # # . # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
