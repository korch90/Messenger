let store={

users:[

    {
        id:1,
        name:"Alisa Freed",
        avatar:"img3",
        messages:[
           {
owner:0,
text:"orevyar", 
 time_year:2022,
 time_mounth:8,
time_day:31,
time_hour:12,
time_minute:33,
time_sec:43},

        ]
    },
    {
        id:2,
        name:"Jo Fox",
        avatar:"img1",
        
        messages:[
            
            {
                owner:1,
                text:"Chao",
            time:"2/22/2222 04.12",
            time_year:2022,
        time_mounth:8,
    time_day:31,
    time_hour:12,
    time_minute:33,
    time_sec:43}
            ]
        
    },
    {
        id:3,
        name:"Johanna Freeman",
        avatar: "img2",
        messages:[
            {owner:1,
            text:"Quickly come to the meeting room 1B, we have a big server issue",

            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},

            {owner:0,
            text:"go home yankee",
        
            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},

            {owner:1,
            text:"never howewer",
          
            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},
        ]
    },
    {
        id:4,
        name:"Margo Po",
        avatar: "img4",
        messages:[
            {
 owner:1,
text:"helo",
time_year:2022,
 time_mounth:9,
    time_day:1,
    time_hour:12,
    time_minute:33,
    time_sec:43},
    {
 owner:0,
text:"helo",
time_year:2022,
 time_mounth:9,
    time_day:1,
    time_hour:12,
    time_minute:33,
    time_sec:43}
        ]
    }
],
users_In_Local_Chat:[
    {
        id:3,
        name:"Johanna Freeman",
        avatar: "img2",
        messages:[
            {owner:1,
            text:"Quickly come to the meeting room 1B, we have a big server issue",

            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},

            {owner:0,
            text:"go home yankee",
        
            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},

            {owner:1,
            text:"never howewer",
          
            time_year:2022,
            time_mounth:9,
            time_day:1,
            time_hour:11,
            time_minute:33,
            time_sec:43},
        ]
    }
],
oldArrUsers:[]
}
export default store

