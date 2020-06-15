Function.prototype.myApply = function(context,argArr) {

}
Function.prototype.myBind = function(context,...args) {

}
Function.prototype.myCall = function(context,...args) {
    let handler = Symbol();
    if(typeof context == "object" ||typeof context == "function"){
        context = context || window;
    }else{
        context = typeof context === 'undefined' ? window : Object(context);
    }
    context[handler] = this;
    let result = context[handler](...args);
    delete context[handler];
    return result
}