function findVideos() {
  let e = document.querySelectorAll(".video-block")
  for (let t = 0; t < e.length; t++) setupVideo(e[t])
}
function setupVideo(e) {
  let t = e.querySelector(".video-block__link"),
    r = e.querySelector(".video-block__media"),
    i = e.querySelector(".video-block__button"),
    o = parseMediaURL(r)
  e.addEventListener("click", () => {
    let r = createIframe(o)
    t.remove(), i.remove(), e.appendChild(r)
  }),
    t.removeAttribute("href"),
    e.classList.add("video-block--enabled")
}
function parseMediaURL(e) {
  return e.src.match(
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i
  )[1]
}
function createIframe(e) {
  let t = document.createElement("iframe")
  return (
    t.setAttribute("allowfullscreen", ""),
    t.setAttribute("allow", "autoplay"),
    t.setAttribute("src", generateURL(e)),
    t.classList.add("video-block__media"),
    t
  )
}
function generateURL(e) {
  return "https://www.youtube.com/embed/" + e + "?rel=0&showinfo=0&autoplay=1"
}
findVideos()
