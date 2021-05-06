// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var saturday = [];
var sunday = [];
var friday = [];


friday.push(new scheduleEvent("Hackathon KickOff", "18:00", "main"));
friday.push(new scheduleEvent("Hacking Begins", "18:30", "main"));
friday.push(new scheduleEvent("(W)What is Hackathon?", "20:30", "main"));
friday.push(new scheduleEvent("(M)Chill Time", "22:30", "main"));

saturday.push(new scheduleEvent("(W)Twitter Bot", "11:00", "main"));
saturday.push(new scheduleEvent("(M)Web Development Quiz", "16:00", "main"));
saturday.push(new scheduleEvent("(W)Deploying the website", "22:30", "main"));

sunday.push(new scheduleEvent("(M)Scribble", "10:00", "main"));
sunday.push(new scheduleEvent("Hacking Ends", "18:30", "main"));
sunday.push(new scheduleEvent("Keynote and Results", "22:30", "main"));


friday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );
saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th></tr>';
friday.forEach(function(ev, index){
  if (index ==0  || friday[index-1].startTime != ev.startTime){     
    str += '<tr>';

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != friday.length-1 && ev.startTime == friday[index+1].startTime){
        str += '<th>';
        str+=friday[index+1].startTime
        if(friday[index+1].endTime){
        str +=  '<br />|<br />' + friday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + friday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
 
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("fridayContainer").innerHTML = str;



var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';


  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';

  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';

    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';

  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;

