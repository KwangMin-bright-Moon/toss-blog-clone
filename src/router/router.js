export default class Router {
  #routes = [];

  addRouter = (path, component) => {
    this.#routes.push({ path, component });
    return this;
  };

  setNotFound = (notFound) => {
    this.addRouter('/NotFound', notFound);
    return this;
  };

  start = () => {
    window.addEventListener('popstate', this.render);

    window.addEventListener('DOMContentLoaded', () => {
      this.handleClickLink();
    });

    this.render();
  };

  handleClickLink = () => {
    document.body.addEventListener('click', (e) => {
      if (!e.target.closest('[data-link]')) {
        return;
      }

      e.preventDefault();

      history.pushState(null, null, e.target.href);

      this.render();
    });
  };

  render = () => {
    const matchRoute = this.getMatchRoute();
    const param = this.getParam(matchRoute);
    matchRoute ? matchRoute.component(param) : this.renderNotFound();
  };

  renderNotFound = () => {
    const notFoundRouter = this.#routes.find(
      (route) => route.path === '/NotFound'
    );

    if (!notFoundRouter) {
      return (document.querySelector('main').innerHTML = 'NotFound');
    }

    notFoundRouter.component();
  };

  getMatchRoute = () => {
    const currentPath = location.pathname;
    const matchRoute = this.#routes.find((route) => {
      if (this.isMatchedRoute(route.path, currentPath)) {
        return true;
      }
      return false;
    });

    return matchRoute;
  };

  isMatchedRoute(path, currentPath) {
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

  getParam = (route) => {
    const paramKeys = this.getParamKeys(route.path);

    if (paramKeys.length) {
      const currentPaths = location.pathname.split('/');

      const currentParams = [];

      paramKeys.forEach((paramKeys) => {
        currentParams.push({ [paramKeys.key]: currentPaths[paramKeys.index] });
      });

      return currentParams;
    }

    return null;
  };

  getParamKeys = (path) => {
    const paths = path.split('/');

    const paramKeys = [];

    paths.forEach((path, index) => {
      if (path.startsWith(':')) {
        paramKeys.push({ key: path.slice(1), index });
      }
    });

    return paramKeys;
  };
}
