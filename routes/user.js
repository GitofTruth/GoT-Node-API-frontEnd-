const express = require('express');
var beautify = require('js-beautify').html;
let http = require('http');
const lineReader = require('line-reader');
const router = express.Router();
const user = require ('../models/user');
const fs = require('fs');
const url = require('url');
const readFiles = require('../models/repoFolder');
//const path = require("path");

var path = require('path');
router.use(express.static(path.join(__dirname, '../public')));
// router.use (express.static(path.join(__dirname, '../repositories')));

router.get('/', (req, res) => {
    res.render('user_UI');
});
router.get('/profile', (req, res) => {
    res.send('profile');

});
router.post('/repositories',  function(req, res){
        let file = fs.readFileSync('test.json');
        let repos = JSON.parse(file);
        res.render('user_repos', {repos});
});


function parsePath(path){
  var pathNames =[]
  path.split("/").slice(1).forEach(function(elem){
      pathNames.push(elem)
  });
  return pathNames
}

lineReader.eachLine('/path/to/file', function(line) {
  console.log(line);
});

router.get('/repoFile', (req,res)=>{
  //var filePath = req.query.path;
  //fs.readFile(filePath, function(err, data) {
    
  let fileUrl = url.pathToFileURL("C:/xampp/htdocs/udemyCourseJSON/table.html");
  //let path = "C:/xampp/htdocs/temp/test.txt";
   res.render('test',{file: fileUrl.href});  
   //console.log(fileUrl.href);
   //console.log(data);
  //})
});




router.get('/repo', function(req, res)  {
   // read director
   var repo = req.query.repoName; 
  console.log("Repo Name " + repo)
   const fs = require('fs');
   var content = {folders:[] , files:[] };
   const dir = "./repositories/" + repo ;
   fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;
    fileNames.forEach(filename => {
      // get current file name
      const name = path.parse(filename).name;
      // get current file extension
      const ext = path.parse(filename).ext;
      // get current file path
      const filepath = path.resolve(dir, filename);
      var pathNames = parsePath(filepath);
      content.pathList  = pathNames;
      content.path = filepath;
      // get information about the file  
        var stats = fs.statSync(filepath);
        // check if the current path is a file or a folder
        const isFile = stats.isFile();
        // exclude folders
        if (isFile) {
          // callback, do something with the file
          content.files.push(filename);
        }
        else{
          content.folders.push(filename);
        }
    });
    console.log(content.folders);
    res.render('repo',{content});
  }); 
});

router.get('/organizations', async (req, res) => {
    res.render('index');

});
router.get('/channels', (req, res) => {
    res.send('channels');

});

//router.post('/', async (req, res) => {
  //  const { username, password, organization, channel} = req.body;
    //let user = {};
    //user.username = username;
    //user.password = password;
    //user.organization= organization;
    //user.channel =  channel;
    //let userModel = new User(user);
    //userModel.save();
    //res.json(userModel);
  //});
  //router.get('/:userId',  (req, res) =>{
   // try{
     //   const user= User.findById(req.params.id)
       // res.json(user);
        //console.log('useerridd');
    //}catch(err){
     //   res.json({message: err});
    //}
  //});



module.exports = router;