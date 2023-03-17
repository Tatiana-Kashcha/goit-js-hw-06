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
const galleryImages = document.querySelector(".gallery");
galleryImages.style.backgroundColor = "#f1b6a1";
galleryImages.style.display = "flex";
galleryImages.style.listStyle = "none";
galleryImages.style.justifyContent = "center";
galleryImages.style.padding = "30px 0";

const itemImages = images.forEach((item) => {
  const imageItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = item.url;
  image.alt = item.alt;
  image.height = 200;
  image.style.display = "block";

  imageItem.style.marginLeft = galleryImages.hasChildNodes() ? "30px" : "0";

  galleryImages.append(imageItem);
  imageItem.append(image);
});
console.log(galleryImages);
