import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { SuppliersPage } from "../Pages/SuppliersPage";
import { CustomerPage } from "../Pages/CustomerPage";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import { ExcelFileUtil } from "../Utils/ExcelFileUtil";
import path from "path";
import test from "@playwright/test";
//read path of excel file and store
const filepath = path.join(__dirname,"../TestData/StockERRpData.xlsx")
//store excel sheets
let supSheet:any
let cusSheet:any
try {
    supSheet = ExcelFileUtil.getExcelData(filepath,"SupplierData")
    cusSheet = ExcelFileUtil.getExcelData(filepath,"CustomerData")
} catch (error) {
    console.log(error)
}
//console.log(supSheet)
//console.log(cusSheet)
let login:AdminLoginPage
let sup:SuppliersPage
let cus:CustomerPage
let logout :AdminLogoutPage
test.beforeEach(async({page})=>{
    login = new AdminLoginPage(page)
    await login.Launch_Url(process.env.BASE_URL!)
    await login.ERP_Login(process.env.BASE_USER!,process.env.BASE_PASS!)
   
})
test.describe('ERP Modules Management',()=>{
    for (const supdata of supSheet) {
       test(`Supplier Module ${supdata.SupplierName}`,async({page})=>{
        sup = new SuppliersPage(page)
        await sup.fillSupplierDeatils(
            supdata.SupplierName,
            supdata.Address,
            supdata.city,
            supdata.country,
            supdata.contactperson,
            supdata.phoneNumber,
            supdata.Email,
            supdata.MobileNumber,
            supdata.Notes
        )
       }) 
    }
    for (const cusdata of cusSheet) {
     test(`Customer validation ${cusdata.Address}`,async({page})=>{
        cus = new CustomerPage(page)
        await cus.fillCustomerDetails(
            cusdata.customername,
            cusdata.Address,
            cusdata.city,
            cusdata.Country,
            cusdata.contactperson,
            cusdata.phonenumber,
            cusdata.email,
            cusdata.mobilenumber,
            cusdata.Notes
        )

     })   
    }
})

test.afterEach(async({page})=>{
    logout = new AdminLogoutPage(page)
    await logout.ERP_Logout()
    
})