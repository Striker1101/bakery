const { default: axios } = require("axios");
const { toast } = require("react-toastify");

async function postData(url, data, success_message) {
  try {
    const res = await axios({
      method: "post",
      url: url,
      data: data,
    });
    toast.success(success_message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return res.data;
  } catch (err) {
    if (err.response.status == 400) {
      //toast.error(`Error: ${err.response.data.errors}`);
      console.log(err.response.data.errors);
    } else {
      console.log(err);
    }
  }
}

export default postData;
