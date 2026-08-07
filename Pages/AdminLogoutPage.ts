import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage{
    page:Page
    readonly logout :Locator
    constructor(page:Page)
    {
        this.page =page
        this.logout =page.locator('#mi_logout')
    }
    //method for logout
    async ERP_Logout()
    {
        await this.logout.waitFor()
        await this.logout.click()
    }
}