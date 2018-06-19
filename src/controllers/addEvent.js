// router.get('/addEvent', addEvent.get);
// router.post('/addEvent',addEvent.post);
router.get('AddEvent',function(req,res)=>{
    res.send({type:'Get'})
})
//add new Event to db
router.post('AddEvent',function(req,res)=>{
    Ninja.create(req.body).then(function(AddEvent){
        res.send(AddEvent)
        
    })
})
 //update the event in db
 router.put('/AddEvent/:id',function(req,res)=>{
     res.send({type:'PUT'})
 })