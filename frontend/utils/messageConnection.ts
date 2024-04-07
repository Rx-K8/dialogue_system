import axios from "axios";

const url = "http://127.0.0.1:8000/message/";

export function getSystemMessage(userMessage: string) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        text: userMessage,
      })
      .then(function (response) {
        resolve(response.data.text);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
