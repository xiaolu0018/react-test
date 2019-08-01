import axios from 'axios'
import qs from 'qs'

var CancelToken = axios.CancelToken;
//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


//返回状态判断
axios.interceptors.response.use((res) => {
  res.data.isError && (res.data.success = false);
  if (res.data.NO_LOGIN && res.data.NO_LOGIN === "NO_LOGIN") {
    window.location.href = window.location.origin;
    return;
  }
  return res;
}, (error) => {
  //	if(error.response.status == 555){
  //		top.location.href = baseURL + "/noRight.shtml";
  //	}else if(error.response.status == 404){
  //		top.location.href = baseURL + "/404.shtml?t=" + new Date().getTime();
  //	}

  return Promise.resolve({
    data: {
      success: false,
      message: error.message ? error.message : ('网络异常,status ' + error.response.status)
    }
  });
});


axios.defaults.method = 'post';
axios.defaults.baseURL = window.location.origin;

export default function (url, data = {}, method = 'post',type = 'application/x-www-form-urlencoded', cancelObj) {
  return new Promise((resolve, reject) => {
    let config = {
      method: method,
      url: url + "?t=" + new Date().getTime(),
      headers: {
        'Content-Type': type,
        'X-Requested-With': "XMLHttpRequest"
      },
      CancelToken: new CancelToken(function (f) {
        if (cancelObj) {
          if (!cancelObj.hasOwnProperty(url)) {
            cancelObj[url] = f;
          }
        }

      }),
    };
    if (method && method === 'get') {
      config.params = data;
    } else {
      config.data = data;
    }

    // axios.post(url + "?t=" + new Date().getTime(), data, {
    //   headers: {
    //     'Content-Type': type,
    //     'X-Requested-With': "XMLHttpRequest"
    //   },
    //   CancelToken: new CancelToken(function (f) {
    //     if (cancelObj) {
    //       if (!cancelObj.hasOwnProperty(url)) {
    //         cancelObj[url] = f;
    //       }
    //     }

    //   }),
    // })
    axios(config).then(response => {
      resolve(response.data);
    }, err => {
      resolve({
        data: {
          success: false,
          message: err.message ? err.message : ('网络异常,status ' + err.response.status)
        }
      });
    })
      .catch((err) => {
        resolve({
          data: {
            success: false,
            message: err.message ? err.message : ('网络异常,status ' + err.response.status)
          }
        });
      })
  })
}




