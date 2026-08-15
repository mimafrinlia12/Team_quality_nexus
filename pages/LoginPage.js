
export class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.dashboard = page.getByRole('heading', { name: 'Dashboard' });
    }

    async open() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    

}