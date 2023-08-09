import { managerMiddleware } from './managerMiddleware.js';
import { authMiddleware } from './middlewares.js';
import { loggerMiddleware } from './middlewares.js';

import { routeHandler } from './middlewares.js';
// Tạo một thể hiện của Middleware
const middleware = new managerMiddleware();

// Thêm các middleware vào theo thứ tự mong muốn
middleware.use(loggerMiddleware);
middleware.use(authMiddleware);
middleware.use(routeHandler);

// Sử dụng ví dụ
const context = {
  method: 'GET',
  url: '/api/users',
  isAuthenticated: true
};

middleware.execute(context);
