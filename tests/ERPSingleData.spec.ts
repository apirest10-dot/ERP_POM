import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomerPage } from "../Pages/CustomerPage";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import test from "@playwright/test";
let login:AdminLoginPage
let logout:AdminLogoutPage
let sup :SuppliersPage
let cus:CustomerPage
test.beforeEach(async({page})=>{
    login = new AdminLoginPage(page)
    //call for launch url
    await login.Launch_Url(process.env.BASE_URL!)
    //call for login method
    await login.ERP_Login(process.env.BASE_USER!,process.env.BASE_PASS!)
})
test.describe('ERP Invntory Modules',()=>{
    //first test supplier
    test('Supplier With Single data',async({page})=>{
        sup = new SuppliersPage(page)
        await sup.fillSupplierDeatils('John','USA','London','USA','Qedge','98765','John@gmail.com','8767564','New Supplier')
    })
    test('Customer with Single Data',async({page})=>{
        cus = new CustomerPage(page)
        await cus.fillCustomerDetails('Ramu','Ameerpet','Hyderabad','India','Ranga','876543','Test@gmail.com','654321','Iam New Customer')
    })

})
test.afterEach(async({page})=>{
    logout = new AdminLogoutPage(page)
    await logout.ERP_Logout()
})