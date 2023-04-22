import { v4 as uuidv4 } from 'uuid';

export const techArticles = [
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage: 'https://static.toss.im/illusts-content/img-tech-cover.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/center.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/declarative.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/01/js_center.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'mock_title',
    content: 'mock_content',
    thumbnailImage: 'https://wp.toss.tech/wp-content/uploads/2022/12/01-1.png',
    user: {
      profile: 'mock_profile',
      name: 'mock_name',
      position: 'mock_position',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage: 'mock_thumbnailImage',
      },
    ],
  },
];
