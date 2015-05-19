Template.loginButtons.rendered = function()
{
    if (!this.rendered){
        Accounts._loginButtonsSession.set('dropdownVisible', true);

        //$('.login-button').addClass('black');
        // $('.login-button').text('Login here!');

        this.rendered = true;
    }
};

