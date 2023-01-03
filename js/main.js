let hotel_fod=[
    {
        imageurl:"img/dosai.jpg",
        dishname:"DOSAI",
        husan:"Indian ",
        starrate:"4.1",
        time:"47min",
        rate:"₹250 For Two",
    },
    {
        imageurl:"img/idly.jpg",
        dishname:" IDLY",
        husan:"Indian",
        starrate:"4.3",
        time:"47min",
        rate:"₹250 For Two",
        
    },
    {
        imageurl:"img/naan.jpg",
        dishname:"NAAN",
        husan:"Indian",
        starrate:"3.7",
        time:"47min",
        rate:"₹250 For Two",
        
    },
    {
        imageurl:"img/puri.jpg",
        dishname:"Puri",
        husan:"Indian",
        starrate:"3.8",
        time:"47min",
        rate:"₹250 For Two",
        
    },
    {
        imageurl:"img/rice.jpg",
        dishname:"veg Meal",
        husan:"Indian",
        starrate:"4.2",
        time:"47min",
        rate:"₹250 For Two",
        
    },
    {
        imageurl:"img/sambarvadai.jpg",
        dishname:"Sambabr Vadai ",
        husan:"Indian",
        starrate:"3.9",
        time:"47min",
        rate:"₹250 For Two",
        
    },
   ,
    {
        imageurl:"img/vegbriyani.jpg",
        dishname:"veg briyani",
        husan:"Indian",
        starrate:"4.2",
        time:"47min",
        rate:"₹250 For Two",
        
    }
    
];
//container Declaration
let fod_cont=document.querySelector(".container");
//row Creation,set class name,append
let fod_row=document.createElement("div");
fod_row.classList.add("row");
fod_cont.appendChild(fod_row);
hotel_fod.forEach(e=>{
    //Colum Creation,set class name,append
    let fod_col=document.createElement("div");
    fod_col.classList.add("col");
    fod_row.appendChild(fod_col);
    //card Creation,set class name,append
    let fod_card=document.createElement("div");
    fod_card.classList.add("card");
    fod_col.appendChild(fod_card);
    //Creat a card inside Elements
    let card_img=document.createElement("img");
    card_img.src=e.imageurl;
    fod_card.appendChild(card_img);

    let card_text=document.createElement("div");
    card_text.classList.add("card-text");
    fod_card.appendChild(card_text);

    
    let card_title=document.createElement("div");
    card_title.classList.add("card-title");
    card_text.appendChild(card_title);
    //Hotel Name
    let card_name=document.createElement("h3");
    card_name.innerHTML=e.dishname;
    card_title.appendChild(card_name);
    //Husan Name
    let card_husan=document.createElement("p");
    card_husan.innerHTML=e.husan;
    card_title.appendChild(card_husan);
    //

    })



    //star and time create
    let card_rate=document.createElement("div");
    card_rate.classList.add("star-rate");
    fod_card.appendChild(card_rate);
    //Star rate
    let card_star=document.createElement("div");
    card_star.classList.add("icon")
    card_rate.appendChild(card_star);
    //star icon
    let icon=document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-star");
    card_star.appendChild(icon);
    let icon_text=document.createElement("span");
    icon_text.innerHTML=e.starrate;
    card_star.appendChild(icon_text);
    //Dot
    let rate_dot=document.createElement("div")
    rate_dot.innerHTML=".";
    card_rate.appendChild(rate_dot);
    //Time
    let card_time=document.createElement("div");
    card_time.innerHTML=e.time;
    card_rate.appendChild(card_time);
    //Dot2
    let rate_dot2=document.createElement("div")
    rate_dot2.innerHTML=".";
    card_rate.appendChild(rate_dot2);
    //Rs
    let card_rs=document.createElement("div");
    card_rs.innerHTML=e.rate;
    card_rate.appendChild(card_rs);
    
   
    
})
