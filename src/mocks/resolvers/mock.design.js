import { v4 as uuidv4 } from 'uuid';

export const designArticles = [
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: '첫 그래픽 디자이너가 했던 가장 비효율적인 일',
    content:
      '그래픽 디자이너가 처음 일을 시작할 때, 비효율적인 작업을 할 가능성이 많습니다. 저 역시 그래픽 디자이너로 일을 시작할 때 비효율적인 작업을 하였기 때문에, 이번 기회에 그 경험을 공유하고자 합니다.\n\n가장 비효율적인 일은 바로 작업 환경 설정이었습니다. 저는 단순히 디자인 작업을 하기 위해 작업 환경을 설정하는 데 몇 일이 걸렸습니다. 작업 환경을 설정하고 나니, 디자인에 필요한 프로그램을 설치하고 사용하기 위한 다양한 툴과 라이브러리를 찾아내야 했습니다. 또한, 이 프로그램과 툴을 모두 사용할 수 있는 능력을 키우기 위해 많은 시간을 투자해야 했습니다. 이는 디자인 작업에 대한 의욕을 상실하게 만들기도 했습니다.',
    thumbnailImage:
      'https://static.toss.im/assets/toss-tech/00074-3438188018.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
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
    title: '첫 UX writer는 무슨 일을 해야 할 까',
    content:
      '첫 UX writer가 해야 할 일은 사용자 경험과 관련된 콘텐츠를 작성하는 것입니다. UX writer는 사용자가 제품이나 서비스를 사용하는 과정에서 마주할 수 있는 모든 텍스트, 문구, 라벨, 버튼 등의 콘텐츠를 작성하는 역할을 담당합니다. 이러한 콘텐츠는 사용자 경험에 직접적인 영향을 미치기 때문에, UX writer는 제품이나 서비스의 성공에 매우 중요한 역할을 수행합니다.\n\n첫 UX writer가 해야 할 일은 다음과 같습니다.\n첫째로, 사용자의 목표와 요구사항을 이해하는 것입니다. UX writer는 사용자가 제품이나 서비스를 사용하는 목적과 그들이 원하는 기능을 파악해야 합니다. 이를 위해 사용자 조사, 피드백, 검증 및 분석을 수행하는 것이 좋습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2022/12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA-2022-12-22-%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE-4.19.28.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
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
    title: '내 아이디어를 너무 밎지 마세요',
    content:
      '"내 아이디어를 너무 밀어내지 마세요"는 새로운 아이디어를 제시한 사람이 자신의 아이디어가 거절당하거나 경시당할 때 느끼는 감정을 표현한 말입니다. 이는 새로운 아이디어를 제시하는 사람들이 자신의 아이디어를 소중하게 여기고, 그것이 실현될 가능성이 있다는 믿음을 가지고 있기 때문입니다.\n\n 그러나 많은 경우, 새로운 아이디어를 제시하는 사람들은 자신의 아이디어가 받아들여지지 않는 상황을 맞이하게 됩니다. 이 때 다른 사람들은 그들의 아이디어가 부적절하거나 실현 가능성이 없는 것으로 여길 수 있습니다. 하지만 이는 그들의 아이디어를 완전히 무시하는 것이 아니라, 객관적인 시각에서 이를 살펴보는 것일 수 있습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/thumbnail-03.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
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
    title: '첫 그래픽 디자이너가 했던 가장 비효율적인 일',
    content:
      '그래픽 디자이너가 처음 일을 시작할 때, 비효율적인 작업을 할 가능성이 많습니다. 저 역시 그래픽 디자이너로 일을 시작할 때 비효율적인 작업을 하였기 때문에, 이번 기회에 그 경험을 공유하고자 합니다.\n\n가장 비효율적인 일은 바로 작업 환경 설정이었습니다. 저는 단순히 디자인 작업을 하기 위해 작업 환경을 설정하는 데 몇 일이 걸렸습니다. 작업 환경을 설정하고 나니, 디자인에 필요한 프로그램을 설치하고 사용하기 위한 다양한 툴과 라이브러리를 찾아내야 했습니다. 또한, 이 프로그램과 툴을 모두 사용할 수 있는 능력을 키우기 위해 많은 시간을 투자해야 했습니다. 이는 디자인 작업에 대한 의욕을 상실하게 만들기도 했습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/design-article-14-og.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
    },
    recommendedPosts: [
      {
        id: uuidv4(),
        createdAt: new Date(),
        title: 'mock_title',
        thumbnailImage:
          'https://wp.toss.tech/wp-content/uploads/2023/03/og-image-1.png',
      },
    ],
  },
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: '첫 UX writer는 무슨 일을 해야 할 까',
    content:
      '첫 UX writer가 해야 할 일은 사용자 경험과 관련된 콘텐츠를 작성하는 것입니다. UX writer는 사용자가 제품이나 서비스를 사용하는 과정에서 마주할 수 있는 모든 텍스트, 문구, 라벨, 버튼 등의 콘텐츠를 작성하는 역할을 담당합니다. 이러한 콘텐츠는 사용자 경험에 직접적인 영향을 미치기 때문에, UX writer는 제품이나 서비스의 성공에 매우 중요한 역할을 수행합니다.\n\n첫 UX writer가 해야 할 일은 다음과 같습니다.\n첫째로, 사용자의 목표와 요구사항을 이해하는 것입니다. UX writer는 사용자가 제품이나 서비스를 사용하는 목적과 그들이 원하는 기능을 파악해야 합니다. 이를 위해 사용자 조사, 피드백, 검증 및 분석을 수행하는 것이 좋습니다.',
    thumbnailImage:
      'https://static.toss.im/assets/toss-tech/cover-1st-interactiondesigner.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
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
    title: '내 아이디어를 너무 밎지 마세요',
    content:
      '"내 아이디어를 너무 밀어내지 마세요"는 새로운 아이디어를 제시한 사람이 자신의 아이디어가 거절당하거나 경시당할 때 느끼는 감정을 표현한 말입니다. 이는 새로운 아이디어를 제시하는 사람들이 자신의 아이디어를 소중하게 여기고, 그것이 실현될 가능성이 있다는 믿음을 가지고 있기 때문입니다.\n\n 그러나 많은 경우, 새로운 아이디어를 제시하는 사람들은 자신의 아이디어가 받아들여지지 않는 상황을 맞이하게 됩니다. 이 때 다른 사람들은 그들의 아이디어가 부적절하거나 실현 가능성이 없는 것으로 여길 수 있습니다. 하지만 이는 그들의 아이디어를 완전히 무시하는 것이 아니라, 객관적인 시각에서 이를 살펴보는 것일 수 있습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/og-image.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'ui-designer',
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
