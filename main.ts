input.onButtonPressed(Button.A, function () {
    for (let index2 = 0; index2 <= num_leds - 1; index2++) {
        strip.setPixelColor(index2, neopixel.rgb(randint(0, 160), randint(0, 160), randint(0, 160)))
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        for (let R = 0; R <= 120; R+=10) {
            for (let G = 0; G <= 120; G += 10) {
                for (let B = 0; B <= 120; B += 10) {
                    strip.showColor(neopixel.rgb(R, G, B))
                    strip.show()
                    basic.pause(10)
                }
            }
        }
    }
})
input.onSound(DetectedSound.Loud, function () {
    for (let index2 = 0; index2 <= num_leds - 1; index2++) {
        if (index2 % 4 == 0) {
            strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
        }
    }
})
let num_leds = 0
let strip: neopixel.Strip = null
let R2 = 0
let G2 = 0
let B2 = 0
num_leds = 90
strip = neopixel.create(DigitalPin.P0, num_leds - 1, NeoPixelMode.RGB)
strip.easeBrightness()
strip.showRainbow(1, 360)
loops.everyInterval(50, function () {
    strip.rotate(1)
    strip.show()
    while (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(strip.power())
    }
})
