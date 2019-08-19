# angularDemo
Angular 7 demo &amp; examples


# Prepare the development environment
### Node.js + NPM
  Check if nodejs and npm are installed on the system:
  ```
  node -v
  npm -v
  ```
  If not - install
  ```
  apt install nodejs npm
  ```

### Angular 7 (global)
  ```
  npm install @angular/cli -g
  # check version
  ng -v
  ```

## Upgrade nodejs
1. Node.js  
More info at: https://tecadmin.net/upgrade-nodejs-via-npm/
```sh
$ node -v
$ sudo npm cache clean -f 
$ sudo npm install -g n
$ sudo n stable
```

## Possible problems
### The browser (localhost:4200) does not respond to code changes when running ng serve
Add a line to the file `/etc/sysctl.conf` (or modify an existing one)
`fs.inotify.max_user_watches = 524288` 
and then call the command `sudo sysctl -p --system`

### An error appears during installation (broken dependencies ...or something)
Install the packages in this order:
```sh
sudo apt install libssl1.0-dev
sudo apt install nodejs-dev
sudo apt install node-gyp
sudo apt install npm
```

# Run application in developer environment
  ```sh
  $ cd angularDemo
  $ ng serve
  ```

# Creating application elements

# Building view modules with routing and component
`ng g m modules/module-name --routing`  
or without styles, template, test files  
`ng g c modules/module-name --inlineStyle --inlineTemplate --skipTests`  
`ng g c modules/module-name -s -t --skipTests` 

# Building components in the module
`ng g c modules/module-name/component-name`

# Building a service
`ng g s modules/module-name/service-name`

# Building a class
`ng g class modules/module-name/class-name`

# Building a directive
`ng g directive directives/directive-name`

# Unit tests (TODO)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# End-to-end tests (TODO)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

# Dokumentation

[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)<br>
[CoreUI - introduction](https://coreui.io/docs/getting-started/introduction/#angular-4)<br>
[CoreUI - Angular5](https://coreui.io/docs/getting-started/angular5-version/)<br>
[CoreUI - GitHub](https://github.com/coreui/coreui-free-angular-admin-template)

[Material Design for Bootstrap 4](https://mdbootstrap.com/angular/)
