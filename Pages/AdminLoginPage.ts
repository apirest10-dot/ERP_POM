import { Locator, Page } from "@playwright/test";
export class AdminLoginPage{
    //define property and key
   readonly page : Page
   readonly ObjUser :Locator
   readonly ObjPass : Locator
   readonly ObjLogin : Locator
   HomePageIdentifier : Locator
   //to initilize for above varibales create constructor
   constructor(page:Page)
   {
    this.page =page
    this.ObjUser = page.getByRole('textbox',{name:'User Name'})
    this.ObjPass = page.getByRole('textbox',{name:'Password'})
    this.ObjLogin = page.getByRole('button',{name:'Login'})
    this.HomePageIdentifier = page.getByText('Dashboard',{exact:true})
   }
   //write methods
   //method for launching url
   async Launch_Url(Url:string)
   {
    await this.page.goto(Url)
   }
   //method for login
   async ERP_Login(user:string,pass:string)
   {
    //wait for element visible
    await this.ObjUser.waitFor()
    await this.ObjUser.clear()
    await this.ObjUser.fill(user)
    await this.ObjPass.waitFor()
    await this.ObjPass.clear()
    await this.ObjPass.fill(pass)
    await this.ObjLogin.click()
   }

}