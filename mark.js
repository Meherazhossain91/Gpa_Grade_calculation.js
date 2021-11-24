

function gpa(marks){

    let gpa ;

    if(marks>=0 && marks <=32){
        gpa = 0;
    }
    else if(marks>=33 && marks <40){
        gpa = 1;
    }
    else if(marks>=40 && marks <50){
        gpa = 2;
    }
     else if(marks>=50 && marks <60){
        gpa = 3;
    }
    else if(marks>=60 && marks <70){
        gpa = 3.5;
    }
    else if(marks>=70 && marks <80){
        gpa = 4;
    }
    else if(marks>=80 && marks <=100){
        gpa = 5;
    }
    return gpa;
}


    function grade (marks){

    let grade;

    if(marks>=0 && marks <=32){
        grade = 'F';
    }
    if(marks>=33 && marks <40){
        grade = 'D';
    }
    if(marks>=40 && marks <50){
        grade = 'C';
    }
    if(marks>=50 && marks <60){
        grade = 'B';
    }
    if(marks>=60 && marks <70){
        grade = 'A-';
    }
    if(marks>=70 && marks <80){
        grade = 'A';
    }
    if(marks>=80 && marks <=100){
        grade = 'A+';
    }
    return grade;
}





let name = prompt( "Enter Your Name :");
let roll = prompt("Enter Your Roll Number:")
     
     
     let bangla = parseInt(prompt(" Bangla Mark: "));
     let english = parseInt(prompt(" English Mark: "));
     let math = parseInt(prompt("Math Mark: "));
     let physics = parseInt(prompt("Physics Mark: "));
     let chemistry = parseInt(prompt("Chemistry Mark: "));
     let biology = parseInt(prompt("Biology Mark: "));
      


      function cgpa (bangla,english,math,physics,chemistry,biology){

        let tottal_gpa = ( bangla + english + math + physics + chemistry + biology);
        let cgpa = tottal_gpa/6;
    
        if ( bangla == 0 || english == 0 || math == 0 || physics == 0 || chemistry == 0 || biology == 0){
    
        return " You Are Failed";
        }else{
        return` Your CGPA : ${cgpa}`;
        }
    }

    console.log(`
    
    Student Name     : ${name}
    Student Roll     : ${roll}
    
    
    Subject        Marks                  GPA                           Grade        
    
    Bangla        :${bangla}              ${gpa(bangla)}                    ${grade(bangla)}
    English       :${english}             ${gpa(english)}                   ${grade(english)}
    Math          :${math}                ${gpa(math)}                      ${grade(math)}
    Physics       :${physics}             ${gpa(physics)}                   ${grade(physics)}
    Chemistry     :${chemistry}           ${gpa(chemistry)}                 ${grade(chemistry)}
    Biology       :${biology}             ${gpa(biology)}                   ${grade(biology)}
         
    ____________________________________________________________________________________________________________
                                     cgpa = ${cgpa(gpa(bangla),gpa(english),gpa(math),gpa(physics),gpa(chemistry),gpa(biology))}
    `); 

  
