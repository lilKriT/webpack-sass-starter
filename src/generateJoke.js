import axios from "axios";

const generateJoke = () => {
  // return "I don't trust stairs. Haha!";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.querySelector("#advice").innerText = res.data.joke;
  });
};

export default generateJoke;
