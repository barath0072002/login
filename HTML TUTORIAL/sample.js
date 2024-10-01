let secret=0;
let guss=prompt("enter number");
let life=5;
let life_count=0;
while(playerchoic)
{
    life_count++;
    if(life_count>life)
    {
        alert("Reached limit");
    }
    if(guss===sceret_num)
    {
        alert("congratulation you are won the game")
    }
    else if(guss<secret_num)
    {
        alert("loss game play again");
    }
    else
    {
        alert("game loss");
    }
    let game=prompt("Enter game");
}