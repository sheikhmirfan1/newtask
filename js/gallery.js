
const galleryApi = (str) => {
  fetch(str)
    .then((response) => response.json())
    .then((data) => {
      const wrapper = document.querySelector(".wrapper");
      console.log(data.collection.items);

      const linksData = data.collection.items.filter((item) => item.links);
      wrapper.innerHTML = "";
      linksData.map((item) => {
        const template = `
          <img class ="img-api" src='${item.links[0].href}' />
        `;

        wrapper.innerHTML += template;
      });
    });
};
const gtn1 = document.querySelector("#btn1");

gtn1.addEventListener("click", (event) => {
  event.preventDefault();

  let txtsearch = document.querySelector("#txtsearch");
  let str = txtsearch.value;
  let str2 = "https://images-api.nasa.gov/search?q=" + str + "&page_size=09";
  galleryApi(str2);
});

