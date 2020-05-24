import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

export function submitSlides(formData) {
  axios.post(BASE_URL + '/convert_slides_to_video', formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}