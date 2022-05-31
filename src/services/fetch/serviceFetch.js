const API = "https://gorest.co.in/public-api/";
const TOKEN =
  "234f85d94bbc10472228b9081a21d1b634bef342e7a9c198bec6733ade2c8a8f";

export const fetchServiceBasic = async (service, method, data = null) => {
  const  timeout = 200;
  const abortFetch = new AbortController();
  const id = setTimeout(() => {
    abortFetch.abort()
  }, timeout);
  

  let response;
  let config = {
    method: method,
    signal: abortFetch.signal,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  if (data !== null && data !== undefined) {
    config.body = JSON.stringify(data);
  }
  try{
    response = await fetch(API + service, config);
    clearTimeout(id);
    return await response.json();
  }
  catch(err){
    console.log(err);
    return null;
  }


};




export const fetchService = async (service, method, data = null) => {
  const  timeout = 90000;
  const abortFetch = new AbortController();
  const id = setTimeout(() => {
    abortFetch.abort()
  }, timeout);

    let response;
    let dataResponse;
    let config = {
      method: method, 
      signal: abortFetch.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    if (data !== null && data !== undefined) {
      config.body = JSON.stringify(data);
    }
    try {
      response = await fetch(API + service, config);
      clearTimeout(id);
      if (response.status === 200) {
        dataResponse = await response.json();
        return {
          error:
            dataResponse.code === 200 ||
            dataResponse.code === 201 ||
            dataResponse.code === 204
              ? false
              : true,
          response: dataResponse.data,
          status: dataResponse.code,
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