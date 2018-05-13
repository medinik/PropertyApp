function ResponseBuilder(statusCode, status, res) {
    this.statusCode = statusCode;
    this.status = status;
    this.res = res;
}

module.exports = ResponseBuilder;
