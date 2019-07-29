//-------------------------------------------------------------
//-----------------Do not edit the XML tags--------------------
//-------------------------------------------------------------

//<AcroForm>
//<ACRO_source>Background 1:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Background 1:Calculate ***********/
if(this.getField("BackgroundCheck1").value=="Yes")
	this.getField("Background 1").display = display.visible
else {
	this.getField("Background 1").display = display.hidden
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Background 2:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Background 2:Calculate ***********/
if(this.getField("BackgroundCheck2").value=="Yes")
	this.getField("Background 2").display = display.visible
else {
	this.getField("Background 2").display = display.hidden
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Half-blood 1st:Validate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Half-blood 1st:Validate ***********/
//Put this in "Validate" to remove duplicate elements.
switch (event.value) {  
	case "Kaltoran":  
     this.getField("Half-blood 2nd").setItems([" - ", "Legion", "Remnant", "Twi", "Nephilim"]);  
     break;  
     case "Legion":  
     this.getField("Half-blood 2nd").setItems([" - ", "Kaltoran", "Remnant", "Twi", "Nephilim"]);   
     break;     
     case "Remnant":  
     this.getField("Half-blood 2nd").setItems([" - ", "Kaltoran", "Legion", "Twi", "Nephilim"]);   
     break;
     case "Twi":  
     this.getField("Half-blood 2nd").setItems([" - ", "Kaltoran", "Legion", "Remnant", "Nephilim"]);   
     break;
     case "Nephilim":  
     this.getField("Half-blood 2nd").setItems([" - ", "Kaltoran", "Legion", "Remnant", "Twi"]);   
     break;    
     default:
    	this.getField("Half-blood 2nd").setItems([" - ", "Kaltoran", "Legion", "Remnant", "Twi", "Nephilim"]);   
}  

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Half-blood 1st:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Half-blood 1st:Calculate ***********/
if(this.getField("Half-bloodButton").value=="Yes")
	this.getField("Half-blood 1st").display = display.visible
else {
	this.getField("Half-blood 1st").display = display.hidden
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Half-blood 2nd:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Half-blood 2nd:Calculate ***********/
if(this.getField("Half-bloodButton").value=="Yes")
	this.getField("Half-blood 2nd").display = display.visible
else {
	this.getField("Half-blood 2nd").display = display.hidden
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Persuasion Total:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Persuasion Total:Calculate ***********/
if(this.getField("PersuasionCheck").value=="Yes")
	event.value = (getField("+1").value + getField("Persuasion Bonus").value);
else {
	event.value = (getField("-2").value + getField("Persuasion Bonus").value);
}

//Description and Toolbox bonuses
if(this.getField("1-AttributePersuasion").value=="Yes")
	event.value--;
if(this.getField("4+AttributePersuasion").value=="Yes")
	event.value++;
if(this.getField("ToolboxPersuasion").value=="Yes")
	event.value++;

//Skill bonuses from Race
if(this.getField("Half-blood 1st").value=="Nephilim" || this.getField("Half-blood 2nd").value=="Nephilim")
	event.value--;

//Skill bonuses from Background
if(this.getField("Background").value=="Miscreant" || this.getField("Background (optional)").value=="Miscreant")
	event.value++;

//Skill bonuses from Everyday Skills
if(this.getField("Stealth Traits").value=="Rogue")
 	event.value++;
if(this.getField("Stealth Traits").value=="Swift & Silent")
 	event.value++;
if(this.getField("Stealth Traits").value=="Timed Strike")
 	event.value++;
if(this.getField("Stealth Traits").value=="Smuggler")
 	event.value++;

//Skill bonuses from Education Skills
if(this.getField("Philosophy Traits").value=="Bulwark of Faith")
 	event.value++;
if(this.getField("Philosophy Traits").value=="Forbidden Power")
 	event.value++;
if(this.getField("Philosophy Traits").value=="Linguist")
 	event.value++;
if(this.getField("Philosophy Traits").value=="Priest of Standing")
 	event.value++;
if(this.getField("Philosophy Traits").value=="Read Motives")
 	event.value++;
if(this.getField("Philosophy Traits").value=="Scholar")
 	event.value++;
if(this.getField("Fauna Traits").value=="Spawn")
 	event.value--;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Race:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Race:Calculate ***********/
//Tooltip for Races
if (this.getField("Race").value == "Kaltoran"){
  this.getField("Race").userName = "» Reduce all of your Limited Vision and Low Light Cover penalties by 1 Step.\n» Select a second, different, Background.\n» You may make a Resolve Skill Roll to look into your ancestors’ memories.\n» +1 Awareness.\n» +1 Hit and Defence if you’re an NPC.\n» -1 max Strength and Focus.\n» -5 Endurance (-0 if you’re an NPC).\n» Skill bonuses from multiple Backgrounds do not Stack.";

}	else if (this.getField("Race").value == "Legion"){
  this.getField("Race").userName ="» You may be Big.\n» +1 Body and Head Armour.\n» +2 Defence vs Tackle.\n» You suffer no penalties from arctic and cold environments (including Cold Dangerous Terrain).\n» -2 max Movement.\n» -1 Armour when you’re at 0 Endurance.\n» Complication: Inner Fire (pg: 43).";

}	else if (this.getField("Race").value == "Remnant"){
  this.getField("Race").userName ="» You may be Big and suffer -1 Defence.\n» +2 Attribute Points.\n» -1 Maximum Renown.\n» If you take 2 or more Attribute Damage between your Turns, you start to Bleed.";

}	else if (this.getField("Race").value == "Tolatl"){
  this.getField("Race").userName ="» You’re Tiny.\n» +1 Maximum Resources and Renown.\n» +1 Defence.\n» +1 Stealth.\n» Your tail counts as an extra limb that can use Small items.\n» -2 max Strength.\n» -1 max Movement.\n» -4 Equipment Slots.\n» Prejudice from some NPCs.";

}	else if (this.getField("Race").value == "Twi"){
  this.getField("Race").userName ="» **GM Approval**\n» Spirit-Blast: A single Resource cost 1 or 2 Weapon (or any cost if you’re an NPC) gains the Energy, Natural and Slow Keywords, and has 0 Weight.\n» +1 Body and Head Armour vs Energy.\n» -2 Stealth.\n» -2 max Strength.\n» Any Weapon with the Energy Keyword that causes you Endurance Damage gains Splash +1.";

}	else if (this.getField("Race").value == "Half-Blood"){
  this.getField("Race").userName ="» **You’re NOT a super special snowflake!**.\n» Gain a Language or a Knowledge.\n» Gain 2 of the following:\n\t» Kaltoran: Reduce all of your Limited Vision and \n\tLow Light Cover penalties by 1 Step.\n\t» Legion: +4 Endurance, +2 Defence vs Tackle, \n\t-1 max Movement.\n\t» Remnant: +1 Attribute Point, all Healing Rolls\n\tthat include you suffer -1 (Stacks).\n\t» Twi: +1 Body and Head Armour vs Energy, \n\t-1 Stealth.\n\t» Nephilim: +2 End Dmg (all Weapons), \n\t-1 max Renown, -1 Persuasion and Heraldry.\n» You may not breed (unless you’re part Nephilim).";

}	else {
  this.getField("Race").userName = "";
}

if(this.getField("Race").value=="Half-Blood")
	this.getField("Half-bloodButton").display = display.visible
else {
	this.getField("Half-bloodButton").display = display.hidden
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Size:Calculate</ACRO_source>
//<ACRO_script>
/*********** belongs to: AcroForm:Size:Calculate ***********/
if (this.getField("Size").value == "Tiny"){
	this.getField("Size").userName = "» You do not inhibit the movement of Tiny and Huge characters.\n» You’re Difficult Terrain to Standard and Big characters.\n» You find it easier to gain physical Environmental Cover.\n» Tiny and Standard characters may not end their Turn in your space.\n» You must immediately move to an adjacent space if a hostile Big or Huge character moves into or through your space.";

}	else if (this.getField("Size").value == "Standard"){
  this.getField("Size").userName = "» You do not inhibit the movement of Huge characters.\n» You’re Difficult Terrain to Tiny, Standard and Big characters.\n» Tiny, Standard and Big characters may not end their Turn in your space.\n» You must immediately move to an adjacent space and go Prone if a hostile Huge character moves into or through your space.";

}   else if (this.getField("Size").value == "Big"){
  this.getField("Size").userName = "» Pick One: You may take up 1, 2 or 4 spaces.\n» You’re Difficult Terrain to all characters.\n» You find it harder to gain physical Environmental Cover.\n» Tiny, Standard and Big characters may not end their Turn in your space.\n» You must immediately move to an adjacent space and go Prone if a hostile Huge character moves into or through your space.\n» Some Polearms are more effective against Big characters.\n» At the GM’s discretion, your Weapons may gain: +1 Rng, Max Rng, Ideal Rng and/or Zone +1.";

}	 else if (this.getField("Size").value == "Huge"){
  this.getField("Size").userName = "» You take up 4 or more spaces.\n» You’re Impassable Terrain to Big and Huge characters.\n» You’re Difficult Terrain to Tiny and Standard characters.\n» You find it very hard to gain physical Environmental Cover.\n» Tiny and Standard characters may not end their Turn in your space.\n» Some Polearms are more effective against Huge characters.\n» At the GM’s discretion, your Weapons may gain: +1 Rng, Max Rng, Ideal Rng and/or Zone +1.\n» At the GM’s discretion, your limbs gain +1 End and Crit Dmg.\n» At the GM’s discretion, Attacks that can’t reach your Head gain Crit Location 1d3 (normally 1d6).";

}
//</ACRO_script>
//</AcroForm>


