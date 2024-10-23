class ApiResponse {
    statusCode: number;
    data: any;
    message: string;
    success: boolean;
  
    constructor(statusCode: number, data: any, message: string = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400; // Success if status code is less than 400
    }
  }
  
  export default ApiResponse;
  