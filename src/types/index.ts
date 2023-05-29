import View from '../view/view';

// Data Schema
export interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  thumbnailImage: string;
}

export interface ArticleDetail extends Article {
  user: User;
}

export interface User {
  id: string;
  name: string;
  position: string;
  profile: string;
}

// Route
export interface Route {
  path: string;
  view: View;
}

// View
export type ViewSection = 'tech' | 'design';

export interface ViewData {
  containerId: string;
  template?: string;
  section?: ViewSection;
}

// Api
export interface RequestData {
  baseUrl?: string;
  path: string;
  queryString?: string;
  requestParams?: any;
  contentType?: ContentType;
  body?: any;
  method: Method;
  signal?: AbortSignal;
}

export interface RequestHeaders {
  contentType?: ContentType;
  token?: string;
}

export type ContentType = 'application/json' | 'multipart/form-data';

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
