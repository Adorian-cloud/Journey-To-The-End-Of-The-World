const time = {
   day: 0,//Days in the Clock
   month: 0,//Months in the Clock
   year: 24//Years of in the Clock
};//

const money = {
  totalmoney: 0,//Totalmoney to use in the game
  moneycapUp: 0, //Totalmoney array of value to cap in Resource Cap
  moneycapNumber:0,//Unfixed cap Limit to add Values to the Money Cap outside the Calculation
  get moneycap() {//Get to make a calculation like a function inside the Object 
   return this.moneycapNumber+50+50/100*this.moneycapUp*100;//Unfixed Cap Limit in base a moneycapUp
  },//Calculation to make always +50 starting in 50 with divisions of 50 to 50
   //Money
   //100 Copper Coins = 1 Silver = 100 Money
   //200 Copper Coins = 2 Silver = 200 Money
   //1000 Copper Coins = 10 Silver = 1000 Money
   //10000 Copper Coins = 100 Silver = 1 Gold = 10000 Money
   //Color
   //Copper- rgba(248, 128, 84, 0.685)
   //Silver- silver
   //Gold- gold
};//  

const skillsactive = {
  slashski: 0,//Unfixed Info for the Skill Slash
  slashexp: 0,//Exp for the Skill Slash
  slashinf: 0,//Fixed Info for Skill Slash
  skillcheck:{N1:{activation:0,number:0},},//Unfixed Value of the Skill to Check the Check Mark
  slotskillstatus: 0,//Unfixed Value of the Slot to Check or index number
  percentagecheck: 0,//Unfixed Value of the Percentage
  slashskillactive:{
                    id: 1 ,
                    damage:-0.1, 
                    milliseconds:20,//3 Seconds
                    stick: -0.1,
                    name: "Slash",
                    color:"DimGray",
                    description:"You swing your weapon like you always have...",
                    level: "Max",               
  }//Skills Slash Info Fixed
        //  Colors:
        //  Mortal Skills- DimGray
        //  Mortal Mid Skills- LightSlateGray
        //  Mortal Limit Skills- SlateGray
        //  Extraordinary Low Skills- DarkSlateGray

        //  Miliseconds:
        //  1Miliseconds= 0.001 Second.
        //  10Miliseconds= 0.01 Second.
        //  100Miliseconds= 0.1 Second.
        //  500Miliseconds= 0.5 Second.
        //  1000Miliseconds= 1 Second.
        //  10000Miliseconds= 1 Second.  
};//

const skillspassive = {
  gpski: 0,//Unfixed Info for the Skill
  gcxp: 0,//Exp for the Skill
  gcinf: 0,//Fixed Info for Skill

  bpski: 0,//Unfixed Info for the Skill
  bcxp: 0,//Exp for the Skill
  bcinf: 0,//Fixed Info for Skill

  bbActiv: 61,//Total Value of the Skill to Activate Lvs Perks the Skill

  persuski: 0,//Unfixed Info for the Skill
  persuexp: 0,//Exp for the Skill
  persuinf: 0,//Fixed Info for Skill

  persuActiv: 0,//Total Value of the Skill to Activate Lvs Perks the Skill

  stealski: 0,//Unfixed Info for the Skill
  stealexp: 0,//Exp for the Skill
  stealinfo: 0,//Fixed Info for the Skill

  stealActiv: 0,//Total Value of the Skill to Activate Lvs Perks the Skill 
};//

const caps = {
  stickcapUp:0,//Total Sticks Array of value to cap in Resource Cap
  stickcapNumber:0,//Unfixed cap Limit to add Values to the Stick Cap outside the Calculation
  get stickcap() {//Get to make a calculation like a function inside the Object 
   return this.stickcapNumber+10+10/100*this.stickcapUp*50;//Unfixed Cap Limit in base a stickcapUp
  },//Calculation to make always +5 starting in 10 with divisions of 10 to 10
   
  foodcapUp:0,//Total Food Array of value to cap in Resource Cap
  foodcapNumber:0,//Unfixed cap Limit to add Values to the Food Cap outside the Calculation
  get foodcap() {//Get to make a calculation like a function inside the Object 
   return this.foodcapNumber+10+10/100*this.foodcapUp*50;//Unfixed Cap Limit in base a foodcapUp
  },//Calculation to make always +5 starting in 10 with divisions of 10 to 10

  strawcapUp:0,//Total Straw Array of value to cap in Resource Cap
  strawcapNumber:0,//Unfixed cap Limit to add Values to the Straw Cap outside the Calculation
  get strawcap() {//Get to make a calculation like a function inside the Object 
   return this.strawcapNumber+15+15/3*this.strawcapUp;//Unfixed Cap Limit in base a strawpcapUp
  },//Calculation to make always +15 starting in 15 with divisions of 15 to 5

  woodpcapUp:0,//Total Wooden Planks Array of value to cap in Resource Cap
  woodpcapNumber:0,//Unfixed cap Limit to add Values to the Wooden Planks Cap outside the Calculation
  get woodpcap() {//Get to make a calculation like a function inside the Object 
   return this.woodpcapNumber+5+5/100*this.woodpcapUp*100;//Unfixed Cap Limit in base a woodpcapUp
  },//Calculation to make always +5 starting in 5 with divisions of 5 to 5

  linencapUp:0,//Total Linen Array of value to cap in Resource Cap
  linencapNumber:0,//Unfixed cap Limit to add Values to the Linen Cap outside the Calculation
  get linencap() {//Get to make a calculation like a function inside the Object 
   return this.linencapNumber+10+10/100*this.linencapUp*50;//Unfixed Cap Limit in base a linencapUp
  },//Calculation to make always +5 starting in 10 with divisions of 10 to 10
};// 
 
const resources = {
   resourcescap:0,//Total Resources Cap Upgrade or sum of the Upgrades
   moneycap:0,//Total Money Cap Upgrade or sum of the Upgrades
   totalstick:0,//Total Stick Resource 
   totalfood: 0,//Total Food Resource
   totalwoodp:0,//Total WoodPlanks Resource
   totalstraw:0,//Total Straw Resource
   totallinen:0,//Total Linen Resource
  //Resources Initial Cap
  //Stick - Cap Initial = 10
  //Food - Cap Initial = 10
  //Straw - Cap Initial = 15
  //Wooden Planks - Cap Initial = 5
  //Linen - Cap Initial = 10
  //Money - Cap Initial = 50
  //Color
  //Stick- rgba(255, 127, 80, 0.445);
  //Money(Copper)-rgba(248, 128, 84, 0.685);
  //Food Tier 0- rgba(75, 30, 14, 0.685);
  //Straw- rgba(255, 174, 0, 0.685); 
  //Wooden Planks- rgb(255, 191, 148);
  //Linen- rgb(190, 146, 116);
  //Neutral Color- aliceblue;
  //Background Color- rgb(17, 17, 17);
};//

const tiers= {
  foodtier:0,//Tier of the food to eat 
  //Color
  //Rotten Food- rgba(75, 30, 14, 0.685)
  //Spoiled Food- rgba(35, 61, 55, 0.685)
  //Raw Food- rgba(107, 96, 47, 0.685)
};// 

const actions = {
  stickdur: 0,//Total Value of the Skill to Activate Lvs Perks in Action Cap
  stickAct: 0,//Unfixed info  
  stickInf: 0,//Fixed info  
  stickStac: 0,//Fixed info of the initial clicks to trigger a Activation.

  swingBreak: 0,//Unfixed Value to Break Sticks Durability Number in a Cap.

  swingClick: 0,//Click pr click to Activate Skill Lvs Perks in Skill Cap
  swingAct: 0, //Unfixed info of the Number of the sticks
  swingInf: 0, //Fixed info 

  begAct: 0,//Unfixed Info
  begInf: 0,//Fixed info 
  begmoney: 0.1,//Fixed price Increase
  begmoneyup: 0.1,//Unfixed price Increase

  eatAct: 0,//Unfixed Info
  eatInf: 0,//Fixed info 
  
  thieveClick: 1,//Click pr Click to measure time of the thieve action on the live of the player.
  thieveAct: 0,//Unfixed Info
  thieveInf: 0,//Fixed Info
  thievemoney: 0.7,//Fixed Price Increase
  thievemoneyup:0.7,//Unfixed Price Increase

  robClick:1,//Click pr Click to measure time of the thieve action on the live of the player.
  robAct: 0,//Unfixed Info
  robInf: 0,//Fixed info 

};//

const shop = {
  moldinf: 0,//Fixed Info 
  pricemoldb: 4,//Fixed price
  changepricemoldb:4,//Unfixed price

  pocketcoinbaginf: 0,//Fixed Info 
  pricepocb: 10,//Fixed price
  changepricepockb:10,//Unfixed price

  strawinf:0,//Fixed Info
  pricestraw:18,//Fixed price
  changepricestraw:18,//Unfixed Price

  woodenplanksinf:0,//Fixed Info 
  pricewoodenp: 150,//Fixed price
  changepricewoodenp:150,//Unfixed price

  sfishinf:0,//Fixed Info
  pricesfish:23,//Fixed Price
  changepricesfish:23,//Unfixed Price

  umsoupinf:0,//Fixed Info
  pricesumsoup:100,//Fixed Price
  changepriceumsoup:100,//Unfixed Price

  talentestinf:0,//Fixed Info
  pricetalentest:50000,//Fixed Price
  changepricetalenttest:50000,////Unfixed Price

  booksinf:0,//Fixed Info
  pricekbreathingmanual:10000,//Fixed Price
  changepricekbreathingmanual:10000,//Unfixed Price

};//

const home ={
  houseinf:0,//Fixed Info of the House Upgrades Buy
  homestructuretpye:0,//Fixed Info of the House Structure Type of Buy Upgrades
}//
   
const shift = {
  ephoSStatus: 0,//Activation Value of the total of Activations 
  ephoSInf: 0,//Fixed Info
};//

const health = {
  //Physical Health
  pHpActiv: 0,//The Value of the Activation of the Lvs of Health
  pHpStatus: 0.0002,//The Total Value of the Health
  pHpMax: 1,//The Max Health the Player Have
  pHpBar: 0,//The Value of the Bar to increase when the Health Increase
  pHpmode: 1,//The Value of the game to chouse if you can die or not.
  //pHpmode:
  //pHpmode: 0 the player die and stay in 0
  //pHpmode: 1 the player dont die and stay in 0.001
}//

const strings= {
//Strings use in the code utility but not in the html onmoddify, use for twicks only.
//Money
  coppercoin: "Copper Coins",//strings.coppercoin
  silvercoin: "Silver Coins",//strings.silvercoin
  goldcoin: "Gold Coins",//strings.goldcoin
  
  coindescriptioncopper:"So small and easy to carry, but so big and heavy that "+
  "they can affect the lives of Billions, it is easy to forget their value in "+
  "their smallness, but it is difficult to forget their value and their "+
  "heaviness in this dark age...",//strings.coindescriptioncopper

//Clock 
  clocktitletier0: "Happy Birthday!",//strings.clocktitletier0
  clockdescriptiontier0: "Maybe today is your birthday or maybe it's tomorrow?",//strings.clockdescriptiontier0

  clocktitletier1: "Happy Birthday?",//strings.clocktitletier1
  clockdescriptiontier1: "Maybe today is your birthday or maybe it's tomorrow...? "+
  "you do not remember...",//strings.clockdescriptiontier1

//Health
  healthtitletierM1B1: "Beating",//strings.healthtitletierM1B1
  healthdescriptiontierM1B1: "You have been beaten and crushed until more than you "+
  "could resist... maintaining your life only by his mercy... your life hangs "+
  "by a thin thread...",//strings.healthdescriptiontierM1B1

  healthtitletier0: "Starving",//strings.healttitletier0
  healthdescriptiontier0: "Your malnutrition finally hits you like truck, and you realize "+
  "that this can't continue, you need money...",//strings.healthdescriptiontier0

  healthtitletier1: "Hungry",//strings.healttitletier1
  healthdescriptiontier1: "Your food has increased, your nutrients have increased... "+
  "but your weight has not, you are still hungry because of the large amount of "+
  "exercise you do each day... you need more food...",//strings.healthdescriptiontier1

//Food
  tier0foodtitle: "Rotten Food",//strings.tier0foodtitle
  tier0fooddescription: "The product of disaster, the savior of all living beings, "+ 
  "a food that has clearly passed its useful life, but in your hands, "+ 
  "his life has just begun.",//strings.tier0fooddescription

  tier1foodtitle: "Spoiled Food",//strings.tier1foodtitle
  tier1fooddescription: "The product of disaster, the savior of all living beings, "+
  "a dry food with a smell so deep that your nose suffers, but "+
  "in your hands... it brings an opportunity.",//strings.tier1fooddescription

  tier2foodtitle: "Raw Food",//strings.tier2foodtitle
  tier2fooddescription: "The product of disaster, the savior of all living beings, "+
  "a food that for the first time tastes edible... if it weren't for that strange "+
  "taste that makes you wonder if this is even food...",//strings.tier2fooddescription


//Locations
  playerlocation1: "Forest on the Outskirts of the City",//strings.playerlocation1
  locationtitle1: "Dark Forest",//strings.locationtitle1
  descriplocation1: "A Hellish place "+
  "where life and death are just one step away, where the trees darken "+
  "the day, and the beast feast during the night... ",//strings.descriplocation1

  playerlocation2: "Inside of the Broken City",//strings.playerlocation2
  locationtitle2: "Corrupted City",//strings.locationtitle2
  descriplocation2: "With the corruption "+
  "of the rulers, the city has slowly fallen into chaos and ruin, being a broken "+
  "shell since hunger flooded the world, a shell, of what it once was." ,//strings.descriplocation2


//Home
  homebedtitlelv0: "Straw Bed",//strings.homebedtitlelv0
  homebeddescriptionlv0: "As simple as throwing straw on the ground, as complicated as ensuring "+ 
  "that the shape of a bed remains in the straw, but as beautiful as finally "+
  "having a place to call home.",//strings.homebeddescriptionlv0

  homebedtitlelv1: "Family Straw Bed",//strings.homebedtitlelv1
  homebeddescriptionlv1: "By stacking straw, surely the floor will be covered, "+
  "by stacking straw, surely what you see as a bed will not break, and this "+
  "beautiful home will continue to exist...even while you sleep.",//strings.homebeddescriptionlv1

  homelimittitlelv0: "Foundation Fence",//strings.homelimittitlelv0
  homelimitdescriptionlv0: "Eliminating weeds from the grass, feeling a new floor full of warmth, "+
  "looking at your new door...this can now be called a home capable of "+ 
  "withstanding a party, right?",//strings.homelimitdescriptionlv0

//Slash Skills 
  titleslashlv0: "An Innocent Game",//strings.titleslashlv0
  descripslashlv0: "You dont know what you're doing, but at least you have fun..", //strings.descripslashlv3

  titleslashlv3: "A Game",//strings.titleslashlv0
  descripslashlv3: "You begin to understand what you can do by "+
  "raising and lowering your stick.",//strings.descripslashlv3

  titleslashlv5: "A Game",//strings.titleslashlv5
  descripslashlv5: "You're trying to figure out "+
  "how to swing your stick, so it hurts more on impact.",//strings.descripslashlv5

  titleslashlv6: "Swing",//strings.titleslashlv6
  descripslashlv6: "The impact feels good, "+
  "the swing feels familiar, the stick in your hand feels perfect after so much time... "+
  "but something is missing... something important.",//strings.descripslashlv6


//Grip Control Skill
  titlegripcontrollv0: "Grip Harder!",//strings.titlegripcontrollv0
  descripgripcontrollv0: "Maybe if you stop gripping the stick so hard, "+ 
  "it wouldn't break.",//strings.descripgripcontrollv0

  titlegripcontrollv3: "Grip Gently!",//strings.titlegripcontrollv3
  descripgripcontrollv3: "Maybe if you gripped the stick more gently "+
  "and tried apply less force... it wouldn't break.",//strings.descripgripcontrollv3

  titlegripcontrollv5: "Control your Strength!",//strings.titlegripcontrollv5
  descripgripcontrollv5: "Maybe if you gripped "+
  "maybe, just maybe, if you only apply force in the middle of your swing, "+
  "the stick won't take as much damage...",//strings.descripgripcontrollv5

  titlegripcontrollv6: "Grip Control",//strings.titlegripcontrollv6
  descripgripcontrollv6: "Your swings flourish weak and strong, "+
  "the force is applied in and out, but something is missing... "+
  "something important... something... "+
  "that makes the stick last longer..",//strings.descripgripcontrollv6


//Breathing Control Skill
  titlebreathingcontrollv0: "Breathe!",//strings.titlebreathingcontrollv0
  descripbreathingcontrollv0: "This is not sustainable much longer, "+
  "you have little food, little strength... you need to resist "+
  "just a little longer... if only... you could breathe slower...",//strings.descripbreathingcontrollv0

  titlebreathingcontrollv1: "Breathe Deeply!",//strings.titlebreathingcontrollv1
  descripbreathingcontrollv1: "You start experimenting "+
  "with your breathing to discover how not to get tired so quickly.",//strings.descripbreathingcontrollv1

  titlebreathingcontrollv4: "Breathe Like a Turtle!",//strings.titlebreathingcontrollv4
  descripbreathingcontrollv4: "By holding your breath "+
  "you not only gain strength... but your body is always in its best state... "+
  "until you breathe again.",//strings.descripbreathingcontrollv4

  titlebreathingcontrollv6: "Clench your Teeth!",//strings.titlebreathingcontrollv6
  descripbreathingcontrollv6: "Holding your breath longer, "+
  "only breathing when you stop your swings, "+
  "your breath becomes one..",//strings.descripbreathingcontrollv6

  titlebreathingcontrollv7: "Breathing Control",//strings.titlebreathingcontrollv7
  descripbreathingcontrollv7: "Your breathing becomes slower "+
  "like the speed of your sword, each swing expends the slightest energy... but... "+
  "you feel that something is missing... something...",//strings.descripbreathingcontrollv7


//Persuade Skill
  titlepersuadelv0: "Silver Work!",//strings.titlepersuadelv0
  descriptitlepersuadelv0: "You've run out of ideas... "+
  "the training and legends you heard from the great knights "+ 
  "can only take you so far... you really don't know how "+ 
  "you could improve further... but... you need more money... "+
  "even if it goes against your morals, you need... persuasion.",//strings.descriptitlepersuadelv0

  titlepersuadelv1: "Confident Pose",//strings.titlepersuadelv1
  descriptitlepersuadelv1: "Exuding confidence, "+
  "you confront the evil merchants, using only your mouth and your wits, "+
  "to convince them... to lower the price a little...",//strings.descriptitlepersuadelv1

  titlepersuadelv4: "Miserable Pose",//strings.titlepersuadelv4
  descriptitlepersuadelv4: "By facing your work "+
  "environment with misery and despair, you ruin the environment... "+
  "but at the same time, people see you favorably...",//strings.descriptitlepersuadelv4

  titlepersuadelv7: "Experienced Lips",//strings.titlepersuadelv7
  descriptitlepersuadelv7: "Shouting and arguing with a merchant one moment, "+
  "crying and playing stories to convince your "+
  "listeners another moment, your mouth is tired from "+
  "talking so much...you need water.",//strings.descriptitlepersuadelv7

  titlepersuadelv8: "Persuade",//strings.titlepersuadelv8
  descriptitlepersuadelv8: "You didn't really want "+
  "to get good at this... but this era give you no choice, acting, manipulating, "+
  "convincing, arguing, using everything your knowledge can give you, "+
  "you start persuading your listeners... to give you more money...",//strings.descriptitlepersuadelv8

//Steal Skill

  titlesteallv0: "Walking in the Ruin",//strings.titlesteallv0
  descriptitlesteallv0: "You have no choice, you need more ways to make money... "+
  "and fast!, you can only think about falling down the path of ruin once again... "+
  "and learning something you never thought you would learn, stealing... "+
  "to survive in this cruel world.",//strings.descriptitlesteallv0

  titlesteallv6: "Fast Hands!",//strings.titlesteallv6
  descriptitlesteallv6: "Your training has not disappointed you, your hands are fast, "+
  "your reflexes and actions deceive anyone in your path, the smoothness and control "+
  "allows you to check pockets easily with your new experience, you "+
  "are getting good at this... and quickly!",//strings.descriptitlesteallv6


  titlesteallv8: "Secure Pockets!",//strings.titlesteallv8
  descriptitlesteallv8: "Your services have been rewarded, learning patterns, "+
  "experimenting with different pockets, your hands become natural as you search"+ 
  "through them without being noticed, like a good citizen, you help everyone "+ 
  "around you to check their pockets.",//strings.descriptitlesteallv8

  titlesteallv10: "Steal",//strings.titlesteallv8
  descriptitlesteallv10: "Like water your thoughts slowly dilute into experience, "+
  "as simple as eating and drinking, or even swinging your stick, your hands become "+
  "experienced in checking the safety of pockets... in the face of this era "+
  "full of malice, the path of ruin offers you an opportunity...",//strings.descriptitlesteallv8

}//

const allies= {
   quantity: 0,//UnfixedValue to Check Quantity of Allies in the Battle
   phpstatus:0,//Unfixed Value of the Health of the Enemy
   phpmax:0,//Fixed value of the Health of the Enemy
   live:0,//Unfixed value to check if a enemy is alive or death
   type:0,//Unfixed Value to check the Type of enemy
   guard:0,//Unfixed Value to check the Guard of the enemy
   skillsSlots:{//Number Skill Slots Info.
                 //Number 1 Skill Slot.
                 skill1damage:0,//Fixed Value of Damage 
                 skill1miliseconds:0,//Fixed Value of Damage
                 skill1bar:0,//The Value of the Bar to attack with the Skill.
                 skill1activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 2 Skill Slot.
                 skill2damage:0,//Fixed Value of Damage 
                 skill2miliseconds:0,//Fixed Value of Damage
                 skill2bar:0,//The Value of the Bar to attack with the Skill.
                 skill2activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 3 Skill Slot.
                 skill3damage:0,//Fixed Value of Damage 
                 skill3miliseconds:0,//Fixed Value of Damage
                 skill3bar:0,//The Value of the Bar to attack with the Skill.
                 skill3activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 4 Skill Slot.
                 skill4damage:0,//Fixed Value of Damage 
                 skill4miliseconds:0,//Fixed Value of Damage
                 skill4bar:0,//The Value of the Bar to attack with the Skill.
                 skill4activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 5 Skill Slot.
                 skill5damage:0,//Fixed Value of Damage 
                 skill5miliseconds:0,//Fixed Value of Damage
                 skill5bar:0,//The Value of the Bar to attack with the Skill.
                 skill5activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 6 Skill Slot.
                 skill6damage:0,//Fixed Value of Damage 
                 skill6miliseconds:0,//Fixed Value of Damage
                 skill6bar:0,//The Value of the Bar to attack with the Skill.
                 skill6activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 7 Skill Slot.
                 skill7damage:0,//Fixed Value of Damage 
                 skill7miliseconds:0,//Fixed Value of Damage
                 skill7bar:0,//The Value of the Bar to attack with the Skill.
                 skill7activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 8 Skill Slot.
                 skill8damage:0,//Fixed Value of Damage 
                 skill8miliseconds:0,//Fixed Value of Damage
                 skill8bar:0,//The Value of the Bar to attack with the Skill.
                 skill8activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 9 Skill Slot.
                 skill9damage:0,//Fixed Value of Damage 
                 skill9miliseconds:0,//Fixed Value of Damage
                 skill9bar:0,//The Value of the Bar to attack with the Skill.
                 skill9activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 10 Skill Slot.
                 skill10damage:0,//Fixed Value of Damage 
                 skill10miliseconds:0,//Fixed Value of Damage
                 skill10bar:0,//The Value of the Bar to attack with the Skill.
                 skill10activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 11 Skill Slot.
                 skill11damage:0,//Fixed Value of Damage 
                 skill11miliseconds:0,//Fixed Value of Damage
                 skill11bar:0,//The Value of the Bar to attack with the Skill.
                 skill11activ:0,//The Value of the Bar to Activate the Skill.
                 //Number 12 Skill Slot.
                 skill12damage:0,//Fixed Value of Damage 
                 skill12miliseconds:0,//Fixed Value of Damage
                 skill12bar:0,//The Value of the Bar to attack with the Skill.
                 skill12activ:0,//The Value of the Bar to Activate the Skill.
   },
      //  Colors:
      //  Mortal Skills- DimGray
      //  Mortal Mid Skills- LightSlateGray
      //  Mortal Limit Skills- SlateGray
      //  Extraordinary Low Skills- DarkSlateGray

      //  Miliseconds:
      //  1Miliseconds= 0.001 Second.
      //  10Miliseconds= 0.01 Second.
      //  100Miliseconds= 0.1 Second.
      //  500Miliseconds= 0.5 Second.
      //  1000Miliseconds= 1 Second.
      //  10000Miliseconds= 1 Second.
}//

const player={
      weaponactivation: 0,//Unfixed Value to check Activation
      skillsSlots:{//Number Skill Slots Info.
                    //Number 1 Skill Slot.
                    skill1damage:0,//Fixed Value of Damage 
                    skill1miliseconds:0,//Fixed Value of Damage
                    skill1bar:0,//The Value of the Bar to attack with the Skill.
                    skill1activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 2 Skill Slot.
                    skill2damage:0,//Fixed Value of Damage 
                    skill2miliseconds:0,//Fixed Value of Damage
                    skill2bar:0,//The Value of the Bar to attack with the Skill.
                    skill2activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 3 Skill Slot.
                    skill3damage:0,//Fixed Value of Damage 
                    skill3miliseconds:0,//Fixed Value of Damage
                    skill3bar:0,//The Value of the Bar to attack with the Skill.
                    skill3activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 4 Skill Slot.
                    skill4damage:0,//Fixed Value of Damage 
                    skill4miliseconds:0,//Fixed Value of Damage
                    skill4bar:0,//The Value of the Bar to attack with the Skill.
                    skill4activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 5 Skill Slot.
                    skill5damage:0,//Fixed Value of Damage 
                    skill5miliseconds:0,//Fixed Value of Damage
                    skill5bar:0,//The Value of the Bar to attack with the Skill.
                    skill5activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 6 Skill Slot.
                    skill6damage:0,//Fixed Value of Damage 
                    skill6miliseconds:0,//Fixed Value of Damage
                    skill6bar:0,//The Value of the Bar to attack with the Skill.
                    skill6activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 7 Skill Slot.
                    skill7damage:0,//Fixed Value of Damage 
                    skill7miliseconds:0,//Fixed Value of Damage
                    skill7bar:0,//The Value of the Bar to attack with the Skill.
                    skill7activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 8 Skill Slot.
                    skill8damage:0,//Fixed Value of Damage 
                    skill8miliseconds:0,//Fixed Value of Damage
                    skill8bar:0,//The Value of the Bar to attack with the Skill.
                    skill8activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 9 Skill Slot.
                    skill9damage:0,//Fixed Value of Damage 
                    skill9miliseconds:0,//Fixed Value of Damage
                    skill9bar:0,//The Value of the Bar to attack with the Skill.
                    skill9activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 10 Skill Slot.
                    skill10damage:0,//Fixed Value of Damage 
                    skill10miliseconds:0,//Fixed Value of Damage
                    skill10bar:0,//The Value of the Bar to attack with the Skill.
                    skill10activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 11 Skill Slot.
                    skill11damage:0,//Fixed Value of Damage 
                    skill11miliseconds:0,//Fixed Value of Damage
                    skill11bar:0,//The Value of the Bar to attack with the Skill.
                    skill11activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 12 Skill Slot.
                    skill12damage:0,//Fixed Value of Damage 
                    skill12miliseconds:0,//Fixed Value of Damage
                    skill12bar:0,//The Value of the Bar to attack with the Skill.
                    skill12activ:0,//The Value of the Bar to Activate the Skill.
                   },
      //  Colors:
      //  Mortal Skills- DimGray
      //  Mortal Mid Skills- LightSlateGray
      //  Mortal Limit Skills- SlateGray
      //  Extraordinary Low Skills- DarkSlateGray

      //  Miliseconds:
      //  1Miliseconds= 0.001 Second.
      //  10Miliseconds= 0.01 Second.
      //  100Miliseconds= 0.1 Second.
      //  500Miliseconds= 0.5 Second.
      //  1000Miliseconds= 1 Second.
      //  10000Miliseconds= 1 Second.
}//

const enemy= {
      runSpawns: 0,//UnfixedValue to check how many Enemys the Player Fight in all the Run.
      defeatsSpawns: 0,//UnfixedValue to check how many Enemys the Player Beath in all the Run.
      quantity: 0,//UnfixedValue to Check Quantity of Enemys in the Battle
      phpstatus:0,//Unfixed Value of the Health of the Enemy
      phpmax:0,//Fixed value of the Health of the Enemy
      phpbar:0,//The value of the Bar to Increase or Decrease Health
      live:0,//Unfixed value to check if a enemy is alive or death
      slain:0,//Unfixed value to check if a enemy is defeated of not, to continue fighting with him.
      type:0,//Unfixed Value to check the Type of enemy
      guard:0,//Unfixed Value to check the Guard of the enemy
      skillsSlots:{//Number Skill Slots Info.
                    //Number 1 Skill Slot.
                    skill1damage:0,//Fixed Value of Damage 
                    skill1miliseconds:0,//Fixed Value of Damage
                    skill1bar:0,//The Value of the Bar to attack with the Skill.
                    skill1activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 2 Skill Slot.
                    skill2damage:0,//Fixed Value of Damage 
                    skill2miliseconds:0,//Fixed Value of Damage
                    skill2bar:0,//The Value of the Bar to attack with the Skill.
                    skill2activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 3 Skill Slot.
                    skill3damage:0,//Fixed Value of Damage 
                    skill3miliseconds:0,//Fixed Value of Damage
                    skill3bar:0,//The Value of the Bar to attack with the Skill.
                    skill3activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 4 Skill Slot.
                    skill4damage:0,//Fixed Value of Damage 
                    skill4miliseconds:0,//Fixed Value of Damage
                    skill4bar:0,//The Value of the Bar to attack with the Skill.
                    skill4activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 5 Skill Slot.
                    skill5damage:0,//Fixed Value of Damage 
                    skill5miliseconds:0,//Fixed Value of Damage
                    skill5bar:0,//The Value of the Bar to attack with the Skill.
                    skill5activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 6 Skill Slot.
                    skill6damage:0,//Fixed Value of Damage 
                    skill6miliseconds:0,//Fixed Value of Damage
                    skill6bar:0,//The Value of the Bar to attack with the Skill.
                    skill6activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 7 Skill Slot.
                    skill7damage:0,//Fixed Value of Damage 
                    skill7miliseconds:0,//Fixed Value of Damage
                    skill7bar:0,//The Value of the Bar to attack with the Skill.
                    skill7activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 8 Skill Slot.
                    skill8damage:0,//Fixed Value of Damage 
                    skill8miliseconds:0,//Fixed Value of Damage
                    skill8bar:0,//The Value of the Bar to attack with the Skill.
                    skill8activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 9 Skill Slot.
                    skill9damage:0,//Fixed Value of Damage 
                    skill9miliseconds:0,//Fixed Value of Damage
                    skill9bar:0,//The Value of the Bar to attack with the Skill.
                    skill9activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 10 Skill Slot.
                    skill10damage:0,//Fixed Value of Damage 
                    skill10miliseconds:0,//Fixed Value of Damage
                    skill10bar:0,//The Value of the Bar to attack with the Skill.
                    skill10activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 11 Skill Slot.
                    skill11damage:0,//Fixed Value of Damage 
                    skill11miliseconds:0,//Fixed Value of Damage
                    skill11bar:0,//The Value of the Bar to attack with the Skill.
                    skill11activ:0,//The Value of the Bar to Activate the Skill.
                    //Number 12 Skill Slot.
                    skill12damage:0,//Fixed Value of Damage 
                    skill12miliseconds:0,//Fixed Value of Damage
                    skill12bar:0,//The Value of the Bar to attack with the Skill.
                    skill12activ:0,//The Value of the Bar to Activate the Skill.
                  },
              id1:{ id:1,
                    name: "Hungry Wanderer", 
                    phealth: 1.5,
                    skills:{punch:{name:"Punch",damage:-0.45, milliseconds:55,//6 Seconds
                    color:"DimGray", description:"He's trying to punch you..."}},
                    guard:5,
                    type:{alone:{name:"Alone",typeid:1,typename:"A"}},
                    description:"A Hungry Wanderer, who has obviously "+
                    "traveled through forests and mountains, approaches you hungrily.",
                    phealthtype:"Hungry",
                    numberofenemys:1,
                    drops:{money:{quantity:16.3,id:1},//Copper Coins
                           strawshoes:{quantity:1,id:2},//Straw Resource +1
                           linenclothes:{quantity:1,id:3},//Linen Resource +1
                    },
                  },//First Enemy with out stats
        //  Colors:
        //  Mortal Skills- DimGray
        //  Mortal Mid Skills- LightSlateGray
        //  Mortal Limit Skills- SlateGray
        //  Extraordinary Low Skills- DarkSlateGray

        //  Miliseconds:
        //  1Miliseconds= 0.001 Second.
        //  10Miliseconds= 0.01 Second.
        //  100Miliseconds= 0.1 Second.
        //  500Miliseconds= 0.5 Second.
        //  1000Miliseconds= 1 Second.
        //  10000Miliseconds= 1 Second.
}//

const drops= {
            id1:{ //Copper Coin
                  name:"Copper Coin",
                  description:"A money full of heaviness and desolation, causing greed... as well as "+
                  "causing the new opportunities that you will now have...",
                  droprate:100,//100% droprate
                  color: "rgba(248, 128, 84, 0.685)",//Copper Coin Color
                  materialresource: "Currency",//CurrencyResource
                },
            id2:{ //Straw Shoes
                  name: "Straw Shoes",
                  description: "Shoes full of heat, but at the same time... full of itching.",
                  droprate: 100,//100% droprate
                  color: "rgba(255, 174, 0, 0.685)",//Straw Color
                  materialresource: "Straw",//StrawResource
                },
            id3:{ //Linen Clothes
                  name: "Linen Clothes",
                  description: "As fresh as it was torn from its wearer, and as broken as the tearing caused it.",
                  droprate: 100,// 100% droprate
                  color: "rgb(190, 146, 116)",//Linen Color
                  materialresource: "Linen",//LinenResource
                },           
}//

const game= {
   runstate: 0,//Quantity of Run of the Game.
}//

window.setInterval(function(){
  showMilestones();
  resourceTiers();
  resourceCap();
  actionCap();
  skillCap()
  clock();
}, 1);//



function clock(){
       document.getElementById("Day").innerHTML= decimals(time.day,1);
       document.getElementById("Month").innerHTML= time.month;
       document.getElementById("Year").innerHTML= time.year;      
       if(time.day>=32){//Clock in 31 days 
        time.day=0;
        document.getElementById("Day").innerHTML= decimals(time.day,1);
        time.month+=1;
        document.getElementById("Month").innerHTML= time.month;
           if(time.month>=13){//Clock in 13 Months and 1 Year
            time.month=1;
            document.getElementById("Month").innerHTML= time.month;
            time.year+=1;
            document.getElementById("Year").innerHTML= time.year;
           };
       };//
};///
function moneyChange(number){
  if(number==1){//Total money== to copper coins conversion of 1000k
    if(money.totalmoney<=0){//-Copper Coins 
      document.getElementById("CurrencynameR").innerHTML= strings.coppercoin;
      let showcurrecoC=document.getElementById("CurrencynameR");   
      showcurrecoC.style.color="rgba(248, 128, 84, 0.685)";
      document.getElementById("TitleCurreR").innerHTML= strings.coppercoin;
      document.getElementById("CurrencyCount").innerHTML=0;
      money.totalmoney=0;
      // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap);
    };//
    if(money.totalmoney>=0&&money.totalmoney<=100){//Copper Coins
      document.getElementById("CurrencynameR").innerHTML= strings.coppercoin;
      let showcurrecoC=document.getElementById("CurrencynameR");   
      showcurrecoC.style.color="rgba(248, 128, 84, 0.685)";
      document.getElementById("TitleCurreR").innerHTML= strings.coppercoin;
      document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
      // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap);
    };//
    if(money.totalmoney>=101&&money.totalmoney<=10000){//Silver Coins Conversion but in Copper Coins
      document.getElementById("CurrencynameR").innerHTML= strings.silvercoin;
      let showcurrecoC=document.getElementById("CurrencynameR");   
      showcurrecoC.style.color="silver";
      document.getElementById("TitleCurreR").innerHTML= strings.silvercoin;
      document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney/100,2);
      // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/100,2);
    };//
    if(money.totalmoney>=10001&&money.totalmoney<=999999){//Gold Coins Conversion but in Copper Coins
      document.getElementById("CurrencynameR").innerHTML= strings.goldcoin;
      let showcurrecoC=document.getElementById("CurrencynameR");   
      showcurrecoC.style.color="gold";
      document.getElementById("TitleCurreR").innerHTML= strings.goldcoin;
      document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney/10000,2);
      // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/10000,2);
      // document.getElementById("DescriptionCurreR").innerHTML="";//Description of the Gold Coins
    };//     
  };//
};///
function showMilestones(){
  if(game.runstate==0){//First Run of the Game
    //Game Starts and Actions is Show Starting Border 
      if(actions.stickInf==1){//When you get 3 Sticks Show Resource Border and Action Border
          let showresources=document.getElementById("Resources-Border");
          showresources.style.visibility="visible"; 
          let showactionborder=document.getElementById("Action-Border");
          showactionborder.style.borderStyle="solid"; 
      };//
      if(actions.stickInf==10){//When you get 10 Sticks show Swing Action
          let showswing=document.getElementById("Swing-Action");
          showswing.style.display="initial"; 
      };//
      if(actions.swingInf==15){//AT 15 Clicks show the time border.
          let showyears=document.getElementById("Clock-Border");
          let showSwDa=document.getElementById("TSlotSW");
          showyears.style.visibility="visible"; 
          showSwDa.style.display="contents"; 
      };//
    //The Skill Tab is Show and the Skills Start Showing
      if(actions.swingInf==51){//When you hit 50 clicks, show Action Tab and all Tabs, Skill Tab, and the Exp for Swing Skill
          let showtabs=document.getElementById("Table-Tabs-List");
          let showskills=document.getElementById("Skills-Tab");
          let showactions=document.getElementById("Action-Tab");
          let showSExp=document.getElementById("SwSExp");   
          showtabs.style.visibility="visible"; 
          showskills.style.visibility="visible"; 
          showactions.style.visibility="visible";
          showSExp.style.display="contents"; 
      };//
      if(actions.swingBreak>=100){//If the Unfixed Info of the Swing Hit 100, The Stick Break, And Show Durability
          let showstickdu=document.getElementById("StickDuTotal");   
          showstickdu.style.display="contents";
      };//The Unique that Spawns
      if(actions.swingClick==4){//If Slash is Lv3, Grip Control Activate And Show His Content
          let showGCExp=document.getElementById("GCSExp")
          showGCExp.style.display="contents"; 
          let showgripSkills= document.getElementById("GripControl");//Show the Skill in the Tab Skills
          showgripSkills.style.display="initial";
          let showgriplvSkills= document.getElementById("GripControlLv");
          showgriplvSkills.style.display="initial";
          let showlinesxgp= document.getElementById("ConnectionLine1");
          showlinesxgp.style.display="initial"; 
      };//
      if(actions.swingClick==43){//If Slash is Lv3, Show PhPHealth Border and Set to 1
          let showstats=document.getElementById("Status-Border");//Show Stats Border at Lv5 Slash to Show Health
          showstats.style.visibility="visible";
          health.pHpActiv=1;
      };//
      if(health.pHpActiv==1&&actions.swingClick==43){//Show the Total Life you Lose with the 2 First Actions, When you Click With PhpBorder
          let showhp1=document.getElementById("SwingPHLo");
          showhp1.style.display="initial";
          let showhp2=document.getElementById("StickPHLo");
          showhp2.style.display="initial";   
      };//
      if(actions.swingClick==43&&health.pHpStatus<=0.0001){//If the Slash Hit Lv 5, Beg Action Show
          let showBegAction=document.getElementById("Beg-Action");
          showBegAction.style.display="initial";   
      };// 
      if(actions.begmoney==0.1&&actions.begInf==1){//When you gain money you show the currency resource and the location
          let showmoney=document.getElementById("Currency-Material");
          showmoney.style.display="initial";
          let showzoneforest=document.getElementById("Zone-Forest-Title");
          showzoneforest.style.display="initial";    
          let showzonecitygates=document.getElementById("Zone-City-Gates-Title");
          showzonecitygates.style.display="initial";    
          let showlocation=document.getElementById("Actual-Location");
          showlocation.style.visibility="visible"; 
      };//
      if(money.totalmoney>=5){//When Hit totalmoney 5, show ShopTab
          let showshop=document.getElementById("Shop-Tab");
          showshop.style.visibility="visible";       
      };//
    //The ShopTab Is Show and the Farmign Beggins to Enter the City
      if(shop.moldinf==1){//The Food Resources and Eat Action is Show When you Buy Moldy Bread
          let showMB=document.getElementById("Food-Material");
          showMB.style.display="initial"; 
          let showEat=document.getElementById("Eat-Action");
          showEat.style.display="initial";
      };//
      if(actions.eatInf==2){//When you Eat 2 Times, show the Breathing Control Skill in Tabs and gain exp.
          let showBCExp=document.getElementById("BcSExp");
          showBCExp.style.display="initial"; 
          let showbreathingSkills= document.getElementById("BreathingControl");
          showbreathingSkills.style.display="initial";
          let showbreathinglvSkills= document.getElementById("BreathingControlLv");
          showbreathinglvSkills.style.display="initial";
          let showlinesxbp= document.getElementById("ConnectionLine2");
          showlinesxbp.style.display="initial";  
      };//
      if(actions.stickdur==6){//If All 3 Skills Hit Max, Show Persuade Skill
          let showBegPExp= document.getElementById("BegPersXp");
          showBegPExp.style.display="initial";
          let showPeg= document.getElementById("Persuade");//Show the Skill in the Skills Tab
          showPeg.style.display="initial";
          let showPExp= document.getElementById("PersuadeLv");
          showPExp.style.display="initial";
          let showlinesxP= document.getElementById("ConnectionLine3");
          showlinesxP.style.display="initial";   
      };//
      if(skillspassive.persuActiv==2){//If Persuade Get to Lv 1 Show Ephocal Shift
          let ShowDestiny= document.getElementById("EpochalShift-Border");//Show the Epocal Shift Border at Lv1
          ShowDestiny.style.visibility="visible";
      };//
      if(skillspassive.persuActiv==3){//If Persuade Get to Lv2 Show PocketCoin Bag in Shop
        let Showpockcoinbag= document.getElementById("PocketCoinBag");//Show in the Shop the Pocket Coing Bag to Buy at Lv2
        Showpockcoinbag.style.display="initial";
      };//
      if(shift.ephoSInf==1){//Show the City and The New 2 Tabs Of Shops in the Shop Tab with the New Things to Buy Like Straw
          let showCity=document.getElementById("Zone-City-Title");
          showCity.style.display="initial"; 
          let showoldmarket=document.getElementById("ShopoftheOldCityMarket-Tab");//Show 2 Shop Tab
          showoldmarket.style.display="initial"; 
          let showknightacademy=document.getElementById("ShopoftheKnightsAcademy-Tab");//Show 3 Shop Tab
          showknightacademy.style.display="initial"; 
          let showstraw=document.getElementById("Straw");//Show Straw Item to Buy
          showstraw.style.display="initial"; 
      };//
    //The Player enter the City and The Defeat the First Enemy
      if(shop.strawinf==1){//Show the Straw Resource
          let showS=document.getElementById("Straw-Material");
          showS.style.display="initial"; 
      };//
      if(shop.strawinf==2){//Show House Tab to Start Constructing
          let showshop=document.getElementById("House-Tab");
          showshop.style.visibility="visible";  
      };//
      if(shop.woodenplanksinf==1){//Show the Wooden Plank Resource
          let showWP=document.getElementById("WoodenPlanks-Material");
          showWP.style.display="initial"; 
      };//
      //Home Structure Function Take Place To Show and Hidde.
      if(home.houseinf==1){//When you buy the First Updrage The Thieve Actions Shows
        let showTA=document.getElementById("Thieve-Action");//Show the NEW Action, Thieve Button
        showTA.style.display="initial"; 
      };//
      if(skillspassive.stealActiv==3){//If Steal Skill Hit Lv1, Show in ShopTab The BlackMarket, And the New Upgrade of The Home
        let showblackmarket=document.getElementById("ShopoftheBlackMarket-Tab");//Show 4 Shop Tab
        showblackmarket.style.display="initial"; 
        let showHL1=document.getElementById("HouseLimit1");//Show the New #3 Upgrade Button
        showHL1.style.display="initial"; 
      };//
      if(actions.thieveInf==1){//Show the skill Steal and The Thieve Exp
        let showstealxp=document.getElementById("ThieveSteXp"); 
        showstealxp.style.display="initial";//Show The Exp of the Skill
        let showPeg= document.getElementById("Steal");//Show the Skill in the Skills Tab
        showPeg.style.display="initial";
        let showPExp= document.getElementById("StealLv");
        showPExp.style.display="initial";
        let showlinesxP= document.getElementById("ConnectionLine4");
        showlinesxP.style.display="initial";   
      };//
      if(home.houseinf==2){//When you buy the Second Upgrade of the House, Combat System Is Show
        let showRT=document.getElementById("Resources-Tab");//Show the Resource Tab to change a Resources Border.
        showRT.style.display="initial"; 
        let showBT=document.getElementById("Battle-Tab");//Show the Battle Tab to change a Battle Border.
        showBT.style.display="initial"; 
        let showBB=document.getElementById("Battle-Border");//Show the Battle Border to change a Battle Border.
        showBB.style.visibility="visible"; 
        let showPB=document.getElementById("Plans-Tab");//Show the Plans Tab to change a Plans Border.
        showPB.style.visibility="visible";  
        //Show the Clock Changing his Values
        document.getElementById("TitleTiL").innerHTML=strings.clocktitletier1;//Show the Title of the Clock and Changing
        document.getElementById("DescriptionTiL").innerHTML=strings.clockdescriptiontier1;//Show the Description of the Clock and Changing
        //Show the Health Php Changing the Values
        document.getElementById("PHealthTitle").innerHTML=strings.healthtitletier1;//Show the Title of the Health Changing
        document.getElementById("Description-PHealth").innerHTML=strings.healthdescriptiontier1;//Show the Description of Health Changing
      };//
      if(home.houseinf==3){//When you buy the Third Upgrade of the House, Rob Action is Show.
        //Show the Rob Action for the First Time
        let showrobaction=document.getElementById("Rob-Action");
        showrobaction.style.display="initial"; 
      };//
      if(actions.robInf==1){//When you Rob for the First Time Show Exp and Defeat State
        let showstealxp=document.getElementById("RSteXp");//Show the Exp of the Skill give by the Action.
        showstealxp.style.display="initial";
        let showdefeat=document.getElementById("RRMSWD");//Show the Defeat State if the player Loses the Battle.
        showdefeat.style.display="initial";
      };
      //The Drop System Function Take place to Show and hide the tabs of Drops in Battle Border
      if(enemy.defeatsSpawns==1){//If A enemy is Defeat for the First Time Show Linen Resource
         //Show the Linen Material when the Drops are Given
         let showlinneresource=document.getElementById("Linen-Material");
         showlinneresource.style.display="initial";
      };//
      //The Player System Function Take Place to Show and Hide the Tabs of the Skills in Plan and Battle Border for Allies and Players
      //The Enemys System Function Take Place to Show and Hide the Enemys Info And Tab in Battle Border for Enemys and Group of Enemys
      //The Plans Function Take Place to Show and Hide the Skills in Plans Tab
    //The First Enemys is Defeated and The Farm to the Manual Beggins
  };//
};///




function decimals(input,decimals) {   
    // decimals=1;
    let ouput = input;
    ouput = ouput.toFixed(decimals);
    //var ouput = Math.round(ouput * 100) / 100;
    return ouput;
};///
function notdecimals(input) {   
    let ouput = input;
    ouput = Math.trunc(ouput);
    return ouput;
};///
function random(input){
  let output = input;
  output= Math.floor(Math.random()*output);//Works Because the Number is * per Random Changes
  // output= Math.floor(Math.random(output)); 
  return output;
}///
function tabs(number,indexTab) {
 if(indexTab==1){//Table Tabs
      if(number==1){//Actions Tab
        let skills= document.getElementById("Skills-Border");
        let actions= document.getElementById("Action-Border");
        let shop= document.getElementById("Shop-Border"); 
        let house= document.getElementById("House-Border"); 
        let plans= document.getElementById("Plans-Border"); 
        plans.style.visibility="hidden"; 
        house.style.visibility="hidden"; 
        shop.style.visibility="hidden";
        skills.style.visibility="hidden";
        actions.style.visibility="visible";
      };
      if(number==2){//Skill Tab
        let skills= document.getElementById("Skills-Border"); 
        let actions= document.getElementById("Action-Border");
        let shop= document.getElementById("Shop-Border"); 
        let house= document.getElementById("House-Border"); 
        let plans= document.getElementById("Plans-Border"); 
        plans.style.visibility="hidden"; 
        house.style.visibility="hidden"; 
        shop.style.visibility="hidden";
        skills.style.visibility="visible";
        actions.style.visibility="hidden";
      };
      if(number==3){//Shop Tab
        let skills= document.getElementById("Skills-Border"); 
        let actions= document.getElementById("Action-Border");
        let shop= document.getElementById("Shop-Border"); 
        let house= document.getElementById("House-Border"); 
        let plans= document.getElementById("Plans-Border"); 
        plans.style.visibility="hidden"; 
        house.style.visibility="hidden"; 
        shop.style.visibility="visible";
        skills.style.visibility="hidden";
        actions.style.visibility="hidden";
      };
      if(number==4){//House Tab
        let skills= document.getElementById("Skills-Border"); 
        let actions= document.getElementById("Action-Border");
        let shop= document.getElementById("Shop-Border");
        let house= document.getElementById("House-Border"); 
        let plans= document.getElementById("Plans-Border"); 
        plans.style.visibility="hidden"; 
        house.style.visibility="visible"; 
        shop.style.visibility="hidden";
        skills.style.visibility="hidden";
        actions.style.visibility="hidden";
      };
      if(number==5){//Plans Tab
        let skills= document.getElementById("Skills-Border"); 
        let actions= document.getElementById("Action-Border");
        let shop= document.getElementById("Shop-Border");
        let house= document.getElementById("House-Border"); 
        let plans= document.getElementById("Plans-Border"); 
        plans.style.visibility="visible"; 
        house.style.visibility="hidden"; 
        shop.style.visibility="hidden";
        skills.style.visibility="hidden";
        actions.style.visibility="hidden";
      };
 };// 
 if(indexTab==2){//Shop Tabs
     if(number==1){//OldCityMarket Tab
      let caravanS= document.getElementById("OldCityMarketShop"); 
      let oldcitymarketS= document.getElementById("CaravanShop");
      let knightsacademyS= document.getElementById("KnightsAcademyShop");
      let blackmarketS= document.getElementById("BlackMarketShop");
      caravanS.style.display="none";
      oldcitymarketS.style.display="initial";  
      knightsacademyS.style.display="none";
      blackmarketS.style.display="none";
     };
     if(number==2){//Caravan Tab
      let caravanS= document.getElementById("OldCityMarketShop"); 
      let oldcitymarketS= document.getElementById("CaravanShop");
      let knightsacademyS= document.getElementById("KnightsAcademyShop");
      let blackmarketS= document.getElementById("BlackMarketShop");
      caravanS.style.display="initial";
      oldcitymarketS.style.display="none";
      knightsacademyS.style.display="none";
      blackmarketS.style.display="none";
     };
     if(number==3){//KnightsAcademy Tab
      let caravanS= document.getElementById("OldCityMarketShop"); 
      let oldcitymarketS= document.getElementById("CaravanShop");
      let knightsacademyS= document.getElementById("KnightsAcademyShop");
      let blackmarketS= document.getElementById("BlackMarketShop");
      caravanS.style.display="none";
      oldcitymarketS.style.display="none";
      knightsacademyS.style.display="initial";
      blackmarketS.style.display="none";
     };
     if(number==4){//BlackMarket Tab
      let caravanS= document.getElementById("OldCityMarketShop"); 
      let oldcitymarketS= document.getElementById("CaravanShop");
      let knightsacademyS= document.getElementById("KnightsAcademyShop");
      let blackmarketS= document.getElementById("BlackMarketShop");
      caravanS.style.display="none";
      oldcitymarketS.style.display="none";
      knightsacademyS.style.display="none";
      blackmarketS.style.display="initial";
     };
 };//
 if(indexTab==3){//Panel Tabs
  if(number==1){//Resource Tab
   let resourceS= document.getElementById("Resources-Border");
  //  let battleS= document.getElementById("Battle-Border");
   resourceS.style.visibility="visible"; 
  //  battleS.style.visibility="hidden"; 
  //  battleS.style.display="none"; 
  };
  if(number==2){//Battle Tab
    let resourceS= document.getElementById("Resources-Border");
    let battleS= document.getElementById("Battle-Border");
    resourceS.style.visibility="hidden"; 
    battleS.style.visibility="visible"; 
    // battleS.style.display="initial"; 
  };
 };//
};///



function skillSlash(number){
  if(actions.swingInf>=51){// If Swing Hit 50 clicks, SkillSlash Activate
     if(number==1){//Give Exp 
      skillsactive.slashexp=actions.swingClick;//Give Exp in base of Slash Lv
      skillsactive.slashinf+=skillsactive.slashexp;//Total Inf sum of the Skill
      skillsactive.slashski+=skillsactive.slashexp;//Total Unfixed Inf sum of the Skill
      document.getElementById("XpSl").innerHTML=skillsactive.slashski;
     };  
  };//   
};///

function skillGripControl(number){
  if(actions.swingClick>=4){//If Slash is Lv3, Grip Control Activate
       if(number==1){//Give Exp and Show the Skill in the SkillTab
        skillspassive.gcxp+=actions.swingClick/100*10;//0.1 Exp Pr Swing
        skillspassive.gpski=skillspassive.gcxp;//Total Unfixed Inf sum of the Skill
        skillspassive.gcinf=skillspassive.gcxp;//Total Inf sum of the Skill
        document.getElementById("XpGCE").innerHTML=decimals(skillspassive.gpski,1);  
       };
   };//
};///

function skillBreathingControl(number){
  if(number==1&&actions.eatInf>1){//Give Exp
      skillspassive.bcxp+=actions.swingClick/100*100;//Give Exp in base of Slash Lv
      skillspassive.bpski=skillspassive.bcxp;//Total Unfixed Inf sum of the Skill
      skillspassive.bcinf=skillspassive.bcxp;//Total Inf sum of the Skill
      document.getElementById("XpBCE").innerHTML=skillspassive.bpski;
  };//
  //Array of Lvs of Breathing Control in Swing pr Health
  switch(skillspassive.bbActiv){
    case 60://Lv0- -0.009 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.009";
      PHPCalculation(-0.009);     
    break;
    case 30://Lv1- -0.008 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.008";
      PHPCalculation(-0.008); 
    break;
    case 15://Lv2- -0.007 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.007";  
      PHPCalculation(-0.007);
    break;
    case 5://Lv3- -0.003 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.003";
      PHPCalculation(-0.003);  
    break;
    case 3://Lv4- -0.001 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.001";
      PHPCalculation(-0.001); 
    break;
    case 2://Lv5- -0.0009 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.0009";
      PHPCalculation(-0.0009);  
    break;
    case 1://Lv5- -0.0003 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.0003";
      PHPCalculation(-0.0003);  
    break;
    case 0://Lv5- -0.0001 Swing Hp
      document.getElementById("SwingPH").innerHTML="-0.0001";     
      PHPCalculation(-0.0001);  
    break;
  };//
};///

function skillPersuade(number,pricedown,order,priceup,realprice){
  if(number==1&&actions.stickdur==6){//If the Durability Hit Max Lv, The Skill Activate
    skillspassive.persuexp=number;//Exp in base of Beg Action
    skillspassive.persuski+=skillspassive.persuexp;//Total Unfixed Inf sum of the Skill
    skillspassive.persuinf+=skillspassive.persuexp;//Total Inf sum of the Skill
    document.getElementById("XpPI").innerHTML=skillspassive.persuinf;
    // realprice=0;
   };//Persuade only Affect the Actions with talking and convincing.  
   //Persuade down the prices of Items 1%, but only the talk one.
  if(number==2){ 
   if(order==1){//Order 1 is Shopbuy  
    let persunumber=skillspassive.persuActiv;//Total Value of the Lvs to Change Perk       
      if(persunumber===0){//If the Value is 0 the price stay Fixed
        return pricedown;  
      }else{   //The Unfixed Value is equal to the Fixed Value Rest Operation to give Decimals.
        return realprice=pricedown-pricedown/100*persunumber;
      };
      // Moldy Bread-4
      // Lv0- Moldying The Price is down 1%, 3.96
      // Lv1- Moldying The Price is down 2%, 3.92
      // Lv2- Moldying The Price is down 3%, 3.88
      // Lv3- Moldying The Price is down 4%, 3.84
      // Lv4- Moldying The Price is down 5%, 3.80
      // Lv5- Moldying The Price is down 6%, 3.76
      // Lv6- Moldying The Price is down 7%, 3.68
      // Lv7- Moldying The Price is down 8%, 3.52
      // Lv8- Moldying The Price is down 9%, 3.44

      // Pocket Coin Bag-10 
      // Lv0- Pocket Coin Bag The Price is down 1%, 9.90
      // Lv1- Pocket Coin Bag The Price is down 2%, 9.80
      // Lv2- Pocket Coin Bag The Price is down 3%, 9.70
      // Lv3- Pocket Coin Bag The Price is down 4%, 9.60
      // Lv4- Pocket Coin Bag The Price is down 5%, 9.50
      // Lv5- Pocket Coin Bag The Price is down 6%, 9.40
      // Lv6- Pocket Coin Bag The Price is down 7%, 9.20
      // Lv7- Pocket Coin Bag The Price is down 8%, 8.80
      // Lv8- Pocket Coin Bag The Price is down 9%, 8.60

      //Wooden Planks-150
      // Lv0- Wooden Planks The Price is down 1%, 148.50
      // Lv1- Wooden Planks The Price is down 2%, 147.00
      // Lv2- Wooden Planks The Price is down 3%, 145.50
      // Lv3- Wooden Planks The Price is down 4%, 144.00
      // Lv4- Wooden Planks The Price is down 5%, 142.50
      // Lv5- Wooden Planks The Price is down 6%, 141.00
      // Lv6- Wooden Planks The Price is down 7%, 138.00
      // Lv7- Wooden Planks The Price is down 8%, 132.00
      // Lv8- Pocket Coin Bag The Price is down 9%, 129.60

      //Smelly Fish-23
      // Lv0- Smelly Fish The Price is down 1%, 22.77
      // Lv1- Smelly Fish The Price is down 2%, 22.54
      // Lv2- Smelly Fish The Price is down 3%, 22.31 
      // Lv3- Smelly Fish The Price is down 4%, 22.08
      // Lv4- Smelly Fish The Price is down 5%, 21.85
      // Lv5- Smelly Fish The Price is down 6%, 21.62
      // Lv6- Smelly Fish The Price is down 7%, 21.16
      // Lv7-Smelly Fish The Price is down 8%, 20.24
      // Lv8-Smelly Fish The Price is down 9%, 19.78

      // Unknown Meat Soup-100
      // Lv0- Unknown Meat Soup The Price is down 1%, 99.0
      // Lv1- Unknown Meat Soup The Price is down 2%, 98.0
      // Lv2- Unknown Meat Soup The Price is down 3%, 97.0
      // Lv3- Unknown Meat Soup The Price is down 4%, 96.0
      // Lv4- Unknown Meat Soup The Price is down 5%, 95.0
      // Lv5- Unknown Meat Soup The Price is down 6%, 94.0
      // Lv6- Unknown Meat Soup The Price is down 7%, 92.0
      // Lv7- Unknown Meat Soup The Price is down 8%, 88.0
      // Lv8- Unknown Meat Soup The Price is down 9%, 86.0
      
      //Talent Test- 50000
      // Lv0- Talent Test The Price is down 1%, 49500
      // Lv1- Talent Test The Price is down 2%, 49000
      // Lv2- Talent Test The Price is down 3%, 48500
      // Lv3- Talent Test The Price is down 4%, 48000
      // Lv4- Talent Test The Price is down 5%, 47500
      // Lv5- Talent Test The Price is down 6%, 46000
      // Lv6- Talent Test The Price is down 7%, 47000
      // Lv7- Talent Test The Price is down 8%, 44500
      // Lv8- Talent Test The Price is down 9%, 43000

      // Straw-18
      // Lv0- Straw The Price is down 1%, 17.82
      // Lv1- Straw The Price is down 2%, 17.64
      // Lv2- Straw The Price is down 3%, 17.46
      // Lv3- Straw The Price is down 4%, 17.28
      // Lv4- Straw The Price is down 5%, 17.10
      // Lv5- Straw The Price is down 6%, 16.92
      // Lv6- Straw The Price is down 7%, 16.56
      // Lv7- Straw The Price is down 8%, 15.84
      // Lv8- Straw The Price is down 9%, 15.48
   }; 
  };//
  //The Money earn is up to 10% each 1 Persuade Point, but only the talk one.
  if(number==3){
    if(order==1){//Order 1 is Actions  
      let persunumber=skillspassive.persuActiv;//Total Value of the Lvs to Change Perk       
      if(persunumber===0){
        return priceup;//If the Value is Normal the price stay Fixed  
      }else{   //The Unfixed Value is equal to the Fixed Value Sum Operation to give Decimals *40
        return realprice=priceup+priceup/100*persunumber*40;
      };
      // Beg 0.1
      // Lv0- Beg The Price is up 40%,0.140
      // Lv1- Beg The Price is up 80%,0.180
      // Lv2- Beg The Price is up 120%,0.220
      // Lv3- Beg The Price is up 160%,0.260
      // Lv4- Beg The Price is up 200%,0.300-Enter City
      // Lv5- Beg The Price is up 240%,0.340
      // Lv6- Beg The Price is up 280%,0.420-380
      // Lv7- Beg The Price is up 320%,0.580
      // Lv8- Beg The Price is up 360%,0.660
    }; 
  };//
};///

function skillSteal(number,stealgainup,realgain,expgain){
   if(number==1){//Gain Exp
    skillspassive.stealexp=expgain;//Exp in base of Thieve Action
    skillspassive.stealski+=skillspassive.stealexp;//Total Unfixed Inf sum of the Skill
    skillspassive.stealinfo+=skillspassive.stealexp;//Total Inf sum of the Skill
    document.getElementById("XpSteI").innerHTML=skillspassive.stealinfo;
    // realgain=0;
   };//
   if(number==2){//Increase the Money Gain by the Skill Perk
    let stealnumber=skillspassive.stealActiv;//Total Value of the Lvs to Change Perk       
    if(stealnumber===0){
      return stealgainup;//If the Value is Normal the price stay Fixed  
    }else{   //The Unfixed Value is equal to the Fixed Value Sum Operation to give Decimals
      return realgain=stealgainup+stealgainup/100*stealnumber;
    };
    // Steal- 0.7
    // Lv0- Steal The Price is up 1%,0.707
    // Lv1- Steal The Price is up 2%,0.714
    // Lv2- Steal The Price is up 3%,0.721
    // Lv3- Steal The Price is up 4%,0.728
    // Lv4- Steal The Price is up 5%,0.735
    // Lv5- Steal The Price is up 8%,0.756
    // Lv6- Steal The Price is up 10%,0.77
    // Lv7- Steal The Price is up 25%,0.875
    // Lv8- Steal The Price is up 50%,1.05
    // Lv10-Steal The Price is up 99%,1.39
   };//
};///



function actionStick(number) {
  if(actions.stickStac<=2){//Getting 3 Sticks to Start the Game Milestones.
    actions.stickStac+=number;
    // console.log(actions.stickStac);
  };//
  if(actions.stickStac>=3&&number==1&&health.pHpStatus>0.0001&&resources.totalstick<caps.stickcap){//When the Health is better than 0, you can search sticks.
    resources.totalstick+= number;
    actions.stickAct+= number;//Unfixed Value Info Sum
    actions.stickInf+= number;//Fixed Value Info Sum
    document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1); 
    document.getElementById("StickInf").innerHTML= actions.stickInf; 
  };//
  if(health.pHpActiv==1&&actions.swingClick==43){//Show The Stick Healt Lose
     document.getElementById("StickPH").innerHTML="-0.001";//Show the Stick Total of Healt Lose
  };//
  if(health.pHpActiv==1){//Recolecting sticks make you lose 0.001 of life.
     PHPCalculation(-0.001);
  };//
};///

function actionSwing(number) {
   if(resources.totalstick!=0&&number==1&&health.pHpStatus>0.0001){//If you have Sticks and Health you can Swing.
    actions.swingAct+= actions.swingClick;//Unfixed Value Info Sum
    actions.swingInf+= actions.swingClick;//Fixed Value Info Sum
    actions.swingBreak+= actions.swingClick;//Durability of Sticks Info
    time.day= actions.swingClick/100*10+time.day;//Swing, up the day by the number swings and the operation.
    skillSlash(1);//The Three Skills are call to give xp pr SwingClick
    skillGripControl(1);
    skillBreathingControl(1);
    document.getElementById("SwingInf").innerHTML= actions.swingInf; 
   };//
   if(health.pHpActiv==1&&skillspassive.bbActiv==61){//Swing make you lose 0.01 of life.
     PHPCalculation(-0.01);
   };//
};///

function actionBeg(number) {
  if(number==1&&money.totalmoney<money.moneycap){
   skillPersuade(1);//Give exp to Skill 
   let priceup=skillPersuade(3,0,1,actions.begmoney,actions.begmoneyup);//The Skill is Call to give money in base of the operation.
   money.totalmoney+=priceup;//Give + to TotalMoney
   document.getElementById("BegCm").innerHTML=decimals(priceup,3);
   actions.begAct+=number;//Unfixed Info pr Click.
   actions.begInf+=number;//Fixed Info pr Click.
   document.getElementById("BegInf").innerHTML= actions.begInf;
   document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
   moneyChange(1);//The Method is Call to Fixed the Money Decimals.
  };//
};///

function actionEat(number){
  if(number==1&&resources.totalfood>=1&&health.pHpStatus<health.pHpMax){//Eat Action if the Health is not 0
   actions.eatAct+=number;//Unfixed Info
   actions.eatInf+=number;//Fixed Info                               //If you have totalfood you can gain health by eathing 
   document.getElementById("EatInf").innerHTML= actions.eatInf;   
   resources.totalfood=resources.totalfood-1;//You Lose 1 Food pr Eat
   document.getElementById("FoodCount").innerHTML= resources.totalfood; 
   switch(tiers.foodtier){
     case 0://Gain Hp 0.2 pr Rotten Food.
        PHPCalculation(0.2);
     break;
     case 1://Gain Hp 0.45 pr Spoiled Food.
        PHPCalculation(0.45);
     break;
     case 2://Gain Hp 0.85 pr Raw Food.
        PHPCalculation(0.85);
        if(home.houseinf>=3){
          //Show the Health Php Changing the Values
          document.getElementById("PHealthTitle").innerHTML=strings.healthtitletier1;//Show the Title of the Health Changing
          document.getElementById("Description-PHealth").innerHTML=strings.healthdescriptiontier1;//Show the Description of Health Changing
        };
     break;
   };
  };//
  //Food Tiers:
  //Tier 0, Rotten Food, Heals 0.2
  //Tier 1, Spoiled Food, Heals 0.45
  //Tier 2, Raw Food, Heals 0.85
};///

function actionThieve(number){
  if(number==1&&money.totalmoney<money.moneycap&&health.pHpStatus>0.0001){//If Health if better than 0.0001 Thieve
    skillSteal(1,0,0,1);//Give exp to Skill +1
    let gainup=skillSteal(2,actions.thievemoney,actions.thievemoneyup);//The Skill is Call to give money in base of the operation.
    money.totalmoney+=gainup;//Gain of the Steal + Skill + to TotalMoney
    document.getElementById("ThieveCm").innerHTML=decimals(gainup,3);//Show the Money Gain in Action
    //Show the Values and the Inf given by the time of the day action give.
    actions.thieveAct+=number;//Unfixed Info pr Click.
    actions.thieveInf+=number;//Fixed Info pr Click.
    time.day= actions.thieveClick/100*50+time.day;//Thieve, up the day by the number of Thieves = 0.1.
    document.getElementById("ThieveInf").innerHTML= actions.thieveInf;
    document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
    moneyChange(1);//The Method is Call to Fixed the Money Decimals.
    document.getElementById("ThievePH").innerHTML= "-0.001";
    PHPCalculation(-0.001);//You lose 0.001 of Health. 
  };//
};///

function actionRob(number){
  if(number==1&&enemy.slain==0&&health.pHpStatus>0.0001&&player.skillsSlots.skill1activ==1){//If a Enemy is Death and you have health, you Can Rob and Call a Enemy to Fight
    skillSteal(1,0,0,10);//Give exp to Skill +10    
    //Show the Values and the Inf given by the time of the day action give.
    actions.robAct+=number;//Unfixed Info pr Click.
    actions.robInf+=number;//Fixed Info pr Click.
    time.day= actions.robClick+time.day;//Rob, up the day by the number of Rob= 1.
    document.getElementById("RobInf").innerHTML= actions.robInf;
    //Call the Enemy for the First Time.
    enemy.runSpawns+=number;//The Number of Enemys Spawn in all the Run.
    //Call the Enemy by Id and Time of the Run
    if(enemy.defeatsSpawns==0){//Call the First Enemy of the Game to Battle.
      //The more you call the buttom the faster the interval..
      battlesystem(1);//You can only defeat the enemy if you eat food..
    };
    //Call more enemys if they spawn the buttom to..
  };
};///



function shopbuy(number,indexBuy){
  if(indexBuy==1){//Caravan Shop
     if(number==1&&money.totalmoney>=4&&resources.totalfood<caps.foodcap){//Moldy Bread Buy for Number 1
          let price=skillPersuade(2,shop.pricemoldb,1,0,shop.changepricemoldb);// Total price after skill.
          money.totalmoney=money.totalmoney-price;//Rest the price
          document.getElementById("Price-MB").innerHTML=decimals(price,2);//Show the price.
          document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
          resources.totalfood+=1;//Fixed Sum of Food for Buy
          shop.moldinf+= 1;//Fixed Sum of Food for Buy in Info
          document.getElementById("FoodCount").innerHTML= resources.totalfood; 
          document.getElementById("MBInf").innerHTML= shop.moldinf;
          tiers.foodtier=0//The Tier of the Food is 0
          moneyChange(1);//Fixed Decimals Money     
     };//
     if(number==2&&money.totalmoney>=10&&money.moneycapUp<=2){//Pocket Coin Bag Buy for Number 2
          let price=skillPersuade(2,shop.pricepocb,1,0,shop.changepricepockb);// Total price after skill.
          money.totalmoney=money.totalmoney-price;//Rest the price
          document.getElementById("Price-PCB").innerHTML=decimals(price,2);//Show the price.
          document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
          shop.pocketcoinbaginf+= 1;//Fixed Inf of the Buy
          document.getElementById("PCBInf").innerHTML= shop.pocketcoinbaginf;
          money.moneycapUp+=1;//The Money Cap Value increase by 50
          resources.moneycap+=50;//The Money Cap Increase +50 and give the upgrade to the Upgrade Info
          resourceCap();//Call of the Resource Cap to Change the Cap.
          moneyChange(1);//Fixed Decimals Money 
          resourceCap();//Call of the Resource Cap to Change the Cap.
     };//
     if(number==3&&money.totalmoney>=18&&resources.totalstraw<caps.strawcap){//Straw Buy for Number 3
          let price=skillPersuade(2,shop.pricestraw,1,0,shop.changepricestraw);// Total price after skill.
          money.totalmoney=money.totalmoney-price;//Rest the price 
          document.getElementById("Price-S").innerHTML=decimals(price,2);//Show the price of Copper type.
          document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
          resources.totalstraw+=1;//Fixed Sum of the Wooden Plank Buy
          shop.strawinf+= 1;//Fixed Info Value of the Wooden Plank
          document.getElementById("StrawCount").innerHTML= resources.totalstraw; 
          document.getElementById("SInf").innerHTML= shop.strawinf;
          moneyChange(1); //Fixed Decimals Money
     };//
  };///
  if(indexBuy==2){//Old City Market
     if(number==1&&money.totalmoney>=150&&resources.totalwoodp<caps.woodpcap){//Wooden Plank Buy for Number 1
            let price=skillPersuade(2,shop.pricewoodenp,1,0,shop.changepricewoodenp);// Total price after skill.
            money.totalmoney=money.totalmoney-price;//Rest the price 
            document.getElementById("Price-WP").innerHTML=decimals(price/100,2);//Show the price of silver type.
            document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
            resources.totalwoodp+= 1;//Fixed Sum of the Wooden Plank Buy
            shop.woodenplanksinf+= 1;//Fixed Info Value of the Wooden Plank
            document.getElementById("WoodenPlanksCount").innerHTML= resources.totalwoodp; 
            document.getElementById("WPInf").innerHTML= shop.woodenplanksinf;
            moneyChange(1); //Fixed Decimals Money
     };//
     if(number==2&&money.totalmoney>=23&&resources.totalfood<caps.foodcap){//Smelly Fish Buy for Number 2
            let price=skillPersuade(2,shop.pricesfish,1,0,shop.changepricesfish);// Total price after skill.
            money.totalmoney=money.totalmoney-price;//Rest the price
            document.getElementById("Price-SF").innerHTML=decimals(price,2);//Show the price.
            document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
            resources.totalfood+=1;//Fixed Sum of Food for Buy
            shop.sfishinf+= 1;//Fixed Sum of Food for Buy in Info
            document.getElementById("FoodCount").innerHTML= resources.totalfood; 
            document.getElementById("SFInf").innerHTML= shop.sfishinf;
            tiers.foodtier=1//The Tier of the Food is 1
            moneyChange(1);//Fixed Decimals Money     
     };//
     if(number==3&&money.totalmoney>=100&&resources.totalfood<caps.foodcap){//Unknown Meat Soup Buy for Number 3
          let price=skillPersuade(2,shop.pricesumsoup,1,0,shop.changepriceumsoup);// Total price after skill.
          money.totalmoney=money.totalmoney-price;//Rest the price
          document.getElementById("Price-UMS").innerHTML=decimals(price,2);//Show the price.
          document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
          resources.totalfood+=1;//Fixed Sum of Food for Buy
          shop.umsoupinf+= 1;//Fixed Sum of Food for Buy in Info
          document.getElementById("FoodCount").innerHTML= resources.totalfood; 
          document.getElementById("UMSInf").innerHTML= shop.umsoupinf;
          tiers.foodtier=2//The Tier of the Food is 2
          moneyChange(1);//Fixed Decimals Money     
            if(price<=100){//Change Color of the Price to Copper
              let showCurCUNM1=document.getElementById("Price-UMS");   
              showCurCUNM1.style.color="rgba(248, 128, 84, 0.685)";
              let showCurCUNM2=document.getElementById("Price-TUMSSC");   
              showCurCUNM2.style.color="rgba(248, 128, 84, 0.685)";
            };
     };//
  };///
  if(indexBuy==3){//Knight Academy 
       if(number==1&&money.totalmoney>=50000){//TalentTest Buy for Number 1
            let price=skillPersuade(2,shop.pricetalentest,1,0,shop.changepricetalenttest);// Total price after skill.
            money.totalmoney=money.totalmoney-price;//Rest the price 
            document.getElementById("Price-TT").innerHTML=decimals(price/10000,2);//Show the price of Gold type.
            shop.talentestinf+= 1;//Fixed Sum of Talent Test for Buy in Info
            document.getElementById("TTInf").innerHTML= shop.talentestinf;
            document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
            let showW=document.getElementById("TalentTest");//Hidden the Buttom
            showW.style.display="none"; 
            moneyChange(1); //Fixed Decimals Money
       };//
  };///
  if(indexBuy==4){//House Upgrades
       if(number==1&&resources.totalstraw>=2){//Home Creation Buy for Number 1
            resources.totalstraw-=2;//Rest the Price 
            document.getElementById("StrawCount").innerHTML=resources.totalstraw;//Show the total Straws
            home.houseinf+= 1;//Fixed Sum of House Upgrade for Upgrades in Info
            document.getElementById("HCInf").innerHTML= home.houseinf;
            //Show Things
            let showHC=document.getElementById("HouseCreation");//Hidden #1 House Upgrade Button
            showHC.style.display="none"; 
            let showHE1=document.getElementById("HouseExpansion1");//Show the New #2 Upgrade Button
            showHE1.style.display="initial"; 
            //The Upgrade of the House#0 Give +5 Resources Cap and +50 Money Cap 
            money.moneycapUp+=1;//The Money Cap Increase for the Updrage +50.
            caps.stickcapUp+=1;//The Stick Cap Increase for the Updrage +5.
            caps.foodcapUp+=1;//The Food Cap Increase for the Updrage +5.
            caps.woodpcapUp+=1;//The Wooden Planks Cap Increase for the Updrage +5.
            caps.strawcapUp+=1;//The Straw Cap Increase for the Updrage +5.
            //Changes All Home Info of the HouseType-Info
            resources.resourcescap+=5;//The Resource Cap Increase +5 and Give the Info to the Upgrade Info
            resources.moneycap+=50;//The Money Cap Increase +50 and give the upgrade to the Upgrade Info
            homestructures(0);
       };//
       if(number==2&&resources.totalstraw>=21){//Home Expansion1 Buy for Number 2
            resources.totalstraw-=21;//Rest the Price 
            document.getElementById("StrawCount").innerHTML=resources.totalstraw;//Show the total Straws
            home.houseinf+= 1;//Fixed Sum of House Upgrade for Upgrades in Info
            document.getElementById("HE1Inf").innerHTML= home.houseinf;
            //Show Things
            let showHC=document.getElementById("HouseExpansion1");//Hidden the New #2 Upgrade Button
            showHC.style.display="none"; 
            //The Upgrade of the House Give +5 Resources Cap and +50 Money Cap 
            money.moneycapUp+=1;//The Money Cap Increase for the Updrage +50.
            caps.stickcapUp+=1;//The Stick Cap Increase for the Updrage +5.
            caps.foodcapUp+=1;//The Food Cap Increase for the Updrage +5.
            caps.woodpcapUp+=1;//The Wooden Planks Cap Increase for the Updrage +5.
            caps.strawcapUp+=1;//The Straw Cap Increase for the Updrage +5.
            //Changes All Home Info of the HouseType-Info
            document.getElementById("HouseTypeBed-Title").innerHTML=strings.homebedtitlelv1;//Change the House Info Title
            document.getElementById("HouseTypeBedTitle").innerHTML=strings.homebedtitlelv1;//Change the House Info Title
            document.getElementById("Description-HTB").innerHTML=strings.homebeddescriptionlv1;//Change the House Info Description
            resources.resourcescap+=5;//The Resource Cap Increase +5 and Give the Info to the Upgrade Info
            resources.moneycap+=50;//The Money Cap Increase +50 and give the upgrade to the Upgrade Info
            // document.getElementById("Upgrades-HTBRN").innerHTML=resources.resourcescap;//Changes de Value of the Upgrades Info 
            // document.getElementById("Upgrades-HTBMN").innerHTML=resources.moneycap;//Changes de Value of the Upgrades Info 
            homestructures(1);
       };//
       if(number==3&&resources.totalstraw>=6&&resources.totalwoodp>=1){//HouseLimit1 Buy for Number 3
            resources.totalstraw-=6;//Rest the Price 
            resources.totalwoodp-=1;//Rest the Price 
            document.getElementById("StrawCount").innerHTML=resources.totalstraw;//Show the total Straws
            document.getElementById("WoodenPlanksCount").innerHTML=resources.totalwoodp;//Show the total Straws
            home.houseinf+= 1;//Fixed Sum of House Upgrade for Upgrades in Info
            document.getElementById("HL1Inf").innerHTML= home.houseinf;  
            //Show Things
            let showHL1=document.getElementById("HouseLimit1");//Hidden the New #3 Upgrade Button
            showHL1.style.display="none"; 
            //The Upgrade of the House Give +5 Resources Cap and +25 Money Cap 
            money.moneycapUp+=0.5;//The Money Cap Increase for the Updrage +25.
            caps.stickcapUp+=2;//The Stick Cap Increase for the Updrage +10.
            caps.foodcapUp+=2;//The Food Cap Increase for the Updrage +10.
            caps.woodpcapUp+=2;//The Wooden Planks Cap Increase for the Updrage +10.
            caps.strawcapUp+=2;//The Straw Cap Increase for the Updrage +10.
            //Changes All Home Info of the HouseType-Info
            resources.resourcescap+=10;//The Resource Cap Increase +10 and Give the Info to the Upgrade Info
            resources.moneycap+=25;//The Money Cap Increase +25 and give the upgrade to the Upgrade Info
            homestructures(2);
       };//
  };//
  if(indexBuy==5){//Black Market
     if(number==1&&money.totalmoney>=10000){//KnightsBreathingManual Buy for Number 1
        money.totalmoney=money.totalmoney-shop.pricekbreathingmanual;//Rest the price/ Fixed Value to buy the Manual First time. 
        shop.booksinf+= 1;//Fixed Sum of Knights Breathing Manual for Buy in Info
        document.getElementById("KBMInf").innerHTML= shop.booksinf;
        document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,2);
        let showKBM=document.getElementById("KnightsBreathingManual");
        showKBM.style.display="none"; //Hidden The Buttom
        moneyChange(1); //Fixed Decimals Money
     };//
  };//
};///




function locationChange(number){
  if(number==1){//Dark Forest
    document.getElementById("Player-Location").innerHTML= strings.playerlocation1;
    document.getElementById("LocationTitle").innerHTML= strings.locationtitle1;
    document.getElementById("Description-Location").innerHTML= strings.descriplocation1; 
  };//
  if(number==2){//First City
    document.getElementById("Player-Location").innerHTML= strings.playerlocation2;
    document.getElementById("LocationTitle").innerHTML= strings.locationtitle2;
    document.getElementById("Description-Location").innerHTML= strings.descriplocation2;
  };//
};///

function epochalShift(number){
  if(number==1&&skillspassive.persuActiv>=2&&money.totalmoney>=200){//You need 200 totalmoney to buy the first Activation
     shift.ephoSInf+=number;//Fixed Info 
     shift.ephoSStatus+=number;//The Status of the Activation, check to what number you activate in the run
     locationChange(2);//Call location to change to inside the City and Show the City And the new Markets
     let showButCity=document.getElementById("Enterthecity");//The Buttom is Hidden
     showButCity.style.display="none"; 
     money.totalmoney-=200;//Rest the Money
     document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
     moneyChange(1);//Fixed the Money Decimals
  };//
};///

function homestructures(number){
  if(number>=0){
    home.homestructuretpye=number;
    if(home.homestructuretpye==0){//Straw Bed
        //Changes the Structure to Show and Hide
        let showHTI0=document.getElementById("House-TypeBedIncrease0");//Show the Starting House Structure 0
        showHTI0.style.display="initial";  
        let showHTI=document.getElementById("HouseTypeBed-Info");//Show the House Info In House Tab
        showHTI.style.display="initial"; 
    };//
    if(home.homestructuretpye==1){// Family Straw Bed
        //Changes the Structure to Show and Hide
        let showHTI0=document.getElementById("House-TypeBedIncrease0");//Hidden the Starting House Structure 0
        showHTI0.style.display="none"; 
        let showHTI1=document.getElementById("House-TypeBedIncrease1");//Show the Starting House Structure 1
        showHTI1.style.display="initial";  
    };//
    if(home.homestructuretpye==2){// Foundation Fence
        //Changes the Structure to Show and Hide
        let showHTLI0=document.getElementById("House-TypeLimitIncrease0");//Show the Starting Limit of the Structure 
        showHTLI0.style.display="initial"; 
        let showHTLI1=document.getElementById("House-TypeLimitType1");//Show the Starting Limit of the Structure 
        showHTLI1.style.display="initial"; 
        let showHTLI2=document.getElementById("House-TypeLimitType2");//Show the Starting Limit of the Structure 
        showHTLI2.style.display="initial"; 
        let showHTLI=document.getElementById("HouseTypeLimit-Info");//Show the House Info In House Tab
        showHTLI.style.display="initial"; 
    };//
    if(home.homestructuretpye==999){// All Activated
        //Changes the Structure to Show and Hide
        let showHTI0=document.getElementById("House-TypeBedIncrease0");//Hidden the Starting House Structure 0
        showHTI0.style.display="initial"; 
        let showHTI1=document.getElementById("House-TypeBedIncrease1");//Show the Starting House Structure 1
        showHTI1.style.display="initial";  
        let showHTLI0=document.getElementById("House-TypeLimitIncrease0");//Show the Starting Limit of the Structure 
        showHTLI0.style.display="initial"; 
        let showHTLI1=document.getElementById("House-TypeLimitType1");//Show the Starting Limit of the Structure 
        showHTLI1.style.display="initial"; 
        let showHTLI2=document.getElementById("House-TypeLimitType2");//Show the Starting Limit of the Structure 
        showHTLI2.style.display="initial"; 
    };//
  };//  
};///



function resourceCap() { 
  if(caps.stickcapUp>=0){//Stick Cap
    if(caps.stickcapUp>=0){//Stick Cap 0f 10
      document.getElementById("StickCap").innerHTML=caps.stickcap;
        if(resources.totalstick<=0){//Stick Cap to 0 and cap in 0
          resources.totalstick=0;
          document.getElementById("StickCount").innerHTML= 0;
        };
        if(resources.totalstick>=caps.stickcap){//Stick Cap to 10 and cap in 10
          resources.totalstick=caps.stickcap;
          document.getElementById("StickCount").innerHTML= caps.stickcap;
        };
    };
  //Stick Cap
  //stickCapUp= 0 = stickcap:10+10/100*stickcapUp*50 = 10 Stick Cap
  //stickCapUp= 1 = stickcap:10+10/100*stickcapUp*50 = 15 Stick Cap 
  //stickCapUp= 2 = stickcap:10+10/100*stickcapUp*50 = 20 Stick Cap 
  //stickCapUp= 3 = stickcap:10+10/100*stickcapUp*50 = 25 Stick Cap 
  //stickCapUp= 4 = stickcap:10+10/100*stickcapUp*50 = 30 Stick Cap 
  //stickCapUp= 5 = stickcap:10+10/100*stickcapUp*50 = 35 Stick Cap 
  };//
  if(caps.foodcapUp>=0){//Food Cap
    if(caps.foodcapUp>=0){//Food Cap of 10
     document.getElementById("FoodCap").innerHTML=caps.foodcap;
      if(resources.totalfood<=0){//Food Cap in 0  and cap in 0
        resources.totalfood=0;
        document.getElementById("FoodCount").innerHTML= 0;
      };
      if(resources.totalfood>=caps.foodcap){//Food Cap in 10 and cap in 10
        resources.totalfood=caps.foodcap;
        document.getElementById("FoodCount").innerHTML= caps.foodcap;
      };
    };
  //Food Cap
  //foodCapUp= 0 = foodcap:10+10/100*foodcapUp*50 = 10 Food Cap
  //foodCapUp= 1 = foodcap:10+10/100*foodcapUp*50 = 15 Food Cap
  //foodCapUp= 2 = foodcap:10+10/100*foodcapUp*50 = 20 Food Cap  
  //foodCapUp= 3 = foodcap:10+10/100*foodcapUp*50 = 25 Food Cap 
  //foodCapUp= 4 = foodcap:10+10/100*foodcapUp*50 = 35 Food Cap   
  //foodCapUp= 5 = foodcap:10+10/100*foodcapUp*50 = 40 Food Cap   
  };//
  if(caps.strawcapUp>=0){//Straw Cap 
    if(caps.strawcapUp>=0){//Straw Cap of 15
     document.getElementById("StrawCap").innerHTML= caps.strawcap;
      if(resources.totalstraw<=0){//Straw cap to 0 and cap in 0
        resources.totalstraw=0;
        document.getElementById("StrawCount").innerHTML= 0;
      };
      if(resources.totalstraw>=caps.strawcap){//Straw cap to 15 and cap in 15
        resources.totalstraw=caps.strawcap;
        document.getElementById("StrawCount").innerHTML= caps.strawcap;
      };
    };
  //Straw Cap
  //strawCapUp= 0 = strawcap:15+15/3*strawcapUp = 15 Straw Cap
  //strawCapUp= 1 = strawcap:15+15/3*strawcapUp = 20 Straw Cap
  //strawCapUp= 2 = strawcap:15+15/3*strawcapUp = 25 Straw Cap
  //strawCapUp= 3 = strawcap:15+15/3*strawcapUp = 30 Straw Cap
  //strawCapUp= 4 = strawcap:15+15/3*strawcapUp = 35 Straw Cap
  //strawCapUp= 5 = strawcap:15+15/3*strawcapUp = 40 Straw Cap
  };//
  if(caps.woodpcapUp>=0){//Wooden Planks Cap
    if(caps.woodpcapUp>=0){//Wooden Planks Cap of 5
     document.getElementById("WoodenPlanksCap").innerHTML=caps.woodpcap;
      if(resources.totalwoodp<=0){//Wooden Planks cap to 0 and cap in 0
        resources.totalwoodp=0;
        document.getElementById("WoodenPlanksCount").innerHTML= 0;
      };
      if(resources.totalwoodp>=caps.woodpcap){//Wooden Planks cap to 5 and cap in 5
        resources.totalwoodp=caps.woodpcap;
        document.getElementById("WoodenPlanksCount").innerHTML= caps.woodpcap;
      };
    };
  //Wooden Planks Cap
  //woodpCapUp= 0 = woodpcap:5+5/100*woodpcapUp*100 = 5 Wooden Planks Cap
  //woodpCapUp= 1 = woodpcap:5+5/100*woodpcapUp*100 = 10 Wooden Planks Cap
  //woodpCapUp= 2 = woodpcap:5+5/100*woodpcapUp*100 = 15 Wooden Planks Cap
  //woodpCapUp= 3 = woodpcap:5+5/100*woodpcapUp*100 = 20 Wooden Planks Cap
  //woodpCapUp= 4 = woodpcap:5+5/100*woodpcapUp*100 = 25 Wooden Planks Cap
  //woodpCapUp= 5 = woodpcap:5+5/100*woodpcapUp*100 = 30 Wooden Planks Cap
  };//
  if(caps.linencapUp>=0){//Linen Cap
    if(caps.linencapUp>=0){//Linen Cap 0f 10
      document.getElementById("LinenCap").innerHTML=caps.linencap;
        if(resources.totallinen<=0){//Linen Cap to 0 and cap in 0
          resources.totallinen=0;
          document.getElementById("LinenCount").innerHTML= 0;
        };
        if(resources.totallinen>=caps.linencap){//Linen Cap to 10 and cap in 10
          resources.totallinen=caps.linencap;
          document.getElementById("LinenCount").innerHTML= caps.linencap;
        };
    };
  //Linen Cap
  //linenCapUp= 0 = linencap:10+10/100*linencapUp*50 = 10 Linen Cap
  //linenCapUp= 1 = linencap:10+10/100*linencapUp*50 = 15 Linen Cap 
  //linenCapUp= 2 = linencap:10+10/100*linencapUp*50 = 20 Linen Cap 
  //linenCapUp= 3 = linencap:10+10/100*linencapUp*50 = 25 Linen Cap 
  //linenCapUp= 4 = linencap:10+10/100*linencapUp*50 = 30 Linen Cap 
  //linenCapUp= 5 = linencap:10+10/100*linencapUp*50 = 35 Linen Cap 
  };//
  if(money.moneycapUp>=0){//Money Cap
    if(money.moneycapUp>=0){//Money Cap of 50 Copper
      let currency={silver:100,gold:10000}; 
        moneyChange(1);//Fixed Money Decimals, just fix the decimals of the CurrencyCount
        if(money.moneycapUp>=0){
          document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap);
                // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap);
        };
        if(money.moneycapUp>=2){
          document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/currency.silver,2);
                // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/100,2);
        };
        if(money.moneycapUp>=199){
          document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/currency.gold,2);
                // document.getElementById("CurrencyCap").innerHTML=decimals(money.moneycap/10000,2);
        };
      if(money.totalmoney>money.moneycap){//Money Cap of 50 Copper
        money.totalmoney=money.moneycap;
        moneyChange(1);//Fixed Money Decimals to get the Currencycount to moneycap
        // document.getElementById("CurrencyCount").innerHTML=money.moneycap;
      };
    };
   //Money Cap
   //moneyCapUp= 0 = moneycap:50+50/100*moneycapUp*100 = 50 Money Cap
   //moneyCapUp= 1 = moneycap:50+50/100*moneycapUp*100 = 100 Money Cap or 1 Silver
   //moneyCapUp= 2 = moneycap:50+50/100*moneycapUp*100 = 150 Money Cap or 1.5 Silver
   //moneyCapUp= 3 = moneycap:50+50/100*moneycapUp*100 = 200 Money Cap or 2 Silver-Pocket Coin Bag Limit
   //moneyCapUp= 4 = moneycap:50+50/100*moneycapUp*100 = 250 Money Cap or 2.5 Silver
   //moneyCapUp= 4.5 = moneycap:50+50/100*moneycapUp*100 = 275 Money Cap or 2.75 Silver
   //moneyCapUp= 5 = moneycap:50+50/100*moneycapUp*100 = 300 Money Cap or 3 Silver 
   //moneyCapUp= 5.5 = moneycap:50+50/100*moneycapUp*100 = 325 Money Cap or 3.25 Silver 
   //moneyCapUp= 199 = moneycap:50+50/100*moneycapUp*100 = 10000 Money Cap or 1 Gold
  };//
  //Resources Initial Cap
  //Stick - Cap Initial = 10
  //Food - Cap Initial = 10
  //Straw - Cap Initial = 15
  //Wooden Planks - Cap Initial = 5
  //Linen - Cap Initial = 10
  //Money - Cap Initial = 50
};///

function actionCap() {
 switch(actions.stickdur){//Action Cap of the Swing to Break the Stick with GripControl
    case 0://If the Unfixed Info of the Swing Hit 100, The Stick Break.
      if(actions.swingBreak>=100){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart
         document.getElementById("StickDu").innerHTML= 100;          
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
         }; 
       };
    break;
    case 1://If the Unfixed Info of the Swing Hit 200, The Stick Break.
      if(actions.swingBreak>=200){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart 
         document.getElementById("StickDu").innerHTML= 200; 
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
         }; 
       };
    break;
    case 2://If the Unfixed Info of the Swing Hit 400, The Stick Break.
      if(actions.swingBreak>=400){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart   
         document.getElementById("StickDu").innerHTML= 400;
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
         };   
       };
    break;
    case 3://If the Unfixed Info of the Swing Hit 800, The Stick Break.
      if(actions.swingBreak>=800){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart   
         document.getElementById("StickDu").innerHTML= 800;
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
          };  
       }; 
    break;
    case 4://If the Unfixed Info of the Swing Hit 2000, The Stick Break.
      if(actions.swingBreak>=2000){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart   
         document.getElementById("StickDu").innerHTML= 2000;
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
          };   
       };
    break;
    case 5://If the Unfixed Info of the Swing Hit 4000, The Stick Break.
      if(actions.swingBreak>=4000){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart   
         document.getElementById("StickDu").innerHTML= 4000;
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
         }; 
       };
    break;
    case 6://If the Unfixed Info of the Swing Hit 10000, The Stick Break.
      if(actions.swingBreak>=10000){
        resources.totalstick= resources.totalstick-1;//Rest 1 Stick that Brouke
        document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
        actions.swingBreak=0;//The Cicle Restart   
         document.getElementById("StickDu").innerHTML= 10000;
        if(resources.totalstick<=0){//If the Sticks is 0, the program dont move.
           resources.totalstick=0;
           document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);
         }; 
       };
    break;
  };//
};///

function skillCap() {
  if(actions.swingInf>=0){ //Swing Cap Ability 
    if(skillsactive.slashinf==0){//Lv0
      actions.swingClick=1;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= 50;
      document.getElementById("LvNumS").innerHTML=0;
      let LvSlC=document.getElementById("Lv0Sl");
      LvSlC.style.color="aliceblue";
      document.getElementById("TitleSla").innerHTML= strings.titleslashlv0;
      document.getElementById("DescriptionSla").innerHTML= strings.descripslashlv0;
    };
    if(skillsactive.slashinf>=51&&51<=52){//Lv1
     actions.swingClick=2;//Swings per Click
     document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
     document.getElementById("XpCapSl").innerHTML= 150; 
     document.getElementById("LvNumS").innerHTML=1;  
     let LvSlC=document.getElementById("Lv1Sl");
     LvSlC.style.color="aliceblue";
    };
    if(skillsactive.slashinf>=151&&151<=152){//Lv2
      actions.swingClick=4;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= 350; 
      document.getElementById("LvNumS").innerHTML=2;  
      let LvSlC=document.getElementById("Lv2Sl");
      LvSlC.style.color="aliceblue";
    };
    if(skillsactive.slashinf>=351&&351<=352){//Lv3
      actions.swingClick=7;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= 850; 
      document.getElementById("LvNumS").innerHTML=3;    
      let LvSlC=document.getElementById("Lv3Sl");
      LvSlC.style.color="aliceblue";
      document.getElementById("TitleSla").innerHTML= strings.titleslashlv3;
      document.getElementById("DescriptionSla").innerHTML= strings.descripslashlv3;
    };
    if(skillsactive.slashinf>=851&&851<=852){//Lv4
      actions.swingClick=17;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= 2051; 
      document.getElementById("LvNumS").innerHTML=4;
      let LvSlC=document.getElementById("Lv4Sl");
      LvSlC.style.color="aliceblue";
    };
    if(skillsactive.slashinf>=2051&&1051<=2052){//Lv5
      actions.swingClick=43;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= 6850; 
      document.getElementById("LvNumS").innerHTML=5; 
      let LvSlC=document.getElementById("Lv5Sl");
      LvSlC.style.color="aliceblue";
      document.getElementById("TitleSla").innerHTML= strings.titleslashlv5;
      document.getElementById("DescriptionSla").innerHTML= strings.descripslashlv5;
    };
    if(skillsactive.slashinf>=6851&&6851<=6853){//Lv6/Max//
      actions.swingClick=144;//Swings per Click
      document.getElementById("DSw").innerHTML=decimals(actions.swingClick/100*10,1);//Show the Time Swing pr Day
      document.getElementById("XpCapSl").innerHTML= "Max";//Cap Max Lv and MaxExp First Time 
      document.getElementById("LvNumS").innerHTML="Max"; 
      let LvSlC=document.getElementById("LvUpSl");
      LvSlC.style.color="aliceblue";
      document.getElementById("TitLvUpSl").innerHTML=" Level Max-"; 
      document.getElementById("SwiQM").innerHTML=" Slashs Per Click.";
      document.getElementById("SwiCPLS").innerHTML="144";
      document.getElementById("TitleSla").innerHTML= strings.titleslashlv6;
      document.getElementById("DescriptionSla").innerHTML= strings.descripslashlv6;
    };
      //Slash:
      // Level 0- 1 Swing Per Click., Limit 50 Xp.
      // Level 1- 2 Swing Per Click., Limit 150 Xp.
      // Level 2- 4 Swing Per Click., Limit 350 Xp.
      // Level 3- 7 Swing Per Click., Limit 850 Xp.
      // Level 4- 17 Swing Per Click., Limit 2051 Xp.
      // Level 5- 43 Swing Per Click., Limit 6850 Xp.
      // Level 6- 144 Slash Per Click., Limit Max Xp.
  };//
  if(skillspassive.gcinf>=0){ //Grip Control Cap Ability
    if(skillspassive.gcinf==0){//Lv0
      actions.stickdur=0;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML=80;
      document.getElementById("LvNumGC").innerHTML=0;
      let Lv0GCl= document.getElementById("Lv0GCl");
      Lv0GCl.style.color="aliceblue";
      document.getElementById("TitleGC").innerHTML= strings.titlegripcontrollv0;
      document.getElementById("DescriptionGC").innerHTML= strings.descripgripcontrollv0;
    };
    if(skillspassive.gcinf>=80&&81<=82){//Lv1
      actions.stickdur=1;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML=180;
      document.getElementById("LvNumGC").innerHTML=1;
      let Lv1GCl=document.getElementById("Lv1GCl");
      Lv1GCl.style.color="aliceblue";
    }; 
    if(skillspassive.gcinf>=180&&181<=182){//Lv2
      actions.stickdur=2;
      document.getElementById("XpGcC").innerHTML=480;
      document.getElementById("LvNumGC").innerHTML=2;
      let Lv2GCl=document.getElementById("Lv2GCl");
      Lv2GCl.style.color="aliceblue";
    }; 
    if(skillspassive.gcinf>=480&&481<=482){//Lv3
      actions.stickdur=3;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML=880;
      document.getElementById("LvNumGC").innerHTML=3;
      let Lv3GCl=document.getElementById("Lv3GCl");
      Lv3GCl.style.color="aliceblue";
      document.getElementById("TitleGC").innerHTML= strings.titlegripcontrollv3;
      document.getElementById("DescriptionGC").innerHTML= strings.descripgripcontrollv3; 
    };
    if(skillspassive.gcinf>=880&&881<=882){//Lv4
      actions.stickdur=4;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML=2080;
      document.getElementById("LvNumGC").innerHTML=4;
      let Lv4GCl=document.getElementById("Lv4GCl");
      Lv4GCl.style.color="aliceblue";
    }; 
    if(skillspassive.gcinf>=2080&&2081<=2082){//Lv5
      actions.stickdur=5;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML=3180;
      document.getElementById("LvNumGC").innerHTML=5;
      let Lv5GCl=document.getElementById("Lv5GCl");
      Lv5GCl.style.color="aliceblue";
      document.getElementById("TitleGC").innerHTML= strings.titlegripcontrollv5;
      document.getElementById("DescriptionGC").innerHTML= strings.descripgripcontrollv5;
    }; 
    if(skillspassive.gcinf>=3180&&3181<=3182){//Lv6//Max/
      actions.stickdur=6;//Value to Activate the Action Cap Durability of the Stick
      document.getElementById("XpGcC").innerHTML="Max";//Cap Max Lv and MaxExp First Time
      document.getElementById("LvNumGC").innerHTML="Max";
      let LvGlC=document.getElementById("LvUpGC");
      LvGlC.style.color="aliceblue";
      document.getElementById("TitLvUpGC").innerHTML=" Level Max-"; 
      document.getElementById("DuQGC").innerHTML="Grip Control Per Stick.";
      document.getElementById("DUCPGC").innerHTML="10000";
      document.getElementById("TitleGC").innerHTML= strings.titlegripcontrollv6;
      document.getElementById("DescriptionGC").innerHTML= strings.descripgripcontrollv6;
    };
      //Grip Control: 
      // Level 0- Durability Per Stick 100, Limit 80 Xp.
      // Level 1- Durability Per Stick 200, Limit 180 Xp.
      // Level 2- Durability Per Stick 400, Limit 480 Xp.
      // Level 3- Durability Per Stick 800, Limit 880 Xp.
      // Level 4- Durability Per Stick 2000, Limit 2080 Xp.
      // Level 5- Durability Per Stick 4000, Limit 3180 Xp.
      // Level 6- Grip Control Per Stick 10000, Limit Max Xp.
  };//
  if(skillspassive.bcinf>=0){ //Breathing Control Cap Ability
    if(skillspassive.bcinf>=1){//Lv0
      skillspassive.bbActiv=60;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=100;
      document.getElementById("LvNumBC").innerHTML=0;
      let Lv0BCl=document.getElementById("Lv0BCl");
      Lv0BCl.style.color="aliceblue";
      document.getElementById("TitleBC").innerHTML= strings.titlebreathingcontrollv0;
      document.getElementById("DescriptionBC").innerHTML= strings.descripbreathingcontrollv0;
    };
    if(skillspassive.bcinf>=100&&101<=102){//Lv1
      skillspassive.bbActiv=30;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=300;
      document.getElementById("LvNumBC").innerHTML=1;
      let Lv1BCl=document.getElementById("Lv1BCl");
      Lv1BCl.style.color="aliceblue";
      document.getElementById("TitleBC").innerHTML= strings.titlebreathingcontrollv1;
      document.getElementById("DescriptionBC").innerHTML= strings.descripbreathingcontrollv1;
    };
    if(skillspassive.bcinf>=300&&301<=302){//Lv2
      skillspassive.bbActiv=15;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=600;
      document.getElementById("LvNumBC").innerHTML=2;
      let Lv2BCl=document.getElementById("Lv2BCl");
      Lv2BCl.style.color="aliceblue"
    }; 
    if(skillspassive.bcinf>=600&&601<=602){//Lv3
      skillspassive.bbActiv=5;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=1200;
      document.getElementById("LvNumBC").innerHTML=3;
      let Lv3BCl=document.getElementById("Lv3BCl");
      Lv3BCl.style.color="aliceblue"
    }; 
    if(skillspassive.bcinf>=1200&&1201<=1202){//Lv4
      skillspassive.bbActiv=3;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=2400;
      document.getElementById("LvNumBC").innerHTML=4;
      let Lv4BCl=document.getElementById("Lv4BCl");
      Lv4BCl.style.color="aliceblue"
      document.getElementById("TitleBC").innerHTML= strings.titlebreathingcontrollv4;
      document.getElementById("DescriptionBC").innerHTML= strings.descripbreathingcontrollv4;
    }; 
    if(skillspassive.bcinf>=2400&&2401<=2402){//Lv5
      skillspassive.bbActiv=2;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=5600;
      document.getElementById("LvNumBC").innerHTML=5;
      let Lv5BCl=document.getElementById("Lv5BCl");
      Lv5BCl.style.color="aliceblue"
    };
    if(skillspassive.bcinf>=5600&&5601<=5602){//Lv6
      skillspassive.bbActiv=1;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML=10000;
      document.getElementById("LvNumBC").innerHTML=6;
      let Lv6BCl=document.getElementById("Lv6BCl");
      Lv6BCl.style.color="aliceblue"
      document.getElementById("TitleBC").innerHTML= strings.titlebreathingcontrollv6;
      document.getElementById("DescriptionBC").innerHTML= strings.descripbreathingcontrollv6;
    };  
    if(skillspassive.bcinf>=10001&&10001<=10002){//Lv7//Max/
      skillspassive.bbActiv=0;//Value to Activate the Breathing Control Perks in the Skill
      document.getElementById("XpBcC").innerHTML="Max";//Cap Max Lv and MaxExp First Time
      document.getElementById("LvNumBC").innerHTML="Max";
      let LvBlC=document.getElementById("LvUpBC");
      LvBlC.style.color="aliceblue";
      document.getElementById("TitLvUpBC").innerHTML=" Level Max-"; 
      document.getElementById("BCDRU").innerHTML="Breathing Control Per Swing.";
      document.getElementById("BCRMNM").innerHTML="0.5";
      document.getElementById("TitleBC").innerHTML= strings.titlebreathingcontrollv7;
      document.getElementById("DescriptionBC").innerHTML= strings.descripbreathingcontrollv7;
    };
      //Breathing Control:
      // Level 0- 60 Breathing Per Swing, Limit 100 Xp.
      // Level 1- 30 Breathing Per Swing, Limit 300 Xp.
      // Level 2- 15 Breathing Per Swing, Limit 600 Xp.
      // Level 3- 5 Breathing Per Swing, Limit 1200 Xp.
      // Level 4- 3 Breathing Per Swing, Limit 2400 Xp.
      // Level 5- 2 Breathing Per Swing, Limit 5600 Xp.
      // Level 6- 1 Breathing Per Swing, Limit 10000 Xp.
      // Level 7- 0.5 Breathing Control Per Swing, Limit Max Xp.
  };//
  if(skillspassive.persuinf>=0&&actions.stickdur==6){ //Persuade Cap Ability
    if(skillspassive.persuinf>=1){//Lv0
      skillspassive.persuActiv=1;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=30;
      document.getElementById("LvNumPers").innerHTML=0;
      let Lv0PI=document.getElementById("Lv0PI");
      Lv0PI.style.color="aliceblue";
      document.getElementById("TitlePersuade").innerHTML= strings.titlepersuadelv0;
      document.getElementById("DescriptionPers").innerHTML= strings.descriptitlepersuadelv0;
    };
    if(skillspassive.persuinf>=30&&31<=32){//Lv1
      skillspassive.persuActiv=2;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=60;
      document.getElementById("LvNumPers").innerHTML=1;
      let Lv0PI=document.getElementById("Lv1PI");
      Lv0PI.style.color="aliceblue";
      document.getElementById("TitlePersuade").innerHTML= strings.titlepersuadelv1;
      document.getElementById("DescriptionPers").innerHTML= strings.descriptitlepersuadelv1;
    };
    if(skillspassive.persuinf>=60&&61<=62){//Lv2
      skillspassive.persuActiv=3;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=100;
      document.getElementById("LvNumPers").innerHTML=2;
      let Lv0PI=document.getElementById("Lv2PI");
      Lv0PI.style.color="aliceblue";
    };
    if(skillspassive.persuinf>=100&&101<=102){//Lv3
      skillspassive.persuActiv=4;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=130;
      document.getElementById("LvNumPers").innerHTML=3;
      let Lv0PI=document.getElementById("Lv3PI");
      Lv0PI.style.color="aliceblue";
    };
    if(skillspassive.persuinf>=130&&131<=132){//Lv4
      skillspassive.persuActiv=5;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=210;
      document.getElementById("LvNumPers").innerHTML=4;
      let Lv0PI=document.getElementById("Lv4PI");
      Lv0PI.style.color="aliceblue";
      document.getElementById("TitlePersuade").innerHTML= strings.titlepersuadelv4;
      document.getElementById("DescriptionPers").innerHTML= strings.descriptitlepersuadelv4;

    };
    if(skillspassive.persuinf>=210&&211<=212){//Lv5
      skillspassive.persuActiv=6;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=280;
      document.getElementById("LvNumPers").innerHTML=5;
      let Lv0PI=document.getElementById("Lv5PI");
      Lv0PI.style.color="aliceblue";
    };
    if(skillspassive.persuinf>=280&&281<=282){//Lv6
      skillspassive.persuActiv=8;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=390;
      document.getElementById("LvNumPers").innerHTML=6;
      let Lv0PI=document.getElementById("Lv6PI");
      Lv0PI.style.color="aliceblue";
    };
    if(skillspassive.persuinf>=390&&391<=392){//Lv7
      skillspassive.persuActiv=12;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML=500;
      document.getElementById("LvNumPers").innerHTML=7;
      let Lv0PI=document.getElementById("Lv7PI");
      Lv0PI.style.color="aliceblue";
      document.getElementById("TitlePersuade").innerHTML= strings.titlepersuadelv7;
      document.getElementById("DescriptionPers").innerHTML= strings.descriptitlepersuadelv7;
    }; 
    if(skillspassive.persuinf>=500&&501<=502){//Lv8
      skillspassive.persuActiv=14;//Value to Activate a Perk in the Skill
      document.getElementById("XpPEN").innerHTML="Max";//Cap Max Lv and MaxExp First Time
      document.getElementById("LvNumPers").innerHTML="Max";
      let LvPIUp=document.getElementById("LvUpP");
      LvPIUp.style.color="aliceblue";
      document.getElementById("TitLvUpP").innerHTML=" Level Max-"; 
      document.getElementById("PTMM").innerHTML="Persuade pr Lvl.";
      document.getElementById("PRMNM").innerHTML="14";
      document.getElementById("TitlePersuade").innerHTML= strings.titlepersuadelv8;
      document.getElementById("DescriptionPers").innerHTML= strings.descriptitlepersuadelv8;
      //Hit 1331 begs for level max...
    };
      //Persuade:
      // Level 0- 1 Persuade Pr Lvl, Limit 30 Xp.
      // Level 1- 2 Persuade Pr Lvl, Limit 60 Xp.
      // Level 2- 3 Persuade Pr Lvl, Limit 100 Xp.
      // Level 3- 4 Persuade Pr Lvl, Limit 130 Xp.
      // Level 4- 5 Persuade Pr Lvl, Limit 210 Xp.
      // Level 5- 6 Persuade Pr Lvl, Limit 280 Xp.
      // Level 6- 8 Persuade Pr Lvl, Limit 390 Xp.
      // Level 7- 12 Persuade Pr Lvl, Limit 500 Xp.
      // Level 8- 14 Persuade Pr Lvl, Limit Max Xp.
  };//
  if(skillspassive.stealinfo>=0){ //Steal Cap Ability
    if(skillspassive.stealinfo>=1){//Lv0
      skillspassive.stealActiv=1;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=50;
      document.getElementById("LvNumStea").innerHTML=0;
      let Lv0SteI=document.getElementById("Lv0SteI");
      Lv0SteI.style.color="aliceblue";
      document.getElementById("TitleSteal").innerHTML= strings.titlesteallv0;
      document.getElementById("DescriptionSteal").innerHTML= strings.descriptitlesteallv0;
    };
    if(skillspassive.stealinfo>=50&&51<=52){//Lv1
      skillspassive.stealActiv=2;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=100;
      document.getElementById("LvNumStea").innerHTML=1;
      let Lv1SteI=document.getElementById("Lv1SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=100&&101<=102){//Lv2
      skillspassive.stealActiv=3;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=150;
      document.getElementById("LvNumStea").innerHTML=2;
      let Lv1SteI=document.getElementById("Lv2SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=150&&151<=152){//Lv3
      skillspassive.stealActiv=4;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=250;
      document.getElementById("LvNumStea").innerHTML=3;
      let Lv1SteI=document.getElementById("Lv3SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=250&&251<=252){//Lv4
      skillspassive.stealActiv=5;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=350;
      document.getElementById("LvNumStea").innerHTML=4;
      let Lv1SteI=document.getElementById("Lv4SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=350&&351<=352){//Lv5
      skillspassive.stealActiv=8;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=450;
      document.getElementById("LvNumStea").innerHTML=5;
      let Lv1SteI=document.getElementById("Lv5SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=450&&451<=452){//Lv6
      skillspassive.stealActiv=10;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=500;
      document.getElementById("LvNumStea").innerHTML=6;
      let Lv1SteI=document.getElementById("Lv6SteI");
      Lv1SteI.style.color="aliceblue";
      document.getElementById("TitleSteal").innerHTML= strings.titlesteallv6;
      document.getElementById("DescriptionSteal").innerHTML= strings.descriptitlesteallv6;
    };
    if(skillspassive.stealinfo>=500&&501<=502){//Lv7
      skillspassive.stealActiv=25;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=550;
      document.getElementById("LvNumStea").innerHTML=7;
      let Lv1SteI=document.getElementById("Lv7SteI");
      Lv1SteI.style.color="aliceblue";
    };
    if(skillspassive.stealinfo>=550&&551<=552){//Lv8
      skillspassive.stealActiv=50;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML=650;
      document.getElementById("LvNumStea").innerHTML=8;
      let Lv1SteI=document.getElementById("Lv8SteI");
      Lv1SteI.style.color="aliceblue";
      document.getElementById("TitleSteal").innerHTML= strings.titlesteallv8;
      document.getElementById("DescriptionSteal").innerHTML= strings.descriptitlesteallv8;
    };
    if(skillspassive.stealinfo>=650&&651<=702){//Lv10
      skillspassive.stealActiv=99;//Value to Activate a Perk in the Skill
      document.getElementById("XpSteN").innerHTML="Max";//Cap Max Lv and MaxExp First Time
      document.getElementById("LvNumStea").innerHTML="Max";
      let Lv1SteI=document.getElementById("LvUpSte");
      Lv1SteI.style.color="aliceblue";
      document.getElementById("TitLvUpSte").innerHTML=" Level Max-"; 
      document.getElementById("STETMM").innerHTML="Steal pr Lvl.";
      document.getElementById("STEMNM").innerHTML="99";
      document.getElementById("TitleSteal").innerHTML= strings.titlesteallv10;
      document.getElementById("DescriptionSteal").innerHTML= strings.descriptitlesteallv10;
      //Hit 1601 begs for level max...
    };
      //Steal:
      // Level 0- 1% Steal Pr Lvl, Limit 50 Xp.
      // Level 1- 2% Steal Pr Lvl, Limit 100 Xp.
      // Level 2- 3% Steal Pr Lvl, Limit 150 Xp.
      // Level 3- 4% Steal Pr Lvl, Limit 250 Xp.
      // Level 4- 5% Steal Pr Lvl, Limit 350 Xp.
      // Level 5- 8% Steal Pr Lvl, Limit 450 Xp.
      // Level 6- 10% Steal Pr Lvl, Limit 500 Xp.
      // Level 7- 25% Steal Pr Lvl, Limit 550 Xp.
      // Level 8- 45% Steal Pr Lvl, Limit 650 Xp.
      // Level 10- 60% Steal Pr Lvl, Limit Max Xp.
  };//
};///

function resourceTiers(){
  if(tiers.foodtier>=0){//Tier of Food to Change the Text
    if(tiers.foodtier==0){//The Tier Change and the text change, Tier 0
      document.getElementById("FoodnameR").innerHTML=strings.tier0foodtitle;
      document.getElementById("TitleFoodR").innerHTML=strings.tier0foodtitle;
      document.getElementById("DescriptionFoodR").innerHTML=strings.tier0fooddescription;
      let showfoodcolor=document.getElementById("FoodnameR");
      showfoodcolor.style.color="rgba(75, 30, 14, 0.685)";//Tier Rotten Food Color
      document.getElementById("EatTypeNPhP").innerHTML="0.2";//Show Heal Quantity
      document.getElementById("EatFoodT").innerHTML=strings.tier0foodtitle;
      let showfoodeat=document.getElementById("EatFoodT");
      showfoodeat.style.color="rgba(75, 30, 14, 0.685)";//Tier Rotten Food Color
    };
    if(tiers.foodtier==1){//The Tier Change and the text change, Tier 1
      document.getElementById("FoodnameR").innerHTML=strings.tier1foodtitle;
      document.getElementById("TitleFoodR").innerHTML=strings.tier1foodtitle;
      document.getElementById("DescriptionFoodR").innerHTML=strings.tier1fooddescription;
      let showfoodcolor=document.getElementById("FoodnameR");
      showfoodcolor.style.color="rgba(35, 61, 55, 0.685)";//Tier Spoiled Food Color
      document.getElementById("EatTypeNPhP").innerHTML="0.45";//Show Heal Quantity
      document.getElementById("EatFoodT").innerHTML=strings.tier1foodtitle;
      let showfoodeat=document.getElementById("EatFoodT");
      showfoodeat.style.color="rgba(35, 61, 55, 0.685)";//Tier Spoiled Food Color
    };
    if(tiers.foodtier==2){//The Tier Change and the text change, Tier 2
      document.getElementById("FoodnameR").innerHTML=strings.tier2foodtitle;
      document.getElementById("TitleFoodR").innerHTML=strings.tier2foodtitle;
      document.getElementById("DescriptionFoodR").innerHTML=strings.tier2fooddescription;
      let showfoodcolor=document.getElementById("FoodnameR");
      showfoodcolor.style.color="rgba(107, 96, 47, 0.685)";//Tier Raw Food Color
      document.getElementById("EatTypeNPhP").innerHTML="0.85";//Show Heal Quantity
      document.getElementById("EatFoodT").innerHTML=strings.tier2foodtitle;
      let showfoodeat=document.getElementById("EatFoodT");
      showfoodeat.style.color="rgba(107, 96, 47, 0.685)";//Tier Raw Food Color
    };
  };//
};///



function PHPCalculation(number){
  if(health.pHpActiv==1){  //Initial Health 
     health.pHpStatus+=number;//The Total Healing of the Health Total
     document.getElementById("PHpBNormal").innerHTML=decimals(health.pHpStatus,4);//Show the HpStatus 
      if(health.pHpStatus>health.pHpMax){//If the Health get to the same value to the max Health, the Value Fixed
       health.pHpStatus=health.pHpMax;
       document.getElementById("PHpBNormal").innerHTML=decimals(health.pHpStatus,4);
      };
      if(health.pHpStatus<=0.0001&&health.pHpmode==1){//If get less Health tha 0.0001, the value fixed and you survive with 0.0001 Hp
        health.pHpStatus=0.0001;//Only the First Enemys
        // health.pHpStatus=0; the Value is fixed to 0.0001 and you survive because they let you be alive
        document.getElementById("PHpBNormal").innerHTML=decimals(health.pHpStatus,4);
      };
      if(health.pHpStatus<=0&&health.pHpmode==0){//If get less Health than 0, the value fixed and die
        health.pHpStatus=0;
        document.getElementById("PHpBNormal").innerHTML=decimals(health.pHpStatus,4);
      };
      //The Bar Progress Show 
       health.pHpBar=health.pHpStatus;//The Bar Value is Equal to the Live 
       let progressPHp= document.getElementById("PHpBar");
       progressPHp.style.width= (health.pHpBar * 100)+"%";//The Bar is Equal to 100% Max
       // Multi 1 for 100 to make the %,
       //but only work with digits of 1 in 9, in 10 the program broke.
  };//
};///



function battlesystem(fight){
  if(fight>=1){//Function to Invocate Fighting
    if(fight==1){//First Fight of the game
      enemybattle(1,1,1,0);
      playerbattle(1,1,-1,1);
    };
  };//
};///

function plans(skillnumber,slotsnumber){
  switch(skillnumber){//Check the Skill you are to get to the Activation State and Push the Info of the Skill
      case 1://Slash Skill
        //Unfixed Values to +1 to Eliminate the Activation and Show the Activation
        skillsactive.skillcheck.N1.activation+=1;//Activate the value to check and uncheck
        skillsactive.skillcheck.N1.number=1;//Activate the value to track the skillsslot 
        skillsactive.slotskillstatus=skillsactive.skillcheck.N1.number;//Add +1 a status of the slot you are.
            //Show the Activation X number 1
            let slashskills= document.getElementById(`SkillsActive-Activation-${skillsactive.skillcheck.N1.number}`);
            slashskills.style.display="block";
        if(skillsactive.skillcheck.N1.activation==1){//Show the Text of the Slash Skill only in the slot.
            //Show Only the text for the slot of Slash with the color
            document.getElementById(`Slot-${skillsactive.skillcheck.N1.number}-Dropdown`).innerHTML="Slash";
            document.getElementById(`Contingency-Slot-${skillsactive.skillcheck.N1.number}-Inserted`).innerHTML="Slash";
            //Change the color to the color of the Skill 
            let color1=document.getElementById(`Slot-${skillsactive.skillcheck.N1.number}-Dropdown`);
            color1.style.color="rgb(251, 252, 209)";
            let color2=document.getElementById(`Contingency-Slot-${skillsactive.skillcheck.N1.number}-Inserted`);
            color2.style.color="rgb(251, 252, 209)";
            //Show the Bottom of Slash
            let slot1Slash=document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`);
            slot1Slash.style.display="block";
            let slotselect1Slash=document.getElementById(`Contingency-Slot-${skillsactive.percentagecheck}-Select`);
            slotselect1Slash.style.display="none";
            let slotinsert1Slash=document.getElementById(`Contingency-Slot-${skillsactive.percentagecheck}-Inserted`);
            slotinsert1Slash.style.display="block"; 
        };
        if(skillsactive.skillcheck.N1.activation==2){//Eliminate the Activation of the Slot in All Tabs
            //Hiddes the Activation X number 1
            let slashskills= document.getElementById(`SkillsActive-Activation-${skillsactive.slotskillstatus}`);
            slashskills.style.display="none";
            //Hidde the Bottom of Slash
            let slotNeutral=document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`);
            slotNeutral.style.display="none";
            let slotselectNeutral=document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Select`);
            slotselectNeutral.style.display="block";
            let slotinsertNeutral=document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Inserted`);
            slotinsertNeutral.style.display="none";
            //Hidde the Main color
            let color1=document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`);
            color1.style.color="aliceblue";
            //Make the info of the Skill Slot void
            document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`).innerHTML="None";
            //Restart the Percentage to 0
            skillsactive.percentagecheck=skillsactive.percentagecheck-1;//-1 to fix the bug of interval
            document.getElementById("ContingencyStrategyPerce-Status").innerHTML=skillsactive.percentagecheck;
            if(skillsactive.percentagecheck<=0){
              skillsactive.percentagecheck=0;
              document.getElementById("ContingencyStrategyPerce-Status").innerHTML=skillsactive.percentagecheck;
            };
            playerbattle(1,0,-1,0);//We kill the Interval of the skill slash when Desactivate
            //Substract the Values and Hidden the Menu and Activation and get all Values to 0
            skillsactive.skillcheck.N1.activation=0;//Restart the value to check to uncheck
            skillsactive.slotskillstatus-=1;//Substract the Status of the slot you are with -1 
        };
        break;
  };//
  switch(slotsnumber){//Shows and Hidde the Slots when A None Slot or a Slot is Click
      case 0://None Slot to set up the slot to restart
         //Restart the slot percentage to 0
         skillsactive.percentagecheck=0;//Check of the Percentage of Slots taken
         document.getElementById("ContingencyStrategyPerce-Status").innerHTML=skillsactive.percentagecheck;
         //Restart the Slot Status or the button activation
         let slotselect0=document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Select`);
         slotselect0.style.display="block";
         let slotinsert0=document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Inserted`);
         slotinsert0.style.display="none";
         let slot0=document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`);
         slot0.style.display="block";
         playerbattle(1,0,-1,0);//The Slot Get back to the Initial Value
      break;
      case 1://Slot 1 Show the Buttom with the All the info and the Slots is taken
         //Sums the Percentage to +1 
         //Add the Slot status of Activated inserting the Skill
         document.getElementById("ContingencyStrategyPerce-Status").innerHTML= skillsactive.percentagecheck=1;//Check of the Percentage of Slots taken
         let slotselect1=document.getElementById(`Contingency-Slot-${skillsactive.percentagecheck}-Select`);
         slotselect1.style.display="none";
         let slotinsert1=document.getElementById(`Contingency-Slot-${skillsactive.percentagecheck}-Inserted`);
         slotinsert1.style.display="block"; 
         let slot1=document.getElementById(`Slot-${skillsactive.percentagecheck}-Dropdown`);
         slot1.style.display="none";
         playerbattle(1,1,-1,1);//The Slot Get back to 1, If the Skill is Check and the Battle is On, The interval Start
      break;
  }; //
};///



function enemybattle(number,enemyid,battlestart,damageenemy){
  if(number==1){//Enemy Battle Invocation
    //Show and Change the enemy you are in Battle
    let numberofenemys=0;
    let enemyhealthtotal=0;
    let enemyhealthmax=0;
    let enemytypeofenemys=0;
    let enemyguard=0;
    let battleskillsenemy={
        enemyskill1damage:0,
        enemyskill1miliseconds: 0,
        enemyskill1activ: 0,
        //Skill1
        enemyskill2damage:0,
        enemyskill2miliseconds: 0,
        enemyskill2activ: 0,
        //Skill2
        enemyskill3damage:0,
        enemyskill3miliseconds: 0,
        enemyskill3activ: 0,
        //Skill3
        enemyskill4damage:0,
        enemyskill4miliseconds: 0,
        enemyskill4activ: 0,
        //Skill4
        enemyskill5damage:0,
        enemyskill5miliseconds: 0,
        enemyskill5activ: 0,
        //Skill5
        enemyskill6damage:0,
        enemyskill6miliseconds: 0,
        enemyskill6activ: 0,
        //Skill6
        enemyskill7damage:0,
        enemyskill7miliseconds: 0,
        enemyskill7activ: 0,
        //Skill7
        enemyskill8damage:0,
        enemyskill8miliseconds: 0,
        enemyskill8activ: 0,
        //Skill8
        enemyskill9damage:0,
        enemyskill9miliseconds: 0,
        enemyskill9activ: 0,
        //Skill9
        enemyskill10damage:0,
        enemyskill10miliseconds: 0,
        enemyskill10activ: 0,
        //Skill10
        enemyskill11damage:0,
        enemyskill11miliseconds: 0,
        enemyskill11activ: 0,
        //Skill11
        enemyskill12damage:0,
        enemyskill12miliseconds: 0,
        enemyskill12activ: 0,
        //Skill12
    };
//Enemy
    //Set the Enemy and his Values
    switch(enemyid){//Call the Enemys Id to set the Enemy to Fight
      case 0://None Enemy in the Battle Border
        enemy.live=-1//Make the Enemy Death
        //Show the Names and Descriptions
        document.getElementById("Enemy-Title").innerHTML="None";
        document.getElementById("EnemyNameTitle").innerHTML="None";
        document.getElementById("DescriptionEnemy").innerHTML="Nothing is here.";
        //Show the Guard and Defense
        document.getElementById("Enemy-Guard").innerHTML="N";
        enemyguard=0;
        //Show the Type of Enemy
        document.getElementById("Enemy-Type").innerHTML="N";
        document.getElementById("TypeEnemyName").innerHTML="None";
        enemytypeofenemys=0;
        //Show the Number of the enemys in the Battle Border
        numberofenemys=0;
        //Show the Total Physical Health of the Enemy
        document.getElementById("PHealthEnemyTitle").innerHTML="None";
        enemyhealthtotal=-0.1;//Make the Enemy Death
        enemyhealthmax=-0.1;//Make the Enemy Death
        //Show the Total Skills the enemy have to Neutral State
        for(let number= 1; number <= 12; number+=1){
          //Show the Title of the Skills
          document.getElementById(`Enemy-SkillTitle${number}`).innerHTML="None";
          //Show Title of the tooltip of the Skill
          document.getElementById(`Enemy-SkillTitle${number}S`).innerHTML="None";
          //Show the Total Description of the Skills the enemy have
          document.getElementById(`DescriptionSkill${number}-Enemy`).innerHTML="Nothing is here";
        };
        //Call the Drops to 0 and Restart the Boxes
        dropsystem(1,0);
        //The Values of the Skills is Set
        battleskillsenemy.enemyskill1damage=0;
        battleskillsenemy.enemyskill1miliseconds=0;
        battleskillsenemy.enemyskill1activ=0;
        //Skill1
        battleskillsenemy.enemyskill2damage=0;
        battleskillsenemy.enemyskill2miliseconds=0;
        battleskillsenemy.enemyskill2activ=0;
        //Skill2
        battleskillsenemy.enemyskill3damage=0;
        battleskillsenemy.enemyskill3miliseconds=0;
        battleskillsenemy.enemyskill3activ=0;
        //Skill3
        battleskillsenemy.enemyskill4damage=0;
        battleskillsenemy.enemyskill4miliseconds=0;
        battleskillsenemy.enemyskill4activ=0;
        //Skill4
        battleskillsenemy.enemyskill5damage=0;
        battleskillsenemy.enemyskill5miliseconds=0;
        battleskillsenemy.enemyskill5activ=0;
        //Skill5
        battleskillsenemy.enemyskill6damage=0;
        battleskillsenemy.enemyskill6miliseconds=0;
        battleskillsenemy.enemyskill6activ=0;
        //Skill6
        battleskillsenemy.enemyskill7damage=0;
        battleskillsenemy.enemyskill7miliseconds=0;
        battleskillsenemy.enemyskill7activ=0;
        //Skill7
        battleskillsenemy.enemyskill8damage=0;
        battleskillsenemy.enemyskill8miliseconds=0;
        battleskillsenemy.enemyskill8activ=0;
        //Skill8
        battleskillsenemy.enemyskill9damage=0;
        battleskillsenemy.enemyskill9miliseconds=0;
        battleskillsenemy.enemyskill9activ=0;
        //Skill10
        battleskillsenemy.enemyskill10damage=0;
        battleskillsenemy.enemyskill10miliseconds=0;
        battleskillsenemy.enemyskill10activ=0;
        //Skill11
        battleskillsenemy.enemyskill11damage=0;
        battleskillsenemy.enemyskill11miliseconds=0;
        battleskillsenemy.enemyskill11activ=0;
        //Skill12
        battleskillsenemy.enemyskill12damage=0;
        battleskillsenemy.enemyskill12miliseconds=0;
        battleskillsenemy.enemyskill12activ=0;
      break;
      case 1://Hungry Wanderer Enemy in Battle Border
        enemy.live=1//Make the Enemy Alive
        //Show the Names and Descriptions
        document.getElementById("Enemy-Title").innerHTML=enemy.id1.name;
        document.getElementById("EnemyNameTitle").innerHTML=enemy.id1.name;
        document.getElementById("DescriptionEnemy").innerHTML=enemy.id1.description;
        //Show the Guard and Defense
        document.getElementById("Enemy-Guard").innerHTML=enemy.id1.guard;
        enemyguard+=enemy.id1.guard;
        //Show the Type of Enemy
        document.getElementById("Enemy-Type").innerHTML=enemy.id1.type.alone.typename;
        document.getElementById("TypeEnemyName").innerHTML=enemy.id1.type.alone.name;
        enemytypeofenemys=enemy.id1.type.alone.typeid;
        //Show the Number of the enemys in the Battle Border
        numberofenemys+=enemy.id1.numberofenemys;
        //Show the Total Physical Health of the Enemy
        document.getElementById("PHealthEnemyTitle").innerHTML=enemy.id1.phealthtype;
        enemyhealthtotal+=enemy.id1.phealth;
        enemyhealthmax+=enemy.id1.phealth;
        //Show the Total Skills the enemy have to Neutral State
        for(let number= 1; number <= 12; number+=1){
          //Show the Title of the Skills
          document.getElementById(`Enemy-SkillTitle${number}`).innerHTML="None";
          //Show Title of the tooltip of the Skill
          document.getElementById(`Enemy-SkillTitle${number}S`).innerHTML="None";
          //Show the Total Description of the Skills the enemy have
          document.getElementById(`DescriptionSkill${number}-Enemy`).innerHTML="Nothing is here";
        };
        //Show the Total Skills the enemy set to have
        document.getElementById("Enemy-SkillTitle1").innerHTML=enemy.id1.skills.punch.name;
        document.getElementById("Enemy-SkillTitle1S").innerHTML=enemy.id1.skills.punch.name;
        document.getElementById("DescriptionSkill1-Enemy").innerHTML=enemy.id1.skills.punch.description;
        //Call the Drops to 1 to get all the Drops the Enemy Have
        dropsystem(1,1);
        //The Values of the Skills is Set
        battleskillsenemy.enemyskill1damage+=enemy.id1.skills.punch.damage;
        battleskillsenemy.enemyskill1miliseconds+=enemy.id1.skills.punch.milliseconds;
        battleskillsenemy.enemyskill1activ=1;
      break;
    };
    //Check the Quantity of Enemys
    enemy.quantity=numberofenemys;
    enemy.type=enemytypeofenemys;
    document.getElementById("x-NumberofEnemys").innerHTML=enemy.quantity;
    document.getElementById("NumberEnemys").innerHTML=enemy.quantity;
    switch(enemy.type){//Call the Enemytype to set the Enemy to Fight
      case 1://If the Value of the Type is Alone the Quantity of Enemys Cap to 1
        enemy.quantity=1;
      break;
    };
    //Set the Value of Enemy Health
    enemy.phpstatus=enemyhealthtotal;//Unfixed Health of the Enemy
    enemy.phpmax=enemyhealthmax;//Fixed Health of the Enemy
    //Show the Psysical Health of the Enemy and Update.
    document.getElementById("PHpBNormalEnemy").innerHTML=enemy.phpstatus;
    document.getElementById("PHpBTotalEnemy").innerHTML=enemy.phpmax;
    //The Bar Progress of the Hp 
    enemy.phpbar=enemy.phpstatus;//The Bar Value is Equal to the Live 
    let progressPHpenemy= document.getElementById("EPHealthBar");
    progressPHpenemy.style.width= (enemy.phpbar * 66.6)+"%";//The Bar is Equal to 100.5% Max
    // Multi 1.5 for 67 to make the %, 
    //Check the Value of the Guard to Defend
     enemy.guard=enemyguard;
    //The Value of the Skills is Show and Use to Attack Pr Cycle.
      enemy.skillsSlots.skill1damage=battleskillsenemy.enemyskill1damage;
      enemy.skillsSlots.skill1miliseconds=battleskillsenemy.enemyskill1miliseconds;
      enemy.skillsSlots.skill1activ=battleskillsenemy.enemyskill1activ;
    //The Bar Progress Show of Skills Slots
    if(enemy.skillsSlots.skill1activ==1&&battlestart==1){//The First Skill Slot is Activate Normally.
          const progressskill1= document.getElementById("Enemy-Skill-Bar-S1");//Show in the Bar the Interval
          enemy.skillsSlots.skill1bar=0;// The Bar is Equal to the Value to Cycle.
          let ibar1= setInterval(skill1bar, enemy.skillsSlots.skill1miliseconds);//The Value is in Miliseconds
          function skill1bar(){ //The Bar is Equal to 100% Max  
               if(enemy.skillsSlots.skill1bar == 100){//If Hit 100% Restart to 0% and Repeat
                //The Skill Make Damage to the Player.
                PHPCalculation(enemy.skillsSlots.skill1damage);//The Skill Make Damage base in the Value.
                enemy.skillsSlots.skill1bar=0;//Equal value of the Cycle %  
               }else{//The bar Sum pr Cycle %
                  enemy.skillsSlots.skill1bar+=1; //Sum to the Bar 1% per Cycle
                  progressskill1.style.width = enemy.skillsSlots.skill1bar + "%"; //Add the to the Cycle 1%
               };
               if(enemy.live==0){//Kill the Interval if the Enemy Die
                   clearInterval(ibar1);//Kill the Interval if the Player get the Mode PhP 1 And Have less o equal than 0.0001
                   enemy.skillsSlots.skill1bar=0;
                   progressskill1.style.width = enemy.skillsSlots.skill1bar + "%";
                   dropsystem(1,1,1);//Give the Drop to the Player with the Enemy Id of 1 if the Enemy Die
               };
               if(enemy.skillsSlots.skill1activ==0){//Kill the Interval if Skill is Change
                  clearInterval(ibar1);
                  enemy.skillsSlots.skill1bar=0;
                  progressskill1.style.width = enemy.skillsSlots.skill1bar + "%";
               };
          };//The Bar is Equal to the Cycle 1, every SkillMileseconds
    };
  };//
  if(number==2){//The Php Track of the Battle for the Enemy, Substractin damageenemy
        //Set the Value of Enemy Health
        enemy.phpstatus+=damageenemy;//Unfixed Health of the Enemy health and damage.
        //Show the Psysical Health of the Enemy and Update.
        document.getElementById("PHpBNormalEnemy").innerHTML=decimals(enemy.phpstatus,1);
        document.getElementById("PHpBTotalEnemy").innerHTML=decimals(enemy.phpmax,1);
        //The Bar Progress of the Hp 
        enemy.phpbar=enemy.phpstatus;//The Bar Value is Equal to the Live 
        let progressPHpenemy= document.getElementById("EPHealthBar");
        progressPHpenemy.style.width= (enemy.phpbar * 66.6)+"%";//The Bar is Equal to 100.5% Max
        // Multi 1.5 for 67 to make the %, 
        //Set the Die and Regeneration Status of the enemy.
        if(enemy.phpstatus<=0){//If the Value of the Health Hit 0 the has Enemy Die.
            enemy.live=0;//Make the Enemy Death and when the all things are drop restart to -1
            enemy.slain=1;//Make the Enemy Death in check to stop robbing.
        };
        if(enemy.phpstatus>enemy.phpmax){//If the Enemy Heal his life to max Cap, the Value Fixed
           enemy.phpstatus= enemy.phpmax;
           document.getElementById("PHpBNormalEnemy").innerHTML= enemy.phpstatus;
        };    
  };
};///

function playerbattle(number,skillid,allieid,battlestart){
  if(number==1){//Player Invocation for Battle
//Show and Change the allie you are with in battle
     let numberofallies=0;
     let allieshealthtotal=0;
     let allieshealthmax=0;
     let alliestypeofallies=0;
     let alliesguard=0;
     let battleskillsallies={
         //Skill1
         alliesskill1damage: 0,
         alliesskill1miliseconds: 0,
         alliesskill1activ: 0,
         //Skill2
         alliesskill2damage: 0,
         alliesskill2miliseconds: 0,
         alliesskill2activ: 0,
         //Skill3
         alliesskill3damage: 0,
         alliesskill3miliseconds: 0,
         alliesskill3activ: 0,
         //Skill4
         alliesskill4damage: 0,
         alliesskill4miliseconds: 0,
         alliesskill4activ: 0,
         //Skill5
         alliesskill5damage: 0,
         alliesskill5miliseconds: 0,
         alliesskill5activ: 0,
         //Skill6
         alliesskill6damage: 0,
         alliesskill6miliseconds: 0,
         alliesskill6activ: 0,
         //Skill7
         alliesskill7damage: 0,
         alliesskill7miliseconds: 0,
         alliesskill7activ: 0,
         //Skill8
         alliesskill8damage: 0,
         alliesskill8miliseconds: 0,
         alliesskill8activ: 0,
         //Skill9
         alliesskill9damage: 0,
         alliesskill9miliseconds: 0,
         alliesskill9activ: 0,
         //Skill10
         alliesskill10damage: 0,
         alliesskill10miliseconds: 0,
         alliesskill10activ: 0,
         //Skill11
         alliesskill11damage: 0,
         alliesskill11miliseconds: 0,
         alliesskill11activ: 0,
         //Skill12
         alliesskill12damage: 0,
         alliesskill12miliseconds: 0,
         alliesskill12activ: 0, 
     };
     let battleskillsplayer={
      playerskill1damage: 0,
      playerskill1miliseconds: 0,
      playerskill1activ: 0,
      //Skill1
      playerskill2damage: 0,
      playerskill2miliseconds: 0,
      playerskill2activ: 0,
      //Skill2
      playerskill3damage: 0,
      playerskill3miliseconds: 0,
      playerskill3activ: 0,
      //Skill3
      playerskill4damage: 0,
      playerskill4miliseconds: 0,
      playerskill4activ: 0,
      //Skill4
      playerskill5damage: 0,
      playerskill5miliseconds: 0,
      playerskill5activ: 0,
      //Skill5
      playerskill6damage: 0,
      playerskill6miliseconds: 0,
      playerskill6activ: 0,
      //Skill6
      playerskill7damage: 0,
      playerskill7miliseconds: 0,
      playerskill7activ: 0,
      //Skill7
      playerskill7damage: 0,
      playerskill7miliseconds: 0,
      playerskill7activ: 0,
      //Skill8
      playerskill8damage: 0,
      playerskill8miliseconds: 0,
      playerskill8activ: 0,
      //Skill9
      playerskill9damage: 0,
      playerskill9miliseconds: 0,
      playerskill9activ: 0,
      //Skill10
      playerskill10damage: 0,
      playerskill10miliseconds: 0,
      playerskill10activ: 0,
      //Skill11
      playerskill11damage: 0,
      playerskill11miliseconds: 0,
      playerskill11activ: 0,
      //Skill12
      playerskill12damage: 0,
      playerskill12miliseconds: 0,
      playerskill12activ: 0,
     };
//Allies
    //Set the Allie and his Values
    switch(allieid){
      case 0://None Allies in the Battle Border
        allies.live=0//Make the Allie Death
        //Show the Names and Descriptions
        document.getElementById("Allies-Title").innerHTML="None";
        document.getElementById("AlliesNameTitle").innerHTML="None";
        document.getElementById("DescriptionAllies").innerHTML="Nothing is here.";
        //Show the Type of Allie
        document.getElementById("Allies-Type").innerHTML="N";
        document.getElementById("TypeAlliesName").innerHTML="None";
        alliestypeofallies=0;
        //Show the Number of the Allies in the Battle Border
        numberofallies=0;
        //Show the Total Skills the Allies have to Neutral State
        for(let number= 1; number <= 12; number+=1){
          //Show the Title of the Skills
          document.getElementById(`Allies-SkillTitle${number}`).innerHTML="None";
          //Show Title of the tooltip of the Skill
          document.getElementById(`Allies-SkillTitle${number}S`).innerHTML="None";
          //Show the Total Description of the Skills the enemy have
          document.getElementById(`DescriptionSkill${number}-Allies`).innerHTML="Nothing is here";
        };
        //The Values of the Skills is Set
        battleskillsallies.alliesskill1damage=0;
        battleskillsallies.alliesskill1miliseconds=0;
        battleskillsallies.alliesskill1activ=0;
        //Skill1
        battleskillsallies.alliesskill2damage=0;
        battleskillsallies.alliesskill2miliseconds=0;
        battleskillsallies.alliesskill2activ=0;
        //Skill2
        battleskillsallies.alliesskill3damage=0;
        battleskillsallies.alliesskill3miliseconds=0;
        battleskillsallies.alliesskill3activ=0;
        //Skill3
        battleskillsallies.alliesskill4damage=0;
        battleskillsallies.alliesskill4miliseconds=0;
        battleskillsallies.alliesskill4activ=0;
        //Skill4
        battleskillsallies.alliesskill5damage=0;
        battleskillsallies.alliesskill5miliseconds=0;
        battleskillsallies.alliesskill5activ=0;
        //Skill5
        battleskillsallies.alliesskill6damage=0;
        battleskillsallies.alliesskill6miliseconds=0;
        battleskillsallies.alliesskill6activ=0;
        //Skill6
        battleskillsallies.alliesskill7damage=0;
        battleskillsallies.alliesskill7miliseconds=0;
        battleskillsallies.alliesskill7activ=0;
        //Skill7
        battleskillsallies.alliesskill8damage=0;
        battleskillsallies.alliesskill8miliseconds=0;
        battleskillsallies.alliesskill8activ=0;
        //Skill8
        battleskillsallies.alliesskill9damage=0;
        battleskillsallies.alliesskill9miliseconds=0;
        battleskillsallies.alliesskill9activ=0;
        //Skill10
        battleskillsallies.alliesskill10damage=0;
        battleskillsallies.alliesskill10miliseconds=0;
        battleskillsallies.alliesskill10activ=0;
        //Skill11
        battleskillsallies.alliesskill11damage=0;
        battleskillsallies.alliesskill11miliseconds=0;
        battleskillsallies.alliesskill11activ=0;
        //Skill12
        battleskillsallies.alliesskill12damage=0;
        battleskillsallies.alliesskill12miliseconds=0;
        battleskillsallies.alliesskill12activ=0;
      break;
    };
    //Check the Quantity of Allies
    allies.quantity=numberofallies;
    allies.type=alliestypeofallies;
    document.getElementById("x-NumberofAllies").innerHTML=allies.quantity
    document.getElementById("NumberAllies").innerHTML=allies.quantity
    switch(allies.type){
      case 1://If the Value of the Type is Alone the Quantity of Allies Cap to 1
      allies.quantity=1;
      break;
    };
//Player   
    //Set the Skill and his Values of the Player
    switch(skillid){//Set the Skills Slots
      case 0://None Skill in Slot
            //Show the values of names and descriptions and quantity and Droprates to 0 and initial state
            //For is 12 becasue the 12 skills, but is 1 because the contigency slots is just 1 until now
                let number= 1
            // for(let number= 1; number <= 12; number+=1){
              //Hidden all the Info of the Slots to Void
              // document.getElementById(`Slot-${number}-Dropdown`).innerHTML="None";
              document.getElementById(`Contingency-Slot-${number}-Inserted`).innerHTML="None";
              document.getElementById(`Player-SkillTitle${number}`).innerHTML="None";
              document.getElementById(`Player-SkillTitle${number}S`).innerHTML="None";
              //Show the value to Neutral with Nothing in there
              document.getElementById(`DescriptionSkill${number}-Player`).innerHTML="Nothing is here.";
              //Change the color to the color of the Skill to Default
              // let colorD=document.getElementById(`Slot-${number}-Dropdown`); //Slot Drop is not necesary to hide because hidde the Slash Slot
              // colorD.style.color="aliceblue";
              let colorI=document.getElementById(`Contingency-Slot-${number}-Inserted`);
              colorI.style.color="aliceblue";
              let colorST=document.getElementById(`Player-SkillTitle${number}`);
              colorST.style.color="aliceblue";
              let colorSTS=document.getElementById(`Player-SkillTitle${number}S`);
              colorSTS.style.color="aliceblue";
            // };
            //The Values of the Skills is Set
            battleskillsplayer.playerskill1damage=0;
            battleskillsplayer.playerskill1miliseconds=0;
            battleskillsplayer.playerskill1activ=0;
            //Skill1
            battleskillsplayer.playerskill2damage=0;
            battleskillsplayer.playerskill2miliseconds=0;
            battleskillsplayer.playerskill2activ=0;
            //Skill2            
            battleskillsplayer.playerskill3damage=0;
            battleskillsplayer.playerskill3miliseconds=0;
            battleskillsplayer.playerskill3activ=0;
            //Skill3
            battleskillsplayer.playerskill4damage=0;
            battleskillsplayer.playerskill4miliseconds=0;
            battleskillsplayer.playerskill4activ=0;
            //Skill4
            battleskillsplayer.playerskill5damage=0;
            battleskillsplayer.playerskill5miliseconds=0;
            battleskillsplayer.playerskill5activ=0;
            //Skill5
            battleskillsplayer.playerskill6damage=0;
            battleskillsplayer.playerskill6miliseconds=0;
            battleskillsplayer.playerskill6activ=0;
            //Skill6
            battleskillsplayer.playerskill7damage=0;
            battleskillsplayer.playerskill7miliseconds=0;
            battleskillsplayer.playerskill7activ=0;
            //Skill7
            battleskillsplayer.playerskill8damage=0;
            battleskillsplayer.playerskill8miliseconds=0;
            battleskillsplayer.playerskill8activ=0;
            //Skill8
            battleskillsplayer.playerskill9damage=0;
            battleskillsplayer.playerskill9miliseconds=0;
            battleskillsplayer.playerskill9activ=0;
            //Skill9
            battleskillsplayer.playerskill10damage=0;
            battleskillsplayer.playerskill10miliseconds=0;
            battleskillsplayer.playerskill10activ=0;
            //Skill10
            battleskillsplayer.playerskill11damage=0;
            battleskillsplayer.playerskill11miliseconds=0;
            battleskillsplayer.playerskill11activ=0;
            //Skill11
            battleskillsplayer.playerskill12damage=0;
            battleskillsplayer.playerskill12miliseconds=0;
            battleskillsplayer.playerskill12activ=0;
            //Skill12          
      break;
      case 1://Slash Skill in Slot
          if(skillsactive.skillcheck.N1.activation==1&&skillsactive.percentagecheck>=1){
            //We call and remplace all the info of the slots for the Skill Slash
            document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`).innerHTML="Slash";
            document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Inserted`).innerHTML="Slash";
            document.getElementById(`Player-SkillTitle${skillsactive.slotskillstatus}`).innerHTML="Slash";
            document.getElementById(`Player-SkillTitle${skillsactive.slotskillstatus}S`).innerHTML="Slash";
            document.getElementById(`DescriptionSkill${skillsactive.slotskillstatus}-Player`).innerHTML=skillsactive.slashskillactive.description;
            //Change the color to the color of the Skill Slash
            let color1=document.getElementById(`Slot-${skillsactive.slotskillstatus}-Dropdown`);
            color1.style.color="rgb(251, 252, 209)";
            let color2=document.getElementById(`Contingency-Slot-${skillsactive.slotskillstatus}-Inserted`);
            color2.style.color="rgb(251, 252, 209)";
            let color3=document.getElementById(`Player-SkillTitle${skillsactive.slotskillstatus}`);
            color3.style.color="rgb(251, 252, 209)";
            let color4=document.getElementById(`Player-SkillTitle${skillsactive.slotskillstatus}S`);
            color4.style.color="rgb(251, 252, 209)";
            //The Values of the Skills is Set
            battleskillsplayer.playerskill1damage+=skillsactive.slashskillactive.damage;
            battleskillsplayer.playerskill1miliseconds+=skillsactive.slashskillactive.milliseconds;
            battleskillsplayer.playerskill1activ=1;
          };
      break;
    };
    //The Value of the Skills is Show and Use to Attack Pr Cycle.
      player.skillsSlots.skill1damage=battleskillsplayer.playerskill1damage;
      player.skillsSlots.skill1miliseconds=battleskillsplayer.playerskill1miliseconds;
      player.skillsSlots.skill1activ=battleskillsplayer.playerskill1activ;
    //The Bar Progress Show of Skills Slots
    if(player.skillsSlots.skill1activ==1&&battlestart==1&&resources.totalstick>=1||player.weaponactivation==1){//The First Skill Slot is Activate Normally.
          const progressskill1= document.getElementById("Player-Skill-Bar-S1");//Show in the Bar the Interval
          player.skillsSlots.skill1bar=0;// The Bar is Equal to the Value to Cycle.
          let ibar1= setInterval(skill1bar, player.skillsSlots.skill1miliseconds);//The Value is in Miliseconds
          function skill1bar(){ //The Bar is Equal to 100% Max  
               if(player.skillsSlots.skill1bar == 100){//If Hit 100% Restart to 0% and Repeat
                //The Skill Make Damage to the Enemy.
                enemybattle(2,0,0,player.skillsSlots.skill1damage);//The Skill Make Damage base in the Value.
                player.skillsSlots.skill1bar=0;//Equal value of the Cycle %  
                if(player.weaponactivation==0){//Substracting the Stick -1 pr Perk and Cycle
                  resources.totalstick+= skillsactive.slashskillactive.stick;//We substract the stick for using the skills with out weapon.
                  //Because Grip Control the Total Sticks loss is 0.1
                  document.getElementById("StickCount").innerHTML= decimals(resources.totalstick,1);//The Stick Brouke with the Impact!
                };
               }else{//The bar Sum pr Cycle %
                  player.skillsSlots.skill1bar+=1; //Sum to the Bar 1% per Cycle
                  progressskill1.style.width = player.skillsSlots.skill1bar + "%"; //Add the to the Cycle 1%
               };
               if(enemy.live==0){//Kill the Interval if the Enemy Die
                   clearInterval(ibar1);//Kill the Interval if the Player get the Mode PhP 1 And Have less o equal than 0.0001
                   player.skillsSlots.skill1bar=0;
                   progressskill1.style.width = player.skillsSlots.skill1bar + "%";
               };
               if(player.skillsSlots.skill1activ==0||resources.totalstick<=0){//Kill the Interval if Skill is Change
                    clearInterval(ibar1);
                    player.skillsSlots.skill1bar=0;
                    progressskill1.style.width = player.skillsSlots.skill1bar + "%";
               };
               if(health.pHpStatus<=0.0001&&health.pHpmode==1){//Kill the Interval if the Player Die
                  clearInterval(ibar1);//Kill the Interval if the Player get the Mode PhP 1 And Have less o equal than 0.0001
                  player.skillsSlots.skill1bar=0;
                  progressskill1.style.width = player.skillsSlots.skill1bar + "%";
                  defeatsystem(1,1);//Call the number 1 because the Player Die
               };
          };//The Bar is Equal to the Cycle 1, every SkillMileseconds
    };
  };//
};///   

function dropsystem(number,enemyid,enemydie){
  if(number==1){//Enemy Invocation for the Loot In and Out
    //Set the Enemy and the Values of the Drops
    let dropsid={
      dropid1: 0,
      dropid2: 0,
      dropid3: 0,
      dropid4: 0,
      dropid5: 0,
      dropid6: 0,
      dropid7: 0,
      dropid8: 0,
      dropid9: 0,
      dropid10: 0,
      dropid11: 0,
      dropid12: 0,
    };
    let dropsquantity={
        drop1: 0,
        drop2: 0,
        drop3: 0,
        drop4: 0,
        drop5: 0,
        drop6: 0,
        drop7: 0,
        drop8: 0,
        drop9: 0,
        drop10: 0,
        drop11: 0,
        drop12: 0,
    };
    let dropsrates={
      droprate1: 0,
      droprate2: 0,
      droprate3: 0,
      droprate4: 0,
      droprate5: 0,
      droprate6: 0,
      droprate7: 0,
      droprate8: 0,
      droprate9: 0,
      droprate10: 0,
      droprate11: 0,
      droprate12: 0,
    };
    switch(enemyid){//Call the Id of the Enemy to get the Drops and change the Info
      case 0://The Enemy is Void and the Drops are Hidden
        //Set the Value of the Drops Quantity to 0
        dropsquantity.drop1=0;
        dropsquantity.drop2=0;
        dropsquantity.drop3=0;
        dropsquantity.drop4=0;
        dropsquantity.drop5=0;
        dropsquantity.drop6=0;
        dropsquantity.drop7=0;
        dropsquantity.drop8=0;
        dropsquantity.drop9=0;
        dropsquantity.drop10=0;
        dropsquantity.drop11=0;
        dropsquantity.drop12=0;
       //Set the Value of the id for the drop to 0
        dropsid.dropid1=0;
        dropsid.dropid2=0;
        dropsid.dropid3=0;
        dropsid.dropid4=0;
        dropsid.dropid5=0;
        dropsid.dropid6=0;
        dropsid.dropid7=0;
        dropsid.dropid8=0;
        dropsid.dropid9=0;
        dropsid.dropid10=0;
        dropsid.dropid11=0;
        dropsid.dropid12=0;
       //Set the Value of the droprates to 0
        dropsrates.droprate1=0;
        dropsrates.droprate2=0;
        dropsrates.droprate3=0;
        dropsrates.droprate4=0;
        dropsrates.droprate5=0;
        dropsrates.droprate6=0;
        dropsrates.droprate7=0;
        dropsrates.droprate8=0;
        dropsrates.droprate9=0;
        dropsrates.droprate10=0;
        dropsrates.droprate11=0;
        dropsrates.droprate12=0;
        //Show the values of names and descriptions and quantity and Droprates to 0 and initial state
        for(let number= 1; number <= 12; number+=1){
          //Show the number
          // document.getElementById(`Slot-${number}-Percentage`).innerHTML= drops[`id${dropsid[`dropid${number}`]}`].droprate;
          //Show the value in 0
          document.getElementById(`Slot-${number}-QuantityItem`).innerHTML= 0;
          document.getElementById(`Slot-${number}-Info-Quantity`).innerHTML= 0;
          document.getElementById(`Slot-${number}-Percentage`).innerHTML= 0;
          //Show the value to Neutral with None
          document.getElementById(`Slot-${number}-Title`).innerHTML="None";
          document.getElementById(`Slot-${number}-Toltip-Title`).innerHTML="None";
          //Show the value to Neutral with Nothing in there
          document.getElementById(`Slot-${number}-Description`).innerHTML="Nothing is here.";
          //Hidde all the Slots of Drops
          let slotI= document.getElementById(`Drops-Index-Slot-${number}`);
          slotI.style.display="none";
          let slotC= document.getElementById(`Slot-${number}-QuantityItem`);
          slotC.style.color="aliceblue";
          let slotT= document.getElementById(`Slot-${number}-Toltip-Title`);
          slotT.style.color="aliceblue";
        };
      break;
      case 1://Show the Drops of the First Enemy Id
        //Set the Value of the Drops Quantity
         dropsquantity.drop1=enemy.id1.drops.money.quantity;
         dropsquantity.drop2=enemy.id1.drops.strawshoes.quantity;
         dropsquantity.drop3=enemy.id1.drops.linenclothes.quantity;
        //Set the Value of the id for the drop
         dropsid.dropid1=enemy.id1.drops.money.id;
         dropsid.dropid2=enemy.id1.drops.strawshoes.id;
         dropsid.dropid3=enemy.id1.drops.linenclothes.id;
        //Set the Value of the droprate
         dropsrates.droprate1=drops[`id${dropsid.dropid1}`].droprate;
         dropsrates.droprate2=drops[`id${dropsid.dropid2}`].droprate;
         dropsrates.droprate3=drops[`id${dropsid.dropid3}`].droprate;
        //Show the drops boxes.
        let slot1c1= document.getElementById("Drops-Index-Slot-1");
        let slot2c1= document.getElementById("Drops-Index-Slot-2");
        let slot3c1= document.getElementById("Drops-Index-Slot-3");
        slot1c1.style.display="initial";
        slot2c1.style.display="initial";
        slot3c1.style.display="initial";
        //Set the value of the Drops to Show in the Border
         //Slot 1
         document.getElementById("Slot-1-QuantityItem").innerHTML= dropsquantity.drop1;
         document.getElementById("Slot-1-Info-Quantity").innerHTML= dropsquantity.drop1;
         let slot1c1Q= document.getElementById("Slot-1-QuantityItem");
         slot1c1Q.style.color=drops[`id${dropsid.dropid1}`].color;
         //Slot 2
         document.getElementById("Slot-2-QuantityItem").innerHTML=dropsquantity.drop2;
         document.getElementById("Slot-2-Info-Quantity").innerHTML=dropsquantity.drop2;
         let slot2c1Q= document.getElementById("Slot-2-QuantityItem");
         slot2c1Q.style.color=drops[`id${dropsid.dropid2}`].color;
         //Slot 3
         document.getElementById("Slot-3-QuantityItem").innerHTML=dropsquantity.drop3;
         document.getElementById("Slot-3-Info-Quantity").innerHTML=dropsquantity.drop3;
         let slot3c1Q= document.getElementById("Slot-3-QuantityItem");
         slot3c1Q.style.color=drops[`id${dropsid.dropid3}`].color;
        //Show the Percentage of the DropRate of the Item
         document.getElementById(`Slot-1-Percentage`).innerHTML= drops[`id${dropsid.dropid1}`].droprate;
         document.getElementById(`Slot-2-Percentage`).innerHTML= drops[`id${dropsid.dropid2}`].droprate;
         document.getElementById(`Slot-3-Percentage`).innerHTML= drops[`id${dropsid.dropid3}`].droprate;
        //Show the Names of the Drops
         //Slot1
         document.getElementById(`Slot-1-Title`).innerHTML= drops[`id${dropsid.dropid1}`].name;
         document.getElementById(`Slot-1-Toltip-Title`).innerHTML= drops[`id${dropsid.dropid1}`].name ;
         let slot1c1T= document.getElementById("Slot-1-Toltip-Title");
         slot1c1T.style.color=drops[`id${dropsid.dropid1}`].color;
         //Slot2
         document.getElementById(`Slot-2-Title`).innerHTML= drops[`id${dropsid.dropid2}`].name;
         document.getElementById(`Slot-2-Toltip-Title`).innerHTML= drops[`id${dropsid.dropid2}`].name;
         let slot2c1T= document.getElementById("Slot-2-Toltip-Title");
         slot2c1T.style.color=drops[`id${dropsid.dropid2}`].color;
         //Slot3
         document.getElementById(`Slot-3-Title`).innerHTML= drops[`id${dropsid.dropid3}`].name;
         document.getElementById(`Slot-3-Toltip-Title`).innerHTML= drops[`id${dropsid.dropid3}`].name;
         let slot3c1T= document.getElementById("Slot-3-Toltip-Title");
         slot3c1T.style.color=drops[`id${dropsid.dropid3}`].color;
        //Show the Descriptions of the Drops
         document.getElementById(`Slot-1-Description`).innerHTML= drops[`id${dropsid.dropid1}`].description;
         //Slot2
         document.getElementById(`Slot-2-Description`).innerHTML= drops[`id${dropsid.dropid2}`].description;
         //Slot3
         document.getElementById(`Slot-3-Description`).innerHTML= drops[`id${dropsid.dropid2}`].description;      
      break;
    };
    //Set the Value of the the Drops 
    switch(enemydie){
      case 1://Enemy Id 1 Die and the Drops are given to the Player
       //The Drops is giving by the Quantity
        money.totalmoney+=dropsquantity.drop1;
        resources.totalstraw+=dropsquantity.drop2;
        resources.totallinen+=dropsquantity.drop3;
       //The Html is Set to show the Changes
        document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
        moneyChange(1);//The Method is Call to Fixed the Money Decimals. 
        document.getElementById("StrawCount").innerHTML= resources.totalstraw;
        document.getElementById("LinenCount").innerHTML= resources.totallinen;
        //The Enemy index of Death is Tracked
        enemy.defeatsSpawns+=enemy.slain;
        enemybattle(1,0,0,0);//Call the id 0 to Restart All 
      break;
    };
  };
};///   

function defeatsystem(number,time){
   if(number==1){//The Defeat System is Call
       if(time==1){//If they Beat you when you are vs the first enemy
          enemybattle(1,0,0,0);//Call the id 0 to Restart All  
          //Show the Health Php Changing the Values 
          document.getElementById("PHealthTitle").innerHTML=strings.healthtitletierM1B1;//Show the Title of the Health Changing
          document.getElementById("Description-PHealth").innerHTML=strings.healthdescriptiontierM1B1;//Show the Description of Health Changing
          //He Steal you Resources...
          money.totalmoney-=random(60);;//He Steal your money.. Random
          resources.totalfood-=random(6);;//And your Food.. he is hungry!..Random
          //The Html is Set to show the Changes
          document.getElementById("CurrencyCount").innerHTML=decimals(money.totalmoney,1);
          moneyChange(1);//The Method is Call to Fixed the Money Decimals. 
          document.getElementById("FoodCount").innerHTML= resources.totalfood;
       };   
   };
};///  






