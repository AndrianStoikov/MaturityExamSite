const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const helmet = require('helmet')
const ddos = require('dddos')
const cookieParser = require('cookie-parser');

const secretKey = 'Z2mffFzEzRjgsS9OlIa8s3KegNzkiEMU/vOogOBY4uq7EOef6mHyVQax/+f7d6UhBcJMDQIfGua/9uDqOrXYn43SwBJxL20jeFgS7LOkvRHkVuc8E28fMUER2sTgTt5VjPn5aH2I8+/cOHUf3dilVmUzbe0G0uEkxa1ucqT87+s='

module.exports = {
  attachMiddleWares: (app) => {
    app.set('port', process.env.PORT || 3000)


    app.use(logger('dev'))
    app.use(bodyParser.json({limit: '2mb'}))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(express.static(path.normalize(path.join(__dirname, '../public'))))
    app.use(session({secret: secretKey, saveUninitialized: false, resave: false}))
    app.use(passport.initialize())
    app.use(cookieParser());

    // TODO: Fix cors policy if the domain is changed
    app.use(cors({
      origin: ['http://localhost:3001', 'http://192.168.0.102:3001']
    }))
    app.use(passport.session())
    app.use(helmet())

    // app.use(new ddos({
    //   rules: [
    //     {
    //       /* Only allow 2 login request per check interval. */
    //       string: '/api/user/login',
    //       maxWeight: 2
    //     },
    //     {
    //       /* Allow 4 requests accessing the application API per checkInterval */
    //       regexp: '^/api.*',
    //       flags: 'i',
    //       maxWeight: 6,
    //       queueSize: 4 /* If request limit is exceeded, new requests are added to the queue */
    //     }
    //   ]
    // }).express())

    // // catch 404 and forward to error handler
    // app.use(function(req, res, next) {
    //   next(createError(404));
    // });
    //
    // // error handler
    // app.use(function(err, req, res, next) {
    //   // set locals, only providing error in development
    //   res.locals.message = err.message;
    //   res.locals.error = req.app.get('env') === 'development' ? err : {};
    //
    //   // render the error page
    //   res.status(err.status || 500);
    // });
  }
}
