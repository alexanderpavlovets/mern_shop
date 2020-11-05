## Notes 
- we use bootswatch to get css theme - that's why we don't install bootstrap itself. only react-bootstrap

- "proxy" property in /frontend/package.json - redirects from 3000 to 5000 port. Allows to write requests from Components just to "/api/smth" via axios in useEffect hook

- IMPORTANT. I'll use es6 modules. Node 14.6+ is needed to run this stuff.