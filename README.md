## Notes 
- we use bootswatch to get css theme - that's why we don't install bootstrap itself. only react-bootstrap. This is important - again i forgot how to install themes :) Just go to bootsatch -> download -> cope bootstrap.min.css and import it

- "fas fa-trash" calss names are from font imported in index.html. Goto CDN link from bookmarks and add a link into <head>

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

- IMPORTANT. Mongo is setup for cloud. Durng development - switch to local DB or comment out "connectDB()" string in "server.js" - just to avoid often connections to cloud, because of nodemon rebuild on every line change.

- "colors" package installed. Should be imported once (main file in order of reading) - add colors to string ) really funny one :)

- mongooose is using models to describe data. in backend/models. Mongo automatically creates "_id" field - don't send "id" fields from your data.

- bcryptjs package - not just "bcrypt" - less dependencies. Used to make passwords hashes. In backend/data/users.js

- express-async-handler package is used to easily handle async exeptions in express. Just need to wrap all async function in it. example in ./backend/routes/productRoutes. It is instead of using try/catch OR .catch(next)

- Alex! remember - you have PostMan collection on PC. Use it test the API.

- error handling is in separate middleware. Read comments - seems express undertand the error only by amount of params passed to middleware. 404 error also there.
we also use

- redux-thunk package is for making async requests from actions. Example is in \frontend\src\actions\productActions.js when we 
``` export const listProducts = () => async (dispatch) => { ```
Read about it more on npm - i bety you will need it in the future. Basically it allows to return function from actions instead of actions. Kind of middleware that gives you a way to make async stuf in actions

- base flow: backend controller -> constants -> reducers -> actions -> dispatch action in component/screen

- add to cart interestng approach - by clck on "addToCart" we redirect, than on CartScreen = we just parse props and if cart is open after "addTocart" - we dispatch action "CART_ADD_ITEM" -> set it to local storage 

- Mongoose schema can have own added methods - see example in \backend\models\userModel.js

- Middleware can ve applie to only 1 endpoint - pass it as firstargument. Example in \backend\routes\userRoutes.js

- Take a look how Mongoose can encrypt some fields (password in this case). Via some preprocessor. Example: \backend\models\userModel.js

- read in react-bootstrap about Form. Form.Control Form.Group Form.Label ... etc.

- we dispatch 2 action USER_REGISTER and USER_LOGIN in "userActions -> register" - to set creds into local storage after success register

- PayPal - there are 2 accounts - personal/business. Personal = client who pays, business - for the mernShop itself.
- we use package to have PayPal button - react-paypal-button-v2, just to avoid big UI and etc. 
- IMPORTANT - to pay via paypal - use developer sandBox credentials. "Developer paypal" google it

- some requests are only for admin users - see "admin" middleware applied in routes.
- login as admin to see additional functionality in header (not only). Creds are very simple :)  

- good example of icons from font in UserListScreen, look for className='fas ... iconName'

- remember that you have "seeder" script - look at main package.json, it fills initial data into the DB - don't be afraid to delete, modify the data.

- Multer package is used to handle images upload. It handles mutipart/form-data content type.

- Morgan package for logging http requests - good one, see more in docs, can be healpfull one.

- Header is not Route in App.js, but i it is Possible to use "history" props in SearchBox. See implementation in Header.js component.

- Pagination is implemented in the project. To see it, or add more products, or change products amount on page in BE productController "const pageSize = 10"
This pagination will also work on product list screen for admins 
