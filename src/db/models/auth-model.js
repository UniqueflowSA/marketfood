import { Auth } from "../schemas/auth-schema.js";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  
  
export { Auth };
