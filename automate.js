async function autoConnect() {
  const buttonElems = Array.from(document.querySelectorAll('.artdeco-button'))

  const sanitizeText = (text) => text.replaceAll('\n', '').trim()

  const wait = (delay = 1000) =>
    new Promise((resolve) => setTimeout(resolve, delay))

  function checkForPopup() {
    const arr = Array.from(
      document.querySelectorAll('button > .artdeco-button__text')
    )

    const popupButton = arr.find(
      (item) => sanitizeText(item.textContent) === 'Got it'
    )

    if (popupButton) {
      popupButton.click()
    }
  }

  for (const button of buttonElems) {
    checkForPopup()
    await wait(200)

    const text = sanitizeText(button.textContent)

    if (text === 'Connect') {
      button.click()
      await wait(500)

      const arr = Array.from(document.querySelectorAll('.artdeco-button'))
      const sendButton = arr.find(
        (item) => sanitizeText(item.textContent) === 'Send without a note'
      )

      if (sendButton) {
        sendButton.click()
      }
      await wait(2000)
    }
  }
}

autoConnect()

