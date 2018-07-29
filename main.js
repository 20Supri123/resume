//function Loadjson(file,callback) {
//var xhr = new XMLHttpRequest();
//xhr.overrideMimeType("application/json");
//xhr.open("GET",file,true);
//xhr.onreadystatechange = function () {
  //if(xhr.readyState === 4 && xhr.status == "200"){
    //callback(xhr.responseText);
//}
//};
//xhr.send(null);
//}
//Loadjson("data.json",function(text)
//{
//var data = JSON.parse(text);
//console.log(data);
//basics(data.details);
//basics1(data.career);
//basics2(data.Education);
//basics3(data.technical);
//basics4(data.achievements);
//}
//)

function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch (file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
      reject(new Error("error"))  ;
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  basics1(data.career);
  basics2(data.Education);
  basics3(data.technical);
  basics4(data.achievements);
})
var child =document.querySelector(".child1");
function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child.appendChild(image);

  var n = document.createElement("h4");
  n.textContent = det.name;
  child.appendChild(n);

  var ph = document.createElement("h4");
  ph.textContent = det.phno;
  child.appendChild(ph);

  var mail =document.createElement("a")
  mail.href = "mailto:makkenabhargav5@gmail.com";
  mail.textContent =  det.email;
  child.appendChild(mail);

  var ad = document.createElement("h2");
  ad.textContent = "Address:";
  child.appendChild(ad);
  var h = document.createElement("hr");
  child.appendChild(h);
  var pr = document.createElement("p");
  pr.textContent = det.address;
  child.appendChild(pr);
}
var child3 =document.querySelector(".child2");
function basics1(de) {
  var co = document.createElement("h3");
  co.textContent = "Career Objective:";
  child3.appendChild(co);
  var hr =document.createElement("hr");
  child3.appendChild(hr);
  var t = document.createElement("p");
  t.textContent = de.text;
  child3.appendChild(t);
}

function basics2(d) {
  var hd = document.createElement("h3");
  hd.textContent = "Educational Qualifications:";
  child3.appendChild(hd);
  var hr = document.createElement("hr");
  child3.appendChild(hr);

var table1 = document.createElement("table");
table1.border = "1";
child3.appendChild(table1);

tabledata = "<th>"+"Qualification"+"</th><th>"+"Institute"+"</th><th>"+"year of passing"+"</th><th>"+"percentage"+"</th>";
for(i=0;i<d.length;i++)
{
  tabledata+="<tr><td>"+d[i].qualification+"</td><td>"+d[i].Institute+"</td><td>"+d[i].YearofPassing+"</td><td>"+d[i].Percentage+"</td></tr>";
}
table1.innerHTML = tabledata;
}
function basics3(t) {
  var hd = document.createElement("h3");
  hd.textContent = "Technical Skills";
  child3.appendChild(hd);
  var hr = document.createElement("hr");
  child3.appendChild(hr);
  for(i=0;i<t.length;i++){
    var title = document.createElement("h3");
    title.textContent = t[i].title;
    child3.appendChild(title);

    var u = document.createElement("ul");
    var l = document.createElement("li");
    l.textContent = t[i].info;
    u.appendChild(l);
    child3.appendChild(u);
  }
}
function basics4(a) {
  var hd = document.createElement("h3");
  hd.textContent = "Achievements";
  child3.appendChild(hd);
  var hr = document.createElement("hr");
  child3.appendChild(hr);
  for(i=0;i<a.length;i++){
    var ua = document.createElement("ul");
    var la = document.createElement("li");
    la.type = "circle";
    la.textContent = a[i].t;
    child3.appendChild(la);
}
}
function openpage() {
  window.open("rs.html","_self",true)

}
