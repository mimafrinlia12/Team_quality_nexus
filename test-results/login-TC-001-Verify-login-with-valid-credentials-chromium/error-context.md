# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> TC_001 Verify login with valid credentials
- Location: tests\login.spec.js:4:5

# Error details

```
TimeoutError: locator.fill: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=e114]
        - link [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: PrimeiroTeste TerceiroTeste
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - button "" [ref=e133] [cursor=pointer]
  - generic [ref=e135]:
    - generic [ref=e137]:
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: 
          - paragraph [ref=e143]: Time at Work
        - separator [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img "profile picture" [ref=e149]
            - generic [ref=e150]:
              - paragraph [ref=e151]: Punched Out
              - paragraph [ref=e152]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=e153]:
            - generic [ref=e154]: 0h 0m Today
            - button "" [ref=e155] [cursor=pointer]
          - separator [ref=e157]
          - generic [ref=e158]:
            - generic [ref=e159]:
              - paragraph [ref=e160]: This Week
              - paragraph [ref=e161]: Aug 10 - Aug 16
            - generic [ref=e162]:
              - generic [ref=e163]: 
              - paragraph [ref=e164]: 0h 0m
      - generic [ref=e168]:
        - generic [ref=e170]:
          - generic [ref=e171]: 
          - paragraph [ref=e172]: My Actions
        - separator [ref=e173]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - button [ref=e177] [cursor=pointer]
            - paragraph [ref=e183] [cursor=pointer]: (1) Leave Request to Approve
          - generic [ref=e184]:
            - button [ref=e185] [cursor=pointer]
            - paragraph [ref=e191] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=e192]:
            - button [ref=e193] [cursor=pointer]
            - paragraph [ref=e202] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=e204]:
        - generic [ref=e206]:
          - generic [ref=e207]: 
          - paragraph [ref=e208]: Quick Launch
        - separator [ref=e209]
        - generic [ref=e211]:
          - generic [ref=e212]:
            - button "Assign Leave" [ref=e213] [cursor=pointer]
            - generic "Assign Leave" [ref=e216]:
              - paragraph [ref=e217]: Assign Leave
          - generic [ref=e218]:
            - button "Leave List" [ref=e219] [cursor=pointer]
            - generic "Leave List" [ref=e226]:
              - paragraph [ref=e227]: Leave List
          - generic [ref=e228]:
            - button "Timesheets" [ref=e229] [cursor=pointer]
            - generic "Timesheets" [ref=e235]:
              - paragraph [ref=e236]: Timesheets
          - generic [ref=e237]:
            - button "Apply Leave" [ref=e238] [cursor=pointer]
            - generic "Apply Leave" [ref=e241]:
              - paragraph [ref=e242]: Apply Leave
          - generic [ref=e243]:
            - button "My Leave" [ref=e244] [cursor=pointer]
            - generic "My Leave" [ref=e249]:
              - paragraph [ref=e250]: My Leave
          - generic [ref=e251]:
            - button "My Timesheet" [ref=e252] [cursor=pointer]
            - generic "My Timesheet" [ref=e255]:
              - paragraph [ref=e256]: My Timesheet
      - generic [ref=e258]:
        - generic [ref=e260]:
          - generic [ref=e261]: 
          - paragraph [ref=e262]: Buzz Latest Posts
        - separator [ref=e263]
        - generic [ref=e265]:
          - generic [ref=e266]:
            - generic [ref=e267] [cursor=pointer]:
              - img "profile picture" [ref=e269]
              - generic [ref=e270]:
                - paragraph [ref=e271]: PrimeiroTeste SegundoTeste TerceiroTeste
                - paragraph [ref=e272]: 2026-08-15 09:18 AM
            - separator [ref=e273]
            - paragraph [ref=e274]: "null"
            - iframe [ref=e276]:
              - generic "YouTube Video Player" [ref=f1e3]:
                - alert [ref=f1e4]:
                  - generic [ref=f1e7]:
                    - generic [ref=f1e8]: Video unavailable
                    - generic [ref=f1e9]: This video is unavailable
                  - link "Visit YouTube to search for more videos" [ref=f1e10] [cursor=pointer]:
                    - /url: https://www.youtube.com
          - generic [ref=e277]:
            - generic [ref=e278] [cursor=pointer]:
              - img "profile picture" [ref=e280]
              - generic [ref=e281]:
                - paragraph [ref=e282]: PrimeiroTeste SegundoTeste TerceiroTeste
                - paragraph [ref=e283]: 2026-08-15 09:18 AM
            - separator [ref=e284]
            - paragraph [ref=e285]: Darleen
          - generic [ref=e286]:
            - generic [ref=e287] [cursor=pointer]:
              - img "profile picture" [ref=e289]
              - generic [ref=e290]:
                - paragraph [ref=e291]: PrimeiroTeste SegundoTeste TerceiroTeste
                - paragraph [ref=e292]: 2026-08-15 09:18 AM
            - separator [ref=e293]
            - paragraph [ref=e294]: Throwback Thursdays!!
          - generic [ref=e296]:
            - generic [ref=e297] [cursor=pointer]:
              - img "profile picture" [ref=e299]
              - generic [ref=e300]:
                - paragraph [ref=e301]: PrimeiroTeste SegundoTeste TerceiroTeste
                - paragraph [ref=e302]: 2026-08-15 09:18 AM
            - separator [ref=e303]
            - paragraph [ref=e304]: Devora
          - generic [ref=e305]:
            - generic [ref=e306] [cursor=pointer]:
              - img "profile picture" [ref=e308]
              - generic [ref=e309]:
                - paragraph [ref=e310]: PrimeiroTeste SegundoTeste TerceiroTeste
                - paragraph [ref=e311]: 2026-08-15 09:18 AM
            - separator [ref=e312]
            - paragraph [ref=e313]: Stormy
      - generic [ref=e315]:
        - generic [ref=e316]:
          - paragraph [ref=e321]: Employees on Leave Today
          - generic [ref=e322] [cursor=pointer]: 
        - separator [ref=e323]
        - generic [ref=e325]:
          - img "No Content" [ref=e326]
          - paragraph [ref=e327]: No Employees are on Leave Today
      - generic [ref=e329]:
        - generic [ref=e331]:
          - generic [ref=e332]: 
          - paragraph [ref=e333]: Employee Distribution by Sub Unit
        - separator [ref=e334]
        - list [ref=e339]:
          - listitem [ref=e340] [cursor=pointer]:
            - generic "Engineering" [ref=e342]
          - listitem [ref=e343] [cursor=pointer]:
            - generic "Human Resources" [ref=e345]
          - listitem [ref=e346] [cursor=pointer]:
            - generic "Administration" [ref=e348]
          - listitem [ref=e349] [cursor=pointer]:
            - generic "Client Services" [ref=e351]
          - listitem [ref=e352] [cursor=pointer]:
            - generic "Unassigned" [ref=e354]
      - generic [ref=e356]:
        - generic [ref=e358]:
          - generic [ref=e359]: 
          - paragraph [ref=e360]: Employee Distribution by Location
        - separator [ref=e361]
        - list [ref=e366]:
          - listitem [ref=e367] [cursor=pointer]:
            - generic "Texas R&D" [ref=e369]
          - listitem [ref=e370] [cursor=pointer]:
            - generic "New York Sales Office" [ref=e372]
          - listitem [ref=e373] [cursor=pointer]:
            - generic "HQ - CA, USA" [ref=e375]
          - listitem [ref=e376] [cursor=pointer]:
            - generic "Unassigned" [ref=e378]
    - generic [ref=e379]:
      - paragraph [ref=e380]: OrangeHRM OS 5.9
      - paragraph [ref=e381]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e382] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | 
  2  | export class LoginPage {
  3  | 
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         this.username = page.getByRole('textbox', { name: 'Username' });
  8  |         this.password = page.getByRole('textbox', { name: 'Password' });
  9  |         this.loginBtn = page.getByRole('button', { name: 'Login' });
  10 |         this.dashboard = page.getByRole('heading', { name: 'Dashboard' });
  11 |     }
  12 | 
  13 |     async open() {
  14 |         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  15 |         
  16 |     }
  17 | 
  18 |     async login(username, password) {
> 19 |         await this.username.fill(username);
     |                             ^ TimeoutError: locator.fill: Timeout 15000ms exceeded.
  20 |         await this.password.fill(password);
  21 |         await this.loginBtn.click();
  22 |     }
  23 | 
  24 |     
  25 | 
  26 | }
```