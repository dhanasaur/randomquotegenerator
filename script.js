async function displayRandomQuote() {
  const quoteText = document.getElementById("quote");
  quoteText.textContent = "...";

  try {
    let data;
    while (true) {
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) throw new Error("API failure");
      data = await response.json();
      if (data.quote.toLowerCase().includes("love") && data.author.toLowerCase().includes("rumi")) {
        quoteText.textContent = `"${data.quote}"\n\n— ${data.author}`;
        return;
      }
    }
  } catch (err) {
    quoteText.textContent = "Hack failed! Could not get a quote. Try again.";
    console.error("Error fetching quote:", err);
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    displayRandomQuote();
  }
});
