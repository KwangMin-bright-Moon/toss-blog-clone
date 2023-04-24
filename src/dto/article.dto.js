export class ArticleDto {
  constructor(id, title, createdAt, thumbnailImage) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.thumbnailImage = thumbnailImage;
  }
}

export class ArticleDetailDto extends ArticleDto {
  constructor(id, title, createdAt, thumbnailImage, user, recommendedArticles) {
    super(id, title, createdAt, thumbnailImage);
    (this.user = user), (this.recommendedArticles = recommendedArticles);
  }
}

export class User {
  constructor(profile, name, position) {
    (this.profile = profile), (this.name = name), (this.position = position);
  }
}
