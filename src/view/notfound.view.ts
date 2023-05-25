import View from './view';

export default class NotFoundView extends View {
  constructor(containerId: string) {
    super({ containerId });
  }
  async render(): Promise<void> {
    const template = `
            <div>
                <h1>
                    찾을 수 없는 페이지 입니다.
                </h1>
                <span>
                    다시 한 번 확인해주세요.
                </span>
            </div>
        
        `;

    this.container.innerHTML = this.layout.wrap(template);
  }
}
