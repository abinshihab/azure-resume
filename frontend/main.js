window.addEventListener('DOMContentLoaded',even =>{
    getVisitCount();
})

const functionApi = "";

const getVisitCount = () => {

    let count = 30 ; 
    fetch(functionApi).then(response => {

        response.json 
    }).then(response => {

        console.log("Website called functionAPI,");
        count = response.count;
        document.getElementById("counter").innerText= count ;
    }).catch(function(error){

        console.log(error);

    });
    return count;

}