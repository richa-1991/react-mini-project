

export var userData= new Set();
let usersArr=
[
    {
        Id:101,
        Name:'Richa',
        ContactNo: 9393,
        Age:39,
        UserName:'Richa@',
        Password:'485832'
    },
    { 
        Id:107,
        Name:'Sajal',
        ContactNo: 9394,
        Age:33,
        UserName:'Sajal123',
        Password:'8958473'
    },

    { 
        Id:103,
        Name:'John',
        ContactNo: 9385,
        Age:84,
        UserName:'JGupta',
        Password:'599586'
    },

    { 
        Id:104,
        Name:'Rashmi',
        ContactNo: 9396,
        Age:85,
        UserName:'RSyy',
        Password:'954969'
    }
];

usersArr.map(ele=>{
    userData.add(ele);
})