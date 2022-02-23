import { DateTime } from "luxon"
import * as CONST from './constants.js'

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
        let start1 = createDateTime(now, wday_start1, timezone)
        let end1 = createDateTime(now, wday_end1, timezone)
        let start2 = createDateTime(now, wday_start2, timezone)
        let end2 = createDateTime(now, wday_end2, timezone)
        let start3 = createDateTime(now, wday_start3, timezone)
        let end3 = createDateTime(now, wday_end3, timezone) // not used
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return buildResponse(dininghall, true, null, null)
        }
    }
    // sunday
    else if (whatDay == 0) {
        let start = createDateTime(now, wknd_start1, timezone)
        let end = createDateTime(now, wknd_end1, timezone)
        let next = createDateTime(now.plus({ days: 1 }), wday_start1, timezone)
        if (now < start) {
            // not yet dinner
            return buildResponse(dininghall, false, start, now)
        } else if (now > end && now < next) {
            return buildResponse(dininghall, false, next, now)
        } else {
            return buildResponse(dininghall, true, null, null)
        }
    }
    // saturday
    let next = createDateTime(now.plus({ days: 1 }), wknd_start1, timezone)
    return buildResponse(dininghall, false, next, now)
}

// COMMONS OPEN?
export function commons(now) {
    let dininghall = 'Commons'
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
        let start1 = createDateTime(now, wday_start1, timezone)
        let end1 = createDateTime(now, wday_end1, timezone)
        let start2 = createDateTime(now, wday_start2, timezone)
        let end2 = createDateTime(now, wday_end2, timezone)
        let start3 = createDateTime(now, wday_start3, timezone)
        let end3 = createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = createDateTime(now, wknd_start1, timezone)
        let end1 = createDateTime(now, wknd_end1, timezone)
        let start2 = createDateTime(now, wknd_start2, timezone)
        let end2 = createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return buildResponse(dininghall, false, next2, now)
            }
        } else {
            return buildResponse(dininghall, true, null, null)
        }
    }
}

// COMMONS OPEN?
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
        let start1 = createDateTime(now, wday_start1, timezone)
        let end1 = createDateTime(now, wday_end1, timezone)
        let start2 = createDateTime(now, wday_start2, timezone)
        let end2 = createDateTime(now, wday_end2, timezone)
        let start3 = createDateTime(now, wday_start3, timezone)
        let end3 = createDateTime(now, wday_end3, timezone)
        let next1 = start1.plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet lunch
            return buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < start3) {
            // not yet dinner
            return buildResponse(dininghall, false, start3, now)
        } else if (now > end3 && now < next1) {
            // wait for next day
            return buildResponse(dininghall, false, next1, now)
        } else {
            // is open!
            return buildResponse(dininghall, true, null, null)
        }
    }
    // saturday - sunday
    else {
        let start1 = createDateTime(now, wknd_start1, timezone)
        let end1 = createDateTime(now, wknd_end1, timezone)
        let start2 = createDateTime(now, wknd_start2, timezone)
        let end2 = createDateTime(now, wknd_end2, timezone)
        let next1 = start1.plus({ days: 1 })
        let next2 = createDateTime(now, wday_start1, timezone).plus({ days: 1 })

        if (now < start1) {
            // not yet breakfast
            return buildResponse(dininghall, false, start1, now)
        } else if (now > end1 && now < start2) {
            // not yet dinner
            return buildResponse(dininghall, false, start2, now)
        } else if (now > end2 && now < next1) {
            if (whatDay == 6) { // if saturday
                // wait for next day
                return buildResponse(dininghall, false, next1, now)
            } else { // if sunday
                return buildResponse(dininghall, false, next2, now)
            }
        } else {
            return buildResponse(dininghall, true, null, null)
        }
    }
}



// createDateTime based on details
export function createDateTime(now, details, timezone) {
    let month = now.month
    let day = now.day

    let result =
        DateTime.fromObject({ month: month, day: day, hour: details.hour, minute: details.minute }, { zone: timezone })

    return result
}

export function buildResponse(dininghall, isOpen, nextOpen, now) {
    if (isOpen) {
        return dininghall + ' is open ✅'
    } else {
        let diff = now.diff(nextOpen, ['hours', 'minutes'])
        return dininghall + ' is NOT open ❌ Next opening time is '
            + nextOpen.hour + ':' + nextOpen.minute + ', which is in '
            + Math.abs(diff.hours) + ' hours '
            + Math.ceil(Math.abs(diff.minutes)) + ' minutes 🙌'
    }
}