class ApiError extends Error {
    statusCode: number;
    data: any;
    errors: Error[];
    success: boolean;
  
    constructor(
      statusCode: number,
      message: string = "Something went wrong", 
      errors: Error[] = [],
      stack: string = ''
    ) {
      super(message); // Call parent class constructor with message
      this.statusCode = statusCode;
      this.data = null;
      this.errors = errors;
      this.success = false;
  
      // Capture the stack trace if provided, otherwise use default behavior
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  export default ApiError;
  