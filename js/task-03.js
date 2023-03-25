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
