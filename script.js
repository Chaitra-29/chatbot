  function timeNow() {
    let d = new Date();
    return d.getHours()+":"+d.getMinutes();
  }

  function getDisplayName(){
    let name = document.getElementById("displayName").value;
    return name !== '' ? name : "User1";
  }

  function send(){
    let message = document.getElementById("messagetext").value;
    if(message !== ""){
      let parentContainer = document.getElementById("parent-container");
      let div = document.createElement("div");
      let span = document.createElement("span");
      let spantime = document.createElement("span");
      let p = getType(message);
      spantime.innerText = timeNow();
      spantime.className = "time";
      span.innerText = getDisplayName();
      span.className = "user"
      p.innerHTML = message;
      p.className = "message";
      div.className = "container";
      div.append(span)
      div.append(spantime)
      div.append(p);
      parentContainer.append(div);
    }
  }

  function getType(message){
    message = message.toLowerCase();
    if(message.includes("https://") || message.includes("http://")){
      let a = document.createElement("a");
      a.href = message;
      return a;
    }else{
      return document.createElement("p");
    }
  }

  function search(){
  
  }