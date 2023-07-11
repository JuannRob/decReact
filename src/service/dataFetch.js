import axios from "axios";

export function fetchData() {
  axios
    .get("http://localhost:5000/decretos")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
