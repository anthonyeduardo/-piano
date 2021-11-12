input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("C - - - - - - - ", 120)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    music.playMelody("- D - - - - - - ", 120)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("- - E - - - - - ", 120)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
music.playMelody("C D E F - F - F ", 200)
basic.showString("Piano")
