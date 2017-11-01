class BasicController {
  response(data, statusCode = 200) {
    return {
      data,
      header: {
        status: statusCode
      }
    };
  }
  noContent() {
    return this.response(null, 204);
  }
  notFound() {
    return this.response(null, 404);
  }
}

export default BasicController;
