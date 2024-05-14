
let btn = document.getElementById("btnn");

btn.addEventListener("click", async () => {
  let bk = document.getElementById("inbook").value;
  let chap = document.getElementById("inchap").value;
  let ver = document.getElementById("inverr").value;

  let data = await getVerse(bk, chap, ver);

  document.getElementById("name").textContent = data.reference;
  document.getElementById("text").textContent = data.text;
})

function getVerse(book, chapter, verse) {
  return fetch(`https://bible-api.com/${book} ${chapter}:${verse}`)
  .then(res => res.json())
  .then(data => data);
}