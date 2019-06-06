const Router = require('nextjs-dynamic-routes')

  console.log("This is ")                                                  // Name   Page      Pattern
const router = new Router()                    // ----   ----      -----
//.add('about')                                       // about  about     /about

//pattern is the url
//page is the location of the page
//name is used for
//router.add({name: 'about', pattern: '/views/about', page: 'about'})
router.add({name: 'home', pattern: 'home', page: 'home'})
router.add({name: 'about', pattern: 'about', page: 'about'})
router.add({name: 'contact', pattern: 'contact', page: 'contact'})


module.exports = router
