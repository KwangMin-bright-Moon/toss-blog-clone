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

export type ViewSection = 'tech' | 'design';
