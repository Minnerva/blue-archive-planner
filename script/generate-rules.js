import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const dir = path.resolve(__filename, `./../..`)
const json = {
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
      }
    },
    "users-public": {
      ".indexOn": ["matched_username", "matched_ign"],
      ".read": true,
      "$uid": {
        ".write": "$uid === auth.uid"
      }
    },
    "ba-currency-own": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "ba-banner-pull": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "ba-currency-use": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}

for (let table in json.rules) {
  if ([`.read`, `.write`].indexOf(table) === -1) {
    json.rules[`${process.env.FIREBASE_DATABASE_TEST_PREFIX}${table}`] = json.rules[table]
  }
}

// console.log(json)
// console.log(path.resolve(__filename, `./../..`))

fs.writeFileSync(path.resolve(dir, `.firebase-rules`), JSON.stringify(json, null, 2))
