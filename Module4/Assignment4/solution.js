const form = document.getElementById("searchForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = document.getElementById("query").value;

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then(response => response.json())
    .then(data => {

      const results = document.getElementById("results");


      results.innerHTML = "";

      for (let i = 0; i < data.length; i++) {

        const show = data[i].show;


        const article = document.createElement("article");


        const h2 = document.createElement("h2");
        h2.textContent = show.name;
        article.appendChild(h2);


        const link = document.createElement("a");
        link.href = show.url;
        link.textContent = "View details";
        link.target = "_blank";
        article.appendChild(link);


        const img = document.createElement("img");
        img.src = show.image && show.image.medium
            ? show.image.medium
            : "https://placehold.co/210x295?text=Not%20Found";
        article.appendChild(img);


        const summary = document.createElement("div");
        summary.innerHTML = show.summary;
        article.appendChild(summary);


        results.appendChild(article);
      }
    });
});