// 1. query param => p1 => 과제
// 2. header => p0 => ok
// 3. instance => p0 => ok
// 4. error => p2
// 5. json / formdata => p3 =>  ok
// 6. abort controller => p4

class ConetntType {
  #json = 'application/json';
  #formData = 'multipart/form-data';

  get Json() {
    return this.#json;
  }

  get FormData() {
    return this.#formData;
  }
}

class HttpClient {
  baseUrl = '';
  baseParams = {
    headers: {},
  };

  constructor(config) {
    Object.assign(this, config);
  }

  contentFormatter = (type) => {
    const body = type; // 타입에 따른 바디 포맷 코드
    return body;
  };

  request = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
    body,
    method,
    signal,
  }) => {
    path = this.setPathByParams(path, requestParams);
    queryString = new URLSearchParams(queryString).toString();

    const options = {
      headers: {
        ...baseParams.headers,
        'Content-Type': type,
      },
    };

    body ? (options.body = this.contentFormatter(body)) : null;
    method ? (options.method = method) : null;
    signal ? (options.signal = signal) : null;

    try {
      const response = {
        data: null,
        error: null,
      };

      const data = await fetch(
        `${baseUrl || this.baseUrl}${path}${queryString}`,
        options
      );

      response.data = await data.json();
    } catch (error) {
      response.error = error;
    }

    return response;
  };

  get = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
  }) => {
    const response = await this.request({
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
    });
    return response;
  };

  setPathByParams = (path, params) => {
    const definedParams = path.split('/').filter((p) => p.startsWith(':'));
    definedParams.forEach((definedParam) => {
      const paramValue = params[definedParam.substring(1)];
      if (paramValue === undefined) {
        throw new Error('정의된 파라미터와 일치하는 요청 파라미터가 없습니다.');
      }
      path = path.replace(definedParam, paramValue);
    });
    return path;
  };
}

const token = '';

const tossTechApi = new HttpClient({
  baseUrl: 'www.toss.im',
  baseParams: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});

const naverTechApi = new HttpClient({
  baseUrl: 'www.tech.naver.com',
  baseParams: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});

naverTechApi.request({ requestParams });

naverTechApi.request({
  path: '/lists',
  method: 'GET',
});

naverTechApi.get({});

naverTechApi.post({
  path: '/lists/:id',
});

naverTechApi.patch({
  path: "/list&keyword='foo'",
});
