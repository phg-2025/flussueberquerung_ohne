def zeigeWolf():
    led.plot(Wolf, 0)
    led.unplot(4 - Wolf, 0)
def zeigeZiege():
    led.plot(Ziege, 0)
    led.unplot(4 - Ziege, 0)
def zeigeBauer():
    led.plot(Bauer, 0)
    led.unplot(4 - Bauer, 0)

def on_button_a():
    global Aktuell
    Aktuell += 1
    if Aktuell == 1:
        Aktuell += 1
    Aktuell = Aktuell % 5
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def Zeigen():
    pass

def on_button_b():
    global Bauer, Kohl, Wolf, Ziege
    if Aktuell == 0:
        if Bauer == 0:
            Bauer = 4
        else:
            Bauer = 0
        zeigeBauer()
    if Aktuell == 2:
        if Kohl == 0:
            Kohl = 4
        else:
            Kohl = 0
        zeigeKohl()
    if Aktuell == 3:
        if Wolf == 0:
            Wolf = 4
        else:
            Wolf = 0
        zeigeWolf()
    if Aktuell == 4:
        if Ziege == 0:
            Ziege = 4
        else:
            Ziege = 0
        zeigeZiege()
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def Bewege(Objekt: number):
    global objekte, Bauer
    if Objekt == 0:
        objekte = 4
    else:
        Bauer = 0
def Blinken(Art: number):
    led.plot(Art, Aktuell)
    basic.pause(300)
    led.unplot(Art, Aktuell)
    basic.pause(300)
def zeigeKohl():
    led.plot(Kohl, 0)
    led.unplot(4 - Kohl, 0)
objekte = 0
Ziege = 0
Wolf = 0
Kohl = 0
Bauer = 0
Aktuell = 0
Aktuell = 0
led.plot(0, 0)
Bauer = 0
Kohl = 0
Wolf = 0
Ziege = 0

def on_forever():
    if Aktuell == 0:
        Blinken(Bauer)
    if Aktuell == 2:
        Blinken(Kohl)
    if Aktuell == 3:
        Blinken(Wolf)
    if Aktuell == 4:
        Blinken(Ziege)
basic.forever(on_forever)
