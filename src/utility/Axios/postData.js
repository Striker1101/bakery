import axios from "axios";
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
    console.log(err);
    if (err.response.status == 400 || err.status === 400) {
      if (err.response.data.errors) {
        const errors = err.response.data.errors;
        errors.forEach((error) => {
          toast.error(`Error: ${error.msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    } else {
      toast.error("An unexpected error occurred", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  }
}

export default postData;
