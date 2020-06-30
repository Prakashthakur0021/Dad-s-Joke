const jokeEl = document.querySelector("#joke");
const btn = document.querySelector("#btn");

generateJoke();

btn.addEventListener("click", generateJoke);

async function generateJoke() {
  // call the joke Api
  const jokeRes = await fetch(" https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeRes.json();

  // set new joke
  jokeEl.innerHTML = joke.joke;
}
