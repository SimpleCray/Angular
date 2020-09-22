# Angular
## Install
sudo npm install -g @angular/cli@latest
ng new my-dream-app
cd my-dream-app
ng serve
npm install --save bootstrap@3 (remember to add this line ["node_modules/bootstrap/dist/css/bootstrap.css",] to angular.json after that )
ng generate component [name] - ng g c [name]
ng g c [name] --skipTests true (skip the test file)
## How it start
main.ts -> app.module.ts -> app.component.ts  -> app.component.html, app.component.css