//Kaltoran Background selection field visibility.//
switch (event.value) {
	case "Kaltoran":
		getField("Background 1").display = display.visible;
	break;
	default:
		getField("Background 1").display = display.hidden;
}

//Half-blood subrace selection field visibility.//
switch (event.value) {
	case "Half-Blood":
		getField("Half-blood 1st").display = display.visible;
		getField("Half-blood 2nd").display = display.visible;
	break;
	default:
		getField("Half-blood 1st").display = display.hidden;
		getField("Half-blood 2nd").display = display.hidden;
}

//Half-blood subrace unique selection per field.//
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

//Add Background: "user select" for Trait: Cult Priest of "user select" (Philosophy).//
if (event.value == " - "){
    var backgroundField = "Background 1";
    if (getField("Background 2").display == display.visible){
        backgroundField = "Background 2";
    }
    getField(backgroundField).display = display.hidden;
    getField(backgroundField).value = " - ";
}
else if (getField("Background 1").display != display.visible){
    getField("Background 1").display = display.visible;
    switch (event.value) {
        case "Cult Priest of Neph":
            getField("Background 1").value = "Wild";
        break;
        case "Cult Priest of Akh":
            getField("Background 1").value = "Rural";
        break;
        case "Cult Priest of Ath":
            getField("Background 1").value = "Soldier";
        break;
        case "Cult Priest of Corp":
            getField("Background 1").value = "Noble";
        break;
        case "Cult Priest of Nix":
            getField("Background 1").value = "Miscreant";
        break;
        case "Cult Priest of Dray":
            getField("Background 1").value = "Tradesman";
        break;
        case "Cult Priest of All-Being":
            getField("Background 1").value = "Tribal";
        break;
        default:
            getField("Background 1").display = display.hidden;
            getField("Background 1").value = " - ";
    }
}
else {
    getField("Background 2").display = display.visible;
    switch (event.value) {
        case "Cult Priest of Neph":
            getField("Background 2").value = "Wild";
        break;
        case "Cult Priest of Akh":
            getField("Background 2").value = "Rural";
        break;
        case "Cult Priest of Ath":
            getField("Background 2").value = "Soldier";
        break;
        case "Cult Priest of Corp":
            getField("Background 2").value = "Noble";
        break;
        case "Cult Priest of Nix":
            getField("Background 2").value = "Miscreant";
        break;
        case "Cult Priest of Dray":
            getField("Background 2").value = "Tradesman";
        break;
        case "Cult Priest of All-Being":
            getField("Background 2").value = "Tribal";
        break;
        default:
            getField("Background 2").display = display.hidden;
            getField("Background 2").value = " - ";
    

//Add Background: Miscreant for Trait: Oucast (Renown)//
if (getField("Background 1").display = display.visible)
	switch (event.value) {
		case "Outcast":
			getField("Background 1").display = display.visible;
			getField("Background 1").value = "Miscreant";
		break;
		default:
			getField("Background 1").display = display.hidden;
			getField("Background 1").value = " - ";
	}
else {
	switch (event.value) {
		case "Outcast":
			getField("Background 2").display = display.visible;
			getField("Background 2").value = "Miscreant";
		break;
		default:
			getField("Background 2").display = display.hidden;
			getField("Background 2").value = " - ";
	}
}


//Cod de la Alex cu multiple valori in acelasi field.//
if (["Rogue", "Swift & Silent", "Timed Strike", "Smuggler"].indexOf(this.getField("Stealth Traits")).value  != -1) {
    event.value++;
}
