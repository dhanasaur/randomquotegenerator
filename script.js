async function displayRandomQuote() {
  const quoteText = document.getElementById("quote");
  quoteText.textContent = "...";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) throw new Error("API failure");
    const data = await response.json();
    quoteText.textContent = `"${data.quote}"\n\n— ${data.author}`;
  } catch (err) {
    quoteText.textContent = "Hack failed! Could not get a quote. Try again.";
    console.error("Error fetching quote:", err);
  }
}

// 👇 You forgot this part originally
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayRandomQuote();
  }
});
