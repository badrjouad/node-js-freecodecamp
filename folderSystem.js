const fileSystem = require('fs');

// fileSystem.mkdir('tutorial',(err)=>{
//     if(err)
//     {

//         console.log(err)
//     }
//     else
//     {
//        fileSystem.writeFile('./tutorial/example2.txt','123',(err)=>{
//         if(err)
//         {
//             console.log(err);

//         }
//         else{
//             console.log('successefully created');
//         }
//        })
//     }
// })
fileSystem.unlink('./tutorial.example2.txt',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        fileSystem.rmdir('tutorial',(err)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                console.log('deleted folder');
            }
        });
    }
});

