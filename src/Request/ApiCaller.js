import axios from "axios";

const headerGenerator = () => {

    let headers = [];

    let headerList = [
        {key: 'Content-Type',value: 'application/json'}
        // {key: 'Authorization',value: 'Tokjakshdfjklashdfjklasdhfjklashden'}
      ];

    headers = headerList.map( (item) => {
        return (
          `${item.key} : ${item.value},`
        );
      });

    return headers;
}

export function axiosRequest (url,method) {
    return axios.request({
        url: url,
        method: method,
        baseURL: "https://testi-71023-default-rtdb.europe-west1.firebasedatabase.app/",
        // responseType: 'json'
        // headers: headerGenerator
    });
}