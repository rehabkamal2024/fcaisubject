const studentsarr = [
    {
        name: "احمد مصطفي سيد احمد",
        nationnum: "30501072300592",
        email: "am8336@fayoum.edu.eg",
        phase: "المستوى الاول",
        semster: "الفصل الدراسي الاول",
        department: "قسم عام",
        subject: ["لغة انجليزية (1)", "الكترونيات", "برمجة (1)", "رياضيات (1)", "فيزياء (1)", "مقدمة علوم الحاسب", "القضايا المجتمعية"]
    }
    , {
        name: "احمد اسامه السيد",
        nationnum: "30305211401133",
        email: "ao1470@fayoum.edu.eg",
        phase: "المستوى الثاني",
        semster: "الفصل الدراسي الاول",
        department: "قسم عام",
        subject: ["الهياكل المنفصلة", "البرمجة الشيئية", "أسس نظم المعلومات", "رياضيات 3", "أخلاقيات المهنة", "معالجة الإشاراة الرقمية"]
    }
    , {
        name: "مؤمن احمد رجب دسوقى",
        nationnum: "30202112301034",
        email: "ma5727@fayoum.edu.eg",
        phase: "المستوى الثالث",
        semster: "الفصل الدراسي الاول",
        department: "قسم نظم المعلومات",
        subject: ["نظم التشغيل", "التنقيب على البيانات", "تحليل وتصميم الخوارزميات", "هندسة البرمجيات", "بناء الحاسب", "نظم قواعد البيانات"]
    }
    , {
        name: "محمد على عبد التواب عوض",
        nationnum: "30111202300872",
        email: "ma5106@fayoum.edu.eg",
        phase: "المستوى الرابع",
        semster: "الفصل الدراسي الاول",
        department: "قسم علوم حاسب",
        subject: ["بناء المترجمات", "مقدمة فى امان الحاسبات", "اساسيات البيانات الكبيرة", "تعلم الالة", "مقرر اختيارى (2)"]
    }
]
const phsubjectsarr=["مقدمة","بناء المترجمات", "مقدمة فى امان الحاسبات", "اساسيات البيانات الكبيرة", "تعلم الالة", "مقرر اختيارى (2)","نظم التشغيل", "التنقيب على البيانات", "تحليل وتصميم الخوارزميات", "هندسة البرمجيات", "بناء الحاسب", "نظم قواعد البيانات","الهياكل المنفصلة", "البرمجة الشيئية", "أسس نظم المعلومات", "رياضيات 3", "أخلاقيات المهنة", "معالجة الإشاراة الرقمية","لغة انجليزية (1)", "الكترونيات", "برمجة (1)", "رياضيات (1)", "فيزياء (1)", "مقدمة علوم الحاسب", "القضايا المجتمعية"]

let logedtstnation = "30501072300592";//localStorage.getItem("username").trim();
//const logedtstnation= document.getElementById("name-form02-o");
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const logedtstnation=urlParams.get('nationNum') 

const stname = document.getElementById("name");
const nationnum = document.getElementById("nationnum");
const email = document.getElementById("email");
const phase = document.getElementById("phase");
const semster = document.getElementById("semster");
const department = document.getElementById("department");
let phsubjects = document.getElementById("phsubjects")
let Stdsubjects = document.getElementById("Stdsubjects")
//add student subjects
//phase subjects
function addPhelem(phasesarr) {
    //add phase subjects
    for (i = 0; i < phasesarr.length; i++) {
        let checkbox = document.createElement('input');
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value =phasesarr[i];
        checkbox.id = i;
        let label = document.createElement('label');

        // assigning attributes for the created label tag 
        label.htmlFor = checkbox.id;
        label.id=i;

        // appending the created text to 
        // the created label tag 
        label.appendChild(document.createTextNode(phasesarr[i]));
        // appending the checkbox and label to div
        phsubjects.appendChild(checkbox);
        phsubjects.appendChild(label);

        let newline = document.createElement('br');
        phsubjects.appendChild(newline);
    }

}
//    alert(logedtstnation.valueOf())
//////////////////////////////////////////////////////////////

function addelem(studentsarr, stindex) {
   

    //add student subjects
    for (i = 0; i <studentsarr[stindex].subject.length; i++) {
       // console.log(studentsarr[stindex].subject.length)

        let checkbox = document.createElement('input');
        // Assigning the attributes to created checkbox
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = studentsarr[stindex].subject[i];
        checkbox.id =i;
        let label = document.createElement('label');
        // assigning attributes for the created label tag 
        label.htmlFor = checkbox.id;
        label.id=i;

        // appending the created text to 
        // the created label tag 
    
        label.appendChild(document.createTextNode(studentsarr[stindex].subject[i]));
        // appending the checkbox and label to div
        Stdsubjects.appendChild(checkbox);
        Stdsubjects.appendChild(label);
        let newline = document.createElement('br');
        Stdsubjects.appendChild(newline);
        for(j=0;j<phsubjectsarr.length;j++){
        // console.log(phsubjectsarr[j])

            if(phsubjectsarr[j]==studentsarr[stindex].subject[i]){
                //console.log(phsubjectsarr[j])
                phsubjectsarr.splice(j,1);
                //console.log(phsubjectsarr)

            }
        }
    }
    phsubjects.innerHTML = '';

    addPhelem(phsubjectsarr);

}


function addchecksubj(){
  let studentindex=-1;
for(i=0;i<studentsarr.length;i++){
    if (studentsarr[i].nationnum == logedtstnation.valueOf()) {
        studentindex=i;
        break;
    }
}
const childlst=phsubjects.children;
let addedsubj=studentsarr[studentindex];
for(i=0;i<childlst.length;i++)
{
    if(childlst[i].checked==true){
       
      addedsubj.subject.push(childlst[i].getAttribute("value"));
    }
    
    
}
phsubjects.innerHTML = '';
Stdsubjects.innerHTML = '';

addelem(studentsarr, studentindex)
}
// let phasesubjectsrem=phsubjects.querySelectorAll("input");
// let phasesubjectsremlb=phsubjects.querySelectorAll("label");


// let stsubjectsrem=Stdsubjects.querySelectorAll("input");
// let stsubjectsremlb=Stdsubjects.querySelectorAll("label");

function stared(){
    for (i = 0; i <studentsarr.length; i++) {
        if (studentsarr[i].nationnum == logedtstnation.valueOf()) {
            stname.innerHTML =
                "اسم الطالب: " + studentsarr[i].name;
    
            nationnum.innerHTML =
                "الرقم القومى: " + studentsarr[i].nationnum;
    
            email.innerHTML =
                "البريد الالكترونى: " + "<br/>" + studentsarr[i].email;
    
            phase.innerHTML =
                "المستوى: " + studentsarr[i].phase;
    
            semster.innerHTML =
                "الفصل الدراسى:  " + studentsarr[i].semster;
            department.innerHTML =
                "القسم:  " + studentsarr[i].department;
            addelem(studentsarr, i);
    
           
       //phsubjectsarr 
            break;
        }
    
    }
}
 const downloadlinks = document.createElement("a"); 
 downloadlinks.href="files/"+logedtstnation.valueOf()+".docx"
 downloadlinks.innerHTML = "تحميل استمارة التسجيل";
 downloadlinks.style.fontSize="30px";
 downloadlinks.style.color="white"
 downloadlinks.style.backgroundColor="red"
 

// // Append to another element:

document.getElementById("file").appendChild(downloadlinks);
