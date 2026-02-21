import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';

const loginPage = new LoginPage();

Given('I navigate to {string}', async function (url: string) {
  await loginPage.navigateTo(url);
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
  await loginPage.login(username, password);
});

Then('I should see the home page', async function () {
  await loginPage.verifyHomePage();
});