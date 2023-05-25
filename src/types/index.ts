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
