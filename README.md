## Notes 
- we use bootswatch to get css theme - that's why we don't install bootstrap itself. only react-bootstrap

- "proxy" property in /frontend/package.json - redirects from 3000 to 5000 port. Allows to write requests from Components just to "/api/smth" via axios in useEffect hook

- IMPORTANT. HA! I'll use es-modules. Node 14.6+ is needed to run this stuff. Or experimental flags - all this stuff

- mongoDB is used from cloud - don't need to install it. Go to mongo.com and login -> create an organization (i already have one) -> createa profject -> create a cluster.
Than you need a MongoDB Compass - UI for MongoDB - download from official website and install.
Than crete a DB user in mongo cloud
Than add a IP whitelist in mongoDB cloud - currently all connections are allowed (there is nothing there, except 2 faik users)
Than create a collection in your Cluster -> mernshop -> products 
Than connect a Compass -> Clusters -> connect -> Compass -> Copy connection string
Paste connection string to CompassAPP -> change string's ending from default /test to your db name. Add a password to the string
Than copy another connection URL from "connect from application" to .env file - replace dbname and password

- "colors" package installed. Should be imported once (main file in order of reading) - add colors to string ) really funny one :)

- mongooose is using models to describe data. in backend/models. Mongo automatically creates "id" field - don't send "id" fields from your data.

- bcryptjs package - not just "bcrypt" - less dependencies. Used to make passwords hashes. In backend/data/users.js

- express-async-handler package is used to easily handle async exeptions in express. Just need to wrap all async function in it. example in ./backend/routes/productRoutes. It is instead of using try/catch OR .catch(next)

- Alex! remember - you have PostMan collection on PC. Use it test the API

- error handling is in separate middleware. Read comments - seems express undertand the error only by amount of params passed to middleware. 404 error also there.
we also use

- redux-thunk package is for making async requests from actions. Example is in \frontend\src\actions\productActions.js when we 
``` export const listProducts = () => async (dispatch) => { ```
Read about it more on npm - i bety you will need it in the future. Basically it allows to return function from actions instead of actions. Kind of middleware that gives you a way to make async stuf in actions
