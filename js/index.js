import { Router } from './routes.js'

const homeButton = document.querySelector('#home')
const universeButton = document.querySelector('#universe')
const exploreButton = document.querySelector('#explore')
const anchorsNavigation = [homeButton, universeButton, exploreButton]

const router = new Router()
router.add('/', './pages/home.html')
router.add('/index.html', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/explore', './pages/explore.html')
router.add(404, './pages/error404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

function updateAnchorStyle() {
  for (const anchor of anchorsNavigation) {
    anchor.style.fontWeight = '100'
    anchor.style.color = '#8d8d99'
  }

  switch (window.location.pathname) {
    case '/':
      homeButton.style.fontWeight = 'bold'
      homeButton.style.color = '#ffffff'
      break

    case '/universe':
      universeButton.style.fontWeight = 'bold'
      universeButton.style.color = '#ffffff'
      break

    case '/explore':
      exploreButton.style.fontWeight = 'bold'
      exploreButton.style.color = '#ffffff'
      break
    default:
      break
  }
}

window.addEventListener('click', event => {
  router.route()

  if (event.target.tagName == 'A' || event.target.tagName == 'BUTTON') {
    updateAnchorStyle()
  }

  let teste = event.target.tagName
  console.log(teste)
})

updateAnchorStyle()
