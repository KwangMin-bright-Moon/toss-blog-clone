const template = `<header class="header">
<div class="container">
    <a class="home" href="/" data-link>
        <div class="img">
            <img src="https://static.toss-internal.com/ipd-tcs/toss_core/staging/01928150-4f60-4c29-937d-f7232c2e4b8e.png" />
        </div>
        <span class="toss">toss</span>
        <span class="tech">tech</span>
    </a>
    <nav>
        <a class="design" href="/design" data-link>
            디자인
        </a>
        <a class="tech" href="/tech" data-link>
            개발
        </a>
        <a class="career" href="https://toss.im/career/jobs">
            채용 바로가기
        </a>
    <nav>
</div>
</header>`;

export class HeaderView {
  private _template: string;
  constructor() {
    this._template = template;
  }

  get template() {
    return this._template;
  }
}
