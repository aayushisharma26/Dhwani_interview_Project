const mysql =require("mysql")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '123@Navgurukul',
      database : 'Data'
    }
  });

signup = function(req,res){
    // var id = req.body.id
    var user_name = req.body.user_name
    var user_password = req.body.user_password

    knex('register')
    .insert({user_name:user_name, user_password:user_password})
    .then((message)=>{
        // console.log(message)
        const token = jwt.sign(user_name,'secretKey')
        res.json({
            Sucessfully:message
        });
    })
    .catch((err)=>{
        res.json({
            Error:err
        })
    })
}  

login=(req,res)=>{
    const user=req.body
    knex("register").select("*").where("user_name",user.user_name)
    .then((data)=>{
        if(data.length>0){
            for (i of data)
                userpassword=i["user_password"]
            const verified=bcrypt.compare(user.password,user , userpassword.toString())
            if(verified){
                jwt.sign({user_name:user.user_name ,id:i.id},"secretKey",(err,token)=>{
                    if(token){
                        res.json({message:"Logged In",token:token})
                    }
                })
            }
            else{
                res.send("password is failed")
            }
            
        }else{
            res.send("user does't  exist")
        }
        })
}
        

verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        var decoded = jwt.decode(bearerToken);
        req.data = decoded
        next();
    } else {
        res.status(403).send("user is not authenticated")
    }
}

post_state = (req, res) => {
    newdata = req.body
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (authData) {
            console.log(authData)
            knex("state").insert({
                id:authData.id,
                state_name:newdata.state_name
                
                })
                .then((result) => {
                    console.log(result);
                    res.send({ sucess: "your state is succesfuly inserted." })
                })
                .catch((err) => {
                    if (err) {
                        console.log(err);
                        res.status(400).send({ error: err })
                    }
                })

        } else {
            res.send({
                err:"You have already state is defined"
            })
        }
            
        
    })
}

get_state=(req,res)=>{
        knex.from("state").select("*")
        .then((row) =>{
            res.send(row)
        })
        .catch((err)=>{
            res.json({
                message:err
            })
        })  

}

create_district=(req,res)=>{
    newdata=req.body
    jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(authData){
            knex("District").insert({
                state_id:newdata.state_id,
                id:authData.id,
                District_name:newdata.District_name
            })
            .then((result)=>{
                console.log(result)
                res.send({sucess:"Your district is succesfuly inserted."})
            })
            .catch((err)=>{
                console.log(err)
                res.status (404).send({message:err})
            })
        }else{
            console.log(err);
        }
    })
}

get_district=(req,res)=>{
    knex.from("District").select("*")
    .then((row) =>{
        res.send(row)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })

}
create_childs=(req,res)=>{
    newdata=req.body
    jwt.verify(req.token,'secretKey',(err,authData)=>{
        if(authData){
            knex("childs").insert({
                Name:newdata.Name,
                Sex:newdata.Sex,
                DOB:newdata.DOB,
                Father_name:newdata.Father_name,
                Mother_name:newdata.Mother_name,
                //District_name:newdata.District_name,
                //state_name:newdata.state_name
                state_id: req.body.state_id,
                District_id: req.body.District_id

            }).then((result)=>{
                console.log(result);
                res.send({sucess:"Your child  is succesfuly inserted"})
            }).catch((err)=>{
                if(err){
                res.status (400).send({error:err})
                }
            })                                           
        }else{
            console.log(err);
        }


    })
}

get_childs=(req,res)=>{
    knex.from("childs").select("*")
    .then((row) =>{
        res.send(row)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })

}






module.exports={signup,login,verifyToken,post_state,get_state,create_district,get_district,create_childs,get_childs}