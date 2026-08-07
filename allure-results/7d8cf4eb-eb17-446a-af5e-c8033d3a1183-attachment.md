# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultiDataUsingExcel.spec.ts >> ERP Modules Management >> Supplier Module First Supplier
- Location: tests\MultiDataUsingExcel.spec.ts:33:12

# Error details

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - link "Stock Accounting" [ref=f6e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f6e9]: Stock Accounting
  - text:       
  - generic [ref=f6e13]:
    - list [ref=f6e14]:
      - listitem [ref=f6e15]:
        - link " Help (Categories)" [ref=f6e16] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f6e17]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f6e19]:
        - link " Login" [ref=f6e20] [cursor=pointer]:
          - /url: login.php
          - generic [ref=f6e21]: 
          - text: Login
    - list
  - generic [ref=f6e24]:
    - generic [ref=f6e27]:
      - generic [ref=f6e28] [cursor=pointer]:
        - radio "en" [checked]
        - text: en
      - generic [ref=f6e29] [cursor=pointer]:
        - radio "id"
        - text: id
    - generic [ref=f6e33]:
      - generic [ref=f6e34]:
        - button "x" [ref=f6e35] [cursor=pointer]: ×
        - heading [level=4] [ref=f6e37]:
          - text: Login
          - link "" [ref=f6e38] [cursor=pointer]:
            - /url: javascript:void(0);
      - generic [ref=f6e40]:
        - generic [ref=f6e41]:
          - generic [ref=f6e42]: User Name
          - textbox "User Name" [active] [ref=f6e44]: admin
        - generic [ref=f6e45]:
          - generic [ref=f6e46]: Password
          - textbox "Password" [ref=f6e48]: master
        - generic [ref=f6e51] [cursor=pointer]:
          - text: Options
          - generic [ref=f6e52]: 
        - generic [ref=f6e54]:
          - button "Login" [ref=f6e55] [cursor=pointer]
          - button "Reset" [ref=f6e56] [cursor=pointer]
      - generic [ref=f6e58]:
        - link "Forgot Password" [ref=f6e59] [cursor=pointer]:
          - /url: forgotpwd.php
        - link "Register" [ref=f6e60] [cursor=pointer]:
          - /url: register.php
  - generic [ref=f6e62]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f6e63] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f6e64] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f6e65] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f6e66] [cursor=pointer]:
      - /url: javascript:void(0);
```