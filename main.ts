basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 6) {
        maqueen.motorStop(maqueen.Motors.All)
        music.playTone(440, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        music.playTone(523, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 78)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 || maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 72)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 74)
        basic.pause(500)
    }
})
