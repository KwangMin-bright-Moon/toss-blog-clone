import { Route } from './../types/index';
export default class Router {
  private routes: Route[] = [];

  addRouter = (route: Route): Router => {
    this.routes.push(route);
    return this;
  };

  // NOTE: 임시 주석 처리, not found view 생성 후 다시 작성 예정
  // setNotFound = (notFound: any) => {
  //   this.addRouter('/NotFound', notFound);
  //   return this;
  // };

  start = (): void => {
    window.addEventListener('popstate', this.route);

    window.addEventListener('DOMContentLoaded', () => {
      this.handleClickLink();
    });

    this.route();
  };

  handleClickLink = (): void => {
    document.body.addEventListener('click', (e) => {
      if (!(e.target instanceof HTMLAnchorElement)) {
        return;
      }

      if (!e.target.closest('[data-link]')) {
        return;
      }

      e.preventDefault();

      history.pushState(null, null, e.target.href);

      this.route();
    });
  };

  route = (): void => {
    const matchRoute = this.getMatchRoute();
    matchRoute ? matchRoute.view.render() : this.renderNotFound();
  };

  renderNotFound = (): string | void => {
    const notFoundRouter = this.routes.find(
      (route) => route.path === '/NotFound'
    );

    if (!notFoundRouter) {
      return (document.querySelector('main').innerHTML = 'NotFound');
    }

    notFoundRouter.view.render();
  };

  getMatchRoute = (): Route => {
    const currentPath = location.pathname;
    const matchRoute = this.routes.find((route) => {
      if (this.isMatchedRoute(route.path, currentPath)) {
        return true;
      }
      return false;
    });

    return matchRoute;
  };

  isMatchedRoute(path: string, currentPath: string): boolean {
    let index = 0;

    const compareLength = currentPath.split('/').length;

    path.split('/').forEach((path, i) => {
      if (path.startsWith(':')) {
        index = i;
      }
    });

    if (!index) {
      for (let i = 0; i < compareLength; i++) {
        if (path.split('/')[i + 1] !== currentPath.split('/')[i + 1]) {
          return false;
        }
      }
    }

    for (let i = 1; i < index; i++) {
      if (path.split('/')[i] !== currentPath.split('/')[i]) {
        return false;
      }
    }

    return true;
  }
}
