// const ghpages = require(`gh-pages`)
import ghpages from 'gh-pages'

ghpages.publish(`dist`, err => {
  if (!err) {
    console.log(`Deploy: Success`)
  } else {
    console.log (`Deploy: Error`)
    console.log(err)
  }
})