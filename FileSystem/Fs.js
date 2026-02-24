const fs = require('fs');

if(!fs.existsSync("NewDir")){

    fs.mkdir("NewDir", (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Dir Created");
        }
    });
} else {
    console.log("Dir already exists");
}

fs.writeFile("NewDir/hello.txt", "Bye Bye World!", (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("File Created");
    }
});

fs.readFile("NewDir/hello.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log("File Content:", data);
    }   
});

fs.rename("NewDir/hello.txt", "NewDir/greeting.txt", (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("File Renamed");
    }
});


if(!fs.existsSync("NewDir")){
    fs.unlink("NewDir/greeting.txt", (err) => {
        if(err){
            console.log(err);       
        } else {
            console.log("File Deleted");
        }
    });
} else {
    console.log("Dir does not exist");
}

fs.rmdir("NewDir", (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Dir Deleted");
    }
}); 




