const fileSystem = require('fs');

//create a file 

fileSystem.writeFile('example.txt',"this is example of file",(error)=>{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('file succesefully created');
        fileSystem.readFile('example.txt','utf8',(error,file)=>{
            if(error)
            {
                console.log(error);
            }
            else{
                console.log(file);
            }
        });
    }
})

// rename file 
fileSystem.rename('test.yml','example2.yml',(err)=>{
            if(err)
            {
                console.log(err);
            }
            else{

                console.log("successefullu renamed file");

            }
});

// append data to file

fileSystem.appendFile('example2.yml','data appended to file',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{

        console.log("successefull appended data to file");

    }
});

// delete file 
fileSystem.unlink('example2.yml',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{

        console.log("successefully deleted");

    }
});