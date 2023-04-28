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

    const fetchOptions = this.setOptions({ body, method, signal, type });

    try {
      const response = {
        data: null,
        error: null,
      };

      const data = await fetch(
        `${baseUrl || this.baseUrl}${path}${queryString}`,
        fetchOptions
      );

      if (!data.ok) {
        throw new Error('Failed fetch request!');
      }

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

  post = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
    body,
  }) => {
    const method = 'POST';

    const formattedBody = this.contentFormatter(body, type);

    const response = await this.request({
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
      body: formattedBody,
      method,
    });

    return response;
  };

  put = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
    body,
  }) => {
    const method = 'PUT';

    const formattedBody = this.contentFormatter(body, type);

    const response = await this.request({
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
      body: formattedBody,
      method,
    });

    return response;
  };

  patch = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
    body,
  }) => {
    const method = 'PATCH';

    const formattedBody = this.contentFormatter(body, type);

    const response = await this.request({
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
      body: formattedBody,
      method,
    });

    return response;
  };

  delete = async ({
    baseUrl,
    path,
    queryString,
    requestParams,
    type = ConetntType.Json,
  }) => {
    const method = 'DELETE';

    const response = await this.request({
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
      method,
    });

    return response;
  };

  contentFormatter = (body, type) => {
    if (type === new ConetntType().Json) {
      return JSON.stringify(body);
    }
    if (type === new ConetntType().FormData) {
      const formData = new FormData();
      body.forEach((value) => {
        formData.append(value);
      });
      return formData;
    }
    return body;
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

  setOptions = ({ body, method, signal, type }) => {
    const options = {
      headers: {
        ...baseParams.headers,
        'Content-Type': type,
      },
    };

    body ? (options.body = this.contentFormatter(body)) : null;
    method ? (options.method = method) : null;
    signal ? (options.signal = signal) : null;

    return options;
  };
}
