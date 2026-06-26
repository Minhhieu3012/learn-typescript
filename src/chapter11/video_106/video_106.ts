export {};

const btnElement = document.getElementById("myBtn");

//intersection
const inputElement = document.getElementById("name") as HTMLInputElement;

btnElement?.addEventListener("click", () => {
  alert(inputElement.value);
});
