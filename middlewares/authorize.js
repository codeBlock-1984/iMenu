import auth from '../helpers/auth';

const { verifyToken } = auth;

class authorize {
  static isAuth(req, res, next) {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        return res.status(401).json({
          status: 401,
          error: 'Unauthorized! No token in request header!',
        });
      }
      req.user = verifyToken(token);
      if (!req.user.id) {
        return res.status(401).json({
          status: 401,
          error: 'Unauthorized! No token in request header!',
        });
      }
    } catch (error) {
      return res.status(401).json({
        status: 401,
        error: 'Unauthorized! No or invalid token in request header!',
      });
    }
    return next();
  }

  static isAdmin(req, res, next) {
    try {
      const token = req.header('x-auth-token');
      req.user = verifyToken(token);
      const { isAdmin } = req.user;
      if (!isAdmin) {
        return res.status(403).json({
          status: 403,
          error: 'Access denied: Forbidden!',
        });
      }
    } catch (error) {
      return res.status(401).json({
        status: 403,
        error: 'Access denied: Forbidden!',
      });
    }
    return next();
  }
}


export default authorize;
