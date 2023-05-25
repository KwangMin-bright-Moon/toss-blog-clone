class ConetntType {
  private _json = 'application/json';
  private _formData = 'multipart/form-data';

  get json() {
    return this._json;
  }

  get formData() {
    return this._formData;
  }
}

interface RequestData {
  baseUrl?: string;
  path: string;
  queryString?: string;
  requestParams?: any;
  type?: string;
  body?: any;
  method: string;
  signal?: string;
}

export default class HttpClient {
  private baseUrl = '';
  private baseParams: any = {
    headers: {},
  };
  private response: any;

  constructor(baseUrl: string, headers: {}) {
    this.baseUrl = baseUrl ? baseUrl : '';
    this.baseParams.headers = headers ? headers : {};
    this.response = {
      data: null,
      error: null,
    };
  }

  request = async (requestData: RequestData) => {
    const {
      baseUrl,
      path,
      queryString,
      requestParams,
      type,
      body,
      method,
      signal,
    } = requestData;
    const _path = this.setPathByRequstParams(path, requestParams);

    const _queryString = new URLSearchParams(queryString).toString();

    this.setBaseParams({ body, method, signal, type });

    try {
      const data = await fetch(
        `${baseUrl || this.baseUrl}${_path}${_queryString}`,
        this.baseParams
      );

      if (!data.ok) {
        throw new Error('Failed fetch request!');
      }

      this.response.data = await data.json();
    } catch (error) {
      this.response.error = error;
    }

    return this.response;
  };

  get = async (requestData: RequestData) => {
    requestData.method = 'GET';

    const response = await this.request(requestData);

    return response;
  };

  post = async (requestData: RequestData) => {
    const { body, type } = requestData;

    const formattedBody = this.contentFormatter(body, type);

    requestData.body = formattedBody;

    requestData.method = 'POST';

    const response = await this.request(requestData);

    return response;
  };

  put = async (requestData: RequestData) => {
    const { body, type } = requestData;

    const formattedBody = this.contentFormatter(body, type);

    requestData.method = 'PUT';
    requestData.body = formattedBody;

    const response = await this.request(requestData);

    return response;
  };

  patch = async (requestData: RequestData) => {
    const { body, type } = requestData;

    const formattedBody = this.contentFormatter(body, type);

    requestData.method = 'PATCH';
    requestData.body = formattedBody;

    const response = await this.request(requestData);

    return response;
  };

  delete = async (requestData: RequestData) => {
    requestData.method = 'DELETE';

    const response = await this.request(requestData);

    return response;
  };

  contentFormatter = (body: any, type?: string) => {
    if (type === new ConetntType().json) {
      return JSON.stringify(body);
    }
    if (type === new ConetntType().formData) {
      const formData = new FormData();
      body.forEach((value: any) => {
        formData.append(`${value}`, value);
      });
      return formData;
    }
    return body;
  };

  setPathByRequstParams = (path: string, params: any) => {
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

  setBaseParams = (params: any) => {
    const paramKeys = Object.keys(params);
    for (const key of paramKeys) {
      if (key === 'body' && params[key]) {
        this.baseParams[key] = this.contentFormatter(params[key]);
        continue;
      }

      if (key === 'type' && params[key]) {
        this.baseParams.headers['Content-Type'] = params[key];
        continue;
      }

      this.baseParams[key] = params[key];
    }
  };
}
