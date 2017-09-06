function character(name, prof, gend, age, str, hp) {
	this.name = name;
	this.prof = prof;	
	this.gend = gend;
	this.age = age;
	this.str = str;
	this.hp = hp;

	this.printStats = function(){
		// for (var i = 0; i < this.stats.length; i++) {
			console.log("Name: " + this.name + "\nProfession: " + this.prof + "\nGender: " + this.gend + "\nAge: " + this.age + "\nStrength: " + this.str + "\nHP: " + this.hp + "\n");
		// }
		}


	this.isAlive = function() {
		if (this.hp > 0) {
			console.log(this.name + " is still alive!");
			console.log("\n-------------\n");
			return true;
		}
		console.log(this.name + " has died!");
		return false;
	};

	this.levelUp = function() {
		this.age += 1;
		this.strenth += 5;
		this.hp += 25;
	};

	this.attack = function() {
		
	};
}

//create a new object, and give it a values
var sam = new character("sam","hobbit", "male", 30, 70, 85)
var frodo = new character("frodo","hobbit", "male", 35, 80, 100)
var gollum = new character("gollum","creature", "male", 50, 50, 70)
var legolas = new character("legolas","elf", "male", 40, 95, 100)

sam.printStats();
frodo.printStats();
gollum.printStats();
legolas.printStats();