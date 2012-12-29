var Login = function (username, password, host) {
    this.username = username;
    this.password = password;
    this.host = host;
}

Login.prototype.authenticate = function () {
    var self = this;
    var authenticationResult = jQuery.ajax( {
            url:this.host+"/api/json?pretty=true&username="+this.username+"&password="+this.password,
            type:"POST",
            crossDomain:true,
            username:self.username,
            password:self.password,
            success:function(){} ,
            error:function(){}
        }
    );
    return authenticationResult;
};
