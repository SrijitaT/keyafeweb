const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const models = require("../models");
const keys = require("../config/keys");


const registerUser = async (req, res) => {
    /* const { errors, isValid } = validateRegisterInput(req.body);
     //Check validation
     if (!isValid) {
       return res.status(400).json(errors);
     }*/
    const errors = {};
    console.log("req.body.email---",req.body);
    const user = await models.User.findOne({ where: { email: req.body.email } });
    if (user) {
        errors.email = "Email already exists!";
        return res.status(400).json(errors);
    }
    else {
        try {
            models.User.create({
                username: req.body.username,
                phone: req.body.phone,
                address: req.body.address,
                pincode: req.body.pincode,
                email: req.body.email,
                password: req.body.password
            })
                .then(user => {
                    const { password, ...rest } = user.dataValues;
                    return res.status(200).json(rest);
                })
                .catch(err => res.status(400).json(err))
        }
        catch (err) {
            console.log(err);
        }
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    /*const { errors, isValid } = validateLoginInput(req.body);
    //Check validation
  
    if (!isValid) {
      return res.status(400).json(errors);
    }*/
    //Find the user by email
    const errors = {};
    try {
        var current_user = await models.User.findOne({ where: { email: req.body.email } });;
        if (!current_user) {
            errors.email = "User not found!";
            return res.status(404).json(errors);
        }
    }
    catch (err) {
        console.log(err);
    }
    //Check password
    const isMatch = await current_user.isValidPassword(password);
    if (isMatch) {
        //User Matched
        const payload = {
            id: current_user.id,
            username: current_user.username
        }; //Create JWT payload

        //Sign Token
        jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );
    } else {
        errors.password = "Password incorrect!";
        return res.status(400).json(errors);
    }

}

module.exports = { registerUser, loginUser };