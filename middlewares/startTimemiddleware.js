// startTimeMiddleware.js
export const startTimeMiddleware = (req, res, next) => {
    req.startTime = new Date(); // Set the start time in the request object
    next(); // Proceed to the next middleware or route handler
  };
  