
// Các middleware
export const loggerMiddleware = (context, next) => {
  console.log(`[${new Date().toISOString()}] ${context.method} ${context.url}`);
  next();
};

export const authMiddleware = (context, next) => {
  if (context.isAuthenticated) {
    console.log('Đã xác thực!');
    next();
  } else {
    console.log('Chưa xác thực!');
    
  }
};

export const routeHandler = (context, next) => {
  console.log('Xử lý yêu cầu...');
  // Xử lý yêu cầu tại đây
  console.log('Yêu cầu đã được xử lý!');
  next();
};

