import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomerPage } from "../Pages/CustomerPage";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import stockData from "../TestData/ERPData.json"
import test from "@playwright/test";
//console.log(stockData)
let login:AdminLoginPage
let sup:SuppliersPage
let cus: CustomerPage
let logout:AdminLogoutPage
test.beforeEach(async({page})=>{
    login = new AdminLoginPage(page)
    await login.Launch_Url(process.env.BASE_URL!)
    await login.ERP_Login(process.env.BASE_USER!,process.env.BASE_PASS!)
})
test.describe('ERP Module Management',()=>{
    for (const data of stockData.Suppliers) {
        test(`Multiple Data Suppliers ${data.Suppliername}`,async({page})=>{
            sup = new SuppliersPage(page)
             await sup.fillSupplierDeatils(
                data.Suppliername,
                data.Address,
                data.City,
                data.Country,
                data.ContactPerson,
                data.PhoneNumber,
                data.Email,
                data.MobileNumber,
                data.Notes
            )

        })
    }
    //test for customer module
    for (const data of stockData.customers) {
        test(`Customer Validation ${data.Customername}`,async({page})=>{
            cus = new CustomerPage(page)
            await cus.fillCustomerDetails(
                data.Customername,
                data.Address,
                data.City,
                data.Country,
                data.ContactPerson,
                data.PhoneNumber,
                data.Email,
                data.MobileNumber,
                data.Notes
            )
        })
        
    }
})
test.afterEach(async({page})=>{
    logout = new AdminLogoutPage(page)
    await logout.ERP_Logout()
    
})