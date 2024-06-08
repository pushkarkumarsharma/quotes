function generate_quote(){
    var quotes=[
        
        '"hello i am under the water"',
        '"marbau n maharvirwa wala"',
        '"all is well"'
    ]
    var author=[
        "- shivam",
        "- ankit",
        "- pushkar"
    ]
    let a=Math.floor(Math.random()*author.length);
    var authors=author[a];
    var quote=quotes[a];
    document.getElementById("quotes").innerHTML=quote;
    document.getElementById("author").innerHTML=authors;
}