// endTimeAndDurationMiddleware.js
export const endTimeAndDurationMiddleware = (req, res, next) => {
    req.endTime = new Date(); // Set the end time in the request object
    req.duration = req.endTime - req.startTime; // Calculate the duration
    next(); // Proceed to the next middleware or route handler
  };
  