var e = document.getElementById("dunbio");

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lists
const OracleList = ["๐ซ Absolute no", "โ No, and intervention", "โ No", "๐ No, but...", "๐ Yes, but...", "โ Yes", "โ Yes, and intervention", "โ Absolute yes"];

const Interventions = ["โ New Entity", "๐ผ Entity Positive", "๐ฝ Entity Negative", "โจ Party Positive", "๐งจ Party Negative", "๐ Advance Plot", "๐ Regress Plot", "๐ Wildcard (Use RWG)",
"๐ Remote Event"];

const rwgAction = ["Attainment", "Starting", "Negclect", "Fight", "Recruit", "Triumph", "Release", "Befriend", "Judge", "Desert", "Dominate", "Procrastinate", "Expose", "Haggle", "Imprison",
"Release", "Celebrate", "Develop", "Oppress", "Inspect", "Ambush", "Spy", "Attach", "Carry", "Excitement","Activity", "Assist", "Care", "Negligence", "Passion", "Violate", "Oppose",
"Malice", "Communicate", "Persecute", "Increase", "Decrease", "Abandon", "Gratify", "Praise", "Separate", "Take", "Break", "Heal", "Delay", "Stop", "Lie", "Return", "Travel", "Block",
"Harm", "Debase", "Overindulge", "Adjourn", "Adversity", "Kill", "Disrupt", "Open", "Carelessness", "Ruin", "Extravagance", "Trick", "Arrive", "Propose", "Divide", "Refuse", "Work Hard",
"Control", "Attract", "Failure", "Pursue", "Vengeance", "Proceedings", "Dispute", "Punish", "Inquire", "Antagonise", "Move", "Waste", "Truce", "Immitate", "Struggle", "Inform", "Bestow",
"Postpone", "Usurp", "Create", "Betray", "Agree", "Abuse", "Mistrust", "Deceive", "Cruelty", "Intolerance", "Trust", "Guide", "Transform", "Overthrow", "Oppress", "Change", "Advise",
"Obtain", "Attempt", "Spoil", "Interact", "Abduct", "Promote", "Blight", "Progress", "Distress", "Record", "Embrace", "Contact", "Abuse", "Review", "Aid", "Guard", "Conquer", "Plunder",
"Administer", "Discover", "Damage", "Publicize", "Defile", "Join", "Offend", "Learn", "Guide", "Report", "Steal", "Operate", "Overthrow"];

const rwgSubject = ["Goals", "Dreams", "Environment", "Outside", "Inside", "Reality", "Allies", "Enemies", "Messages", "Energy", "Balance", "Tension", "Friendship", "The physical", "A project",
"Pleasures", "Advice", "A plot", "Competition", "Prison", "Illness", "Food", "Attention", "Success", "Death", "Disruption", "Power", "A burden", "Intrigues", "Fears", "Ambush", "Rumor",
"Victory", "Dispute", "Riches", "Status quo", "Technology", "Hope", "Magic", "Illusions", "Evil", "Good", "Emotions", "Opposition", "War", "Peace", "The innocent", "Love", "The spiritual",
"Pain", "Possessions", "Benefits", "Plans", "Lies", "Expectations", "Legal matters", "Bureaucracy", "Business", "Failure", "Travel", "Jealousy", "Dispute", "Home", "Investment", "Suffering",
"Wishes", "Tactics", "Wounds", "Extravagance", "A representative", "Adversities", "Opulence", "Liberty", "Military", "The mundane", "Trials", "Portals", "Danger", "Weapons", "Animals",
"Weather", "Elements", "Nature", "The public", "Leadership", "The intellectual", "New ideas", "Joy", "A path", "News", "Exterior factors", "Stalemate", "Randomness", "Misfortune", "Masses",
"Vehicle", "Art", "Fame", "Anger", "Information", "Wealth", "Hardship", "Resources", "Poverty", "Success", "Music", "Literature", "Alcohol", "Medicines", "Beauty", "Strength",
"Intelligence", "The Wealthy", "The Populous", "Enemies", "The Public", "The Poor", "The Family", "The Elite", "Academia", "The Forsaken", "The Law", "The Government", "The Oppressed",
"Criminals", "Secret Societies", "The World", "Military", "Dreams"];

const Expects = ["๐ Increase Simple Element", "๐ถ Decrease simple Element", "โ Add Simple Element", "โ Remove Simple Element", "๐ Increase Major Element", "๐ถ Decrease Major Element", 
"โ Add Major Element", "โ Remove Major Element", "๐ Positive Wildcard (Use RWG)", "๐ Negative Wildcard (Use RWG)"];

const volcanicDangers = ["Lava pit", "Lava geyser", "Burning area"];

const iceDangers = ["Slippery floor", "Ice spikes"];

const desertDangers = ["Quicksand pit", "Weak sand flooring"];

const waterDangers = ["Fully flooded room", "Partially flooded room", "High-speed stream of water"];

const genericDangers = ["Spikefall", "Pitfall", "Pool of water", "Ravine", "Fog/Haze", "Pool of acid", "Rubble", "Excessive plants", "Excessive cobwebs", "Brown Mold", "Acid Mold",
"Poison Mold"];

const pois = ["Old bookshelf", "Old box", "Strangely colored rock", "Structural pillar", "Statue of someone", "Statue of a monster", "Trap door", "Odd symbols on the wall", "Odd symbols on the floor", "Tombstone",
"Creature remains", "Big lever on the wall", "Waterfall", "Abandoned tent", "Abandoned campfire", "Window to another room", "Strange altar", "Cage",
"Obsidian pillar", "Lavafall", "Burnt remains", "Heated stone", "Charred objects", "Frozen remains", "Frozen object", "Ice pillar", "Giant icicle", "Clear puddle of water",
"Sandstone pillar", "Sand streaming from ceiling", "Sand streaming from wall", "Pile of loose sand", "Eroded rock","Waterfall pillar", "Stream of water from ceiling", "Small waterfall", "Drowned creature"];

const hiddenPois = ["Hidden switch", "Hidden trap door on floor", "Secret entrance on wall", "Trap door on ceiling", "Odd symbols on ceiling", "Strange etching in walls", "Claw marks", "Water dripping from above",
"Several insects", "Crawlspace", "Scorch marks", "Urn", "Scrap wood", "Hidden chest"];

const randomQuote = ["Haha, haha, one!", "I've come to make an announcement, Shadow The Hedgehog's a bitch-ass motherfucker!", "You fool, I have 70 ALTERNATIVE ACCOUNTS!", "WHO posted my NUDES on TWITTER DOT COM?!",
"How do you like that, Obama?!", "Put the piss rock in the nuclear reactor!", "Za Warudo!", "Count how many sand is here, Omega.", "But my IQ IS TOO HIGH!"];

const townSizeList = ["Camp", "Small Village", "Large Village", "Small Town", "Large Town", "Small City", "Large City"];

const notableTraits = ["Canals in place of streets", "Massive statue or monument", "Grand temple", "Large fortress", "Verdant parks and orchards", "River divides town", "Major trade center", 
"Headquarters of a powerful family or  guild", "Population mostly wealthy", "Destitute, rundown", "Awful smell", "Center of trade for one specific good", "Site of many battles", "Site of a mythic or magical event", 
"Important library or archive", "Worship of all gods banned", "Sinister reputation", "Notable library or academy", "Site of important tomb or graveyard", "Built atop ancient ruins"];

const knownBy = ["Delicious cuisine", "Rude people", "Greedy merchants", "Artists and writers", "Great hero/savior", "Flowers", "Hordes of beggars", "Tough warriors", "Dark magic", "Decadence", "Piety", "Gambling",
"Godlessness", "Education", "Wines", "High fashion", "Political intrigue", "Powerful guilds", "Strong drink", "Patriotism"];

const calamities = ["Suspected vampire infestation", "New cult seeks converts", "Important figure died (murder suspected)", "War between rival thieves' guilds", "Plague or famine (sparks riots)", "Corrupt officials",
"Marauding monsters", "Powerful wizard has moved into town", "Economic depression (trade disrupted)", "Flooding", "Undead stirring in cemetaries", "Prophecy of doom", "Brink of war", "Anarchy", "Besieged by enemies",
"Scandal threatens powerful families", "Dungeon discovered", "Religious sects struggle for power", "Recently suffered mass destruction"];

const residences = ["Abandoned squat", "Low-class home", "Middle-class home", "Upper-class home", "Crowded tenement", "Orphanage", "Hidden slavers' den", "Front for a secret cult", 
"Lavish, guarded mansion", "Apartment complex", "Low-class Hotel", "Fancy Hotel"];

const religiouses = ["Temple to a good or neutral deity", "Temple to a false deity", "Home of ascetics", "Abandoned shrine", "Library dedicated to religious study", "Hidden shrine to a fiend or evil deity",
"Cleric's healing house"];

const tavType = ["Quiet, low-key bar", "Raucous dive", "Thieves' guild hangout", "Gathering place for a secret society", "Upper-class dining club", "Gambling den", "Caters to specific race or guild", 
"Members-only club", "Brothel", "Great drinking hall", "Entertainer's Club"];

const tavName1 = ["The Silver ", "The Golden ", "The Staggering ", "The Laughing ", "The Prancing ", "The Gilded ", "The Running ", "The Howling ", "The Slaughtered ", "The Leering ", "The Drunken ", "The Leaping ", 
"The Roaring ", "The Frowning ", "The Lonely ", "The Wandering ", "The Mysterious ", "The Barking ", "The Black ", "The Gleaming ", "The Yapping ", "The Exploding "];

const tavName2 = ["Eel", "Dolphin", "Dwarf", "Pegasus", "Pony", "Rose", "Stag", "Wolf", "Lamb", "Demon", "Goat", "Spirit", "Horde", "Jester", "Mountain", "Eagle", "Satyr", "Dog", "Spider", "Star", "Duende",
"Oat", "Toilet", "Goose"];

const warehouses = ["Empty or abandoned", "Heavily guarded, expensive goods", "Cheap goods", "Bulk goods", "Live animals", "Weapons/armor", "Goods from a distant land", "Secret smuggler's den"];

const shopTypes = ["Pawnshop", "Herbs/Incense", "Fruits/Vegetables", "Dried meats", "Pottery", "Undertaker", "Books", "Moneylender", "Weapons/armor", "Chandler", "Smithy", "Carpenter", "Weaver", "Jeweler", "Baker",
"Mapmaker", "Tailor", "Ropemaker", "Mason", "Scribe", "Antique shop", "Barber shop", "Cafรฉ", "Diner", "Alchemist's Shop", "Wizard's Shop", "Cleaners", "Candy shop", "Corner Store",
"Liquor Store", "Shopping mall"];

const travelBiomes = ["๐พ Grassy plains", "๐น Hilly plains", "๐ท Flower plains", "๐ง River plains", "๐ธ Swamp", "๐ณ Normal forest", "๐ Dark forest", "๐ป Haunted forest", "๐ด Palm forest", 
"๐ง Fey forest", "โฌ Giant forest", "๐ฆ Jungle", "โ Snowy tundra", "๐ Desert", "๐ต Badlands", "๐ฆ Savannah", "๐ Mushroom fields", "โฐ Rocky mountains", "๐ Steep cliffs", "๐ Frozen mountains", "๐ Volcanic land", 
"๐ฅ Canyons", "๐ Beach", "๐ง Corrupt land", "๐ฟ Crimson land", "๐ Glowing mushroom zone", "๐ซ Nevadan desert", "๐ฆ Hallow land", "๐ฎ Crystal crags", "โจ Hot springs", "๐ฆด Bonelands", "โฃ Toxic marsh",
"โ? Dead forest", "๐ Autumnal valley", "๐ Floating lands", "๐ฅ Fire plane riftlands", "๐ Water plane riftlands", "๐ช Air plane riftlands", "๐ Earth plane riftlands"];

const caveBiomes = ["โ Rocky underground", "โฌ Deepslate caverns", "๐ง Ice caves", "โ Sand caves", "๐ฅ Lush caves", "๐ Glowing mushroom caves", "๐ Magma caves", "๐ Crystalline caves", 
"๐ Rotted depths (Corrupt caves)", "๐ฉธ Gore biome (Crimson caves)", "๐ฒ Granite caverns", "๐ณ Marble caverns", "๐ Catacombs", "๐ Moss biome", "๐ Subterranean desert", "๐ฟ Subterranean jungle", 
"๐ฅ Subterranean volcano", "๐ง Deep lake", "โฌ The empty", "โ? (You fall into the underdark)"];

const raceRelations = ["Harmony", "Tension or Rivalry", "Racial majority are conquerors", "Racial minority are rulers", "Racial minority are refugees", "Racial majority oppresses minority",
"Racial minority oppresses majority"];

const rulerStatus = ["Respected, fair, and just", "Feared tyrant", "Weakling manipulated by others", "Illegitimate ruler, simmering civil war", "Ruled or controlled by a powerful monster",
"Mysterious anonymous cabal", "Contested leadership, open fighting", "Cabal seized power openly", "Doltish lout", "On deathbed; claimants compete for power", "Iron-willed, but respected",
"Religious leader"];

const npcTude = ["๐ Friendly", "๐ Neutral", "๐? Hostile", "๐ฆถ Avoidant", "๐ Dangerous", "โฅ Beloved", "๐ Hated", "๐ Cautious", "๐ฌ Helpful", "๐ Curious", "๐คจ Suspicious"];

const npcModifier = ["Superfluous", "Addicted", "Conformist", "Nefarious", "Sensible", "Untrained", "Romantic", "Unreasonable", "Skilled", "Neglectful", "Lively", "Forthright", "Idealistic",
"Unsupportive", "Rational", "Coarse", "Foolish", "Cunning", "Delightful", "Miserly", "Inept", "Banal", "Logical", "Subtle", "Reputable", "Wicked", "Lazy", "Pessimistic", "Solemn", "Habitual",
"Meek", "Helpful", "Unconcerned", "Generous", "Docile", "Cheery", "Pragmatic", "Serene", "Thoughtful", "Hopeless", "Pleasant", "Insensitive", "Titled", "Inexperienced", "Prying", "Oblivious",
"Refined", "Indespensable", "Scholarly", "Conservative", "Uncouth", "Willful", "Indifferent", "Fickle", "Elderly", "Sinful", "Naive", "Privileged", "Glum", "Likable", "Lethargic", "Defiant",
"Obnoxious", "Insightful", "Tactless", "Fanatic", "Plebian", "Childish", "Pious", "Uneducated", "Inconsiderate", "Cultured", "Revolting", "Curious", "Touchy", "Needy", "Dignified", "Pushy",
"Kind", "Corrupt", "Jovial", "Shrewd", "Liberal", "Compliant", "Destitute", "Conniving", "Careful", "Alluring", "Defective", "Optimistic", "Affluent", "Despondent", "Mindless", "Passionate",
"Devoted", "Established", "Unseemly", "Dependable", "Righteous", "Confident"];

const npcNoun = ["Gypsy", "Witch", "Merchant", "Expert", "Commoner", "Judge", "Ranger", "Occultist", "Reverend", "Thug", "Drifter", "Journeyman", "Statesman", "Astrologer", "Duelist",
"Jack-of-all-trades", "Aristocrat", "Preacher", "Artisan", "Rogue", "Missionary", "Outcast", "Mercenary", "Caretaker", "Hermit", "Orator", "Chieftain", "Pioneer", "Burglar", "Vicar", "Officer",
"Explorer", "Warden", "Outlaw", "Adept", "Bum", "Sorcerer", "Laborer", "Master", "Ascendant", "Villager", "Magus", "Conscript", "Worker", "Actor", "Herald", "Highwayman", "Fortune-hunter",
"Governor", "Scrapper", "Monk", "Homemaker", "Recluse", "Steward", "Polymath", "Magician", "Traveler", "Vagrant", "Apprentice", "Politician", "Mediator", "Crook", "Civilian", "Activist",
"Hero", "Champion", "Cleric", "Slave", "Gunman", "Clairvoyant", "Patriarch", "Shopkeeper", "Crone", "Adventurer", "Soldier", "Entertainer", "Craftsman", "Scientist", "Ascetic", "Superior",
"Performer", "Magister", "Serf", "Brute", "Inquisitor", "Lord", "Villain", "Professor", "Servant", "Charmer", "Globetrotter", "Sniper", "Courtier", "Priest", "Tradesman", "Hitman", "Wizard",
"Beggar", "Tradesman", "Warrior"];

const npcPowerLevel = ["Much weaker than party", "Slightly weaker than party", "Comparable to party", "Slightly stronger than party", "Much stronger than party"];

const npcStrength = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const npcWeakness = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const npcFocus = ["Current Scene", "Parents", "Wealth", "Skills", "Campaign", "Allies", "Flaws", "Experience", "Community", "Current Story", "Weapons", "Last Story", "History", "Relics",
"Superiors", "Future Action", "Last Scene", "Antagonist", "Knowledge", "Treasure", "Family", "A Past Scene", "Equipment", "Retainers", "Last Action", "Fame", "Friends", "Contacts",
"Rewards", "A Recent Scene", "A Party Member/Main Character", "Power", "Enemy", ];

const npcCommonRaces = ["Dwarf (Common)", "Dwarf (Hill)", "Dwarf (Mountain)", "Elf (Common)", "Elf (High)", "Elf (Wood)", "Elf (Dark)", "Hobbit (Common)", "Hobbit (Lightfoot)",
"Hobbit (Stout)", "Human (European-like)", "Human (Asian-like)", "Human (African-like)", "Human (Polynesian-like)", "Human (Native-like)", "Human (Indian-like)", "Human (Middle Eastern-like",
"Human (Mixed Race)", "Dragonborn (Blue)", "Dragonborn (Green)", "Dragonborn (Red)", "Gnome (Common)", "Gnome (Forest)", "Gnome (Rock)", "Elfborn", "Orcborn", "Tiefling"];

const npcRareRaces = ["Dragonborn (Black)", "Dragonborn (Brass)", "Dragonborn (Bronze)", "Dragonborn (Copper)", "Dragonborn (Gold)", "Dragonborn (Silver)", "Dragonborn (White)", "Aarakocra",
"Aasimar", "Elf (Astral)", "Gnome (Automaton)", "Bugbear (Civil)", "Catfolk", "Centaur", "Changeling", "Gnome (Deep)", "Dhampir", "Duergar", "Eladrin", "Fairy", "Firbolg",
"Dragonborn (Crystal)", "Genasi", "Giff", "Gith", "Githyanki", "Githzerai", "Goblin (Civil)", "Duende", "Giant (Hill, Civil)", "Goliath", "Hadozee", "Hagborn", "Harengon", "Hexblood", "Hobgoblin",
"Human (Revenant)", "Kalashtar", "Kenku", "Kobold (Civil)", "Leonin", "Lizardfolk", "Loxodon", "Mind Flayer (Civil)", "Minotaur (Civil)", "Orc (Civil)", "Owlfolk", "Owlin", "Plasmoid",
"Rabbitfolk", "Reborn", "Satyr", "Faun", "Elf (Sea)", "Shadar-Kai", "Shifter", "Simic Hybrid", "Tabaxi", "Thri-kreen", "Tiefling (Infernal)", "Tortle", "Triton", "Vampire", "Vedalken",
"Viashino", "Warforged", "Wolfborn", "Yuan-Ti"];

const npcClasses = ["โ Barbarian", "๐ธ Bard", "๐ Cleric", "๐ณ Druid", "โ Fighter", "๐ค Monk", "๐ฉ Paladin", "๐น Ranger", "๐ช Rogue", "๐ฅ Sorcerer", "๐ Warlock", "๐ Wizard", "โ Artificer",
"๐ฉธ Blood Hunter", "๐ฎ Mystic"];

const npcVisuals = ["Distinctive jewelry", "Piercings", "Flamboyant or Outlandish clothes", "Formal, clean clothes", "Ragged, dirty clothes", "Pronounced Scar", "Missing Teeth", "Missing Fingers",
"Unusual Eye Color", "Tattoos", "Birthmark", "Unusual skin color", "BALD BALD", "Braided Beard or Hair", "Unusual Hair Color", "Nervous eye twitch", "Distinctive nose", "Distinctive posture",
"Exceptionally beautiful", "Exceptionally ugly"];

const alignment = ["๐ก Lawful Good", "๐ก Neutral Good", "๐ก Chaotic Good", "โจ Lawful Neutral", "โจ True Neutral", "โจ Chaotic Neutral", "๐ฟ Lawful Evil", "๐ฟ Neutral Evil", "๐ฟ Chaotic Evil"];

const randomItems = ["Abacus", "Vial (Acid)", "Flask (Alchemist's Fire)", "10 Arrows", "10 Blowgun Needles", "10 Crossbow Bolts", "10 Sling Bullets", "Vial (Antitoxin)", "Crystal", "Orb",
"Rod", "Staff", "Wand", "Backpack", "100 Ball Bearings", "Barrel", "Basket", "Bedroll", "Bell", "Blanket", "Block and Tackle", "Book", "Bottle (Empty)", "Bucket", "10 Caltrops", "Candle",
"Ammo Case", "Scroll Case", "10 ft Chain", "Chalk", "Chest", "Climber's Kit", "Clothes (Common)", "Clothes (Costume)", "Clothes (Fine)", "Clothes (Traveler's)", "Component Pouch",
"Crowbar", "Sprig of Mistletoe", "Totem", "Wooden Staff", "Yew Wand", "Fishing Tackle", "Flask (Empty)", "Grappling Hook", "Hammer", "Sledgehammer", "Medkit", "Amulet", "Emblem", "Reliquary",
"Flask (Holy Water)", "Hourglass", "Hunting Trap", "Vial (Ink)", "Ink Pen", "Jug (Empty)", "10 ft Ladder", "Lamp", "Bullseye Lantern", "Hooded Lantern", "Lock", "Magnifying Glass", "Manacles",
"Mess Kit", "Steel Mirror", "Flask (Oil)", "Paper", "Parchment", "Vial (Perfume)", "Pickaxe", "Piton", "Vial (Basic Poison)", "10 ft Pole", "Iron Pot", "Potion (Healing)", "Pouch", "Quiver",
"Portable Ram", "Rations", "Clothes (Robes)", "10 ft Rope", "Sack", "Merchant's Scale", "Sealing Wax", "Shovel", "Signal Whistle", "Signet Ring", "Soap", "Spellbook", "Iron Spike", "Spyglass",
"2-person Tent", "Tinderbox", "Torch", "Vial (Empty)", "Waterskin", "Whetstone", "Potion (Repairing)", "Game Die", "Playing Card Set", "Bagpipes", "Drum", "Dulcimer", "Flute", "Lute",
"Lyre", "Horn", "Pan Flute", "Shawn", "Viol", "Gem (Azurite)", "Gem (Quartz)", "Gem (Agate)", "Gem (Lapis Lazuli)", "Gem (Malachite)", "Gem (Obsidian)", "Gem (Bloodstone)", "Gem (Citrine)",
"Gem (Jasper)", "Gem (Moonstone)", "Gem (Onyx)", "Gem (Zircon)", "Gem (Amethyst)", "Gem (Garnet)", "Gem (Pearl)", "Gem (Spinel)", "Gem (Peridot)", "Gem (Sapphire)", "Gem (Emerald)",
"Gem (Ruby)", "Gem (Diamond)", "Copper Ring", "Silver Ring", "Gold Ring", "Platinum Ring", "Copper Amulet", "Silver Amulet", "Gold Amulet", "Platinum Amulet", "Gold Crown", "Silver Gauntlets",
"Platinum Trophy", "Copper Chains",];

const randomArmor = ["Light Armor (Padded)", "Light Armor (Leather)", "Light Armor (Studded Leather)", "Medium Armor (Hide)", "Medium Armor (Chain Shirt)", "Medium Armor (Scale Mail)",
"Medium Armor (Breastplate)", "Medium Armor (Halfplate)", "Heavy Armor (Ringmail)", "Heavy Armor (Chainmail)", "Heavy Armor (Splint)", "Heavy Armor (Plate)", "Shield"];

const randomWeapons = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling",
"Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War pick",
"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"];

const randomTreasure = ["โญ Potion of Full Recovery", "๐ Spell Scroll (5 uses)", "๐ Driftglobe", "๐ Bag of holding", "โญ Greater Spell Scroll (7 uses)", "โญ Adamantine Shield", 
"๐ Decanter of Endless Water", "๐ Alchemy Jug", "๐ Amulet of Health", "๐ Amulet of Proof against Detection and Location", "๐ Amulet of the Planes", "๐ Animated Shield", 
"๐ Arrow-Catching Shield", "๐ Arrow of Dragon Slaying", "๐ Arrow of Demon Slaying", "๐ Bag of Tricks", "๐ Belt of Dwarvenkind", "๐ Boots of Elvenkind", "๐ Boots of Levitation", 
"๐ Boots of Speed", "โญ Unavoidable Dagger", "๐ Boots of the Winterlands", "๐ Bowl of Commanding Water Elementals", "๐ Bracers of Archery", "๐ Brazier of Commanding Fire Elementals",
"๐ Broom of Flying", "๐ Cap of Water Breathing", "๐ Cape of the Mountebank", "๐ Carpet of Flying", "๐ Censer of Controlling Air Elementals", "๐ Chime of Opening (10 uses)",
"๐ Cloak of Arachnida", "๐ Cloak of Displacement", "๐ Cloak of Elvenkind", "๐ Cloak of Invisibility", "๐ Cloak of Protection", "๐ Cloak of the Bat", "๐ Cloak of the Manta Ray",
"๐ Cube of Force", "๐ Dagger of Venom", "๐ Dancing Sword", "๐ Demon Armor", "๐ Dimensional Shackles", "๐ Defender", "๐ Dragon Slayer Sword", "๐ Dust of Disappearance",
"๐ Dust of Dryness", "๐ Dust of Sneezing and Choking", "๐ Dwarven Plate", "๐ Dwarven Thrower", "๐ Efreeti Chain", "๐ Elemental Gem (Air)", "๐ Elemental Gem (Earth)",
"๐ Elemental Gem (Fire)", "๐ Elemental Gem (Water)", "๐ Elixer of Health", "๐ Elven Chain", "๐ Eversmoking Bottle", "๐ Eyes of Charming", "๐ Eyes of Minute Seeing",
"๐ Eyes of the Eagle", "๐ Flame Tongue", "๐ Folding Boat", "๐ Frost Brand", "๐ Gauntlets of Ogre Power", "๐ Gem of Brightness", "๐ Gem of Seeing", "๐ Giant Slayer",
"๐ Gamoured Studded Leather", "๐ Gloves of Missile Snaring", "๐ Gloves of Swimming and Climbing", "๐ Gloves of Thievery", "๐ Goggles of Night", "๐ Hammer of Thunderbolts",
"๐ Hat of Disguise", "๐ Headband of Intellect", "๐ Helm of Comprehending Languages", "๐ Helm of Telepathy", "๐ Helm of Teleportation", "๐ Heward's Handy Haversack",
"๐ Holy Avenger", "๐ Horn of Blasting", "๐ Silver Horn of Valhalla", "๐ Horseshoes of a Zephyr", "๐ Horseshoes of Speed", "๐ Immovable Rod", "๐ Ioun Stone of Agility",
"๐ Ioun Stone of Awareness", "๐ Ioun Stone of Fortitude", "๐ Ioun Stone of Insight", "๐ Ioun Stone of Intellect", "๐ Ioun Stone of Leadership", "๐ Ioun Stone of Regeneration",
"๐ Ioun Stone of Strength", "๐ Ioun Stone of Sustenance", "๐ Iron Bands of Bilarro", "๐ Javelin of Lightning", "๐ Keoghtom's Ointment", "๐ Lantern of Revealing", "๐ Mace of Disruption",
"๐ Mace of Smiting", "๐ Mace of Terror", "๐ Mantle of Spell Resistance", "๐ Manual of Bodily Health", "๐ Manual of Gainful Exercise", "๐ Manual of Quickness of Action",
"๐ Mariner's Armor", "๐ Medallion of Thoughts", "๐ Necklace of Adaptation", "๐ Necklace of Fireballs", "๐ Necklace of Prayer Beads", "๐ Nine Lives Stealer", "๐ Oathbow",
"๐ Oil of Etherealness", "๐ Oil of Sharpness", "๐ Oil of Slipperiness", "๐ Pearl of Power", "๐ Periapt of Health", "๐ Periapt of Proof against Poison", "๐ Periapt of Wound Closure",
"๐ Philter of Love", "๐ Pipes of Haunting", "๐ Pipes of the Sewers", "๐ Portable Hole", "๐ Potion of Animal Friendship", "๐ Potion of Clairvoyance", "๐ Potion of Climbing",
"๐ Potion of Diminution", "๐ Potion of Fire Breath", "๐ Potion of Flying", "๐ Potion of Gaseous Form", "๐ Potion of Giant Strength", "๐ Potion of Growth", "๐ Potion of Heroism",
"๐ Potion of Invisibility", "๐ Vial of Invulnerability (3 turns)", "๐ Potion of Longevity", "๐ Potion of Mind Reading", "๐ Potion of Resistance", "๐ Potion of Speed", "๐ Potion of Vitality",
"๐ Potion of Water Breathing", "๐ Quiver of Ehlonna", "๐ Ring of Animal Influence", "๐ Ring of Djinni Summoning", "๐ Ring of Evasion", "๐ Ring of Feather Falling",
"๐ Ring of Free Action", "๐ Ring of Invisibility", "๐ Ring of Jumping", "๐ Ring of Mind Shielding", "๐ Ring of Protection", "๐ Ring of Regenration", "๐ Ring of Resistance",
"๐ Ring of Spell Storing", "๐ Ring of Swimming", "๐ Ring of Telekinesis", "๐ Ring of the Ram", "๐ Ring of Warmth", "๐ Ring of Water Walking", "๐ Ring of X-Ray Vision",
"๐ Robe of Eyes", "๐ Robe of Scintillating Colors", "๐ Rod of Absorption", "๐ Rod of Alertness", "๐ rod of the Pact Keeper", "๐ Rod of Rulership", "๐ Rope of Climbing",
"๐ Rope of Entanglement", "๐ Saddle of the Cavalier", "๐ Scimitar of Speed", "๐ Scroll of Protection", "๐ Sending Stones", "๐ Sentinal Shield", "๐ Slippers of Spider Climbing",
"๐ Sovereign Glue", "๐ Spellguard Shield", "๐ Staff of Charming", "๐ Staff of Fire", "๐ Staff of Frost", "๐ Staff of Healing", "๐ Staff of Striking", "๐ Staff of Swarming Insects",
"๐ Staff of the Adder", "๐ Staff of the Python", "๐ Staff of the Woodlands", "๐ Staff of Thunder and Lightning", "๐ Staff of Withering", "๐ Stone of Controlling Earth Elementals",
"๐ Stone of Good Luck", "๐ Sun Blade", "๐ Sword of Life Stealing", "๐ Sword of Sharpness", "๐ Sword of Wounding", "๐ Tentacle Rod", "๐ Tome of Clear Thought",
"๐ Tome of Leadership and Influence", "๐ Tome of Understanding", "๐ Trident of Fish Command", "๐ Universal Solvent", "๐ Vicious Weapon", "๐ Wand of Binding",
"๐ Wand of Enemy Detection", "๐ Wand of Fear", "๐ Wand of Fireballs", "๐ Wand of Lightning Bolts", "๐ Wand of Magic Detection", "๐ Wand of Magic Missiles", "๐ Wand of Paralysis",
"๐ Wand of Polymorph", "๐ Wand of Secrets", "๐ Wand of the War Mage", "๐ Wand of Web", "๐ Wand of Wonder", "๐ Weapon of Warning", "๐ Wind Fan", "๐ Winged Boots", "๐ Wings of Flying"];

const legendaryTreasure = ["โญ Feather of Resurrection (3 uses)", "โญ Master Spell Scroll (Infinite Uses)", "๐ Armor of Invulnerability", "โญ Skeleton Key (Infinite Uses)",
"โญ Superior Crystal Ball", "๐ Cubic Gate", "๐ Daen's Instant Fortress", "๐ Helm of Brilliance", "๐ Ring of Elemental Command", "โญ Wishing Ring", "๐ Robe of Stars",
"๐ Rod of Lordly Might", "๐ Rod of Security", "๐ Sphere of Annihilation", "๐ Talismen of Pure Good", "๐ Talismen of Ultimate Evil", "๐ Well of Many Worlds", 
"โญ Time God's Fragment", "โญ Space God's Fragment", "โญ Mind God's Fragment", "โญ Power God's Fragment", "โญ Soul God's Fragment", "โญ Reality God's Fragment"];

const weatherTemp = ["Normal Temperature for Biome/Season", "Colder than usual", "Warmer than usual"];

const weatherWind = ["No wind", "Slight breeze", "A little windy", "Decently windy", "Very windy", "Dangerously windy"];

const weatherClouds = ["No clouds", "Few clouds", "Partly cloudy", "Very cloudy", "Distant storm clouds", "Slighty rainy/snowy", "Moderately Rainy/Snowy", "Heavy Rain/Snow",
"Torrential Downpour/Blizzard (Automatic Very Windy)", "Light Thunderstorm (Automatic Decently Windy)", "Heavy Thunderstorm (Automatic Very Windy)", "Tornado Warning (Automatic Dangerously Windy)"];

const randomSpells = [];

const normalTraps = ["Spikefall", "Pitfall", "Poison cloud", "Magic missile from wall", "Magic missile from ceiling", "Acid from ceiling", "Room begins to flood", "Walls begin to close in",
"Ceiling begins to lower", "Spikes begin to emerge from walls", "Darts from walls", "Poison darts from walls", "All doors in the room lock up", "All doors lock + reroll",
"Monsters release from hidden doors", "Undead crawl out of the ground", "Statue comes to life as an enemy", "Loud alarm", "All magic in the room becomes disabled"];

const hardTraps = ["The room opens into a long hallway, a wall of spikes begins to chase the party", "The room opens into a lavapit with rickety platforms to jump over",
"All exits lock up and the room floods with water quickly", "An object in the room explodes violently", "Floor opens up and drops the party into a room with a powerful monster",
"Flamethrowers from the walls", "Magic seal slowly steals the life of the party", "An eye opens and petrifies any whose faces it can see", "Doppelgangars of the party appear to block the path"];

(function newFact() {
    var randomFact = Math.floor(Math.random() * randomQuote.length);
    document.getElementById('factDisplay').innerHTML = randomQuote[randomFact];
  })();
// ---------- FUNCTIONS ----------

// Oracle
function oracle() {
    var OracleSays = OracleList[Math.floor(Math.random()*OracleList.length)];
    document.getElementById("main-text").innerText = OracleSays;
};

// Intervention
function intervent() {
    var InterventResults = Interventions[Math.floor(Math.random()*Interventions.length)];
    document.getElementById("main-text").innerText = InterventResults;
}

// Random Word Generator
function rwg() {
    var rwgActFinal = rwgAction[Math.floor(Math.random()*rwgAction.length)];
    var rwgSubFinal = rwgSubject[Math.floor(Math.random()*rwgSubject.length)];
    document.getElementById("main-text").innerText = `RWG Action & Subject: ${rwgActFinal}, ${rwgSubFinal}`;
}

// Expectations
function expect() {
    var expectResults = Expects[Math.floor(Math.random()*Expects.length)];
    document.getElementById("main-text").innerText = expectResults;
}

// Dungeon Biome Setting
function assholes() {
    var value = e.value;
    if (value === "volcanic") {
        dungeonSetting = "volcanic";
        console.log(dungeonSetting);
    } else if (value === "ice") {
        dungeonSetting = "ice";
        console.log(dungeonSetting);
    } else if (value === "desert") {
        dungeonSetting = "desert";
        console.log(dungeonSetting);
    } else if (value === "water") {
        dungeonSetting = "water";
        console.log(dungeonSetting);
    } else if (value === "none") {
        dungeonSetting = "none";
        console.log(dungeonSetting);
    }
}

// Perception Check
function perception() {
    var rngResult = randomNumber(1, 15);

    if (confirm("Perception: " + rngResult + ". Did you pass?")) {
        var whichDiscovery = randomNumber(1, 4);

        if (whichDiscovery === 1) {
            var coinType = randomNumber(1, 3);
            if (coinType === 1) {
                var coinAmount = randomNumber(1, 500);
                document.getElementById("main-text").innerText = "๐ฐ You found " + coinAmount + " copper coins!";
            } else if (coinType === 2) {
                var coinAmount = randomNumber(1, 100);
                document.getElementById("main-text").innerText = "๐ฐ You found " + coinAmount + " silver coins!";
            } else if (coinType === 3) {
                var coinAmount = randomNumber(1, 5);
                document.getElementById("main-text").innerText = "๐ฐ You found " + coinAmount + " gold coins!";
            }
        } else if (whichDiscovery === 2) {
            document.getElementById("main-text").innerText = "๐ฟ You found an item! (Use random item generation)";
        } else if (whichDiscovery === 3) {
            var discoveredHiddens = hiddenPois[Math.floor(Math.random()*hiddenPois.length)];
            document.getElementById("main-text").innerText = "๐ Discovered hidden point of interest: " + discoveredHiddens;
        } else if (whichDiscovery === 4) {
            document.getElementById("main-text").innerText = "โ? You discovered a trap! (Use random trap generator)";
        }

        console.log(rngResult);
        console.log("Success");

    } else {
        window.alert("You did not discover anything.");
    }
}

// Trap Detection
function trap() {
    var trapCheck = randomNumber(1,15);
    if (trapCheck === 15) {
        document.getElementById("main-text").innerText = "Were you hit by a hidden trap? ๐ YES! (Use random trap generator)";
        console.log(trapCheck);
    } else {
        document.getElementById("main-text").innerText = "Were you hit by a hidden trap? Nope.";
        console.log(trapCheck);
    }
}

// Room Generation
function genroom() {
    var gridX = randomNumber(1, 10);
    var gridY = randomNumber(1, 10);
    var monsterChance = randomNumber(1,5);
    var dangerChance = randomNumber(1, 3);
    var treasureChance = randomNumber(1, 10);
    var upstairsChance = randomNumber(1, 8);
    var downstairsChance = randomNumber(1, 8);
    var bossChance = randomNumber(1, 25);
    var poiChance = randomNumber(1, 3);
    var poiCount = randomNumber(1, 3);

    if (gridX >= 3 && gridY >= 3) {
        var doorAccess = true;
    } else {
        var doorAccess = false;
    }
    if (doorAccess === true) {
        var northDoors = randomNumber(0, 2);
        var eastDoors = randomNumber(0, 2);
        var southDoors = randomNumber(0, 2);
        var westDoors = randomNumber(0, 2);
        var doorFinal = `North Doors: ${northDoors}, East Doors: ${eastDoors}, South Doors: ${southDoors}, West Doors: ${westDoors}`
    } else {
        var doorFinal = "No doors"
    }
    if (bossChance === 25) {
        var bossFinal = "โ? This is a boss room!";
    } else {
        var bossFinal = "(No boss).";
    }
    if (monsterChance === 5) {
        var monsterFinal = "๐น Yes.";
    } else {
        var monsterFinal = "๐ No."
    }
    if (dangerChance === 3) {
        var genDanRes = genericDangers[Math.floor(Math.random()*genericDangers.length)];
        var genDanFinal = " " + genDanRes;
        if (dungeonSetting === "volcanic") {
            var volDanRes = volcanicDangers[Math.floor(Math.random()*volcanicDangers.length)];
            var volDanFinal = " " + volDanRes;
        } else {
            var volDanFinal = "None";
        }
        if (dungeonSetting === "ice") {
            var iceDanRes = iceDangers[Math.floor(Math.random()*iceDangers.length)];
            var iceDanFinal = " " + iceDanRes;
        } else {
            var iceDanFinal = "None";
        }
        if (dungeonSetting === "desert") {
            var desDanRes = desertDangers[Math.floor(Math.random()*desertDangers.length)];
            var desDanFinal = " " + desDanRes;
        } else {
            var desDanFinal = "None";
        }
        if (dungeonSetting === "water") {
            var watDanRes = waterDangers[Math.floor(Math.random()*waterDangers.length)];
            var watDanFinal = " " + watDanRes;
        } else {
            var watDanFinal = "None";
        }
    } else {
        genDanFinal = "None";
        volDanFinal = "None";
        iceDanFinal = "None";
        desDanFinal = "None";
        watDanFinal = "None";
    }
    if (poiChance === 3) {
        if (poiCount === 1) {
            var poi1Set = pois[Math.floor(Math.random()*pois.length)];
            var poiFinal = ` ${poi1Set}`;
        } else if (poiCount === 2) {
            var poi1Set = pois[Math.floor(Math.random()*pois.length)];
            var poi2Set = pois[Math.floor(Math.random()*pois.length)];
            var poiFinal = ` ${poi1Set}, ${poi2Set}`;
        } else if (poiCount === 3) {
            var poi1Set = pois[Math.floor(Math.random()*pois.length)];
            var poi2Set = pois[Math.floor(Math.random()*pois.length)];
            var poi3Set = pois[Math.floor(Math.random()*pois.length)];
            var poiFinal = ` ${poi1Set}, ${poi2Set}, ${poi3Set}`;
        }
    } else {
        var poiFinal = "None"
    }
    if (upstairsChance === 8) {
        var upstFinal = "โ There is a staircase leading up.";
    } else {
        var upstFinal = "No stairs leading up.";
    }
    if (downstairsChance === 8) {
        var dnstFinal = "โ There is a staircase leading down.";
    } else {
        var dnstFinal = "No stairs leading down.";
    }
    if (treasureChance === 10) {
        var treasureFinal = "๐ฅ There is visible treasure in the room!"
    } else {
        var treasureFinal = "No visible treasure."
    }

    // The print
    document.getElementById("gen-text").innerText = `๐น Boss Result: ${bossFinal}
    ๐น Room Width: ${gridX}
    ๐น Room Height: ${gridY}
    ๐น Doors: ${doorFinal}
    ๐น Points of Interest: ${poiFinal}
    ๐น Monsters: ${monsterFinal}
    ๐น Generic Dangers: ${genDanFinal}
    ๐น Volcanic Dangers: ${volDanFinal}
    ๐น Ice Dangers: ${iceDanFinal}
    ๐น Desert Dangers: ${desDanFinal}
    ๐น Water Dangers: ${watDanFinal}
    ๐น Upstairs: ${upstFinal}
    ๐น Downstairs: ${dnstFinal}
    ๐น Treasure: ${treasureFinal}`;
}

// Town Generation
function gentown() {
    var calamityChance = randomNumber(1, 5);
    var townSizeFinal = townSizeList[Math.floor(Math.random()*townSizeList.length)];
    var raceRelFinal = raceRelations[Math.floor(Math.random()*raceRelations.length)];
    var rulerFinal = rulerStatus[Math.floor(Math.random()*rulerStatus.length)];
    var notableFinal = notableTraits[Math.floor(Math.random()*notableTraits.length)];
    var knownFor = knownBy[Math.floor(Math.random()*knownBy.length)];

    if (calamityChance === 5) {
        var calamityFinal = calamities[Math.floor(Math.random()*calamities.length)];
    } else {
        var calamityFinal = "None"
    }

    // The print
    document.getElementById("gen-text").innerText = `๐น Town Size: ${townSizeFinal}
    ๐น Race Relations: ${raceRelFinal}
    ๐น Ruler's Status: ${rulerFinal}
    ๐น Notable Traits: ${notableFinal}
    ๐น Known for: ${knownFor}
    ๐น Current Calamity: ${calamityFinal}`;
}

// Settlement Generation
function genstructure() {
    var structureType = randomNumber(1, 5)
    if (structureType === 1) {
        var residenceFinal = residences[Math.floor(Math.random()*residences.length)];
        document.getElementById("gen-text").innerText = `๐น Settlement Type: ๐? Residence
        ๐น Building Type: ${residenceFinal}`;
    } else if (structureType === 2) {
        var religiousFinal = religiouses[Math.floor(Math.random()*religiouses.length)];
        document.getElementById("gen-text").innerText = `๐น Settlement Type: ๐ Religious Settlement
        ๐น Building Type: ${religiousFinal}`;
    } else if (structureType === 3) {
        var tavFinal = tavType[Math.floor(Math.random()*tavType.length)];
        var tavNFinal1 = tavName1[Math.floor(Math.random()*tavName1.length)];
        var tavNFinal2 = tavName2[Math.floor(Math.random()*tavName2.length)];
        document.getElementById("gen-text").innerText = `๐น Settlement Type: ๐บ Tavern
        ๐น Tavern Name: ${tavNFinal1} ${tavNFinal2}
        ๐น Building Type: ${tavFinal}`;
    } else if (structureType === 4) {
        var wareFinal = warehouses[Math.floor(Math.random()*warehouses.length)];
        document.getElementById("gen-text").innerText = `๐น Settlement Type: ๐ฆ Warehouse
        ๐น Building Type: ${wareFinal}`;
    } else if (structureType === 5) {
        var shopFinal = shopTypes[Math.floor(Math.random()*shopTypes.length)];
        document.getElementById("gen-text").innerText = `๐น Settlement Type: ๐ Shop/Service
        ๐น Building Type: ${shopFinal}`;
    } else {
        document.getElementById("gen-text").innerText = `๐ฅ Error`;
    }
}

// NPC Generation
function npct() {
    var tudeResults = npcTude[Math.floor(Math.random()*npcTude.length)];
    var modifierResults = npcModifier[Math.floor(Math.random()*npcModifier.length)];
    var nounResults = npcNoun[Math.floor(Math.random()*npcNoun.length)];
    var motive1Results = rwgAction[Math.floor(Math.random()*rwgAction.length)];
    var motive2Results = rwgSubject[Math.floor(Math.random()*rwgSubject.length)];
    var powerResults = npcPowerLevel[Math.floor(Math.random()*npcPowerLevel.length)];
    var strengthResults = npcStrength[Math.floor(Math.random()*npcStrength.length)];
    var weaknessResults = npcWeakness[Math.floor(Math.random()*npcWeakness.length)];
    var focusResults = npcFocus[Math.floor(Math.random()*npcFocus.length)];
    var classResults = npcClasses[Math.floor(Math.random()*npcClasses.length)];
    var alignResults = alignment[Math.floor(Math.random()*alignment.length)];
    var visualResults = npcVisuals[Math.floor(Math.random()*npcVisuals.length)];

    var raceRNG = randomNumber(1, 3)
    if (raceRNG === 1 || raceRNG === 2) {
        var raceResult = npcCommonRaces[Math.floor(Math.random()*npcCommonRaces.length)];
    } else {
        var raceResult = npcRareRaces[Math.floor(Math.random()*npcRareRaces.length)];
    }

    // The print
    document.getElementById("gen-text").innerText = `Title: ${modifierResults} ${nounResults}
    Feature: ${visualResults}
    Motives: ${motive1Results}, ${motive2Results}
    Race: ${raceResult}
    Class: ${classResults}
    Power Level: ${powerResults}
    Strong Point: ${strengthResults}
    Weak Point: ${weaknessResults}
    Topic Focus: ${focusResults}
    Attitude: ${tudeResults}
    Alignment: ${alignResults}`;
}

// Random Overworld Biome
function travBiome() {
    var travelResults = travelBiomes[Math.floor(Math.random()*travelBiomes.length)];
    document.getElementById("main-text").innerText = travelResults;
}

// Random Cave Biome
function cavBiome() {
    var caveResults = caveBiomes[Math.floor(Math.random()*caveBiomes.length)];
    document.getElementById("main-text").innerText = caveResults;
}

// Weather thing
function weather() {
    var tempResults = weatherTemp[Math.floor(Math.random()*weatherTemp.length)];
    var windResults = weatherWind[Math.floor(Math.random()*weatherWind.length)];
    var cloudResults = weatherClouds[Math.floor(Math.random()*weatherClouds.length)];

    document.getElementById("gen-text").innerText = `Temperature: ${tempResults}
    Wind: ${windResults}
    Clouds: ${cloudResults}`;
}

// Random item
function genItem() {
    var itemResult = randomItems[Math.floor(Math.random()*randomItems.length)];
    document.getElementById("main-text").innerText = itemResult;
}

// Random weapon
function genWeapon() {
    var weaponResult = randomWeapons[Math.floor(Math.random()*randomWeapons.length)];
    document.getElementById("main-text").innerText = weaponResult;
}

// Random armor
function genArmor() {
    var armorResult = randomArmor[Math.floor(Math.random()*randomArmor.length)];
    document.getElementById("main-text").innerText = armorResult;
}

// Random treasure
function genTreasure() {
    var treasureResult = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];
    document.getElementById("main-text").innerText = treasureResult;
}

// Easy Traps
function easyTrap() {
    var etrapResult = normalTraps[Math.floor(Math.random()*normalTraps.length)];
    document.getElementById("main-text").innerText = etrapResult;
}

// Hard Traps
function deadlyTrap() {
    var htrapResult = hardTraps[Math.floor(Math.random()*hardTraps.length)];
    document.getElementById("main-text").innerText = htrapResult;
}

// Normal Boss Loot
function easyBoss() {
    var weaponChance = randomNumber(1, 5);
    var armorChance = randomNumber(1, 5);
    var bossGold = randomNumber(5, 500);
    var bossItem1 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem2 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem3 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossTreasure = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];

    if (weaponChance === 5) {
        bossWeapon = randomWeapons[Math.floor(Math.random()*randomWeapons.length)];
    } else {
        bossWeapon = "None"
    }

    if (armorChance === 5) {
        bossArmor = randomArmor[Math.floor(Math.random()*randomArmor.length)];
    } else {
        bossArmor = "None"
    }

    document.getElementById("gen-text").innerText = `Gold: ${bossGold}
    Items: ${bossItem1}, ${bossItem2}, ${bossItem3}
    Armor: ${bossArmor}
    Weapon: ${bossWeapon}
    Treasure: ${bossTreasure}`;
}

// Hard Boss Loot
function hardBoss() {
    var weaponChance = randomNumber(1, 2);
    var armorChance = randomNumber(1, 2);
    var bossGold = randomNumber(5, 1500);
    var bossItem1 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem2 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem3 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem4 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossTreasure = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];
    var bossTreasure2 = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];

    if (weaponChance === 2) {
        bossWeapon = randomWeapons[Math.floor(Math.random()*randomWeapons.length)];
    } else {
        bossWeapon = "None"
    }

    if (armorChance === 2) {
        bossArmor = randomArmor[Math.floor(Math.random()*randomArmor.length)];
    } else {
        bossArmor = "None"
    }

    document.getElementById("gen-text").innerText = `Gold: ${bossGold}
    Items: ${bossItem1}, ${bossItem2}, ${bossItem3}, ${bossItem4}
    Armor: ${bossArmor}
    Weapon: ${bossWeapon}
    Treasure: ${bossTreasure}, ${bossTreasure2}`;
}

// Legendary Boss Loot
function mythBoss() {
    var weaponChance = randomNumber(1, 2);
    var armorChance = randomNumber(1, 2);
    var bossGold = randomNumber(5, 5000);
    var bossItem1 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem2 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem3 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossItem4 = randomItems[Math.floor(Math.random()*randomItems.length)];
    var bossTreasure = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];
    var bossTreasure2 = randomTreasure[Math.floor(Math.random()*randomTreasure.length)];
    var bossLegend = legendaryTreasure[Math.floor(Math.random()*legendaryTreasure.length)];

    if (weaponChance === 2) {
        bossWeapon = randomWeapons[Math.floor(Math.random()*randomWeapons.length)];
    } else {
        bossWeapon = "None"
    }

    if (armorChance === 2) {
        bossArmor = randomArmor[Math.floor(Math.random()*randomArmor.length)];
    } else {
        bossArmor = "None"
    }

    document.getElementById("gen-text").innerText = `Gold: ${bossGold}
    Items: ${bossItem1}, ${bossItem2}, ${bossItem3}, ${bossItem4}
    Armor: ${bossArmor}
    Weapon: ${bossWeapon}
    Treasure: ${bossTreasure}, ${bossTreasure2}
    Legendary Prize: ${bossLegend}`;
}

// Test Buttons