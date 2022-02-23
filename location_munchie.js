import * as CONST from './constants.js'
import * as HELPER from './helpers.js'

// BRANSCOMB MUNCHIE OPEN?
export function branscomb(now) {
    let munchie = "Munchie (Branscomb)"
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.branscomb_wday_start
    let wday_end1 = CONST.branscomb_wday__end
    let wknd_start1 = CONST.branscomb_wknd_start
    let wknd_end1 = CONST.branscomb_wknd_end

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wknd_start1, timezone)
    let end2 = HELPER.createDateTime(now, wknd_end1, timezone)

    let next1
    let isOpen = false

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        if (whatDay == 5) {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })
        } else {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })
        }

        if (now < start1) { // not yet breakfast
            next1 = start1
        } else if (now > end1 && now < next1) { // wait for next day
            next1 = next1
        } else { // is open!
            next1 = null
            now = null
            isOpen = true
        }
    } else { // saturday - sunday
        if (whatDay == 0) {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })//mon
        } else {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })//sun
        }

        if (now < start2) {
            next1 = start2
        } else if (now > end2 && now < next1) {
            next1 = next1
        } else {
            next1 = null
            now = null
            isOpen = true
        }
    }
    return HELPER.buildResponse(munchie, isOpen, next1, now)
}

// COMMONS MUNCHIE OPEN?
export function mCommons(now) {
    let munchie = "Munchie (Commons)"
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.mCommons_wday_breakfast_start // breakfast
    let wday_end1 = CONST.mCommons_wday_breakfast_end
    let wday_start2 = CONST.mCommons_wday_dinner_start // dinner
    let wday_end2 = CONST.mCommons_wday_dinner_end
    let wknd_start1 = CONST.highland_wknd_start
    let wknd_end1 = CONST.highland_wknd_end

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wday_start2, timezone)
    let end2 = HELPER.createDateTime(now, wday_end2, timezone)
    let start3 = HELPER.createDateTime(now, wknd_start1, timezone)
    let end3 = HELPER.createDateTime(now, wknd_end1, timezone)

    let next1
    let isOpen = false

    //
    //
    // MODEL AFTER THIS LOGIC! COME BACK!!
    //
    //

    if (whatDay >= 1 && whatDay <= 5) {
        if (now < start1) {
            next1 = start1
        } else if (now > end1 && now < start2) {
            next1 = start2
        } else if (now > end2) {
            if (whatDay == 5) {
                next1 = start3.plus({ days: 1 })
            } else {
                next1 = start1.plus({ days: 1 })
            }
        } else { // is open
            next1 = null
            now = null
            isOpen = true
        }
    } else {
        if (whatDay == 6) { // sat
            next1 = HELPER.createDateTime(now, start3, timezone).plus({ days: 1 })
        } else { // sun
            next1 = HELPER.createDateTime(now, start1, timezone)
        }

        if (now < start3) {
            next1 = start3
        } else if (now > end3) {
            if (whatDay == 6) { // sat
                next1 = start3.plus({ days: 1 })
            } else { // sun
                next1 = start1.plus({ days: 1 })
            }
        }
    }
    return HELPER.buildResponse(munchie, isOpen, next1, now)

}

// HIGHLAND MUNCHIE OPEN?
export function highland(now) {
    let munchie = "Munchie (Highland)"
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.highland_wday_start
    let wday_end1 = CONST.highland_wday__end
    let wknd_start1 = CONST.highland_wknd_start
    let wknd_end1 = CONST.highland_wknd_end

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wknd_start1, timezone)
    let end2 = HELPER.createDateTime(now, wknd_end1, timezone)

    let next1
    let isOpen = false

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        if (whatDay == 5) {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })
        } else {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })
        }

        if (now < start1) { // not yet breakfast
            next1 = start1
        } else if (now > end1 && now < next1) { // wait for next day
            next1 = next1
        } else { // is open!
            next1 = null
            now = null
            isOpen = true
        }
    } else { // saturday - sunday
        if (whatDay == 0) {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })//mon
        } else {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })//sun
        }

        if (now < start2) {
            next1 = start2
        } else if (now > end2 && now < next1) {
            next1 = next1
        } else {
            next1 = null
            now = null
            isOpen = true
        }
    }
    return HELPER.buildResponse(munchie, isOpen, next1, now)
}

// HIGHLAND MUNCHIE OPEN?
export function mKissam(now) {
    let munchie = "Munchie (Kissam)"
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.mKissam_wday_start
    let wday_end1 = CONST.mKissam_wday__end
    let wknd_start1 = CONST.mKissam_wknd_start
    let wknd_end1 = CONST.mKissam_wknd_end

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wknd_start1, timezone)
    let end2 = HELPER.createDateTime(now, wknd_end1, timezone)

    let next1
    let isOpen = false

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        if (whatDay == 5) {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })
        } else {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })
        }

        if (now < start1) { // not yet breakfast
            next1 = start1
        } else if (now > end1 && now < next1) { // wait for next day
            next1 = next1
        } else { // is open!
            next1 = null
            now = null
            isOpen = true
        }
    } else { // saturday - sunday
        if (whatDay == 0) {
            next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })//mon
        } else {
            next1 = HELPER.createDateTime(now, wknd_start1, timezone).plus({ days: 1 })//sun
        }

        if (now < start2) {
            next1 = start2
        } else if (now > end2 && now < next1) {
            next1 = next1
        } else {
            next1 = null
            now = null
            isOpen = true
        }
    }
    return HELPER.buildResponse(munchie, isOpen, next1, now)
}

// RAND MUNCHIE OPEN?
export function mRand(now) {
    let munchie = "Munchie (Rand)"
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.mRand_wday_start
    let wday_end1 = CONST.mRand_wday_end
    let next1
    let isOpen = false

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let next1 = start1.plus({ days: 1 })

        if (now < start1) { // not yet breakfast
            next1 = start1
        } else if (now > end1 && now < next1) { // wait for next day
            next1 = next1
        } else { // is open!
            next1 = null
            now = null
            isOpen = true
        }
    }
    else if (whatDay == 6) { // saturday
        next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 2 })
    } else { // sunday
        next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })
    }
    return HELPER.buildResponse(munchie, isOpen, next1, now)
}