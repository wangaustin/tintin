import { DateTime } from "luxon"
import * as CONST from './constants.js'
import * as HELPER from './helpers.js'

// 2301 OPEN?
export function _2301(now) {
    let dininghall = '2301'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    let wday_start1 = CONST._2301_wday_breakfast_start // weekday breakfast
    let wday_end1 = CONST._2301_wday_breakfast_end
    let wday_start2 = CONST._2301_wday_lunch_start // weekday lunch
    let wday_end2 = CONST._2301_wday_lunch_end
    let wday_start3 = CONST._2301_wday_dinner_start // weekday dinner
    let wday_end3 = CONST._2301_wday_dinner_end
    let wknd_start1 = CONST._2301_wknd_dinner_start// weekend
    let wknd_end1 = CONST._2301_wknd_dinner_end

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let start2 = HELPER.createDateTime(now, wday_start2, timezone)
        let end2 = HELPER.createDateTime(now, wday_end2, timezone)
        let start3 = HELPER.createDateTime(now, wday_start3, timezone)
        let end3 = HELPER.createDateTime(now, wday_end3, timezone) // not used
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // sunday
    else if (whatDay == 0) {
        let start = HELPER.createDateTime(now, wknd_start1, timezone)
        let end = HELPER.createDateTime(now, wknd_end1, timezone)
        let next = HELPER.createDateTime(now.plus({ days: 1 }), wday_start1, timezone)
        if (now < start) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start, now)
        } else if (now > end && now < next) {
            return HELPER.buildResponse(dininghall, false, next, now)
        } else {
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // saturday
    let next = HELPER.createDateTime(now.plus({ days: 1 }), wknd_start1, timezone)
    return HELPER.buildResponse(dininghall, false, next, now)
}

// COMMONS OPEN?
export function commons(now) {
    let dininghall = 'Commons Dining'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast
    let wday_start1 = CONST.commons_wday_breakfast_start
    let wday_end1 = CONST.commons_wday_breakfast_end
    let wday_start2 = CONST.commons_wday_lunch_start
    let wday_end2 = CONST.commons_wday_lunch_end
    let wday_start3 = CONST.commons_wday_dinner_start
    let wday_end3 = CONST.commons_wday_dinner_end
    let wknd_start1 = CONST.commons_wknd_breakfastlunch_start
    let wknd_end1 = CONST.commons_wknd_breakfastlunch_end
    let wknd_start2 = CONST.commons_wknd_dinner_start
    let wknd_end2 = CONST.commons_wknd_dinner_end

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let start2 = HELPER.createDateTime(now, wday_start2, timezone)
        let end2 = HELPER.createDateTime(now, wday_end2, timezone)
        let start3 = HELPER.createDateTime(now, wday_start3, timezone)
        let end3 = HELPER.createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = HELPER.createDateTime(now, wknd_start1, timezone)
        let end1 = HELPER.createDateTime(now, wknd_end1, timezone)
        let start2 = HELPER.createDateTime(now, wknd_start2, timezone)
        let end2 = HELPER.createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return HELPER.buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return HELPER.buildResponse(dininghall, false, next2, now)
            }
        } else {
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
}

// EBI OPEN?
export function ebi(now) {
    let dininghall = 'EBI'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast
    let wday_start1 = CONST.ebi_wday_breakfast_start
    let wday_end1 = CONST.ebi_wday_breakfast_end
    let wday_start2 = CONST.ebi_wday_lunch_start
    let wday_end2 = CONST.ebi_wday_lunch_end
    let wday_start3 = CONST.ebi_wday_dinner_start
    let wday_end3 = CONST.ebi_wday_dinner_end
    let wknd_start1 = CONST.ebi_wknd_breakfastlunch_start
    let wknd_end1 = CONST.ebi_wknd_breakfastlunch_end
    let wknd_start2 = CONST.ebi_wknd_dinner_start
    let wknd_end2 = CONST.ebi_wknd_dinner_end

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let start2 = HELPER.createDateTime(now, wday_start2, timezone)
        let end2 = HELPER.createDateTime(now, wday_end2, timezone)
        let start3 = HELPER.createDateTime(now, wday_start3, timezone)
        let end3 = HELPER.createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = HELPER.createDateTime(now, wknd_start1, timezone)
        let end1 = HELPER.createDateTime(now, wknd_end1, timezone)
        let start2 = HELPER.createDateTime(now, wknd_start2, timezone)
        let end2 = HELPER.createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return HELPER.buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return HELPER.buildResponse(dininghall, false, next2, now)
            }
        } else {
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
}

// KISSAM OPEN?
export function kissam(now) {
    let dininghall = 'Kissam Kitchen'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast
    let wday_start1 = CONST.kissam_wday_breakfast_start
    let wday_end1 = CONST.kissam_wday_breakfast_end
    let wday_start2 = CONST.kissam_wday_lunch_start
    let wday_end2 = CONST.kissam_wday_lunch_end
    let wday_start3 = CONST.kissam_wday_dinner_start
    let wday_end3 = CONST.kissam_wday_dinner_end
    let wknd_start1 = CONST.kissam_wknd_breakfastlunch_start
    let wknd_end1 = CONST.kissam_wknd_breakfastlunch_end
    let wknd_start2 = CONST.kissam_wknd_dinner_start
    let wknd_end2 = CONST.kissam_wknd_dinner_end

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let start2 = HELPER.createDateTime(now, wday_start2, timezone)
        let end2 = HELPER.createDateTime(now, wday_end2, timezone)
        let start3 = HELPER.createDateTime(now, wday_start3, timezone)
        let end3 = HELPER.createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = HELPER.createDateTime(now, wknd_start1, timezone)
        let end1 = HELPER.createDateTime(now, wknd_end1, timezone)
        let start2 = HELPER.createDateTime(now, wknd_start2, timezone)
        let end2 = HELPER.createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return HELPER.buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return HELPER.buildResponse(dininghall, false, next2, now)
            }
        } else {
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
}

// MCTYEIRE OPEN?
export function mctyeire(now) {
    let dininghall = 'McTyeire'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // dinner
    let wday_start1 = CONST.mctyeire_wday_start
    let wday_end1 = CONST.mctyeire_wday_end
    let diff // to be filled if weekend
    let next1

    // monday - thursday
    if (whatDay >= 1 && whatDay <= 4) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    else if (whatDay == 5) { // friday
        diff = 3
    } else if (whatDay == 6) { // saturday
        diff = 2
    } else { // sunday
        diff = 1
    }
    next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: diff })
    return HELPER.buildResponse(dininghall, false, next1, now)
}

// RAND OPEN?
export function rand(now) {
    let dininghall = 'Rand'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.rand_wday_start
    let wday_end1 = CONST.rand_wday_end
    let diff // to be filled if weekend
    let next1

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    else if (whatDay == 6) { // saturday
        diff = 2
    } else { // sunday
        diff = 1
    }
    next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: diff })
    return HELPER.buildResponse(dininghall, false, next1, now)
}

// ZEPPOS OPEN?
export function zeppos(now) {
    let dininghall = 'Zeppos'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast
    let wday_start1 = CONST.zeppos_wday_breakfast_start
    let wday_end1 = CONST.zeppos_wday_breakfast_end
    let wday_start2 = CONST.zeppos_wday_lunch_start
    let wday_end2 = CONST.zeppos_wday_lunch_end
    let wday_start3 = CONST.zeppos_wday_dinner_start
    let wday_end3 = CONST.zeppos_wday_dinner_end
    let wknd_start1 = CONST.zeppos_wknd_breakfastlunch_start
    let wknd_end1 = CONST.zeppos_wknd_breakfastlunch_end
    let wknd_start2 = CONST.zeppos_wknd_dinner_start
    let wknd_end2 = CONST.zeppos_wknd_dinner_end

    // monday - friday
    if (whatDay >= 1 && whatDay <= 5) {
        let start1 = HELPER.createDateTime(now, wday_start1, timezone)
        let end1 = HELPER.createDateTime(now, wday_end1, timezone)
        let start2 = HELPER.createDateTime(now, wday_start2, timezone)
        let end2 = HELPER.createDateTime(now, wday_end2, timezone)
        let start3 = HELPER.createDateTime(now, wday_start3, timezone)
        let end3 = HELPER.createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return HELPER.buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = HELPER.createDateTime(now, wknd_start1, timezone)
        let end1 = HELPER.createDateTime(now, wknd_end1, timezone)
        let start2 = HELPER.createDateTime(now, wknd_start2, timezone)
        let end2 = HELPER.createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return HELPER.buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return HELPER.buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return HELPER.buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return HELPER.buildResponse(dininghall, false, next2, now)
            }
        } else {
            return HELPER.buildResponse(dininghall, true, null, null)
        }
    }
}