import { v4 as uuidv4 } from 'uuid';

export const techArticles = [
  {
    id: uuidv4(),
    createdAt: new Date(),
    title: 'Spring Boot Actuator의 헬스체크 살펴보기',
    content:
      'Spring Boot Actuator는 스프링 부트 애플리케이션의 다양한 상태를 모니터링하고 관리하는 기능을 제공합니다. 그 중에서도 헬스체크(health check) 기능은 애플리케이션의 상태를 확인할 수 있는 가장 간단하고 유용한 기능 중 하나입니다. 이번 글에서는 Spring Boot Actuator의 헬스체크 기능에 대해 자세히 살펴보도록 하겠습니다.\n헬스체크란?\n헬스체크는 애플리케이션의 상태를 간단한 방법으로 확인할 수 있는 기능입니다. 일반적으로 HTTP 요청을 보내고, 응답 코드를 통해 애플리케이션의 상태를 파악합니다. 헬스체크는 애플리케이션의 상태를 모니터링하고, 장애 발생 시 빠르게 대응하기 위해 사용됩니다.',
    thumbnailImage: 'https://static.toss.im/illusts-content/img-tech-cover.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
    title: 'ESLint와 AST로 코드 퀄리티 높이기',
    content:
      'ESLint는 자바스크립트 코드의 품질을 검사하고 유지할 수 있는 뛰어난 도구 중 하나입니다. 이 도구는 코드 스타일 가이드, 버그 및 코드 오류를 검사하고 수정하는 데 도움이 됩니다. 또한, ESLint를 사용하여 코드의 가독성과 유지 보수성을 높일 수 있습니다. 이번 글에서는 ESLint와 AST(Abstract Syntax Tree)를 이용하여 코드 퀄리티를 높이는 방법에 대해 알아보도록 하겠습니다.\n\nESLint란?\nESLint는 자바스크립트 코드에서 버그, 코드 오류, 스타일 가이드 위반 등을 검사하고 수정하는 데 사용되는 도구입니다. ESLint는 자바스크립트 코드를 검사하기 전에 미리 정의된 규칙(룰)을 적용합니다. 룰은 개발자가 직접 작성할 수도 있습니다. ESLint는 자바스크립트 코드에서 발생하는 버그와 다양한 문제를 식별하고, 해결하는 데 도움이 됩니다.\n\nAST란?\nAST는 추상 구문 트리(Abstract Syntax Tree)의 약어로, 프로그래밍 언어의 구문을 분석하고, 트리 구조로 표현한 것입니다. AST는 코드 분석에 중요한 역할을 합니다. ESLint는 코드를 분석하고, AST를 생성하여 코드 검사를 수행합니다. AST를 생성하면, 코드에서 식별할 수 있는 패턴과 코드의 구조를 확인할 수 있습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/center.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
    title: 'tosspayments-restdocs: 선언형 문서 작성 라이브러리',
    content:
      '토스페이먼츠에서는 RESTful API 서비스를 개발하고 있습니다. 이러한 서비스는 API 사용 방법과 기능을 명확히 전달하는 문서가 필요합니다. 그리고 이 문서는 빠르게 업데이트되어야 하며, 개발자들이 API를 사용하면서 쉽게 검색하고 이해할 수 있어야 합니다. 이러한 요구사항을 충족하기 위해 토스페이먼츠에서는 Spring REST Docs를 사용하여 RESTful API 문서를 작성하고 있습니다. 이번 글에서는 토스페이먼츠에서 사용하는 tosspayments-restdocs 라이브러리에 대해 알아보겠습니다.\n\n tosspayments-restdocs란?\ntospayments-restdocs는 Spring REST Docs를 사용하여 선언형 문서를 작성하는 라이브러리입니다. 이 라이브러리는 Spring MVC 또는 Spring WebFlux와 함께 사용할 수 있습니다. tosspayments-restdocs는 API 요청 및 응답 예시와 함께 문서를 작성할 수 있으며, Markdown 또는 AsciiDoc으로 문서를 작성할 수 있습니다. 이 라이브러리는 문서 작성을 위한 자동화된 테스트 스크립트를 생성하므로, 개발자들은 코드 변경 사항에 대한 즉각적인 문서 업데이트를 수행할 수 있습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
    title: 'Spring Boot Actuator의 헬스체크 살펴보기',
    content:
      'Spring Boot Actuator는 스프링 부트 애플리케이션의 다양한 상태를 모니터링하고 관리하는 기능을 제공합니다. 그 중에서도 헬스체크(health check) 기능은 애플리케이션의 상태를 확인할 수 있는 가장 간단하고 유용한 기능 중 하나입니다. 이번 글에서는 Spring Boot Actuator의 헬스체크 기능에 대해 자세히 살펴보도록 하겠습니다.\n헬스체크란?\n헬스체크는 애플리케이션의 상태를 간단한 방법으로 확인할 수 있는 기능입니다. 일반적으로 HTTP 요청을 보내고, 응답 코드를 통해 애플리케이션의 상태를 파악합니다. 헬스체크는 애플리케이션의 상태를 모니터링하고, 장애 발생 시 빠르게 대응하기 위해 사용됩니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/03/declarative.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
    title: 'ESLint와 AST로 코드 퀄리티 높이기',
    content:
      'ESLint는 자바스크립트 코드의 품질을 검사하고 유지할 수 있는 뛰어난 도구 중 하나입니다. 이 도구는 코드 스타일 가이드, 버그 및 코드 오류를 검사하고 수정하는 데 도움이 됩니다. 또한, ESLint를 사용하여 코드의 가독성과 유지 보수성을 높일 수 있습니다. 이번 글에서는 ESLint와 AST(Abstract Syntax Tree)를 이용하여 코드 퀄리티를 높이는 방법에 대해 알아보도록 하겠습니다.\n\nESLint란?\nESLint는 자바스크립트 코드에서 버그, 코드 오류, 스타일 가이드 위반 등을 검사하고 수정하는 데 사용되는 도구입니다. ESLint는 자바스크립트 코드를 검사하기 전에 미리 정의된 규칙(룰)을 적용합니다. 룰은 개발자가 직접 작성할 수도 있습니다. ESLint는 자바스크립트 코드에서 발생하는 버그와 다양한 문제를 식별하고, 해결하는 데 도움이 됩니다.\n\nAST란?\nAST는 추상 구문 트리(Abstract Syntax Tree)의 약어로, 프로그래밍 언어의 구문을 분석하고, 트리 구조로 표현한 것입니다. AST는 코드 분석에 중요한 역할을 합니다. ESLint는 코드를 분석하고, AST를 생성하여 코드 검사를 수행합니다. AST를 생성하면, 코드에서 식별할 수 있는 패턴과 코드의 구조를 확인할 수 있습니다.',
    thumbnailImage:
      'https://wp.toss.tech/wp-content/uploads/2023/01/js_center.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
    title: 'tosspayments-restdocs: 선언형 문서 작성 라이브러리',
    content:
      '토스페이먼츠에서는 RESTful API 서비스를 개발하고 있습니다. 이러한 서비스는 API 사용 방법과 기능을 명확히 전달하는 문서가 필요합니다. 그리고 이 문서는 빠르게 업데이트되어야 하며, 개발자들이 API를 사용하면서 쉽게 검색하고 이해할 수 있어야 합니다. 이러한 요구사항을 충족하기 위해 토스페이먼츠에서는 Spring REST Docs를 사용하여 RESTful API 문서를 작성하고 있습니다. 이번 글에서는 토스페이먼츠에서 사용하는 tosspayments-restdocs 라이브러리에 대해 알아보겠습니다.\n\n tosspayments-restdocs란?\ntospayments-restdocs는 Spring REST Docs를 사용하여 선언형 문서를 작성하는 라이브러리입니다. 이 라이브러리는 Spring MVC 또는 Spring WebFlux와 함께 사용할 수 있습니다. tosspayments-restdocs는 API 요청 및 응답 예시와 함께 문서를 작성할 수 있으며, Markdown 또는 AsciiDoc으로 문서를 작성할 수 있습니다. 이 라이브러리는 문서 작성을 위한 자동화된 테스트 스크립트를 생성하므로, 개발자들은 코드 변경 사항에 대한 즉각적인 문서 업데이트를 수행할 수 있습니다.',
    thumbnailImage: 'https://wp.toss.tech/wp-content/uploads/2022/12/01-1.png',
    user: {
      profile:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      name: 'paula',
      position: 'front-end',
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
