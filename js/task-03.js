const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryImagesEl = document.querySelector(".gallery");

const makeGalleryImages = (imgEl) => {
  const { url, alt } = imgEl;
  return `<li class="list-item"><img class="gallery-item" src=${url} alt=${alt} height = 200></li>`; //стилі додані в CSS
};
const itemImages = images.map(makeGalleryImages).join("");
galleryImagesEl.insertAdjacentHTML("beforeend", itemImages);

console.log(galleryImagesEl);

//---------------------------------------------------------------------------
// 3TASK 2варіант - Подивіться, будьласка, чи правильно виконано іншим методом?

// const galleryImagesEl = document.querySelector(".gallery");
// galleryImagesEl.style.backgroundColor = "#f1b6a1";
// galleryImagesEl.style.display = "flex";
// galleryImagesEl.style.listStyle = "none";
// galleryImagesEl.style.justifyContent = "center";
// galleryImagesEl.style.padding = "30px 0";

// const itemImages = images.map(({ url, alt }) => {
//   const imageItemEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.height = 200;
//   imageEl.style.display = "block";
//   imageItemEl.style.marginLeft = "30px";

//   imageItemEl.append(imageEl);
//   return imageItemEl;
// });
// galleryImagesEl.append(...itemImages);
// galleryImagesEl.firstElementChild.style.marginLeft = "0";
// console.log(galleryImagesEl);
