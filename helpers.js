import { DateTime } from "luxon"

// createDateTime based on details
export function createDateTime(now, details, timezone) {
    let month = now.month
    let day = now.day

    let result =
        DateTime.fromObject({ month: month, day: day, hour: details.hour, minute: details.minute }, { zone: timezone })

    return result
}

// buildResponse
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