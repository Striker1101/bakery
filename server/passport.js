const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const users = require("./mongoDB/users");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "cat",
};

passport.use(
  new Strategy(opts, (jwt_payload, done) => {
    const user = users.users.find((user) => user.id === jwt_payload.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);
module.exports = passport;
