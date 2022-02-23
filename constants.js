// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
export const TIMEZONE = 'America/Chicago'

/**********************************/
/************* DINING *************/
/**********************************/

// 2301
// weekday
export const _2301_wday_breakfast_start = { hour: 7, minute: 30 }
export const _2301_wday_breakfast_end = { hour: 10, minute: 0 }
export const _2301_wday_lunch_start = { hour: 11, minute: 0 }
export const _2301_wday_lunch_end = { hour: 15, minute: 0 }
export const _2301_wday_dinner_start = { hour: 16, minute: 30 }
export const _2301_wday_dinner_end = { hour: 20, minute: 0 }
// weekend
export const _2301_wknd_dinner_start = { hour: 16, minute: 30 }
export const _2301_wknd_dinner_end = { hour: 20, minute: 0 }

// COMMONS
// weekday
export const commons_wday_breakfast_start = { hour: 7, minute: 0 }
export const commons_wday_breakfast_end = { hour: 10, minute: 0 }
export const commons_wday_lunch_start = { hour: 11, minute: 0 }
export const commons_wday_lunch_end = { hour: 14, minute: 30 }
export const commons_wday_dinner_start = { hour: 16, minute: 30 }
export const commons_wday_dinner_end = { hour: 20, minute: 0 }
// weekend
export const commons_wknd_breakfastlunch_start = { hour: 9, minute: 0 }
export const commons_wknd_breakfastlunch_end = { hour: 14, minute: 0 }
export const commons_wknd_dinner_start = { hour: 16, minute: 30 }
export const commons_wknd_dinner_end = { hour: 20, minute: 0 }

// EBI
// weekday
export const ebi_wday_breakfast_start = { hour: 7, minute: 0 }
export const ebi_wday_breakfast_end = { hour: 10, minute: 30 }
export const ebi_wday_lunch_start = { hour: 11, minute: 0 }
export const ebi_wday_lunch_end = { hour: 14, minute: 30 }
export const ebi_wday_dinner_start = { hour: 16, minute: 30 }
export const ebi_wday_dinner_end = { hour: 20, minute: 0 }
// weekend
export const ebi_wknd_breakfastlunch_start = { hour: 9, minute: 0 }
export const ebi_wknd_breakfastlunch_end = { hour: 14, minute: 0 }
export const ebi_wknd_dinner_start = { hour: 16, minute: 30 }
export const ebi_wknd_dinner_end = { hour: 20, minute: 0 }

// KISSAM
// weekday
export const kissam_wday_breakfast_start = { hour: 7, minute: 0 }
export const kissam_wday_breakfast_end = { hour: 10, minute: 0 }
export const kissam_wday_lunch_start = { hour: 11, minute: 0 }
export const kissam_wday_lunch_end = { hour: 14, minute: 30 }
export const kissam_wday_dinner_start = { hour: 16, minute: 30 }
export const kissam_wday_dinner_end = { hour: 20, minute: 0 }
// weekend
export const kissam_wknd_breakfastlunch_start = { hour: 10, minute: 0 }
export const kissam_wknd_breakfastlunch_end = { hour: 14, minute: 0 }
export const kissam_wknd_dinner_start = { hour: 16, minute: 30 }
export const kissam_wknd_dinner_end = { hour: 20, minute: 0 }

// MCTYEIRE
// mon - thur dinner
export const mctyeire_wday_start = { hour: 17, minute: 45 }
export const mctyeire_wday_end = { hour: 19, minute: 0 }

// RAND
// mon - fri breakfast & lunch
export const rand_wday_start = { hour: 7, minute: 0 }
export const rand_wday_end = { hour: 15, minute: 0 }


// ZEPPOS
// weekday
export const zeppos_wday_breakfast_start = { hour: 7, minute: 0 }
export const zeppos_wday_breakfast_end = { hour: 10, minute: 30 }
export const zeppos_wday_lunch_start = { hour: 11, minute: 0 }
export const zeppos_wday_lunch_end = { hour: 14, minute: 30 }
export const zeppos_wday_dinner_start = { hour: 16, minute: 30 }
export const zeppos_wday_dinner_end = { hour: 19, minute: 30 }
// weekend
export const zeppos_wknd_breakfastlunch_start = { hour: 9, minute: 0 }
export const zeppos_wknd_breakfastlunch_end = { hour: 14, minute: 0 }
export const zeppos_wknd_dinner_start = { hour: 16, minute: 30 }
export const zeppos_wknd_dinner_end = { hour: 19, minute: 30 }

/**********************************/
/************** CAFES *************/
/**********************************/
// ALUMNI CAFE
// mon - fri breakfast & lunch
export const alumni_wday_start = { hour: 11, minute: 0 }
export const alumni_wday_end = { hour: 16, minute: 0 }

// GRINS VEGETARIAN CAFE
export const grins_wday_normal_start = { hour: 7, minute: 0 }
export const grins_wday_normal__end = { hour: 18, minute: 30 }
export const grins_wday_friday_start = { hour: 7, minute: 0 }
export const grins_wday_friday_end = { hour: 14, minute: 0 }

// HOLY SMOKES
export const holysmokes_wday_lunch_start = { hour: 12, minute: 0 }
export const holysmokes_wday_lunch_end = { hour: 13, minute: 30 }
export const holysmokes_wday_dinner_start = { hour: 17, minute: 0 }
export const holysmokes_wday_dinner_end = { hour: 19, minute: 30 }

// SUZIE'S - BLAIR
export const blair_wday_start = { hour: 11, minute: 0 }
export const blair_wday_end = { hour: 16, minute: 0 }

// SUZIE'S - FEAHTERINGILL
export const fgh_wday_start = { hour: 11, minute: 0 }
export const fgh_wday_end = { hour: 16, minute: 0 }

// SUZIE'S - MRB III
export const mrb_wday_start = { hour: 7, minute: 0 }
export const mrb_wday_end = { hour: 16, minute: 30 }

// SUZIE'S - CENTRAL
export const central_wday_normal_start = { hour: 8, minute: 0 }
export const central_wday_normal__end = { hour: 20, minute: 30 }
export const central_wday_friday_start = { hour: 8, minute: 0 }
export const central_wday_friday_end = { hour: 15, minute: 0 }

/**********************************/
/************* MUNCHIE ************/
/**********************************/

// BRANSCOMB MUNCHIE
export const branscomb_wday_start = { hour: 7, minute: 0 }
export const branscomb_wday__end = { hour: 23, minute: 59 }
export const branscomb_wknd_start = { hour: 9, minute: 0 }
export const branscomb_wknd_end = { hour: 23, minute: 59 }

// COMMONS MUNCHIE
// weekday (no lunch)
export const mCommons_wday_breakfast_start = { hour: 7, minute: 30 }
export const mCommons_wday_breakfast_end = { hour: 10, minute: 0 }
export const mCommons_wday_dinner_start = { hour: 18, minute: 0 }
export const mCommons_wday_dinner_end = { hour: 23, minute: 0 }
// weekend
export const mCommons_wknd_dinner_start = { hour: 18, minute: 0 }
export const mCommons_wknd_dinner_end = { hour: 23, minute: 0 }

// HIGHLAND MUNCHIE
export const highland_wday_start = { hour: 7, minute: 0 }
export const highland_wday__end = { hour: 23, minute: 59 }
export const highland_wknd_start = { hour: 9, minute: 0 }
export const highland_wknd_end = { hour: 23, minute: 59 }

// KISSAM MUNCHIE
export const mKissam_wday_start = { hour: 7, minute: 0 }
export const mKissam_wday__end = { hour: 23, minute: 59 }
export const mKissam_wknd_start = { hour: 9, minute: 0 }
export const mKissam_wknd_end = { hour: 23, minute: 59 }

// RAND MUNCHIE
export const mRand_wday_start = { hour: 8, minute: 0 }
export const mRand_wday_end = { hour: 16, minute: 0 }