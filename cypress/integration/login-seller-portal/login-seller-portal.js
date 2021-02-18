// JS file can be named anything but the folder contain it must have the same name .spec file
import SellerLoginPage from '../PageObject/seller-login-page'
const LoginPage = new SellerLoginPage();

Given('Tôi mở trang seller', () => {
    // LoginPage.visit("https://seller.lionnix.com/sign-in")
    LoginPage.visit("https://iboard.ssi.com.vn/bang-gia/vn30");
    cy.get(".non-link");
});

// When("Tôi gõ tên đăng nhập và mật khẩu", () => {
//     LoginPage.fillEmailName("nguyenduyphuong14121996@gmail.com")
//     LoginPage.fillPassword("phuOng1996");
// });

// And("Tôi click chọn Đăng nhập", () => {
//     LoginPage.clickLoginButton();
// });

// Then("Trang chủ được hiển thị", () => {
//     LoginPage.verifyLoginSucces();
// });
