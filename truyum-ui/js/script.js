function validateForm(){
    var title=document.forms["editMenuItem"]["title"].value;
    if(title==""){
         alert("Title is required");
        return false;
    }
    if(title.length<2){
        alert("Title should have 2 to 65 characters.");
        return false;
    }
    if(title.length>65){
        alert("Title should have 2 to 65 characters.");
        return false;
    }
    var price=document.forms["editMenuItem"]["price"].value;
    if(price==""){
        alert("Price is required");
        return false;
    }
    if(isNaN(price)){
        alert("Price has to be a number.");
        return false;
    }
    var date=document.forms["editMenuItem"]["dateOfLaunch"].value;
    if(date==""){
        alert("Date of Launch is required");
        return false;
    }
    var category=document.forms["editMenuItem"]["category"].value;
    if(category=="select"){
        alert("Select one category");
        return false;
    } 
}