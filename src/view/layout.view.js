export default class LayoutView {
  render() {
    return `
              <header>
                  <span></span>
                  <a href="/" data-link>toss tech</a>
                  <nav>
                      <a href="/design" data-link>
                      디자인
                      </a>
                      <a href="/tech" data-link>
                      개발
                      </a>
                      <a href="https://toss.im/career/jobs">
                      채용 바로가기
                      </a>
                  <nav>
              </header>
              {main}
              <footer>
                  <div>
                      <img src="https://static.toss.im/3d/website_code_blue_alpha.png" width='240' height="240" />
                      <div>
                          <h3> 
                              토스팀이 만드는 수많은 혁신의 순간들 
                          </h3>
                          <P> 당신과 함꼐 만들고 싶습니다. \n 지금, 토스팀에 합류하세요. <p>
                          <a href="https://toss.im/career/jobs" />
                              채용 중인 공고 보기
                          </a>
                      </div>
                  <div>
                  <div>
                      <div>
                          <span>토스테크</span>
                          <a href="#"><span>의견 보내기</span></a>
                      </div>
                      <div>
                          <span>토스</span>
                          <a href="https://toss.im/"><span>홈페이지</span></a>
                          <a href="https://toss.im/team"><span>회사소개</span></a>
                          <a href="https://toss.im/career"><span>채용</span></a>
                      </div>
                      <div>
                          <span>고객센터</span>
                          <a href="#"><span>전화: 1599-4905 (24시간 연중무휴)</span></a>
                          <a href="#"><span>이메일: support@toss.im</span></a>
                          <a href="https://pf.kakao.com/_xjqwRV"><span>카카오: @toss</span></a>
                      </div>
                  </div>
                  <div>
                      <span>(주)비바리퍼블리카</span>
                      <span>Copyright Viva Republica, inc. All Rights Reserved.</span>
                  </div>
                  <div>
                      <a href="https://www.facebook.com/toss.revolution" />facebook<a>
                      <a href="https://blog.toss.im/" />toss blog<a>
                      <a href="https://post.naver.com/tossblog" />naver<a>
                      <a href="https://twitter.com/toss__official" />twitter<a>
                      <a href="https://www.instagram.com/toss.im/" />instagram<a>
                  </div>
              </footer>
          `;
  }
}
