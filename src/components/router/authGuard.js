// authGuard.js


const authGuard = (to, from, next) => {
  if (!isAuthenticated()) { // Utiliza la función isAuthenticated para verificar si el usuario está autenticado
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
};

export default authGuard;
