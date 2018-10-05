// * MODULE DEPENDENCIES
import { User } from '../../models';

import jwt from 'jwt-simple';
import { jwtSecret } from '../../config/variables';

// ? post /login/
export function generateToken(req, res) {
    let employID = req.get('employID');
    let password = req.get('password');
    if (employID && password) {
        User.findOne({
            employID
        }, (err, user) => {
            if (err) return res.status(500).send(err);
            if (!user) return res.status(401).json({
                error: 'User not found!'
            });

            user.comparePassword(password)
                .then(match => {
                    if (match) {
                        let payload = {
                            id: user._id
                        };
                        let token = jwt.encode(payload, jwtSecret);
                        return res.json({
                            token
                        });
                    } else {
                        return res.status(401).json({
                            error: 'Password incorrect!'
                        });
                    }
                })
                .catch(e => {
                    console.error(e);
                    res.json(e).status(500);
                });
        });
    } else {
        res.sendStatus(401);
    }
}

// ? get/post/
export function getUserDetails (req, res) {
    let user = req.user;
    return res.json(user);
}
