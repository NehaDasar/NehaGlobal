# NehaGlobal
 my first project
To create Project : ng new projectName
routing : y
css

To Run Angular project >> Open Terminal at ur project Folder : ng s -o
ng serve / ng serve --open / ng s / ng s --open
https://drive.google.com/drive/folders/1xv0AEUNOjeVkG9eOnATUB3lvm090A_u3

recorded session link:
https://drive.google.com/drive/folders/1TdwQqJ3chuHNultX_-va45MgvvLLqllb?usp=share_link

If u r cloning project then u have to generate node_module folder locally: npm i / npm i -f then only do ng s -o
simple routing :
1. add  <router-outlet></router-outlet> directive into app.compo.html
2. create path and component into routing.module.ts file
3. add routerLink attribute to the button or achor tag to link component/screen

command to create new module :ng g m admin --routing
 to create module and update app.routing .ts :
 ng g m student --route student --module app.module

Angular Artchitecture
 compo: building blocks of angular application
 compo.. + compo... + pipes + directives + services = module
 module.. + module ... = project

 Eagrely loaded module: appModule : will loads initially.
-landing screen related components only we load here.

Lazy loading:  As per the need/requirement/action gets loaded.
(pros: initially unneccessorly modules will not gets loaded,
network traffic reduce, smooth light waith application ,
application will not freez/crash bcz we are loading compo from module as per the requirment )
multiple modules :
-multi compo , services etc...


global/open component routing:
1.create open/global compo
2.add path and component object into app.routing.ts file
3.redirect from .html or .ts file
4 .html file : routerLink ="/path" on action it will redirect.

to fetch component inside's module:
1.command to create new module :ng g m admin --routing
.routing.ts
module.ts

2.open terminel at module folder to create cmponent inside it: ng g c adminLogin
3.import custom (created by u) module app.routing.ts(global routing file) 
e.g { path : 'admin', loadChildren:()=> import('./admin/admin.module').then(mod => mod.AdminModule)}
4.create button to home screen to redirect into modules compo
routerLink : '/moduleName/component inside module' 
e.g. routerLink:'/admin/admin-signup'

update angular 14 :
 to create new module and update app.routing.ts file autmatically command :
 ng g m student --route student --module app.module

to redirect on compo from .ts file:
open compo:
1.button, bind function on click event
2.define function into .ts file
3.import router class to .ts file
4.add router  class to constructor
5.take reference property using this keyword and redirect to compo using navagateByUrl method