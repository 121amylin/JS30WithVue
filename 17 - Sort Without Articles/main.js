const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function trimPreposition(text) {
  return text.replace(/^(a |the |an )/i, '').trim()
}
const list = bands.sort((a, b) => trimPreposition(a) > trimPreposition(b) ? 1 : -1)

new Vue({
  el:'#bands',
  data(){
    return{
      list
    }
  }
})