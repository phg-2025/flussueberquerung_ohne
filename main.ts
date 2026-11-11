/**
 * Flussüberquerung (Bauer Wolf Ziege Kohl)
 * 
 * Taste A:   Objekt wechseln 
 * 
 * Taste B:   Objekt bewegen
 * 
 * Taste A+B: Automatischer Ablauf (Lösung)
 * 
 * Näheres bei Wikipedia oder demnächst bei 
 * 
 * https://www.prof-horst-guenther.de/calliope
 */
function Prüfe () {
    Bauer = amUfer[0]
    Kohl = amUfer[1]
    Wolf = amUfer[2]
    Ziege = amUfer[3]
    if (Kohl == Ziege && Bauer != Ziege) {
        GameOver = true
        basic.setLedColors(0xff0000, 0x000000, 0x000000)
        basic.pause(100)
        music.play(music.stringPlayable("- - - - - - - - ", 0), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    }
    if (Wolf == Ziege && Bauer != Ziege) {
        GameOver = true
        basic.setLedColors(0x000000, 0x000000, 0xff0000)
        basic.pause(100)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    }
    if (Kohl + (Wolf + Ziege) == 12) {
        GameOver = true
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.setLedColors(0x000000, 0x00ff00, 0x000000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    }
    if (GameOver) {
        while (false) {
        	
        }
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.plot(amUfer[Objekt], Objekt)
    Objekt += 1
    Objekt = Objekt % 4
    led.plot(amUfer[Objekt], Objekt)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    // Bauer am anderen Ufer
    if (amUfer[Objekt] != amUfer[0]) {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.setLedColors(0x000000, 0xff0000, 0x000000)
    } else {
        temp = 4 - amUfer[Objekt]
        amUfer[Objekt] = temp
        // Bauer wechselt auch
        // Bauer wechselt auch
        amUfer[0] = temp
        if (Objekt != 0) {
            led.unplot(4 - temp, 0)
            led.plot(temp, 0)
        }
        led.unplot(temp, Objekt)
        Prüfe()
    }
})
function Blinken (Art: number) {
    if (!(GameOver)) {
        led.plot(Art, Objekt)
        basic.pause(300)
        led.unplot(Art, Objekt)
        basic.pause(300)
    }
}
let temp = 0
let Ziege = 0
let Wolf = 0
let Kohl = 0
let Bauer = 0
let GameOver = false
let amUfer: number[] = []
let Objekt = 0
Objekt = 0
amUfer = [
0,
0,
0,
0
]
for (let Index = 0; Index <= 3; Index++) {
    led.plot(amUfer[Index], Index)
}
GameOver = false
basic.forever(function () {
    Blinken(amUfer[Objekt])
})
