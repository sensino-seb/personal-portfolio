'use strict'

const headings = document
  .querySelector('.banner-heading')
  .querySelectorAll('span')

// change the span in the banner-heading
headings.forEach((heading, idx) => {
  headings.forEach(h => h.classList.remove('active'))
  setTimeout(changeHeading(heading, idx), 2500)
})

function changeHeading(heading, idx) {
  // if at the end of the node list, start over again
  heading.classList.add('active')
}
