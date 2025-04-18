let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let image = document.querySelector("img");


async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        return "Image Not Found";
    }
}

btn.addEventListener("click", async () => {
    let data = await getImage();
    image.src = data;
})