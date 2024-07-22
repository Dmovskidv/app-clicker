const $circle = document.querySelector(".circle")
const $score = document.querySelector('.score')


function init() {
    $score.textContent = `${getScore()}`
}

function getScore() {
    return parseInt(localStorage.getItem("score"), 10) || 0
}

function setScore(score) {
    localStorage.setItem("score", `${score}`)
    $score.textContent = `${getScore()}`
}

init()

$circle.addEventListener("click", (event) => {
    const rect = $circle.getBoundingClientRect()

    const $coin = document.createElement("div")
    $coin.classList.add("coin")
    $circle.parentElement.appendChild($coin)

    const offsetX = event.clientX - rect.left - $coin.clientWidth / 2
    const offsetY = event.clientY - rect.top + $coin.clientWidth / 2

    $coin.style.left = `${offsetX}px`
    $coin.style.top = `${offsetY}px`

    setScore(getScore() + 1)

    setTimeout(() => {
        $coin.remove()
    }, 2000)
})