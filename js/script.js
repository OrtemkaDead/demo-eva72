// Anchors
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.onclick = event => {
      event.preventDefault()
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   }
}