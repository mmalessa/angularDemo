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
