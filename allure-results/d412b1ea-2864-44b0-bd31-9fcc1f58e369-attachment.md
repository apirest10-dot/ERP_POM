# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingleData.spec.ts >> ERP Invntory Modules >> Supplier With Single data
- Location: tests\ERPSingleData.spec.ts:19:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
```

```
Error: locator.waitFor: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogoutPage{
  4  |     page:Page
  5  |     readonly logout :Locator
  6  |     constructor(page:Page)
  7  |     {
  8  |         this.page =page
  9  |         this.logout =page.locator('#mi_logout')
  10 |     }
  11 |     //method for logout
  12 |     async ERP_Logout()
  13 |     {
> 14 |         await this.logout.waitFor()
     |                           ^ Error: locator.waitFor: Target page, context or browser has been closed
  15 |         await this.logout.click()
  16 |     }
  17 | }
```