const Router = require('nextjs-dynamic-routes')

                                                // Name   Page      Pattern
const router = new Router()                    // ----   ----      -----
//pattern is the url
//page is the location of the page
//name is used for


router.add({name: 'home', pattern: 'home', page: 'home'})
router.add({name: 'about', pattern: 'about', page: 'about'})
router.add({name: 'contact', pattern: 'contact', page: 'contact'})


module.exports = router
