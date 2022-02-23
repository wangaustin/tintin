// import { Router } from 'itty-router'
import { DateTime } from "luxon"
import * as bot from './location_dining.js'

const SLACK_TOKEN = SLACK_TOKEN_AUTH
const BOT_NAME = "Vandy-Food-Bot"

let jsonHeaders = new Headers([["Content-Type", "application/json"]])

addEventListener("fetch", event => {
  event.respondWith(slackWebhookHandler(event.request))
})

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
        return new Response(bot._2301(now))
      case 'COMMONS':
        return new Response(bot.commons(now))
      case 'EBI':
        return new Response(bot.ebi(now))
      case 'KISSAM':
        return new Response(bot.kissam(now))
      case 'MCTYEIRE':
        return new Response(bot.mctyeire(now))
    }

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