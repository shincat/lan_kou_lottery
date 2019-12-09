export default function uiAdapter() {
  let h = document.documentElement.offsetHeight || document.body.offsetHeight
  if (h < 1300) return true
  else return false
}
