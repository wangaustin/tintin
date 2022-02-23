import { DateTime } from "luxon"
import * as CONST from './constants.js'
import * as HELPER from './helpers.js'

// ALUMNI CAFE OPEN?
export function alumni(now) {
    let cafe = 'Alumni Cafe'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.alumni_wday_start
    let wday_end1 = CONST.alumni_wday_end
    let diff = 0 // to be filled if weekend
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
        return HELPER.buildResponse(cafe, isOpen, next1, now)
    }
    else if (whatDay == 6) { // saturday
        diff = 2
    } else { // sunday
        diff = 1
    }
    next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: diff })
    return HELPER.buildResponse(cafe, false, next1, now)
}


// GRINS OPEN?
export function grins(now) {
    let cafe = 'Grins Vegetarian Cafe'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday
    // breakfast & lunch
    let wday_start1 = CONST.grins_wday_normal_start
    let wday_end1 = CONST.grins_wday_normal__end
    let wday_start2 = CONST.grins_wday_friday_start
    let wday_end2 = CONST.grins_wday_friday_end

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wday_start2, timezone)
    let end2 = HELPER.createDateTime(now, wday_end2, timezone)

    let diff // to be filled if weekend
    let next1
    let isOpen = false

    // monday - thursday
    if (whatDay >= 1 && whatDay <= 4) {
        if (whatDay == 4) {
            next1 = HELPER.createDateTime(now, wday_start2, timezone).plus({ days: 1 })
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
        return HELPER.buildResponse(cafe, isOpen, next1, now)
    } else if (whatDay == 5) { // friday
        next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: 3 })
        if (now < start2) { // not yet breakfast
            next1 = start2
        } else if (now > end2 && now < next1) { // wait for next day
            next1 = next1
        }
        return HELPER.buildResponse(cafe, isOpen, next1, now)
    } else if (whatDay == 6) { // saturday
        diff = 2
    } else { // sunday
        diff = 1
    }

    next1 = HELPER.createDateTime(now, wday_start1, timezone).plus({ days: diff })
    return HELPER.buildResponse(cafe, false, next1, now)
}

// HOLY SMOKES OPEN?
export function holysmokes(now) {
    let cafe = 'Holy Smokes'
    let timezone = CONST.TIMEZONE
    let whatDay = now.weekday

    let wday_start1 = CONST.holysmokes_wday_lunch_start // lunch
    let wday_end1 = CONST.holysmokes_wday_lunch_end
    let wday_start2 = CONST.holysmokes_wday_dinner_start // dinner
    let wday_end2 = CONST.holysmokes_wday_dinner_end
    let diff // to be filled if weekend
    let next1
    let isOpen = false

    let start1 = HELPER.createDateTime(now, wday_start1, timezone)
    let end1 = HELPER.createDateTime(now, wday_end1, timezone)
    let start2 = HELPER.createDateTime(now, wday_start2, timezone)
    let end2 = HELPER.createDateTime(now, wday_end2, timezone)

    // monday - friday
    if (whatDay >= 1 && whatDay <= 4) {
        (whatDay == 4) ? // is it thursday
            next1 = start2.plus({ days: 3 }) : next1 = start1.plus({ days: 4 })

        if (now < start1) { // not yet breakfast
            next1 = start1
        } else if (now > end1 && now < start2) { // wait for next day
            next1 = start2
        } else if (now > end2 && now < next1) {
            next1 = next1
        } else { // is open!
            next1 = null
            now = null
            isOpen = true
        }
    } else if (whatDay == 5) { // friday
        next1 = start2.plus({ days: 2 })
    } else if (whatDay == 6) { // saturday
        next1 = start2.plus({ days: 1 })
    } else { // sunday
        next1 = start1.plus({ days: 1 })
        if (now < start2) {
            next1 = start2
        } else if (now > end2 && now < next1) {
            next1 = next1
        } else { // is open
            next1 = null
            now = null
            isOpen = true
        }
    }
    return HELPER.buildResponse(cafe, isOpen, next1, now)
}

// LOCAL JAVA OPEN?
export function localjava(now) {
    let cafe = 'Local Java'
    return "Local Java is currently closed due to staffing challenges ❌"
}

// SUZIE'S - BLAIR OPEN?
