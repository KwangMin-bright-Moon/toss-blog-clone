const template = `<footer class="footer">
<div class="banner">
    <img src="https://static.toss.im/3d/website_code_blue_alpha.png" />
    <div class="text">
        <span class="title"> 
            토스팀이 만드는 수많은 혁신의 순간들 
        </span>
        <p> 당신과 함꼐 만들고 싶습니다. </p> <p> 지금, 토스팀에 합류하세요. </p>
        <a href="https://toss.im/career/jobs" />
            <span class="career">채용 중인 공고 보기</span>
        </a>
    </div>
</div>
<div class="detail">
    <div class="nav">
        <div class="category">
            <span class="title">토스테크</span>
            <a href="#"><span class="item">의견 보내기</span></a>
        </div>
        <div class="category">
            <span class="title">토스</span>
            <a href="https://toss.im/"><span class="item">홈페이지</span></a>
            <a href="https://toss.im/team"><span class="item">회사소개</span></a>
            <a href="https://toss.im/career"><span class="item">채용</span></a>
        </div>
        <div class="category">
            <span class="title">고객센터</span>
            <a href="#"><span class="item">전화: 1599-4905 (24시간 연중무휴)</span></a>
            <a href="#"><span class="item">이메일: support@toss.im</span></a>
            <a href="https://pf.kakao.com/_xjqwRV"><span class="item">카카오: @toss</span></a>
        </div>
    </div>
    <div class="copyright">
        <span class="title">(주)비바리퍼블리카</span>
        <span class="subtitle">Copyright Viva Republica, inc. All Rights Reserved.</span>
    </div>
    <ul class="sns-link">
        <li>
            <a href="https://www.facebook.com/toss.revolution" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" />
            <a>
        </li>
        <li>
            <a href="https://blog.toss.im/" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" />
            <a>
        </li>
        <li>
            <a href="https://post.naver.com/tossblog" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" />
            <a>
        </li>
        <li>
            <a href="https://twitter.com/toss__official" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" />
            <a>
        </li>
        <li>
            <a href="https://www.instagram.com/toss.im/" />
                <img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" />
            <a>
        </li>
    </ul>
 </div>   
</footer>
`;

export class FooterView {
  private _template: string;
  constructor() {
    this._template = template;
  }

  get template() {
    return this._template;
  }
}
