const connection= require('./dbConnection')
let profile=[]
let user_id=1
 exports.user=(email, callback)=>{
     let sql=" SELECT email, first_name, last_name, phone_number, image FROM user_account\
      INNER JOIN seeker_profile ON user_account.user_id=seeker_profile.user_id where user_account.email=?";
     connection.query(sql, [email],(err, result)=>{
         if(err)
         callback({"code":404, "error":"Database connection error"})
         result[0].fullname=result[0].first_name+" "+result[0].last_name;
         delete result[0].first_name
         delete result[0].last_name
         profile[0]=result[0]
         let sql="select graduated_from, graduated_field, skills, experience from user_account inner join \
         seeker_profile on user_account.user_id=seeker_profile.user_id inner join resume on \
         resume.seeker_id=seeker_profile.seeker_id where user_account.email=?"
        connection.query(sql, [email],(err, result)=>{
            if(err){
                console.log(err)
                callback({"code":404, "error":"Database connection error"})
            }
            profile[1]=result[0]

            let sql="select job, job_type,category_name, company_name, applied_date, city from company \
            inner join job_post on company.company_id= job_post.company_id inner join  job_location on \
            job_post.job_id=job_location.job_id inner join applied_jobs on job_post.job_id=applied_jobs.job_id\
            inner join job_category on job_category.category_id=job_post.category_id where applied_jobs.user_id=?"
             connection.query(sql, user_id,(err, result)=>{
                 if(err)
                 callback({"code":404, "error":"Database connection error"})
                 profile[2]=result[0];
                 let sql="select company_name from company inner join usercompany_subscribes on \
                 usercompany_subscribes.company_id=company.company_id where usercompany_subscribes.user_id=? and status=1"
                 connection.query(sql, [user_id], (err, result)=>{
                        if(err)
                            callback({"code":404, "error":"Database connection error"})
                        profile[3]=result[0]
                        callback(undefined, profile)
                    })
                })
            
             })
        })
    }
 exports.getAllUserInfo=(email, callback)=>{
    let sql="select first_name, last_name, email, phone_number, gender, birth_date, cv from user_account inner join\
    seeker_profile on user_account.user_id=seeker_profile.user_id where email=?"

    connection.query(sql, [email],(err, result)=>{
            if (err)
            callback({"code":400,"error":"database connection error!"})
            else
            callback(undefined, result)
        })
 }

 exports.getResume=(email, callback)=>{
     let sql="select graduated_from, graduated_field, cgpa, skills, experience from user_account inner join seeker_profile on\
      user_account.user_id=seeker_profile.user_id inner join resume on seeker_profile.seeker_id=resume.seeker_id\
      where user_account.email=? "
      connection.query(sql, [email], (err, result)=>{
          if (err)
          callback({"code":400,"error":"database connection error!"})
          else
          callback(undefined, result)
        })
 }

 exports.unsubscibeCompany=(company_id, callback)=>{
     let sql="update usercompany_subscribes set status=0 where company_id=?"
     connection.query(sql, [company_id],(err, result)=>{
         if(err)
         callback({"code":400,"error":"database connection error!"})
         else
         callback(undefined, result)
     })
 }