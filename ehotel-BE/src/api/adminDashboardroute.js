const adminDashboardRepo= require('../repository/adminDashboardRepository')
 
exports.dashboard= (req, res, next)=>{
    adminDashboardRepo((err, result)=>{
        if(err)throw err;
        else if(!result)
        res.send("No users found")
        else
            {
            res.json(result)
            }
    });
}