import axios from "axios"
const API = "https://gorest.co.in/public-api/";
const TOKEN ="234f85d94bbc10472228b9081a21d1b634bef342e7a9c198bec6733ade2c8a8f";

export const axiosServiceBasic = async (service, method, data = null) => {
    let config = {
        method: method,
        timeout:200,
        url: `${API}${service}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      };
      if (data !== null && data !== undefined) {
        config.data = data;
      }
      try {
        return await axios(config);
      } catch (err) {
        console.log(err);
        return null;
      }
};



export const axiosService = async (service, method, data = null) => {
    let response;
    let config = {
      method: method,
      url: `${API}${service}`,
      timeout:90000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    if (data !== null && data !== undefined) {
      config.data = data;
    }
  
    try {
      response = await axios(config);
      if (response.status === 200) {
        return {
          error:
            response.data.code === 200 ||
            response.data.code === 201 ||
            response.data.code === 204
              ? false
              : true,
          response: response.data.data,
          status: response.data.code,
        };
      } else {
        return {
          error: true,
          response: null,
          status: response.status,
        };
      }
    } catch (err) {
      console.log(err);
      return {
        error: true,
        response: null,
        status: null,
      };
    }
  };