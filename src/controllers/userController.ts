import { Request, Response, NextFunction } from "express";
import { User } from "../model/userSchema";


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    let userId = req.params.id
    try {
       let user = await  User.findById(userId)
       if(user?.name){
         return res.json({"user" : user})
       }
       return res.status(404).json({"message" : "user not found"})
    } catch (error) {
        res.status(404).json({
            "message" : "check the database connection"
        })
    }
};

export const postUser = async (req : Request,res:Response) => {
    try {
        const {name,email,dob} = req.body
        if(!name || !email || !dob){
            throw Error
        }
        console.log("pass")
        console.log(name,email,dob)
            try {
            const user = new User
            ({
                        name,
                        email,
                        dob
            });
            const savedUser = await user.save();  
            return res.status(200).json({
                "message" : "user saved",
                "saved_user" : savedUser
            })

            } catch (error) {
                return res.status(400).json({
                    "message" : JSON.stringify(error)
                })
            }
        }
    catch (error) {
        return res.status(400).json({
            "message" : "please send the correct json in body"
        })
    }
     
}



export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let userId = req.params.id
        try {
            let user = await  User.findByIdAndDelete(userId)
            if(user?.name){
               return res.status(200).json({
                    "message" : "user deleted sucessfully",
                    "deleted_user" : user
                })
            }
            else{
                return res.status(404).json({
                    "message" : "user not found"
                })
                
            }

        } catch (error) {
            res.status(400).json({
            "message" : JSON.stringify(error)
        })
        }
    } catch (error) {
        res.status(401).json({
            "message" : JSON.stringify(error)
        })
    }
};