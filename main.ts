let x_origin = 0
DFRobotMaqueenPlus.I2CInit()
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_LINE_TRACKING)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultArrow)) {
        x_origin = huskylens.readArrow_ss(1, Content4.xTarget)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, Math.map(x_origin, 0, 320, 0, 52))
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, Math.map(x_origin, 0, 320, 52, 0))
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
