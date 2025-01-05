//mongodb+srv://kaushikpranjali7:2002@cluster0.xcevy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 



export let users =[
    {
      "id": 1,
      "name": "Oğuz Yağız Kara",
      "email": "oguz@bluereceipt.com",
      "phone": "+90 535 646 81 77",
      "location": "Ankara, Turkey",
      "revenue": 3452,
      "webVisits": 42,
      "tags": ["Abandoned Cart", "Popup Error", "Shop Error"],
      "lastVisited": "2024-08-08",
      "time": "5m",
      "message": "I keep getting 'error while creating a new popup' for the first-time setup, so I'm not able to create a popup."
    },
    {
      "id": 2,
      "name": "George Klein",
      "email": "george.klein@gmail.com",
      "phone": "+1 312 555 1234",
      "location": "New York, USA",
      "revenue": 1200,
      "webVisits": 15,
      "tags": ["Loyal Customer"],
      "lastVisited": "2024-07-28",
      "time": "1h 54m",
      "message": "Wow, this is really epic man! Thank you so much."
    },
    {
      "id": 3,
      "name": "847-401-1944",
      "email": "anonymous@unknown.com",
      "phone": "+1 847 401 1944",
      "location": "Unknown",
      "revenue": 0,
      "webVisits": 0,
      "tags": ["New User"],
      "lastVisited": "2024-07-25",
      "time": "6h 21m",
      "message": "Haha oh man, this is amazing!"
    },
    {
      "id": 4,
      "name": "Erşad Başbağ",
      "email": "ersad@bluereceipt.com",
      "phone": "+90 555 321 1234",
      "location": "Istanbul, Turkey",
      "revenue": 4300,
      "webVisits": 28,
      "tags": ["Frequent Buyer"],
      "lastVisited": "2024-08-15",
      "time": "6h 21m",
      "message": "There will be changes to next week's presentation due to the recent policy."
    }
  ]
  

  function updateLastMsg(id,msg){
  
    for(let i =0;i<users.length;i++){
        if(users[i].id == id){
            users[i].message= msg
            return;
        }
    }
  }

  export let conversation = [

    {
        'id' : 1 ,
        'messages' : []
    },
    {
        'id' : 2 ,
        'messages' : []
    },

    {
        'id' : 3 ,
        'messages' : []
    },

    {
        'id' : 4 ,
        'messages' : []
    },

  ]

  export function MsgSent(msg,id){

    // add msg to conv
        AddMsg(msg,id)
        updateLastMsg(msg,id)
}



function AddMsg(msg,id){
  for(let i=0;i<conversation.length;i++){
     if(conversation[i].id == id){
        conversation[i].messages.push(msg)
     }
  }
}