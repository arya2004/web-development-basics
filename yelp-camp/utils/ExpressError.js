class ExpressError extends Error{
    constructor(message, ststusCode){
        super();
        this.message = message;
        this.statusCode = this.statusCode;
    }
}

module.exports = ExpressError;