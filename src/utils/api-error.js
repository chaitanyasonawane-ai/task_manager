class ApiError extends Error{
    constructor(
        statusCode, 
        message= "Somethinng went wrong",       // have precise error message
        errors= [],
        stack= "",
    ){
        super(message);
        this.statusCode= statusCode;
        this.message= message;
        this.success= false;
        this.errors= errors;


        if(stack){
            this.stack= stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }    
}

export {ApiError}