var n=Math.random();
n*=6;
n=Math.ceil(n);
var m=Math.random();
m*=6;
m=Math.ceil(m);
function showImage(n,m){
    if (n==1){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
    }
    if (n==2){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
    }
    if (n==3){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
    }
    if (n==4){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
    }
    if (n==5){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
    }
    if (n==6){
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
    }  
    if (m==1){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
    }
    if (m==2){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
    }
    if (m==3){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
    }
    if (m==4){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
    }
    if (m==5){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
    }
    if (m==6){
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
    }
    if (n==m){
        document.getElementsByTagName("H1")[0].textContent="Draw  🤜🤛";
    }  
    if(n>m){
        document.getElementsByTagName("H1")[0].textContent="Player-1 wins 🥳";
    }
    if(m>n){
        document.getElementsByTagName("H1")[0].textContent="Player-2 wins 🥳";
    }
}
showImage(n,m);
