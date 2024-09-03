import axios from "axios";
async function postData(url, data) {
  try {
    const res = await axios({
      method: "post",
      url: url,
      data: data,
    });

    return { status: true, data: res.data };
  } catch (err) {
    return { status: false, data: err };
  }
}

export default postData;
