import Page from './page'

class LoginPage extends Page {

    get username() { return $('#uniqueId') }
    get password() { return $('#password') }
    get submitBtn() { return $('#login_button') }


    open() {
        super.open('https://general.testing.serko.travel/login')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new LoginPage()