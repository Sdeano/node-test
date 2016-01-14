/**
 * Created by I323504 on 13/01/2016.
 */

module.exports = function(app)
{
    app.get('/',function(req,res){
        res.sendFile(__dirname + "/index.html")
    });

    app.get("/mobilestyle.css",function(req,res)
    {
        res.sendFile(__dirname + "/mobilestyle.css");

    });

    app.get('/mobileindex.html',function(req,res){
        res.sendFile(__dirname + "/mobileindex.html")
    });

    app.get('/newuser.html',function(req,res)
    {
        res.sendFile(__dirname + "/newuser.html");

    });
    app.get('/login.html',function(req,res)
    {
        res.sendFile(__dirname + "/login.html");

    });
    app.get("/mobilestyle.css",function(req,res)
    {
        res.sendFile(__dirname + "/mobilestyle.css");

    });

    app.get("/riddles/style.css",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/style.css");

    });
    app.get("/riddles/ans1.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/ans1.html");

    });
    app.get("/riddles/ans2.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/ans2.html");

    });
    app.get("/riddles/ans3.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/ans3.html");

    });
    app.get("/riddles/ans4.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/ans4.html");

    });
    app.get("/riddles/ans5.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/ans5.html");

    });
    app.get("/riddles/demo1.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/demo1.html");

    });
    app.get("/riddles/demo2.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/demo2.html");

    });
    app.get("/riddles/demo3.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/demo3.html");

    });
    app.get("/riddles/demo4.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/demo4.html");

    });
    app.get("/riddles/demo5.html",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/demo5.html");

    });
    app.get("/riddles/Riddle15.jpg",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/Riddle15.jpg");

    });
    app.get("/riddles/Riddle22.jpg",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/Riddle22.jpg");

    });
    app.get("/riddles/AnswerforRiddle15.jpg",function(req,res)
    {
        res.sendFile(__dirname + "/riddles/AnswerforRiddle15.jpg");

    });




};