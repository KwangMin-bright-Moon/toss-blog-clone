export default class LayoutView {
  #layoutTemplate = `
    <header>
        <div class="header-container">
        <a class="home" href="/" data-link>
            <img src="https://static.toss-internal.com/ipd-tcs/toss_core/staging/01928150-4f60-4c29-937d-f7232c2e4b8e.png" />
            <span class="home-toss">toss<span>
            <span class="home-tech">tech<span>
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
    </header>
    {content}
    <footer>
        <div class="footer-banner">
            <img src="https://static.toss.im/3d/website_code_blue_alpha.png" />
            <div class="footer-banner-text">
                <h2> 
                    토스팀이 만드는 수많은 혁신의 순간들 
                </h2>
                <p> 당신과 함꼐 만들고 싶습니다. </p> <p> 지금, 토스팀에 합류하세요. </p>
                <a href="https://toss.im/career/jobs" />
                    <span class="footer-banner-career">채용 중인 공고 보기</span>
                </a>
            </div>
        </div>
        <div class="footer-detail">
            <div class="footer-nav">
                <div class="footer-nav-category">
                    <span class="footer-nav-title">토스테크</span>
                    <a href="#"><span class="footer-nav-item">의견 보내기</span></a>
                </div>
                <div class="footer-nav-category">
                    <span class="footer-nav-title">토스</span>
                    <a href="https://toss.im/"><span class="footer-nav-item">홈페이지</span></a>
                    <a href="https://toss.im/team"><span class="footer-nav-item">회사소개</span></a>
                    <a href="https://toss.im/career"><span class="footer-nav-item">채용</span></a>
                </div>
                <div class="footer-nav-category">
                    <span class="footer-nav-title">고객센터</span>
                    <a href="#"><span class="footer-nav-item">전화: 1599-4905 (24시간 연중무휴)</span></a>
                    <a href="#"><span class="footer-nav-item">이메일: support@toss.im</span></a>
                    <a href="https://pf.kakao.com/_xjqwRV"><span class="footer-nav-item">카카오: @toss</span></a>
                </div>
            </div>
            <div class="copyright">
                <span class="copyright-title">(주)비바리퍼블리카</span>
                <span class="copyright-subtitle">Copyright Viva Republica, inc. All Rights Reserved.</span>
            </div>
            <div class="sns-link">
                <a href="https://www.facebook.com/toss.revolution" />facebook<a>
                <a href="https://blog.toss.im/" />toss blog<a>
                <a href="https://post.naver.com/tossblog" />naver<a>
                <a href="https://twitter.com/toss__official" />twitter<a>
                <a href="https://www.instagram.com/toss.im/" />instagram<a>
            </div>
         </div>   
    </footer>
  `;

  wrap(template) {
    return this.#layoutTemplate.replace('{content}', template);
  }
}
