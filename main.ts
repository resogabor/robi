function balKar () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . # # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
}
function jobbKar () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # # .
            . # # # .
            # . # . .
            . # . # .
            . # . # .
            `)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
}
input.onButtonPressed(Button.A, function () {
    balKar()
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    jobbKar()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    jobbKar()
})
input.onGesture(Gesture.TiltLeft, function () {
    balKar()
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . # . # .
    . # . # .
    `)
basic.forever(function () {
	
})
