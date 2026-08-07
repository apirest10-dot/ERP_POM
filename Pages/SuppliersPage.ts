import { expect, Locator, Page } from "@playwright/test";

export class SuppliersPage{
     readonly page:Page
     readonly ClickSupplier : Locator
     readonly Click_AddIcon : Locator
     readonly CaptureSupplierNum :Locator
     readonly EnterSupplierName: Locator
     readonly EnterAddress :Locator
     readonly EnterCity :Locator
     readonly EnterCountry:Locator
     readonly EnterCperson: Locator
     readonly EnterPnumber: Locator
     readonly EnterEmail :Locator
     readonly EnterMnunber :Locator
     readonly EnterNotes: Locator
     readonly ClickAddBtn :Locator
     readonly ClickConfirmOk : Locator
     readonly ClickAlertOk :Locator
     readonly ClickSearchPanel : Locator
     readonly EnterSearchText :Locator
     readonly ClickSearchBtn : Locator
     readonly WebTable :Locator
     constructor(page:Page)
     {
        this.page =page
        this.ClickSupplier = page.locator('#mi_a_suppliers')
        this.Click_AddIcon = page.locator("a[data-caption='Add']").first()
        this.CaptureSupplierNum =page.getByLabel('Supplier Number')
        this.EnterSupplierName = page.getByPlaceholder('Supplier Name')
        this.EnterAddress = page.getByPlaceholder('Address')
        this.EnterCity = page.getByPlaceholder('City')
        this.EnterCountry = page.getByPlaceholder('Country')
        this.EnterCperson = page.getByPlaceholder('Contact Person')
        this.EnterPnumber = page.getByPlaceholder('Phone Number')
        this.EnterEmail = page.getByPlaceholder('Email')
        this.EnterMnunber = page.getByPlaceholder('Mobile Number')
        this.EnterNotes = page.getByPlaceholder('Notes')
        this.ClickAddBtn = page.getByRole('button',{name:'Add'})
        this.ClickConfirmOk = page.locator("//button[text()='OK!']")
        this.ClickAlertOk = page.locator("button.ajs-button.btn.btn-primary")
        this.ClickSearchPanel = page.locator("button.btn.btn-default.ewSearchToggle")
        this.EnterSearchText = page.getByPlaceholder('Search')
        this.ClickSearchBtn = page.locator('#btnsubmit')
        this.WebTable = page.locator(".table.ewTable tbody tr:nth-child(1) td:nth-child(6) div span span")
       
     }
      //method filling suppliers form
        async fillSupplierDeatils(sname:string,address:string,city:string,country:string,
         cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
        {
         await this.ClickSupplier.waitFor()
         await this.ClickSupplier.click()
         await this.Click_AddIcon.waitFor()
         await this.Click_AddIcon.click()
         await this.CaptureSupplierNum.waitFor()
         //capture supplier number
         const Exp_Num = await this.CaptureSupplierNum.inputValue()
         await this.EnterSupplierName.fill(sname)
         await this.EnterAddress.fill(address)
         await this.EnterCity.fill(city)
         await this.EnterCountry.fill(country)
         await this.EnterCperson.fill(cperson)
         await this.EnterPnumber.fill(pnumber)
         await this.EnterEmail.fill(email)
         await this.EnterMnunber.fill(mnumber)
         await this.EnterNotes.fill(notes)
         await this.ClickAddBtn.click()
         await this.ClickConfirmOk.waitFor()
         await this.ClickConfirmOk.click()
         await this.ClickAlertOk.waitFor()
         await this.ClickAlertOk.click()
         //await this.EnterSearchText.waitFor()
         if(!this.EnterSearchText.isVisible())
                //click search panel if it is not visible
            await this.ClickSearchPanel.waitFor()   
            await this.ClickSearchPanel.click()
            await this.EnterSearchText.clear()
            //enter supplier number which we captured
            await this.EnterSearchText.fill(Exp_Num)
            await this.ClickSearchBtn.click()
         
         //capture supplier number from table
         const Act_Num = await this.WebTable.textContent()
         console.log(`Supplier Number Found In Table ${Exp_Num}   ${Act_Num}`)
          expect(Act_Num).toContain(Exp_Num)


        }
        
         
        }


