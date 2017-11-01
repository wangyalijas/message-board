import routes from './routes/index'
let getRoute = (url, method) => {
  for (let index in routes) {
    if (routes.hasOwnProperty(index)) {
      let route = routes[index];
      if (route.path === url && route.method.toLowerCase() === method.toLowerCase()) {
        return route;
      }
    }
  }
  return null;
};

export default (url, method) => {
  let route = getRoute(url, method);
  if (route) {
    return route.controller[route.action]();
  }
  return {
    data: null,
    header: {
      status: 404
    }
  };
}
