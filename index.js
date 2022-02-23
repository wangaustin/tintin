import { DateTime } from "luxon"
import * as dininghall from './location_dining.js'
import * as cafe from './location_cafe.js'
import * as munchie from './location_munchie.js'

const SLACK_TOKEN = SLACK_TOKEN_AUTH
const BOT_NAME = "Vandy-Food-Bot"

let jsonHeaders = new Headers([["Content-Type", "application/json"]])

addEventListener("fetch", event => {
  event.respondWith(slackWebhookHandler(event.request))
})

/** EVENT HANDLER **/
async function slackWebhookHandler(request) {
  if (request.method !== "POST") {
    return simpleResponse(
      200,
      `Hi, I'm ${BOT_NAME}, created by Austin Wang because she got tired of checking dining hours on Vandy website.`
    )
  }

  try {
    let formData = await request.formData()
    if (formData.get("token") !== SLACK_TOKEN) {
      return simpleResponse(403, "invalid Slack verification token")
    }

    // parse user input
    let parsed = parseMessage(formData)

    let now = DateTime.now().setZone("America/Chicago")

    switch (parsed) {
      // dining halls
      case '2301':
        return new Response(dininghall._2301(now))
      case 'COMMONS':
        return new Response(dininghall.commons(now))
      case 'EBI':
        return new Response(dininghall.ebi(now))
      case 'KISSAM':
        return new Response(dininghall.kissam(now))
      case 'MCTYEIRE':
        return new Response(dininghall.mctyeire(now))
      case 'RAND':
        return new Response(dininghall.rand(now))
      case 'ZEPPOS':
        return new Response(dininghall.zeppos(now))
      // cafes
      case 'ALUMNI':
        return new Response(cafe.alumni(now))
      case 'GRINS':
        return new Response(cafe.grins(now))
      case 'HOLYSMOKES':
        return new Response(cafe.holysmokes(now))
      case 'LOCALJAVA':
        return new Response(cafe.localjava(now))
      case 'BLAIR':
        return new Response(cafe.blair(now))
      case 'FGH':
        return new Response(cafe.fgh(now))
      case 'MRB':
        return new Response(cafe.mrb(now))
      case 'CENTRAL':
        return new Response(cafe.central(now))
      // munchies TO BE IMPLEMENTED
      case 'BRANSCOMB':
      case 'SCOMB':
        return new Response(munchie.branscomb(now))
      case 'COMMONSM':
      case 'COMMONSMUNCHIE':
        return new Response(munchie.mCommons(now))
      case 'HIGHLAND':
        return new Response(munchie.highland(now))
      case 'KISSAMM':
      case 'KISSAMMUNCHIE':
        return new Response(munchie.mKissam(now))
      case 'RANDM':
      case 'RANDMUNCHIE':
        return new Response(munchie.mRand(now))
    }

    // NOT A VALID INPUT!
    return new Response("Not a valid Dining Hall symbol!")
  }
  // ERROR OCCURRED!!
  catch (e) {
    return simpleResponse(
      200,
      `Sorry, I had an issue retrieving info on this. ${e}`
    )
  }
}

// simpleResponse
function simpleResponse(statusCode, message) {
  let resp = {
    request: message,
    status: statusCode
  }

  return new Response(JSON.stringify(resp), {
    headers: jsonHeaders,
    status: statusCode
  })
}

// parseMessage
function parseMessage(message) {
  return message.get("text").trim().toUpperCase()
}
