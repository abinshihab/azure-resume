window.addEventListener('DOMContentLoaded',even =>{
    getVisitCount();
})

const functionApi = "http://localhost:7071/api/GetAzureResumeCounter";

const getVisitCount = () => {

    let count = 30; 
    fetch(functionApi).then(response => {

       return response.json 
    }).then(response => {

        console.log("Website called functionAPI,");
        count = response.count;
        document.getElementById("counter").innerText= count;
    }).catch(function(error){

        console.log(error);

    });
    return count;

}