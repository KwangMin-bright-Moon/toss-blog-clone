export class ArticleDto {
  constructor(id, title, content, createdAt, thumbnailImage) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt.substr(0, 10);
    this.thumbnailImage = thumbnailImage;
  }
}

export class ArticleDetailDto extends ArticleDto {
  constructor(
    id,
    title,
    content,
    createdAt,
    thumbnailImage,
    user,
    recommendedArticles
  ) {
    super(id, title, content, createdAt, thumbnailImage);
    (this.user = user), (this.recommendedArticles = recommendedArticles);
  }
}

export class User {
  constructor(profile, name, position) {
    (this.profile = profile), (this.name = name), (this.position = position);
  }
}
