import {
  DESIGN_ARTICLES,
  DESIGN_ARTICLE_DETAIL,
  TECH_ARTICLE_DETAIL,
} from './../config';
import { TECH_ARTICLES } from '../config';
import {
  ContentType,
  RequestData,
  RequestHeaders,
  ViewSection,
} from '../types';

export default class HttpClient {
  private baseUrl: string;
  private requestInit: RequestInit;
  private requestUrl: string;
  private haaders = new Headers();

  constructor(baseUrl: string, requestHeader: RequestHeaders) {
    this.baseUrl = baseUrl;
    this.requestInit = { headers: {} };
    this.setHeaders(requestHeader);
  }

  async request<FetchResponse>(
    requestData: RequestData
  ): Promise<FetchResponse> {
    this.setRequestUrl(requestData);

    this.setrequestInit(requestData);

    try {
      const data = await fetch(this.requestUrl, this.requestInit);

      if (!data.ok) {
        throw new Error('Failed fetch request!');
      }

      return await data.json();
    } catch (error) {
      throw new Error('Failed fetch request!');
    }
  }

  async get<FetchResponse>(requestData: RequestData): Promise<FetchResponse> {
    requestData.method = 'GET';

    const response = await this.request<FetchResponse>(requestData);

    return response;
  }

  async post<FetchResponse>(requestData: RequestData): Promise<FetchResponse> {
    const { body, contentType } = requestData;

    const formattedBody = this.contentFormatter(body, contentType);

    requestData.body = formattedBody;

    requestData.method = 'POST';

    const response = await this.request<FetchResponse>(requestData);

    return response;
  }

  async put<FetchResponse>(requestData: RequestData): Promise<FetchResponse> {
    const { body, contentType } = requestData;

    const formattedBody = this.contentFormatter(body, contentType);

    requestData.method = 'PUT';

    requestData.body = formattedBody;

    const response = await this.request<FetchResponse>(requestData);

    return response;
  }

  async patch<FetchResponse>(requestData: RequestData): Promise<FetchResponse> {
    const { body, contentType } = requestData;

    const formattedBody = this.contentFormatter(body, contentType);

    requestData.method = 'PATCH';
    requestData.body = formattedBody;

    const response = await this.request<FetchResponse>(requestData);

    return response;
  }

  async delete<FetchResponse>(
    requestData: RequestData
  ): Promise<FetchResponse> {
    requestData.method = 'DELETE';

    const response = await this.request<FetchResponse>(requestData);

    return response;
  }

  contentFormatter = (body: any, contnetType?: ContentType) => {
    if (contnetType === 'application/json') {
      return JSON.stringify(body);
    }
    if (contnetType === 'multipart/form-data') {
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

  setrequestInit = (requestData: RequestData) => {
    const paramKeys = Object.keys(requestData);
    for (const key of paramKeys) {
      if (key === 'body' && requestData[key]) {
        this.requestInit[key] = this.contentFormatter(requestData[key]);
        continue;
      }

      if (key === 'contentType' && requestData[key]) {
        this.haaders.append('Content-Type', requestData[key]);
        continue;
      }

      if (key === 'signal' && requestData[key]) {
        this.requestInit.signal = requestData[key];
      }
    }

    this.requestInit.headers = this.haaders;
  };

  setRequestUrl = (requestData: RequestData) => {
    const { path, requestParams, queryString, baseUrl } = requestData;
    const formattedPath = this.setPathByRequstParams(path, requestParams);

    const formattedQueryString = new URLSearchParams(queryString).toString();
    this.requestUrl = `${
      baseUrl || this.baseUrl
    }${formattedPath}${formattedQueryString}`;
  };

  setHeaders = (requestHeader: RequestHeaders) => {
    const { contentType, token } = requestHeader;
    if (contentType) {
      this.haaders.append('Content-Type', requestHeader.contentType);
    }

    if (token) {
      this.haaders.append('Authorization', `Bearer ${token}`);
    }
  };
}

export class ArticleListApi extends HttpClient {
  private section: ViewSection;

  constructor(section: ViewSection) {
    const baseUrl = '';
    const requestHeaders: RequestHeaders = { contentType: 'application/json' };
    super(baseUrl, requestHeaders);
    this.section = section;
  }

  async get<FetchResponse>(): Promise<FetchResponse> {
    const path = this.section === 'tech' ? TECH_ARTICLES : DESIGN_ARTICLES;
    const method = 'GET';
    const response = await this.request<FetchResponse>({ path, method });

    return response;
  }
}

export class ArticleDetailApi extends HttpClient {
  constructor() {
    const baseUrl = '';
    const requestHeaders: RequestHeaders = { contentType: 'application/json' };
    super(baseUrl, requestHeaders);
  }

  async get<FetchResponse>(): Promise<FetchResponse> {
    const path = window.location.pathname;

    const id = path.split('article/')[1];
    const url = path.startsWith('/tech')
      ? TECH_ARTICLE_DETAIL
      : DESIGN_ARTICLE_DETAIL;

    const filteredUrl = url.replace(':articleId', id);

    const method = 'GET';
    const response = await this.request<FetchResponse>({
      path: filteredUrl,
      method,
    });

    return response;
  }
}
