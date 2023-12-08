function handleKeyUp(e) {
  // don't navigate while typing
  if (e.target.tagName !== 'INPUT') {
    const navLink = document.getElementById('nav-' + e.key)
    if (navLink) navLink.click()
    if (e.key === '0') window.location.href = '.'
    if (e.key === 'b') document.getElementById('background-wrapper').click()
  }
}

window.addEventListener('load', () => {
  window.addEventListener('keyup', handleKeyUp)
})
