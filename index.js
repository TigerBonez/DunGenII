var e = document.getElementById("dunbio");

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lists
const OracleList = ["🚫 Absolute no\nWhat you asked will NOT happen any time soon.", "❗ No, and intervention\nNo, and something intervenes with the moment.",
"❌ No", "🎈 No, but...\nNo, though something isn't usual, ask a followup question.", "🎈 Yes, but...\nYes, though something isn't usual, ask a followup quesion",
"✔ Yes", "❗ Yes, and intervention\nYes, and something intervenes with the moment.", "✅ Absolute yes\nWhat you asked will most certainly happen to extreme effect."];

const Interventions = ["➕ New Entity", "🔼 Entity Positive", "🔽 Entity Negative", "✨ Party Positive", "🧨 Party Negative", "📜 Advance Plotpoint or Quest", "📜 Obstacle in Plotpoint or Quest", 
"🃏 Wildcard (Use RWG)", "🎎 Remote Event"];

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

const Expects = ["👓 Increase Simple Element", "🕶 Decrease simple Element", "➕ Add Simple Element", "➖ Remove Simple Element", "👓 Increase Major Element", "🕶 Decrease Major Element", 
"➕ Add Major Element", "➖ Remove Major Element", "🃏 Positive Wildcard (Use RWG)", "🃏 Negative Wildcard (Use RWG)"];

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
"Mapmaker", "Tailor", "Ropemaker", "Mason", "Scribe", "Antique shop", "Barber shop", "Café", "Diner", "Alchemist's Shop", "Wizard's Shop", "Cleaners", "Candy shop", "Corner Store",
"Liquor Store", "Shopping mall"];

const travelBiomes = ["🌾 Grassy plains", "💹 Hilly plains", "🌷 Flower plains", "💧 River plains", "🐸 Swamp", "🌳 Normal forest", "🌙 Dark forest", "👻 Haunted forest", "🌴 Palm forest", 
"🧚 Fey forest", "⬆ Giant forest", "🦇 Jungle", "❄ Snowy tundra", "🏜 Desert", "🌵 Badlands", "🦒 Savannah", "🍄 Mushroom fields", "⛰ Rocky mountains", "🌄 Steep cliffs", "🏔 Frozen mountains", "🌋 Volcanic land", 
"🥌 Canyons", "🏖 Beach", "🧟 Corrupt land", "👿 Crimson land", "🌟 Glowing mushroom zone", "🔫 Nevadan desert", "🦄 Hallow land", "🔮 Crystal crags", "♨ Hot springs", "🦴 Bonelands", "☣ Toxic marsh",
"☠ Dead forest", "🍂 Autumnal valley", "🏝 Floating lands", "🔥 Fire plane riftlands", "🌊 Water plane riftlands", "🌪 Air plane riftlands", "💎 Earth plane riftlands"];

const caveBiomes = ["⛏ Rocky underground", "⬇ Deepslate caverns", "🧊 Ice caves", "⌛ Sand caves", "🥀 Lush caves", "🍄 Glowing mushroom caves", "🌋 Magma caves", "💎 Crystalline caves", 
"🍖 Rotted depths (Corrupt caves)", "🩸 Gore biome (Crimson caves)", "🔲 Granite caverns", "🔳 Marble caverns", "💀 Catacombs", "🍇 Moss biome", "🏜 Subterranean desert", "🌿 Subterranean jungle", 
"🔥 Subterranean volcano", "💧 Deep lake", "⬛ The empty", "⚠ (You fall into the underdark)"];

const raceRelations = ["Harmony", "Tension or Rivalry", "Racial majority are conquerors", "Racial minority are rulers", "Racial minority are refugees", "Racial majority oppresses minority",
"Racial minority oppresses majority"];

const rulerStatus = ["Respected, fair, and just", "Feared tyrant", "Weakling manipulated by others", "Illegitimate ruler, simmering civil war", "Ruled or controlled by a powerful monster",
"Mysterious anonymous cabal", "Contested leadership, open fighting", "Cabal seized power openly", "Doltish lout", "On deathbed; claimants compete for power", "Iron-willed, but respected",
"Religious leader"];

const npcTude = ["🙂 Friendly", "😐 Neutral", "😠 Hostile", "🦶 Avoidant", "😈 Dangerous", "♥ Beloved", "👊 Hated", "👀 Cautious", "💬 Helpful", "🔎 Curious", "🤨 Suspicious"];

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

const npcClasses = ["⚒ Barbarian", "🎸 Bard", "💊 Cleric", "🌳 Druid", "⚔ Fighter", "🤛 Monk", "🌩 Paladin", "🏹 Ranger", "🔪 Rogue", "🔥 Sorcerer", "👁 Warlock", "📜 Wizard", "⚙ Artificer",
"🩸 Blood Hunter", "🔮 Mystic", "🚗 Artificer: Greaser", "🚗 Barbarian: Athlete", "🚗 Rogue: Gambler", "🚗 Rogue: Skater", "🚗 Wizard: Cybermancy"];

const npcVisuals = ["Distinctive jewelry", "Piercings", "Flamboyant or Outlandish clothes", "Formal, clean clothes", "Ragged, dirty clothes", "Pronounced Scar", "Missing Teeth", "Missing Fingers",
"Unusual Eye Color", "Tattoos", "Birthmark", "Unusual skin color", "BALD BALD", "Braided Beard or Hair", "Unusual Hair Color", "Nervous eye twitch", "Distinctive nose", "Distinctive posture",
"Exceptionally beautiful", "Exceptionally ugly"];

const npcPersonalities = ["Flirtatious", "Curious", "Nervous", "Vulgar", "Gentle", "Snobbish", "Generous", "Pessimistic", "Secretive", "Barbaric", "Friendly", "Intellectual", "Humorless", "Gloomy",
"Careless", "Honest", "Proud", "Optimistic", "Cruel", "Cheerful"];

const alignment = ["🛡 Lawful Good", "🛡 Neutral Good", "🛡 Chaotic Good", "✨ Lawful Neutral", "✨ True Neutral", "✨ Chaotic Neutral", "👿 Lawful Evil", "👿 Neutral Evil", "👿 Chaotic Evil"];

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
"Platinum Trophy", "Copper Chains", "🚗 Screwdriver", "🚗 Glowstick", "🚗 Lighter", "🚗 Flashlight", "🚗 Binoculars", "🚗 Soldering Gun", "🚗 5 ft Copper Wire", "🚗 Wire Cutters",
"🚗 5 cotton swabs", "🚗 Glass beaker", "🚗 Small Camera (Broken)", "🚗 Small Camera (Unused)", "🚗 Airhorn", "🚗 Battery", "🚗 Empty Briefcase", "🚗 Fake ID", "🚗 Fishing Tackle",
"🚗 Handcuffs", "🚗 Metal Detector", "🚗 Pepper spray", "🚗 Signal Flare", "🚗 Stopwatch", "🚗 USB Flash Drive", "🚗 Wristwatch", "🚗 10 Zip-ties"];

const randomArmor = ["Light Armor (Padded)", "Light Armor (Leather)", "Light Armor (Studded Leather)", "Medium Armor (Hide)", "Medium Armor (Chain Shirt)", "Medium Armor (Scale Mail)",
"Medium Armor (Breastplate)", "Medium Armor (Halfplate)", "Heavy Armor (Ringmail)", "Heavy Armor (Chainmail)", "Heavy Armor (Splint)", "Heavy Armor (Plate)", "Shield",
"🚗 Light Armor (Leather Jacket)", "🚗 Light Armor (Undercover Vest)", "🚗 Medium Armor (Tactical Vest)", "🚗 Heavy Armor (Bulletproof Vest)", "🚗 Riot Shield"];

const randomWeapons = ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Light Crossbow", "Dart", "Shortbow", "Sling",
"Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "War pick",
"Warhammer", "Whip", "Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net", "🚗 Baseball Bat", "🚗 Baton", "🚗 Brass Knuckles", "🚗 Hunting Knife", "🚗 Nunchaku",
"🚗 Pocket Knife", "🚗 Pistol", "🚗 Revolver", "🚗 Hunting Rifle", "🚗 Taser", "🚗 Chainsaw", "🚗 Katana", "🚗 Machine Gun (Light)", "🚗 Sniper Rifle",
"🚗 Shotgun", "🚗 10 Bullets"];

const randomTreasure = ["⭐ Potion of Full Recovery", "🌌 Spell Scroll (5 uses)", "🌌 Driftglobe", "🌌 Bag of holding", "⭐ Greater Spell Scroll (7 uses)", "⭐ Adamantine Shield", 
"🌌 Decanter of Endless Water", "🌌 Alchemy Jug", "🌌 Amulet of Health", "🌌 Amulet of Proof against Detection and Location", "🌌 Amulet of the Planes", "🌌 Animated Shield", 
"🌌 Arrow-Catching Shield", "🌌 Arrow of Dragon Slaying", "🌌 Arrow of Demon Slaying", "🌌 Bag of Tricks", "🌌 Belt of Dwarvenkind", "🌌 Boots of Elvenkind", "🌌 Boots of Levitation", 
"🌌 Boots of Speed", "⭐ Unavoidable Dagger", "🌌 Boots of the Winterlands", "🌌 Bowl of Commanding Water Elementals", "🌌 Bracers of Archery", "🌌 Brazier of Commanding Fire Elementals",
"🌌 Broom of Flying", "🌌 Cap of Water Breathing", "🌌 Cape of the Mountebank", "🌌 Carpet of Flying", "🌌 Censer of Controlling Air Elementals", "🌌 Chime of Opening (10 uses)",
"🌌 Cloak of Arachnida", "🌌 Cloak of Displacement", "🌌 Cloak of Elvenkind", "🌌 Cloak of Invisibility", "🌌 Cloak of Protection", "🌌 Cloak of the Bat", "🌌 Cloak of the Manta Ray",
"🌌 Cube of Force", "🌌 Dagger of Venom", "🌌 Dancing Sword", "🌌 Demon Armor", "🌌 Dimensional Shackles", "🌌 Defender", "🌌 Dragon Slayer Sword", "🌌 Dust of Disappearance",
"🌌 Dust of Dryness", "🌌 Dust of Sneezing and Choking", "🌌 Dwarven Plate", "🌌 Dwarven Thrower", "🌌 Efreeti Chain", "🌌 Elemental Gem (Air)", "🌌 Elemental Gem (Earth)",
"🌌 Elemental Gem (Fire)", "🌌 Elemental Gem (Water)", "🌌 Elixer of Health", "🌌 Elven Chain", "🌌 Eversmoking Bottle", "🌌 Eyes of Charming", "🌌 Eyes of Minute Seeing",
"🌌 Eyes of the Eagle", "🌌 Flame Tongue", "🌌 Folding Boat", "🌌 Frost Brand", "🌌 Gauntlets of Ogre Power", "🌌 Gem of Brightness", "🌌 Gem of Seeing", "🌌 Giant Slayer",
"🌌 Gamoured Studded Leather", "🌌 Gloves of Missile Snaring", "🌌 Gloves of Swimming and Climbing", "🌌 Gloves of Thievery", "🌌 Goggles of Night", "🌌 Hammer of Thunderbolts",
"🌌 Hat of Disguise", "🌌 Headband of Intellect", "🌌 Helm of Comprehending Languages", "🌌 Helm of Telepathy", "🌌 Helm of Teleportation", "🌌 Heward's Handy Haversack",
"🌌 Holy Avenger", "🌌 Horn of Blasting", "🌌 Silver Horn of Valhalla", "🌌 Horseshoes of a Zephyr", "🌌 Horseshoes of Speed", "🌌 Immovable Rod", "🌌 Ioun Stone of Agility",
"🌌 Ioun Stone of Awareness", "🌌 Ioun Stone of Fortitude", "🌌 Ioun Stone of Insight", "🌌 Ioun Stone of Intellect", "🌌 Ioun Stone of Leadership", "🌌 Ioun Stone of Regeneration",
"🌌 Ioun Stone of Strength", "🌌 Ioun Stone of Sustenance", "🌌 Iron Bands of Bilarro", "🌌 Javelin of Lightning", "🌌 Keoghtom's Ointment", "🌌 Lantern of Revealing", "🌌 Mace of Disruption",
"🌌 Mace of Smiting", "🌌 Mace of Terror", "🌌 Mantle of Spell Resistance", "🌌 Manual of Bodily Health", "🌌 Manual of Gainful Exercise", "🌌 Manual of Quickness of Action",
"🌌 Mariner's Armor", "🌌 Medallion of Thoughts", "🌌 Necklace of Adaptation", "🌌 Necklace of Fireballs", "🌌 Necklace of Prayer Beads", "🌌 Nine Lives Stealer", "🌌 Oathbow",
"🌌 Oil of Etherealness", "🌌 Oil of Sharpness", "🌌 Oil of Slipperiness", "🌌 Pearl of Power", "🌌 Periapt of Health", "🌌 Periapt of Proof against Poison", "🌌 Periapt of Wound Closure",
"🌌 Philter of Love", "🌌 Pipes of Haunting", "🌌 Pipes of the Sewers", "🌌 Portable Hole", "🌌 Potion of Animal Friendship", "🌌 Potion of Clairvoyance", "🌌 Potion of Climbing",
"🌌 Potion of Diminution", "🌌 Potion of Fire Breath", "🌌 Potion of Flying", "🌌 Potion of Gaseous Form", "🌌 Potion of Giant Strength", "🌌 Potion of Growth", "🌌 Potion of Heroism",
"🌌 Potion of Invisibility", "🌌 Vial of Invulnerability (3 turns)", "🌌 Potion of Longevity", "🌌 Potion of Mind Reading", "🌌 Potion of Resistance", "🌌 Potion of Speed", "🌌 Potion of Vitality",
"🌌 Potion of Water Breathing", "🌌 Quiver of Ehlonna", "🌌 Ring of Animal Influence", "🌌 Ring of Djinni Summoning", "🌌 Ring of Evasion", "🌌 Ring of Feather Falling",
"🌌 Ring of Free Action", "🌌 Ring of Invisibility", "🌌 Ring of Jumping", "🌌 Ring of Mind Shielding", "🌌 Ring of Protection", "🌌 Ring of Regenration", "🌌 Ring of Resistance",
"🌌 Ring of Spell Storing", "🌌 Ring of Swimming", "🌌 Ring of Telekinesis", "🌌 Ring of the Ram", "🌌 Ring of Warmth", "🌌 Ring of Water Walking", "🌌 Ring of X-Ray Vision",
"🌌 Robe of Eyes", "🌌 Robe of Scintillating Colors", "🌌 Rod of Absorption", "🌌 Rod of Alertness", "🌌 rod of the Pact Keeper", "🌌 Rod of Rulership", "🌌 Rope of Climbing",
"🌌 Rope of Entanglement", "🌌 Saddle of the Cavalier", "🌌 Scimitar of Speed", "🌌 Scroll of Protection", "🌌 Sending Stones", "🌌 Sentinal Shield", "🌌 Slippers of Spider Climbing",
"🌌 Sovereign Glue", "🌌 Spellguard Shield", "🌌 Staff of Charming", "🌌 Staff of Fire", "🌌 Staff of Frost", "🌌 Staff of Healing", "🌌 Staff of Striking", "🌌 Staff of Swarming Insects",
"🌌 Staff of the Adder", "🌌 Staff of the Python", "🌌 Staff of the Woodlands", "🌌 Staff of Thunder and Lightning", "🌌 Staff of Withering", "🌌 Stone of Controlling Earth Elementals",
"🌌 Stone of Good Luck", "🌌 Sun Blade", "🌌 Sword of Life Stealing", "🌌 Sword of Sharpness", "🌌 Sword of Wounding", "🌌 Tentacle Rod", "🌌 Tome of Clear Thought",
"🌌 Tome of Leadership and Influence", "🌌 Tome of Understanding", "🌌 Trident of Fish Command", "🌌 Universal Solvent", "🌌 Vicious Weapon", "🌌 Wand of Binding",
"🌌 Wand of Enemy Detection", "🌌 Wand of Fear", "🌌 Wand of Fireballs", "🌌 Wand of Lightning Bolts", "🌌 Wand of Magic Detection", "🌌 Wand of Magic Missiles", "🌌 Wand of Paralysis",
"🌌 Wand of Polymorph", "🌌 Wand of Secrets", "🌌 Wand of the War Mage", "🌌 Wand of Web", "🌌 Wand of Wonder", "🌌 Weapon of Warning", "🌌 Wind Fan", "🌌 Winged Boots", "🌌 Wings of Flying",
"🚗 Computer (Laptop)", "🚗 Computer (Smartphone)"];

const legendaryTreasure = ["🌌 Armor of Invulnerability", "🌌 Cubic Gate", "🌌 Daen's Instant Fortress", "🌌 Helm of Brilliance", "🌌 Ring of Elemental Command","🌌 Robe of Stars",
"🌌 Rod of Lordly Might", "🌌 Rod of Security", "🌌 Sphere of Annihilation", "🌌 Talismen of Pure Good", "🌌 Talismen of Ultimate Evil", "🌌 Well of Many Worlds"];

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

const ancientFeatures = ["Evidence of lost knowledge", "Inscrutable relics", "Ancient artistry or craft", "Preserved corpses or fossils", "Visions of this place in another time"];
const ancientDangers = ["Ancient trap (use trap generator)", "Hazardous architecture or terrain", "Blocked or broken path", "Object defended by guardian", "Ancient monster lost to time",
"Warnings of a long-buried danger", "Artifact of terrible meaning or power", "Disturbing evidence of ancient wrongs"];
const corruptedFeatures = ["Mystic focus or conduit", "Strange environmental disturbances", "Mystic runes or markings", "Blight or decay", "Evidence of a foul ritual"];
const corruptedDangers = ["Creature spawned from dark power", "Creature that controls dark power", "Corruption-inducing trap", "Revelations of a terrible truth", "Mystic trap or trigger",
"Mystic barrier or ward", "Illusions lead you astray (Perception check)", "Dark ritual in progress", "Lingering effects of a dark ritual"];
const fortifiedFeatures = ["Camp or quarters", "Guarded location", "Storage or repository", "Work or training area", "Command center"];
const fortifiedDangers = ["Patrolled area", "Guarded area", "Ambush! (Only if you've been made aware of before)", "Pets or tamed monsters", "Trap", "Alarm Trigger", "Nefarious plans revealed"];
const hallowedFeatures = ["Altar", "Offerings or atonements", "Religious relic or idol", "Consecrated ground", "Dwellings or gathering place"];
const hallowedDangers = ["Divine manifestations", "Embodiment of a god or myth", "Protective ward or barrier", "Prophecies of a dark fate"];
const hauntedFeatures = ["Tomb or burial site", "Spilled blood", "Dried blood or remains", "Unnatural mist or darkness", "Messages from beyond the grave", "Apparitions of a person or event"];
const hauntedDangers = ["Area haunted by entity", "Unsettling sounds or foreboding signs", "Entity attacks without warning", "Frightening visions", "The environment is used against you",
"Trickery leads you astray (Insight Check)", "Sudden, shocking manifestation"];
const infestedFeatures = ["Inhabited nest", "Abandoned nest", "Ravaged terrain or architecture", "Remains or carrion", "Hoarded food"];
const infestedDangers = ["Creatures swarm and attack", "Toxic environment", "Creature stalks you (Perception check)", "Creature blocks path", "Trap or snare", "Remains of a victim"];
const ravagedFeatures = ["Path of destruction", "Abandoned or ruined dwelling", "Untouched or preserved area", "Traces of what was lost", "Ill-fated victims"];
const ravagedDangers = ["Precarious", "Imminent collapse or destruction", "Path undermined", "Blocked or broken path", "Vestiges of a destructive force", "Unexpected environmental threat",
"Signs of a horrible fate"];
const wildFeatures = ["Creature's lair", "Territorial markings", "Impressive flora or fauna", "Hunting ground or watering hole", "Remains or carrion"];
const wildDangers = ["Hunting creature", "Sudden attack from creature", "Creature with unexpected abilities", "Creature protecting something", "Hazardous terrain", "Weather or environmental threat",
"Benign aspect becomes a threat", "Remains of a victim", "Ill-fated victim"];
const barrowFeatures = ["Burial chambers", "Maze of narrow passages", "Shrine", "Vault", "Offerings to the dead", "Statues", "Unburied remains", "Mass grave", "Exhumed corpses", "Transition into new domain"];
const barrowDangers = ["Guarded area", "Trap", "Death makes it's presence known", "Crumbling architecture", "Grave goods with hidden dangers"];
const cavernFeatures = ["Twisting passages", "Cramped caves", "Vast chamber", "Subterranean waterway", "Cave pool", "Natural bridge", "Towering stone formation", "Natural illumination",
"Dark pit", "Something unusual", "Mining area"];
const cavernDangers = ["Creature lair", "Cave-in", "Flooding", "Perilous climb or descent", "Fissure or sinkhole"];
const frozenCavernFeatures = ["Mazy of Icy Tunnels", "Glistening cave", "Vast chamber", "Frigid waterway", "Icy Pools", "Magnificent ice formations", "Forzen waterfall", "Deep crevasses",
"Discovery locked in the ice", "Something unusual"];
const frozenCavernDangers = ["Creature lair", "Fracturing ice", "Crumbling chasm", "Bitter chill", "Disorienting reflections"];
const pathFeatures = ["Winding mountain path", "Snowfield or glacial rocks", "River gorge", "Crashing waterfall", "Highland lake", "Forgotten cairn", "Bridge", "Overlook", "Camp or outpost",
"Something unusual"];
const pathDangers = ["Creature lair", "Perilous climb or descent", "Avalanche or rockslide", "Weather starts/stops"];
const ruinFeatures = ["Crumbling corridors and chambers", "Collapsed architecture", "Rubble-choked hall", "Courtyard", "Archive or library", "Broken statues or fading murals", "Preserved vault",
"Altar of forgotten gods", "Mausoleum", "Something unusual"];
const ruinDangers = ["Ancient mechanism or trap", "Collapsing wall or ceiling", "Blocked or broken passage", "Unstable floor above a new danger", "Ancient secrets best left buried"];
const seaCaveFeatures = ["Watery tunnels", "Eroded chamber", "Flooded chamber", "Vast chamber", "Dry passages", "Freshwater inlet", "Rocky island", "Watery debris", "Shipwreck or boat",
"Something unusual"];
const seaCaveDangers = ["Something lurks below", "Flooding", "Rushing current", "Claustrophobic squeeze"];
const marshFeatures = ["Narrow path through dank bog", "Stagnant waterway", "Flooded thicket", "Island of dry land", "Submerged discovery", "Preserved corpses", "Overgrown structure",
"Tall reeds", "Camp or outpost", "Something unusual"];
const marshDangers = ["Deep water blocks the path", "Toxic environment", "Concealing or disorienting mist (Constitution check)", "Hidden quagmire"];
const strongholdFeatures = ["Connecting passageways", "Barracks or commonquarters", "Large hall", "Workshop or library", "Command center", "Storage", "Kitchen", "Courtyard", "Treasury"];
const strongholdDangers = ["Blocked or guarded path", "Caught in the open", "Chokepoint", "Trap", "Alarm trigger"];
const darkWoodsFeatures = ["Dense thicket", "Overgrown path", "Waterway", "Clearing", "Elder Tree", "Brambles", "Overgrown structure", "Rocky outcrop", "Camp or outpost", "Something unexpected"];
const darkWoodsDangers = ["Creature lair", "Trap or snare", "Path leads you astray", "Entangling plants"];
const underDungeonFeatures = ["Carved passages", "Hall or Chamber", "Stairs into the depths", "Grand doorway or entrance", "Tomb or catacombs", "Rough-hewn cave", "Foundry or workshop",
"Shrine", "Imposing architecture or artistry", "Something unusual"];
const underDungeonDangers = ["Ancient mechanism or trap", "Crumbling architecture", "Blocked or broken passage", "Artifact with a hidden danger", "Hidden monster"];
const magmaFeatures = ["Exposed ore", "Cooled chamber", "Obsidian pillars", "Charred remains", "Lavafall", "Something unusual"];
const magmaDangers = ["Lavaflow", "Rigid terrain", "Unstable ground", "Extremely hot area", "Path blocked by hot stones"];
const sunkenFeatures = ["Flooded halls", "Dry passages", "Ancient architecture", "Fully submerged room", "Old relics", "Something unusual"];
const sunkenDangers = ["Creature lair", "Blocked or broken passage", "Brittle architecture", "Something lurks beneath"];
const skyboundFeatures = ["Floating objects", "Network of bridges", "Lightened gravity", "Round room", "Otherworldly writings"];
const skyboundDangers = ["Endless pitfall", "Cloudy room (Perception check)", "Area of reversed gravity", "Moving platforms", "3 dimensional trap"];
const otherworldlyFeatures = ["Large alien plantlife", "Bridges made of strange energy", "Small floating islands or platforms", "Otherworldly writings", "Twisted and confusing architecture",
"A portal to a random nearby location (DM's discression)", "Area of layered ledges or cliffs", "Geyser of energy that launches things upward", "Area of otherworldly energy and presence",
"Altered gravity"];
const otherworldlyDangers = ["Area of crushing gravity", "Area twists and turns as if it were alive", "Invisible walls", "Rogue portal transports you elsewhere nearby (DM's discression)",
"Unstable terrain", "Otherworldly creature's lair"];
const technologicalFeatures = ["Holographic images floating around the area", "Screens display strange text", "Loud machines", "Security cameras", "Conveyor belts line the floor",
"A network of catwalks", "Glass walls peering into another room", "Server room"];
const technologicalDangers = ["Laser trap", "Grinding machine at the bottom of a pit", "Alarm", "Electric poles line the room", "Loose wires", "Spilled chemicals"];

var domainType = 10;

(function newFact() {
    var randomFact = Math.floor(Math.random() * randomQuote.length);
    document.getElementById('factDisplay').innerHTML = randomQuote[randomFact];
  })();
// ---------- FUNCTIONS ----------

// Copy window text to clipboard
function copytext() {
    var range = document.createRange();
    range.selectNode(document.getElementById("gen-text"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
};

// Oracle
function oracle() {
    var OracleSays = OracleList[Math.floor(Math.random()*OracleList.length)];
    document.getElementById("main-text").innerText = `The Oracle says: ${OracleSays}`;
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

// Dungeon Biome Setting - DEPRECATED
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
                document.getElementById("main-text").innerText = "💰 You found " + coinAmount + " copper coins!";
            } else if (coinType === 2) {
                var coinAmount = randomNumber(1, 100);
                document.getElementById("main-text").innerText = "💰 You found " + coinAmount + " silver coins!";
            } else if (coinType === 3) {
                var coinAmount = randomNumber(1, 5);
                document.getElementById("main-text").innerText = "💰 You found " + coinAmount + " gold coins!";
            }
        } else if (whichDiscovery === 2) {
            document.getElementById("main-text").innerText = "🗿 You found an item! (Use random item generation)";
        } else if (whichDiscovery === 3) {
            var discoveredHiddens = hiddenPois[Math.floor(Math.random()*hiddenPois.length)];
            document.getElementById("main-text").innerText = "👁 Discovered hidden point of interest: " + discoveredHiddens;
        } else if (whichDiscovery === 4) {
            document.getElementById("main-text").innerText = "☠ You discovered a trap! (Use random trap generator)";
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
        document.getElementById("main-text").innerText = "Were you hit by a hidden trap? 💀 YES! (Use random trap generator)";
        console.log(trapCheck);
    } else {
        document.getElementById("main-text").innerText = "Were you hit by a hidden trap? Nope.";
        console.log(trapCheck);
    }
}

// Journey Length
function journeygen() {
    var journeyDays = randomNumber(1, 3);
    var destinationArrive = randomNumber(0, 3);
    var travelResults = travelBiomes[Math.floor(Math.random()*travelBiomes.length)];
    var tempResults = weatherTemp[Math.floor(Math.random()*weatherTemp.length)];
    var windResults = weatherWind[Math.floor(Math.random()*weatherWind.length)];
    var cloudResults = weatherClouds[Math.floor(Math.random()*weatherClouds.length)];

    if (destinationArrive === 1) {
        var destinationSuccess = "You'll reach your destination at this checkpoint.";
    } else {
        var destinationSuccess = "Take another journey to the next checkpoint.";
    };

    // Print
    document.getElementById("gen-text").innerText = `🐫 Days until next checkpoint: ${journeyDays}
    🗾 Destination status: ${destinationSuccess}
    🌳 Traveled Biome: ${travelResults}
    
    Journey Weather:
    🌞 Temperature: ${tempResults}
    💨 Wind: ${windResults}
    ⛅ Clouds: ${cloudResults}`
}

// A shit ton of domains holy fuck
function domainAncient() {
    globalThis.domainType = 1;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainCorrupted() {
    globalThis.domainType = 2;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainFortified() {
    globalThis.domainType = 3;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainHallowed() {
    globalThis.domainType = 4;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainHaunted() {
    globalThis.domainType = 5;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainInfested() {
    globalThis.domainType = 6;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainRavaged() {
    globalThis.domainType = 7;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainWild() {
    globalThis.domainType = 8;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainBarrow() {
    globalThis.domainType = 9;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainCavern() {
    globalThis.domainType = 10;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainFrozenCavern() {
    globalThis.domainType = 11;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainPass() {
    globalThis.domainType = 14;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainRuin() {
    globalThis.domainType = 15;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainSeaCave() {
    globalThis.domainType = 16;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainMarsh() {
    globalThis.domainType = 17;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainStronghold() {
    globalThis.domainType = 18;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainDarkWoods() {
    globalThis.domainType = 19;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainUnderDungeon() {
    globalThis.domainType = 20;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainMagma() {
    globalThis.domainType = 21;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainSunken() {
    globalThis.domainType = 22;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainSkybound() {
    globalThis.domainType = 23;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainOtherworldly() {
    globalThis.domainType = 24;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}
function domainTechnological() {
    globalThis.domainType = 25;
    document.getElementById("main-text").innerText = `Domain set to ID ${domainType}`
    console.log(domainType);
}

// Room Generation
function genroom() {
    var gridX = randomNumber(1, 15);
    var gridY = randomNumber(1, 15);
    var monsterChance = randomNumber(1,5);
    var dangerChance = randomNumber(1, 8);
    var treasureChance = randomNumber(1, 10);
    var upstairsChance = randomNumber(1, 8);
    var downstairsChance = randomNumber(1, 8);
    var bossChance = randomNumber(1, 25);
    var poiChance = randomNumber(1, 3);
    var poiCount = randomNumber(1, 3);
    var dungeonSetting = null;
    // Shit ton of domain things randomized. F = feature, D = danger.
    var ancientResF = ancientFeatures[Math.floor(Math.random()*ancientFeatures.length)];
    var ancientResD = ancientDangers[Math.floor(Math.random()*ancientDangers.length)];
    var corruptedResF = corruptedFeatures[Math.floor(Math.random()*corruptedFeatures.length)];
    var corruptedResD = corruptedDangers[Math.floor(Math.random()*corruptedDangers.length)];
    var fortifiedResF = fortifiedFeatures[Math.floor(Math.random()*fortifiedFeatures.length)];
    var fortifiedResD = fortifiedDangers[Math.floor(Math.random()*fortifiedDangers.length)];
    var hallowedResF = hallowedFeatures[Math.floor(Math.random()*hallowedFeatures.length)];
    var hallowedResD = hallowedDangers[Math.floor(Math.random()*hallowedDangers.length)];
    var hauntedResF = hauntedFeatures[Math.floor(Math.random()*hauntedFeatures.length)];
    var hauntedResD = hauntedDangers[Math.floor(Math.random()*hauntedDangers.length)];
    var infestedResF = infestedFeatures[Math.floor(Math.random()*infestedFeatures.length)];
    var infestedResD = infestedDangers[Math.floor(Math.random()*infestedDangers.length)];
    var ravagedResF = ravagedFeatures[Math.floor(Math.random()*ravagedFeatures.length)];
    var ravagedResD = ravagedDangers[Math.floor(Math.random()*ravagedDangers.length)];
    var wildResF = wildFeatures[Math.floor(Math.random()*wildFeatures.length)];
    var wildResD = wildDangers[Math.floor(Math.random()*wildDangers.length)];
    var barrowResF = barrowFeatures[Math.floor(Math.random()*barrowFeatures.length)];
    var barrowResD = barrowDangers[Math.floor(Math.random()*barrowDangers.length)];
    var cavernResF = cavernFeatures[Math.floor(Math.random()*cavernFeatures.length)];
    var cavernResD = cavernDangers[Math.floor(Math.random()*cavernDangers.length)];
    var frozenResF = frozenCavernFeatures[Math.floor(Math.random()*frozenCavernFeatures.length)];
    var frozenResD = frozenCavernDangers[Math.floor(Math.random()*frozenCavernDangers.length)];
    var pathResF = pathFeatures[Math.floor(Math.random()*pathFeatures.length)];
    var pathResD = pathDangers[Math.floor(Math.random()*pathDangers.length)];
    var ruinResF = ruinFeatures[Math.floor(Math.random()*ruinFeatures.length)];
    var ruinResD = ruinDangers[Math.floor(Math.random()*ruinDangers.length)];
    var seaResF = seaCaveFeatures[Math.floor(Math.random()*seaCaveFeatures.length)];
    var seaResD = seaCaveDangers[Math.floor(Math.random()*seaCaveDangers.length)];
    var marshResF = marshFeatures[Math.floor(Math.random()*marshFeatures.length)];
    var marshResD = marshDangers[Math.floor(Math.random()*marshDangers.length)];
    var strongholdResF = strongholdFeatures[Math.floor(Math.random()*strongholdFeatures.length)];
    var strongholdResD = strongholdDangers[Math.floor(Math.random()*strongholdDangers.length)];
    var darkResF = darkWoodsFeatures[Math.floor(Math.random()*darkWoodsFeatures.length)];
    var darkResD = darkWoodsDangers[Math.floor(Math.random()*darkWoodsDangers.length)];
    var underResF = underDungeonFeatures[Math.floor(Math.random()*underDungeonFeatures.length)];
    var underResD = underDungeonDangers[Math.floor(Math.random()*underDungeonDangers.length)];
    var magmaResF = magmaFeatures[Math.floor(Math.random()*magmaFeatures.length)];
    var magmaResD = magmaDangers[Math.floor(Math.random()*magmaDangers.length)];
    var sunkenResF = sunkenFeatures[Math.floor(Math.random()*sunkenFeatures.length)];
    var sunkenResD = sunkenDangers[Math.floor(Math.random()*sunkenDangers.length)];
    var skyboundResF = skyboundFeatures[Math.floor(Math.random()*skyboundFeatures.length)];
    var skyboundResD = skyboundDangers[Math.floor(Math.random()*skyboundDangers.length)];
    var otherResF = otherworldlyFeatures[Math.floor(Math.random()*otherworldlyFeatures.length)];
    var otherResD = otherworldlyDangers[Math.floor(Math.random()*otherworldlyDangers.length)];
    var techResF = technologicalFeatures[Math.floor(Math.random()*technologicalFeatures.length)];
    var techResD = technologicalDangers[Math.floor(Math.random()*technologicalDangers.length)];

    if (dangerChance === 1) {
        if (domainType === 1) {
            var dangerFinal = ancientResD;
        }
        if (domainType === 2) {
            var dangerFinal = corruptedResD;
        }
        if (domainType === 3) {
            var dangerFinal = fortifiedResD;
        }
        if (domainType === 4) {
            var dangerFinal = hallowedResD;
        }
        if (domainType === 5) {
            var dangerFinal = hauntedResD;
        }
        if (domainType === 6) {
            var dangerFinal = infestedResD;
        }
        if (domainType === 7) {
            var dangerFinal = ravagedResD;
        }
        if (domainType === 8) {
            var dangerFinal = wildResD;
        }
        if (domainType === 9) {
            var dangerFinal = barrowResD;
        }
        if (domainType === 10) {
            var dangerFinal = cavernResD;
        }
        if (domainType === 11) {
            var dangerFinal = frozenResD;
        }
        if (domainType === 14) {
            var dangerFinal = pathResD;
        }
        if (domainType === 15) {
            var dangerFinal = ruinResD;
        }
        if (domainType === 16) {
            var dangerFinal = seaResD;
        }
        if (domainType === 17) {
            var dangerFinal = marshResD;
        }
        if (domainType === 18) {
            var dangerFinal = strongholdResD;
        }
        if (domainType === 19) {
            var dangerFinal = darkResD;
        }
        if (domainType === 20) {
            var dangerFinal = underResD;
        }
        if (domainType === 21) {
            var dangerFinal = magmaResD;
        }
        if (domainType === 22) {
            var dangerFinal = sunkenResD;
        }
        if (domainType === 23) {
            var dangerFinal = skyboundResD;
        }
        if (domainType === 24) {
            var dangerFinal = otherResD;
        }
        if (domainType === 25) {
            var dangerFinal = techResD;
        }
    } else {
        dangerFinal = "None.";
    };

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
        var bossFinal = "⚠ This is a boss room!";
    } else {
        var bossFinal = "(No boss).";
    }

    if (monsterChance === 5) {
        var monsterFinal = "👹 Yes.";
    } else {
        var monsterFinal = "🙊 No."
    }

    if (upstairsChance === 8) {
        var upstFinal = "↗ There is a staircase leading up.";
    } else {
        var upstFinal = "No stairs leading up.";
    }
    if (downstairsChance === 8) {
        var dnstFinal = "↘ There is a staircase leading down.";
    } else {
        var dnstFinal = "No stairs leading down.";
    }
    if (treasureChance === 10) {
        var treasureFinal = "🥇 There is visible treasure in the room!"
    } else {
        var treasureFinal = "No visible treasure."
    }

    // The print - OLD VER
    // document.getElementById("gen-text").innerText = `👹 Boss Result: ${bossFinal}
    // 📏 Room Width: ${gridX}
    // 📏 Room Height: ${gridY}
    // 🚪 Doors: ${doorFinal}
    // 💬 Points of Interest: ${poiFinal}
    // 👿 Monsters: ${monsterFinal}
    // 🔥 Generic Dangers: ${genDanFinal}
    // 📈 Upstairs: ${upstFinal}
    // 📈 Downstairs: ${dnstFinal}
    // 🥇 Treasure: ${treasureFinal}`;

    if (domainType === 1) {
        document.getElementById("gen-text").innerText = `Domain: Ancient
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${ancientResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 2) {
        document.getElementById("gen-text").innerText = `Domain: Corrupted
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${corruptedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 3) {
        document.getElementById("gen-text").innerText = `Domain: Fortified
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${fortifiedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 4) {
        document.getElementById("gen-text").innerText = `Domain: Hallowed
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${hallowedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 5) {
        document.getElementById("gen-text").innerText = `Domain: Haunted
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${hauntedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 6) {
        document.getElementById("gen-text").innerText = `Domain: Infested
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${infestedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 7) {
        document.getElementById("gen-text").innerText = `Domain: Ravaged
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${ravagedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 8) {
        document.getElementById("gen-text").innerText = `Domain: Wild
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${wildResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 9) {
        document.getElementById("gen-text").innerText = `Domain: Barrow
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${barrowResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 10) {
        document.getElementById("gen-text").innerText = `Domain: Cavern
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${cavernResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 11) {
        document.getElementById("gen-text").innerText = `Domain: Frozen Cave
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${frozenResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 14) {
        document.getElementById("gen-text").innerText = `Domain: Mountain Path
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${pathResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 15) {
        document.getElementById("gen-text").innerText = `Domain: Ruin
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${ruinResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 16) {
        document.getElementById("gen-text").innerText = `Domain: Sea Cave
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${seaResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 17) {
        document.getElementById("gen-text").innerText = `Domain: Marsh
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${marshResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 18) {
        document.getElementById("gen-text").innerText = `Domain: Stronghold
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${strongholdResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 19) {
        document.getElementById("gen-text").innerText = `Domain: Dark Woods
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${darkResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 20) {
        document.getElementById("gen-text").innerText = `Domain: Under Dungeon
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${underResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 21) {
        document.getElementById("gen-text").innerText = `Domain: Magma
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${magmaResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 22) {
        document.getElementById("gen-text").innerText = `Domain: Sunken City
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${corruptedResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 23) {
        document.getElementById("gen-text").innerText = `Domain: Skybound
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${skyboundResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 24) {
        document.getElementById("gen-text").innerText = `Domain: Otherworldly
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${otherResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    } else if (domainType === 25) {
        document.getElementById("gen-text").innerText = `Domain: Technological
        👹 Boss Result: ${bossFinal}
        📏 Room Width: ${gridX}
        📏 Room Height: ${gridY}
        🚪 Doors: ${doorFinal}
        🗿 Domain Feature: ${techResF}
        🦂 Domain Dangers: ${dangerFinal}
        👿 Monsters: ${monsterFinal}
        📈 Upstairs: ${upstFinal}
        📈 Downstairs: ${dnstFinal}
        🥇 Treasure: ${treasureFinal}`;
    }
    
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
    document.getElementById("gen-text").innerText = `📐 Town Size: ${townSizeFinal}
    👀 Race Relations: ${raceRelFinal}
    👑 Ruler's Status: ${rulerFinal}
    🌊 Notable Traits: ${notableFinal}
    🍺 Known for: ${knownFor}
    🌋 Current Calamity: ${calamityFinal}`;
}

// Settlement Generation
function genstructure() {
    var structureType = randomNumber(1, 5)
    if (structureType === 1) {
        var residenceFinal = residences[Math.floor(Math.random()*residences.length)];
        document.getElementById("gen-text").innerText = `🌆 Settlement Type: 🏠 Residence
        🔹 Building Type: ${residenceFinal}`;
    } else if (structureType === 2) {
        var religiousFinal = religiouses[Math.floor(Math.random()*religiouses.length)];
        document.getElementById("gen-text").innerText = `🌆 Settlement Type: 🛐 Religious Settlement
        🔹 Building Type: ${religiousFinal}`;
    } else if (structureType === 3) {
        var tavFinal = tavType[Math.floor(Math.random()*tavType.length)];
        var tavNFinal1 = tavName1[Math.floor(Math.random()*tavName1.length)];
        var tavNFinal2 = tavName2[Math.floor(Math.random()*tavName2.length)];
        document.getElementById("gen-text").innerText = `🌆 Settlement Type: 🍺 Tavern
        💬 Tavern Name: ${tavNFinal1} ${tavNFinal2}
        🔹 Building Type: ${tavFinal}`;
    } else if (structureType === 4) {
        var wareFinal = warehouses[Math.floor(Math.random()*warehouses.length)];
        document.getElementById("gen-text").innerText = `🌆 Settlement Type: 📦 Warehouse
        🔹 Building Type: ${wareFinal}`;
    } else if (structureType === 5) {
        var shopFinal = shopTypes[Math.floor(Math.random()*shopTypes.length)];
        document.getElementById("gen-text").innerText = `🌆 Settlement Type: 🛒 Shop/Service
        🔹 Building Type: ${shopFinal}`;
    } else {
        document.getElementById("gen-text").innerText = `🟥 Error`;
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
    document.getElementById("gen-text").innerText = `🚥 Personality Title: ${modifierResults} ${nounResults}
    🔎 Feature: ${visualResults}
    📜 Motives: ${motive1Results}, ${motive2Results}
    😺 Race: ${raceResult}
    🤺 Class: ${classResults}
    🔥 Power Level: ${powerResults}
    💪 Strong Point: ${strengthResults}
    🥶 Weak Point: ${weaknessResults}
    ❓ Topic Focus: ${focusResults}
    🤨 Attitude: ${tudeResults}
    ♎ Alignment: ${alignResults}`;
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

    document.getElementById("gen-text").innerText = `🌞 Temperature: ${tempResults}
    💨 Wind: ${windResults}
    ⛅ Clouds: ${cloudResults}`;
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

    document.getElementById("gen-text").innerText = `👛 Gold: ${bossGold}
    🏆 Items: ${bossItem1}, ${bossItem2}, ${bossItem3}
    🤖 Armor: ${bossArmor}
    🤺 Weapon: ${bossWeapon}
    🎁 Treasure: ${bossTreasure}`;
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

    document.getElementById("gen-text").innerText = `👛 Gold: ${bossGold}
    🏆 Items: ${bossItem1}, ${bossItem2}, ${bossItem3}, ${bossItem4}
    🤖 Armor: ${bossArmor}
    🤺 Weapon: ${bossWeapon}
    🎁 Treasure: ${bossTreasure}, ${bossTreasure2}`;
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

    document.getElementById("gen-text").innerText = `👛 Gold: ${bossGold}
    🏆 Items: ${bossItem1}, ${bossItem2}, ${bossItem3}, ${bossItem4}
    🤖 Armor: ${bossArmor}
    🤺 Weapon: ${bossWeapon}
    🎁 Treasure: ${bossTreasure}, ${bossTreasure2}
    🌟 Legendary Prize: ${bossLegend}`;
}

// Test Buttons