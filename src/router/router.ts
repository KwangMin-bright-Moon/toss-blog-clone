export default class Router {
  private routes: any[] = [];

  addRouter = (path: string, component: any) => {
    this.routes.push({ path, component });
    return this;
  };

  setNotFound = (notFound: any) => {
    this.addRouter('/NotFound', notFound);
    return this;
  };

  start = () => {
    window.addEventListener('popstate', this.route);

    window.addEventListener('DOMContentLoaded', () => {
      this.handleClickLink();
    });

    this.route();
  };

  handleClickLink = () => {
    document.body.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        if (!e.target.closest('[data-link]')) {
          return;
        }

        e.preventDefault();

        history.pushState(null, null, e.target.href);

        this.route();
      }
    });
  };

  route = () => {
    const matchRoute = this.getMatchRoute();
    matchRoute ? matchRoute.component() : this.renderNotFound();
  };

  renderNotFound = () => {
    const notFoundRouter = this.routes.find(
      (route) => route.path === '/NotFound'
    );

    if (!notFoundRouter) {
      return (document.querySelector('main').innerHTML = 'NotFound');
    }

    notFoundRouter.component();
  };

  getMatchRoute = () => {
    const currentPath = location.pathname;
    const matchRoute = this.routes.find((route) => {
      if (this.isMatchedRoute(route.path, currentPath)) {
        return true;
      }
      return false;
    });

    return matchRoute;
  };

  isMatchedRoute(path: string, currentPath: string) {
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
