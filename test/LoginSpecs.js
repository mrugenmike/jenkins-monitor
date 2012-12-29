describe("loginSpecs", function () {

    var login = null;
    var username = "admin";
    var password = "pass";
    var host = "http://localhost/jenkins";

    beforeEach(function () {
        login = new Login(username, password, host);
    });

    it("it verifies whether the authentication request was fired", function () {
        //given
        spyOn(jQuery, 'ajax');
        //when
        login.authenticate();
        // then
        expect(jQuery.ajax).toHaveBeenCalled();
    });

    it("it verifies whether the authentication happened against correct URL", function () {
        //given
        spyOn(jQuery, 'ajax');
        //when
        login.authenticate();
        // then
        expect(jQuery.ajax).toHaveBeenCalled();
        expect(jQuery.ajax.mostRecentCall.args[0]['url']).toEqual(host + "/api/json?pretty=true&username=" + username + "&password=" + password);
    });

    it("it verifies whether the authentication happened with correct username and  password", function () {
        //given
        spyOn(jQuery, 'ajax');
        //when
        login.authenticate();
        // then
        expect(jQuery.ajax.mostRecentCall.args[0]['password']).toEqual(password);
        expect(jQuery.ajax.mostRecentCall.args[0]['username']).toEqual(username);
    });

    it("it verifies if user is correctly authenticated", function () {
        //given
        spyOn(jQuery, 'ajax').andCallFake(function(){
            return {};
        });
        //when
        var authenticated = login.authenticate();
        // then
        expect(jQuery.ajax).toHaveBeenCalled();
        expect(authenticated).toBeTruthy();
    });
});


