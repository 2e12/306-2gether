import axios from 'axios';

export function uploadFile(file) {
  var url = `https://api.cloudinary.com/v1_1/twogether/upload`;
  var fd = new FormData();
  fd.append("upload_preset", 'sk8mlbzh');
  fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
  fd.append("file", file);
  const config = {
    headers: { "X-Requested-With": "XMLHttpRequest" },
  };
  axios.post(url, fd, config)
  .then(function (res) {
    var response = res.data;
    console.log(response);
  })
  .catch(function (err) {
    console.error('err', err);
  });
};