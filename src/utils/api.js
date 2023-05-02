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

export default class HttpClient {
  #baseUrl = '';
  #baseParams = {
    headers: {},
  };

  constructor(baseUrl, headers) {
    this.#baseUrl = baseUrl ? baseUrl : '';
    this.#baseParams.headers = headers ? headers : {};
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
    path = this.setPathByRequstParams(path, requestParams);

    queryString = new URLSearchParams(queryString).toString();

    this.setBaseParams({ body, method, signal, type });

    const response = {
      data: null,
      error: null,
    };
    try {
      const data = await fetch(
        `${baseUrl || this.#baseUrl}${path}${queryString}`,
        this.#baseParams
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

  setPathByRequstParams = (path, params) => {
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

  setBaseParams = (params) => {
    const paramKeys = Object.keys(params);
    for (const key of paramKeys) {
      if (key === 'body' && params[key]) {
        this.#baseParams[key] = this.contentFormatter(params[key]);
        continue;
      }

      if (key === 'type' && params[key]) {
        this.#baseParams.headers['Content-Type'] = params[key];
        continue;
      }

      this.#baseParams[key] = params[key];
    }
  };
}
