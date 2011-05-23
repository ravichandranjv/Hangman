
var startPos=125;
var endPos=0;
var gameOver=-1;
var hangMan;
var randomnumber;
var word;
var maxTriesAllowed=0;
var triesAllowed;
var countGuess=0;
var maxGuesses;
var lengthOfWord;
var gameWord;
var gameWords;
var usedWords;
var usedIndex=0;
var numberOfOccurencesInWord; 
var numberOfDashes=0;
var wrongTry=0;
var correctGuess=0;
var dashesFilled=0;
var letterExists=0;
var gameStarted=0;

word=new Array("addadfdadadafdadad","Gamma", "Rhythm", "Cry", "Dictionary", "Hen", "Pen", "Ten", "Son", "Kin", "Din", "Authenticity", "Etymology", "Asteroids", "Oceanology","Epitomy","Tin", "Pet", "Continent", "Evangelism", "Religion", "Spy","Try", "Integration", "Dry", "Encyclopedia", "Software","Son","Win","Sin","Zen", "Yen", "Yak", "Pad", "Pod","Cod","Rod","Fin", "Den", "Man", "Men", "Space", "Time", "Train", "Aeroplane", "Ship", "Car", "Shy", "Fry", "Sky", "Motorcycle","Project", "Earth", "Sun", "Universe", "Moon", "Olympics", "India", "Ocean", "Everest", "Nebula", "Computer", "Mouse", "Athletics", "Jupiter", "Crown", "Kingdom", "Politics", "Marriage", "Sensational", "Wonderful", "Zebra", "Complimentary", "Battlefield", "Hawaii", "Cabbage", "Baggage", "Hypocrite", "Pry", "Why","Paranormal", "Euphoria", "Pneumonia", "Buy", "Guy", "Psychology", "Philosophy", "Fly","Sly","Physiology", "Physics", "Chemistry", "Literature", "Medicine", "Science", "Typewriter", "Typeface", "Seaface", "Cheque", "Manual", "Automatic", "Mode", "Model", "Actress", "Stage", "Shakespeare", "Dante", "Mineral", "Industry", "Potato", "Pineapple", "Ice", "Dice", "Leach", "Beach","Dome", "Line","Linen","Cinnamon", "Cheese", "Breeze", "Wind", "Spice", "Rice", "Bin", "Guava", "Tomato", "Beans","Capsicum", "America", "Radish", "Sugar", "Wheat", "Rice", "Atom", "Molecule", "Pipe", "Grace", "Race", "Dame", "Queen", "King", "Ninja", "Shaolin", "Chambers", "Embers", "Amber", "Clan", "Family", "Ion", "Iron", "Lion", "Mate", "Meat", "Plate","Lemon","Lime","Neptune","Uranus", "Sirius", "Betelgeuse", "Orion", "Constellation","Tool");

var level=0;
var maxRandomNumber=5;
var k;var b;
 function init(){
  c=document.getElementById("myCanvas");
  cxt=c.getContext("2d");
c.addEventListener("click", boxOnClick, false);

k=document.getElementById("kaleidoscope");
cxt.beginPath();
  cxt.drawImage(k,5,5,415,200); 
cxt.closePath();
 writeText(cxt);
b=document.getElementById("start");

  gameOver=0;
if (gameStarted==0){gameWords=word;gameOver=0;usedWords=new Array();level=1;
}
}  

 
var gradient;
function howToPlay(){
var step1="1. Press the Play button.";
var step2="2. A sequence of blank dashes will appear.";
var step3="3. The number of dashes correspond to the";
var step3_1="number of letters in the word.";
var step4="4. For each wrong guess, the"; 
var step4_1="'Hang man' will start taking shape.";
	cxt.font = "bold 16px sans-serif";

setGradient();
cxt.beginPath();
cxt.rotate(0.05);	
cxt.fillRect (40, 80, 365, 150);
	cxt.fillStyle='#FFFFFF';
	cxt.fillText(step1,60,110);	
	cxt.fillText(step2,60,130);	
	cxt.fillText(step3,60,150);	
	cxt.fillText(step3_1,60,170);	
	cxt.fillText(step4,60,190);
	cxt.fillText(step4_1,60,210);		
}
var x = 110;var y = 225;var i=0;
var dx=2; var dy=2;
var timer;var scrollOn=1;
function aboutMe(){
	x = 110;y = 225;i=0; 
cxt.save();
setGradient();
cxt.beginPath();
	cxt.fillRect (0, 220, 425, 25);
	cxt.fillStyle='#EE2C2C';

	scrollOn=0;
	timer=setInterval(writeText1,105);
}
function boxOnClick(e){
	var x;var y;
	x = e.pageX;
	y = e.pageY;
if (x>0 && y<425){clearInterval(timer);cxt.restore();c.width=c.width;scrollOn=1;init();}}

var s="Hi!I work for JK Technosoft Ltd as a Group Manager, Microsoft Technologies and I have developed a few games in C. This is my first stint with HTML 5 and JavaScript. If you liked this game, please do email me your views to jv.ravichandran@gmail.com or ravichandran.jv@jktech.com. Thanks for enjoying the game!";


function writeText1() {	
	cxt.font = "normal 14px sans-serif";
	ch=s.substr(0,cz);
	cz++;
	xPos-=5;
	scrollPos--;
	if (cz>=s.length && scrollPos<-20){
	cz=1;
	xPos=415;
	yPos=235;
	scrollPos=415;
	ch=s.substr(0,cz);
	}

	scrollText(ch,xPos);
}
	var cz=1;var xPos=415;var yPos=235; var scrollPos=415;

function scrollText(ch,xPos){
	clear();
cxt.beginPath();
//	cxt.fillStyle = "rgba(0, 0, 200, 0.5)";
	cxt.fillText(ch,xPos,yPos);	
}

function clear() {	
	cxt.clearRect(0, 220, 425, 25);
}
 
function drawHangMan(wrongGuess){
if (gameOver==0){
setGradient();
cxt.lineWidth   = 4;

if (wrongGuess==1){
drawBaseBar();}
else if (wrongGuess==2){
drawSideLine();}
else if (wrongGuess==3){
drawSideLeftLine();}
else if (wrongGuess==4){
drawDownLine();}
else if (wrongGuess==5){
drawHead();}
else if (wrongGuess==6){
drawNeck();}
else if (wrongGuess==7){
drawLeftHand();}
else if (wrongGuess==8){
drawRightHand();}
else if (wrongGuess==9){
drawTorso();}
else if (wrongGuess==10){
drawLeftLeg();}
else if (wrongGuess==11){
drawRightLeg();
writeCorrectGuess();
}
}
}

function writeText(cx){
cx.font = "normal 12px sans-serif";

cx.fillStyle='#B22222';
cx.fillText("Canvas drawn with http://bomomo.com/",100,10);
cx.fillStyle='#EE2C2C';

cx.fillText("Because life is colorful!",280,258);
cx.moveTo(280,247);
cx.lineTo(408,247);
cx.stroke();
//cx.fillText("(c) Ravichandran Jv, 2011",280,260);

cx.font = "bold 22px sans-serif";
cx.textBaseLine="hanging";
cx.shadowBlur=3;
cx.shadowColor="grey";
cx.shadowOffsetX=5;
cx.shadowOffsety=10;
cx.fillText("HangMan",10,35);

cx.shadowColor = "rgba(80,80,80, 0)";
//cx.moveTo(10,43);
//cx.lineTo(105,43);

//cx.stroke();

}
function setGradient(){
gradient = cxt.createRadialGradient(90,63,30,90,63,90);
gradient.addColorStop(0, '#FF0000');
gradient.addColorStop(1, '#660000'); 

cxt.fillStyle = gradient;
cxt.strokeStyle='#FF0000';
cxt.shadowOffsetX = 5;
cxt.shadowOffsetY = 5;
cxt.shadowBlur = 10;
cxt.shadowColor = "grey";
} 

function startGame(){
c.width=c.width;

countGuess=0;
maxGuesses=0;
startPos=0;
endPos=125;
wrongTry=0;
correctGuess=0;
triesAllowed=0;
dashesFilled=0;

init();
var wordUsed=0; 
var validNumber=0;
var wordSelected=0;
gameStarted=1;

if (gameWords.length==0){
gameStarted=-1;
validNumber=-1;

setGradient();

cxt.fillRect (30, 170, 375, 65);
	cxt.font = "bold 14px sans-serif";

	cxt.fillStyle='#FFFFFF';

cxt.fillText("Sorry! Refresh your browser to restart your game!",40,190);
cxt.fillText("Too many missed attempts!", 40,215);
}
while (validNumber==0){
randomnumber=Math.floor(Math.random()*gameWords.length);
 
if (randomnumber<=gameWords.length){
lengthOfWord=gameWords[randomnumber].length;
gameWord=gameWords[randomnumber];
if (gameWord.length<=13){
validNumber=1;}
else if (gameWord.length>13 || gameWord.length<=0){
var b=gameWords.indexOf(gameWord);
gameWords.splice(b,1);
validNumber=0;}
}
}


if (lengthOfWord>=10)
triesAllowed=5;
else if (lengthOfWord<10 || lengthOfWord>=5)
triesAllowed=4;
else if (lengthOfWord<5 || lengthOfWord>=3)
triesAllowed=3;
 
maxTriesAllowed=Math.round((lengthOfWord+triesAllowed)/2)+2;
if (maxTriesAllowed<=lengthOfWord)
maxTriesAllowed=lengthOfWord+2;

drawDashes(lengthOfWord);
document.getElementById("numTries").value=1;
var a=gameWords.indexOf(gameWord);
gameWords.splice(a,1);
}
 
// Write dashes for as many letters in word
function drawDashes(number){
numberOfDashes=0;
var x=15;
for (var y=0;y<lengthOfWord;y++){
cxt.fillText("-",x,265);
x+=20;
numberOfDashes++;
}
cxt.font = "bold 14px sans-serif";
cxt.fillStyle='#8B2323';
cxt.strokeStyle='#00b';
cxt.fillText("Guess the word ",300,45);
cxt.fillText("or you will hang ", 300,60); 
cxt.fillText("the poor man!",300,75);
cxt.fillText("The word",300,115);
cxt.fillText("comprises of ", 300,130);

cxt.font = "bold 18px sans-serif";
//cxt.fillStyle='#FFD700';
cxt.fillText(lengthOfWord + " " + "letters",300,150);

cxt.font = "bold 16px sans-serif";

cxt.fillStyle='#FF8C00';

cxt.fillText("Max tries - ", 300,216);
cxt.fillText(maxTriesAllowed,380,216);

}
// Write characters on top of dashes
function writeCorrectGuess(){
if (gameOver==0 && gameStarted==1){
	cxt.lineWidth   = 4;
	setGradient();

	drawBaseBar();
	drawSideLine();
	drawSideLeftLine();
	drawDownLine();
	drawHead();
	drawNeck();
	drawLeftHand();
	drawRightHand();
	drawTorso();
	drawLeftLeg();
	drawRightLeg();
	setGradient();
	cxt.beginPath();
	cxt.fillRect (20, 100, 130, 30);
	cxt.font = "bold 14px sans-serif";

	cxt.fillStyle='#FFFFFF';

	cxt.fillText("Sorry! You lose!",30,120);

	gameOver=1;
	gameStarted=0;
	var x=12;
	var ch;
	var z=1;
	cxt.fillStyle="#0000c0";
	cxt.font = "bold 20px sans-serif";
	for (var y=0;y<lengthOfWord;y++){
	ch=gameWord.substr(y,z);
	if (ch.toUpperCase()=="I"){cxt.fillText(ch.toUpperCase(),x+5,255);}
	else{cxt.fillText(ch.toUpperCase(),x,255);}

	x+=20;
}
//usedWords(usedIndex)=gameWords(randomNumber);
usedIndex++;
}
} 

function indexInArray(arr,val){
numberOfOccurencesInWord=new Array();

if (gameOver==0){
var z=0;

for(var i=0;i<arr.length;i++){ 
if(arr[i]==val.toUpperCase() || arr[i]==val.toLowerCase()){
numberOfOccurencesInWord[z]=i;//.indexOf(val);
correctGuess++;
dashesFilled++;
z++;
}
}
//if (numberOfOccurencesInWord.length==0){
//wrongTry++;
//drawHangMan(wrongTry);
//}
}
return numberOfOccurencesInWord;
}
 
function checkTries(count){

if (count>maxTriesAllowed){
	setGradient();
	cxt.beginPath();
	cxt.fillRect (20, 100, 120, 30);
	cxt.font = "bold 14px sans-serif";

writeCorrectGuess();
cxt.font = "bold 16px sans-serif";
cxt.fillText("The correct word is ",10,225);
cxt.fillText(15, 235,gameWord);
gameOver=1;
}
}
function checkWin(){
if (correctGuess>=gameWord.length && dashesFilled==gameWord.length){
gameOver=1;
	setGradient();
	cxt.beginPath();
	cxt.fillRect (20, 100, 130, 30);
	cxt.font = "bold 14px sans-serif";

	cxt.fillStyle='#FFFFFF';

	cxt.fillText("You win!",30,120 );


usedIndex++;
}
}

function writeLetter(counter){
var x=13;
var y=0;
var b=0;
var ch;
if (gameOver==0){
cxt.fillStyle="#0000c0";
cxt.font = "bold 20px sans-serif";
for (b=0;b<counter.length;b++){
y=counter[b];
x=13;
for(var i=0;i<y;i++){ 
x+=20;
}
ch=gameWord.charAt(y).toUpperCase();
if (ch=="I"){x+=2;}
cxt.fillText(gameWord.charAt(y).toUpperCase(),x,255);
}
// Remove found characters
for (b=0;b<counter.length;b++){
y=counter[b];
gameWord=gameWord.replace(gameWord.charAt(y)," ");
}
//checkWin();
}
}
function A(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "a");
if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}
function B(){

if (gameOver==0){

var counter=new Array();
counter=indexInArray(gameWord, "b");
if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}

function C(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "c");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}

function D(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "d");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function E(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "e");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}
function wrongGuess(){
wrongTry++;
drawHangMan(wrongTry);
countGuess++;
document.getElementById("numTries").value=countGuess;
checkTries(countGuess);
}
function rightGuess(counter){
writeLetter(counter);
countGuess++;
checkWin();
document.getElementById("numTries").value=countGuess;
checkTries(countGuess);

}
function F(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "f");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function G(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "g");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function H(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "h");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}

function I(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "i");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function J(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "j");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}

function K(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "k");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function L(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "l");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}
function M(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "m");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function N(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "n");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function O(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "o");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function P(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "p");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function Q(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "q");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function R(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "r");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function S(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "s");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function T(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "t");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function U(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "u");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function V(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "v");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function W(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "w");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function X(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "x");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}}
}

function Y(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "y");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}
}
}

function Z(){
if (gameOver==0){
var counter=new Array();
counter=indexInArray(gameWord, "z");

if (counter.length==0){
wrongGuess();
}
else if (counter.length>0){
rightGuess(counter);
}

/*
if (counter.length==0){
wrongTry++;
drawHangMan(wrongTry);
countGuess++;
document.getElementById("numTries").value=countGuess;
checkTries(countGuess);
}
else if (counter.length>0){
writeLetter(counter);
countGuess++;
checkWin();
document.getElementById("numTries").value=countGuess;
checkTries(countGuess);
}
*/
}
}

 
// Base bar
//cxt.openPath();
function drawBaseBar(){
cxt.rect(250,220,195,10);
cxt.fill();
}
 
// Side line
function drawSideLine(){
cxt.lineTo(250,40);
cxt.stroke();
}
 
// Side left line
function drawSideLeftLine(){
cxt.strokeStyle='#FF0000';
cxt.lineTo(190,40);
cxt.stroke();
}
 
// Down line
function drawDownLine(){
cxt.strokeStyle='#FF0000';
cxt.lineTo(190,116);
cxt.stroke();
startPos=116;
}
 
// Not to delete - special effects
//var e=170;
//cxt.moveTo(190,30);
//for (i=0;i<200;i++){
//cxt.lineTo(210,i);
//cxt.stroke();
//e-=5;
//cxt.moveTo(190,e);
//}
 
 
// Head
function drawHead(){
cxt.beginPath();
cxt.arc(190,startPos,10,0,Math.PI*2,true);
//cxt.closePath();
cxt.fill();
}
 
// Neck
function drawNeck(){
startPos+=8;
cxt.beginPath();
cxt.moveTo(190,startPos);
endPos=startPos+12;
cxt.strokeStyle='#FF0000';
cxt.lineTo(190,endPos);
startPos=endPos;
cxt.stroke();
}
 
// Left Hand
function drawLeftHand(){
endPos=startPos+10;
cxt.beginPath();

cxt.moveTo(190,startPos);
cxt.lineTo(202,endPos);
cxt.stroke();
}
 
// Right Hand
function drawRightHand(){
cxt.beginPath();

cxt.strokeStyle='#FF0000';
cxt.moveTo(190,startPos);
cxt.lineTo(178,endPos);
cxt.stroke();
}
 
// Torso
function drawTorso(){
cxt.beginPath();

endPos=startPos+20;
cxt.strokeStyle='#FF0000';
cxt.moveTo(190,startPos);
cxt.lineTo(190,endPos);
startPos=endPos;
cxt.stroke();
}
 
// Left Leg
function drawLeftLeg(){
cxt.beginPath();

endPos=startPos+15;
cxt.moveTo(190,startPos);
cxt.lineTo(210,endPos);
cxt.stroke();
}
 
// Right Leg
function drawRightLeg(){
cxt.beginPath();

cxt.moveTo(190,startPos);
cxt.lineTo(165,endPos);
cxt.stroke();
//cxt.closePath();
} 

 

