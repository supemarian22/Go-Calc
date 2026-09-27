const pokemon = [
	{ id: '#025', name: 'Pikachu', type: 'Elektryczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', className: 'yellow-card' },
	{ id: '#006', name: 'Charizard', type: 'Ognisty · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', className: 'dark-card' },
	{ id: '#001', name: 'Bulbasaur', type: 'Trawiasty · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', className: 'blue-card' },
	{ id: '#004', name: 'Charmander', type: 'Ognisty', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', className: 'red-card' },
	{ id: '#007', name: 'Squirtle', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', className: 'blue-card' },
	{ id: '#039', name: 'Jigglypuff', type: 'Normalny · Baśniowy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png', className: 'pink-card' },
	{ id: '#041', name: 'Zubat', type: 'Trujący · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png', className: 'dark-card' },
	{ id: '#052', name: 'Meowth', type: 'Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png', className: 'yellow-card' },
	{ id: '#094', name: 'Gengar', type: 'Duch · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png', className: 'dark-card' },
	{ id: '#133', name: 'Eevee', type: 'Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png', className: 'brown-card' },
	{ id: '#143', name: 'Snorlax', type: 'Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', className: 'blue-card' },
	{ id: '#147', name: 'Dratini', type: 'Smoczy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png', className: 'blue-card' },
	{ id: '#148', name: 'Dragonair', type: 'Smoczy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png', className: 'blue-card' },
	{ id: '#129', name: 'Magikarp', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png', className: 'red-card' },
	{ id: '#066', name: 'Machop', type: 'Walka', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png', className: 'red-card' },
	{ id: '#068', name: 'Machamp', type: 'Walka', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png', className: 'red-card' },
	{ id: '#093', name: 'Haunter', type: 'Duch · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png', className: 'dark-card' },
	{ id: '#131', name: 'Lapras', type: 'Wodny · Lodowy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png', className: 'blue-card' },
	{ id: '#130', name: 'Gyarados', type: 'Wodny · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png', className: 'blue-card' },
	{ id: '#150', name: 'Mewtwo', type: 'Psychiczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', className: 'pink-card' },
	{ id: '#149', name: 'Dragonite', type: 'Smoczy · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png', className: 'yellow-card' },
	{ id: '#448', name: 'Lucario', type: 'Walka · Stal', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png', className: 'blue-card' },
	{ id: '#002', name: 'Ivysaur', type: 'Trawiasty · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', className: 'blue-card' },
	{ id: '#003', name: 'Venusaur', type: 'Trawiasty · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', className: 'blue-card' },
	{ id: '#005', name: 'Charmeleon', type: 'Ognisty', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', className: 'red-card' },
	{ id: '#008', name: 'Wartortle', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', className: 'blue-card' },
	{ id: '#009', name: 'Blastoise', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', className: 'blue-card' },
	{ id: '#010', name: 'Caterpie', type: 'Robaczy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', className: 'green-card' },
	{ id: '#012', name: 'Butterfree', type: 'Robaczy · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', className: 'yellow-card' },
	{ id: '#015', name: 'Beedrill', type: 'Robaczy · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png', className: 'yellow-card' },
	{ id: '#019', name: 'Rattata', type: 'Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png', className: 'brown-card' },
	{ id: '#020', name: 'Raticate', type: 'Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png', className: 'brown-card' },
	{ id: '#023', name: 'Ekans', type: 'Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png', className: 'green-card' },
	{ id: '#026', name: 'Raichu', type: 'Elektryczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png', className: 'yellow-card' },
	{ id: '#134', name: 'Vaporeon', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png', className: 'blue-card' },
	{ id: '#135', name: 'Jolteon', type: 'Elektryczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png', className: 'yellow-card' },
	{ id: '#136', name: 'Flareon', type: 'Ognisty', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png', className: 'red-card' },
	{ id: '#142', name: 'Aerodactyl', type: 'Skała · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png', className: 'brown-card' },
	{ id: '#144', name: 'Articuno', type: 'Lodowy · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', className: 'blue-card' },
	{ id: '#145', name: 'Zapdos', type: 'Elektryczny · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png', className: 'yellow-card' },
	{ id: '#146', name: 'Moltres', type: 'Ognisty · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png', className: 'red-card' },
	{ id: '#248', name: 'Tyranitar', type: 'Kamienny · Mroczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png', className: 'dark-card' },
	{ id: '#376', name: 'Metagross', type: 'Stalowy · Psychiczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png', className: 'blue-card' },
	{ id: '#445', name: 'Garchomp', type: 'Smoczy · Ziemny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png', className: 'red-card' },
	{ id: '#026-A', name: 'Raichu (Alola)', type: 'Elektryczny · Psychiczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png', className: 'yellow-card' },
	{ id: '#020-A', name: 'Raticate (Alola)', type: 'Mroczny · Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png', className: 'dark-card' },
	{ id: '#028-A', name: 'Sandslash (Alola)', type: 'Lodowy · Stalowy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png', className: 'blue-card' },
	{ id: '#038-A', name: 'Ninetales (Alola)', type: 'Lodowy · Baśniowy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png', className: 'blue-card' },
	{ id: '#076-A', name: 'Golem (Alola)', type: 'Skalny · Elektryczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png', className: 'brown-card' },
	{ id: '#089-A', name: 'Muk (Alola)', type: 'Trujący · Mroczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png', className: 'green-card' },
	{ id: '#105-A', name: 'Marowak (Alola)', type: 'Ognisty · Duch', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png', className: 'red-card' },
	{ id: '#110-G', name: 'Weezing (Galar)', type: 'Trujący · Baśniowy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png', className: 'green-card' },
	{ id: '#264-G', name: 'Linoone (Galar)', type: 'Mroczny · Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png', className: 'dark-card' },
	{ id: '#862', name: 'Obstagoon', type: 'Mroczny · Normalny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png', className: 'dark-card' },
	{ id: '#006-MX', name: 'Charizard Mega X', type: 'Ognisty · Smoczy', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', className: 'red-card' },
	{ id: '#006-MY', name: 'Charizard Mega Y', type: 'Ognisty · Latający', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', className: 'red-card' },
	{ id: '#003-M', name: 'Venusaur Mega', type: 'Trawiasty · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', className: 'green-card' },
	{ id: '#009-M', name: 'Blastoise Mega', type: 'Wodny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', className: 'blue-card' },
	{ id: '#094-M', name: 'Gengar Mega', type: 'Duch · Trujący', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png', className: 'dark-card' },
	{ id: '#130-M', name: 'Gyarados Mega', type: 'Wodny · Mroczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png', className: 'blue-card' },
	{ id: '#248-M', name: 'Tyranitar Mega', type: 'Skalny · Mroczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png', className: 'dark-card' },
	{ id: '#376-M', name: 'Metagross Mega', type: 'Stalowy · Psychiczny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png', className: 'blue-card' },
	{ id: '#445-M', name: 'Garchomp Mega', type: 'Smoczy · Ziemny', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png', className: 'red-card' }
];

const cpData = {
	Pikachu: { maxCp: 1060, attack: 112, defense: 96, stamina: 111 },
	Charizard: { maxCp: 3266, attack: 223, defense: 173, stamina: 186 },
	Bulbasaur: { maxCp: 1260, attack: 118, defense: 111, stamina: 128 },
	Charmander: { maxCp: 1108, attack: 116, defense: 93, stamina: 118 },
	Squirtle: { maxCp: 1069, attack: 94, defense: 121, stamina: 127 },
	Jigglypuff: { maxCp: 724, attack: 80, defense: 41, stamina: 251 },
	Zubat: { maxCp: 667, attack: 83, defense: 73, stamina: 120 },
	Meowth: { maxCp: 935, attack: 92, defense: 78, stamina: 120 },
	Gengar: { maxCp: 3254, attack: 261, defense: 149, stamina: 155 },
	Eevee: { maxCp: 2259, attack: 104, defense: 114, stamina: 146 },
	Snorlax: { maxCp: 3647, attack: 190, defense: 169, stamina: 330 },
	Dratini: { maxCp: 1004, attack: 119, defense: 91, stamina: 121 },
	Dragonair: { attack: 163, defense: 135, stamina: 156 },
	Magikarp: { maxCp: 310, attack: 29, defense: 85, stamina: 85 },
	Machop: { maxCp: 2328, attack: 137, defense: 82, stamina: 172 },
	Machamp: { attack: 234, defense: 159, stamina: 207 },
	Haunter: { maxCp: 2078, attack: 223, defense: 107, stamina: 128 },
	Lapras: { maxCp: 2985, attack: 165, defense: 174, stamina: 277 },
	Gyarados: { maxCp: 3834, attack: 237, defense: 186, stamina: 216 },
	Mewtwo: { maxCp: 4724, attack: 300, defense: 182, stamina: 214 },
	Dragonite: { maxCp: 4287, attack: 263, defense: 198, stamina: 209 },
	Lucario: { maxCp: 3056, attack: 236, defense: 144, stamina: 172 },
	Ivysaur: { maxCp: 1921, attack: 151, defense: 122, stamina: 155 },
	Venusaur: { maxCp: 2720, attack: 198, defense: 189, stamina: 190 },
	Charmeleon: { maxCp: 1868, attack: 158, defense: 126, stamina: 151 },
	Wartortle: { maxCp: 1682, attack: 126, defense: 155, stamina: 153 },
	Blastoise: { maxCp: 2466, attack: 171, defense: 207, stamina: 188 },
	Caterpie: { maxCp: 437, attack: 55, defense: 55, stamina: 128 },
	Butterfree: { maxCp: 2065, attack: 167, defense: 137, stamina: 155 },
	Beedrill: { maxCp: 2087, attack: 169, defense: 130, stamina: 163 },
	Rattata: { maxCp: 700, attack: 103, defense: 70, stamina: 102 },
	Raticate: { maxCp: 1705, attack: 161, defense: 139, stamina: 146 },
	Ekans: { maxCp: 1108, attack: 110, defense: 97, stamina: 111 },
	Raichu: { maxCp: 2467, attack: 193, defense: 151, stamina: 155 },
	Vaporeon: { maxCp: 3521, attack: 205, defense: 161, stamina: 277 },
	Jolteon: { maxCp: 2888, attack: 232, defense: 182, stamina: 163 },
	Flareon: { maxCp: 3424, attack: 246, defense: 179, stamina: 163 },
	Aerodactyl: { maxCp: 3146, attack: 221, defense: 159, stamina: 190 },
	Articuno: { maxCp: 3450, attack: 192, defense: 236, stamina: 207 },
	Zapdos: { maxCp: 3987, attack: 253, defense: 185, stamina: 207 },
	Moltres: { maxCp: 3917, attack: 251, defense: 181, stamina: 207 },
	Tyranitar: { maxCp: 4335, attack: 251, defense: 207, stamina: 225 },
	Metagross: { maxCp: 4286, attack: 257, defense: 228, stamina: 190 },
	Garchomp: { maxCp: 4479, attack: 261, defense: 193, stamina: 239 },
	'Raichu (Alola)': { attack: 201, defense: 154, stamina: 155 },
	'Raticate (Alola)': { attack: 135, defense: 154, stamina: 181 },
	'Sandslash (Alola)': { attack: 177, defense: 195, stamina: 181 },
	'Ninetales (Alola)': { attack: 170, defense: 193, stamina: 177 },
	'Golem (Alola)': { attack: 211, defense: 198, stamina: 190 },
	'Muk (Alola)': { attack: 190, defense: 172, stamina: 233 },
	'Marowak (Alola)': { attack: 144, defense: 186, stamina: 155 },
	'Weezing (Galar)': { attack: 174, defense: 197, stamina: 163 },
	'Linoone (Galar)': { attack: 142, defense: 128, stamina: 186 },
	Obstagoon: { attack: 180, defense: 194, stamina: 212 },
	'Charizard Mega X': { attack: 273, defense: 213, stamina: 186 },
	'Charizard Mega Y': { attack: 319, defense: 212, stamina: 186 },
	'Venusaur Mega': { attack: 241, defense: 246, stamina: 190 },
	'Blastoise Mega': { attack: 264, defense: 237, stamina: 188 },
	'Gengar Mega': { attack: 349, defense: 199, stamina: 155 },
	'Gyarados Mega': { attack: 292, defense: 247, stamina: 216 },
	'Tyranitar Mega': { attack: 309, defense: 276, stamina: 225 },
	'Metagross Mega': { attack: 300, defense: 289, stamina: 190 },
	'Garchomp Mega': { attack: 339, defense: 222, stamina: 239 }
};

const battleData = {
	Pikachu: ['Dobry na rajdy wodne', 'Ziemia', 'Thunder Shock · Wild Charge'],
	Charizard: ['Mocny atak ognisty', 'Woda · Skała · Elektryczny', 'Fire Spin · Blast Burn'],
	Bulbasaur: ['Kontra na wodne Pokémony', 'Ogień · Lód · Latający', 'Vine Whip · Frenzy Plant'],
	Gengar: ['Bardzo mocny atak ducha', 'Duch · Mrok · Psychiczny', 'Shadow Claw · Shadow Ball'],
	Snorlax: ['Obrońca sali / duża wytrzymałość', 'Walka', 'Lick · Body Slam'],
	Lapras: ['Dobry na smocze Pokémony', 'Elektryczny · Trawiasty · Walka', 'Water Gun · Ice Beam'],
	Gyarados: ['Mocny napastnik wodny', 'Elektryczny · Skała', 'Waterfall · Aqua Tail'],
	Mewtwo: ['Jeden z najlepszych napastników', 'Mrok · Duch · Robak', 'Psycho Cut · Psystrike'],
	Dragonite: ['Mocny napastnik smoczy', 'Lód · Skała · Baśniowy', 'Dragon Tail · Outrage'],
	Lucario: ['Mocny napastnik walczący', 'Ogień · Walka · Ziemia', 'Counter · Aura Sphere']
};

const cpmByLevel = [
	0.094, 0.135137432, 0.16639787, 0.192650919, 0.21573247, 0.236572661, 0.25572005, 0.273530381, 0.29024988, 0.306057377,
	0.3210876, 0.335445036, 0.34921268, 0.362457751, 0.37523559, 0.387592406, 0.39956728, 0.411193551, 0.42250001, 0.432926419,
	0.44310755, 0.453059958, 0.46279839, 0.472336083, 0.48168495, 0.4908558, 0.49985844, 0.508701765, 0.51739395, 0.525942511,
	0.53435433, 0.542635767, 0.55079269, 0.558830576, 0.56675452, 0.574569153, 0.58227891, 0.589887917, 0.59740001, 0.604823665,
	0.61215729, 0.619404122, 0.62656713, 0.633649143, 0.64065295, 0.647580966, 0.65443563, 0.661219252, 0.667934, 0.674581896,
	0.68116492, 0.687684904, 0.69414365, 0.70054287, 0.70688421, 0.713169109, 0.71939909, 0.725575614, 0.7317, 0.734741009,
	0.73776948, 0.740785574, 0.74378943, 0.746781211, 0.74976104, 0.752729087, 0.75568551, 0.758630378, 0.76156384, 0.764486065,
	0.76739717, 0.770297266, 0.7731865, 0.776064962, 0.77893275, 0.781790055, 0.78463697, 0.787473578, 0.79030001, 0.79280395,
	0.79530001, 0.79780392, 0.8003, 0.80280389, 0.8053, 0.807803863, 0.81029999, 0.812803834, 0.81529999, 0.817803806,
	0.82029999, 0.822803778, 0.82529999, 0.82780375, 0.83029999, 0.832803753, 0.83530000, 0.837803755, 0.84029999,
	0.842803710, 0.8453
];

const cpResult = document.querySelector('#cpResult');
const levelRange = document.querySelector('#levelRange');
const levelValue = document.querySelector('#levelValue');
const ivInputs = [document.querySelector('#ivAttack'), document.querySelector('#ivDefense'), document.querySelector('#ivStamina')];
const bestBuddyInput = document.querySelector('#bestBuddy');
const luckyInput = document.querySelector('#luckyPokemon');
let currentPokemonName = '';

const searchInput = document.querySelector('#pokemonSearch');
const suggestions = document.querySelector('#suggestions');

function showSuggestions(query = '') {
	const normalizedQuery = query.toLowerCase().trim();
	const numericQuery = normalizedQuery.replace(/^#?0*/, '');
	const matches = pokemon.filter((item) => item.name.toLowerCase().includes(normalizedQuery) || (numericQuery && item.id.replace(/\D/g, '').replace(/^0+/, '').includes(numericQuery))).slice(0, 8);
	suggestions.innerHTML = matches.map((item) => `<button class="suggestion" data-name="${item.name}" role="option"><img src="${item.image}" alt=""><span>${item.name}</span><small>${item.id} · ${item.type}</small></button>`).join('');
	suggestions.classList.toggle('open', Boolean(query) && matches.length > 0);
	suggestions.querySelectorAll('.suggestion').forEach((item) => item.addEventListener('click', () => showPokemon(item.dataset.name)));
}

function showPokemon(name) {
	searchInput.value = name;
	suggestions.classList.remove('open');
	currentPokemonName = name;
	const selected = pokemon.find((item) => item.name === name);
	document.querySelector('#selectedPokemon').innerHTML = `<div class="selected-summary"><img src="${selected.image}" alt=""><div><strong>${selected.name}</strong><span>${selected.type} · ${selected.id}</span></div></div>`;
	renderCalculation();
}

function cpmAtLevel(level) {
	const index = Math.round((level - 1) * 2);
	return cpmByLevel[index];
}

function calculateCp(stats, level, ivs) {
	const cpm = cpmAtLevel(level);
	const value = (stats.attack + ivs[0]) * Math.sqrt(stats.defense + ivs[1]) * Math.sqrt(stats.stamina + ivs[2]) * cpm ** 2 / 10;
	return Math.max(10, Math.floor(value));
}

function calculateHp(stats, level, hpIv) {
	return Math.max(10, Math.floor((stats.stamina + hpIv) * cpmAtLevel(level)));
}

function currentIvs() {
	const baseIvs = ivInputs.map((input) => {
		const value = Math.min(15, Math.max(0, Number(input.value) || 0));
		input.value = value;
		return value;
	});
	const mode = document.querySelector('input[name="pokemonForm"]:checked').value;
	return { mode, values: mode === 'purified' ? baseIvs.map((iv) => Math.min(15, iv + 2)) : baseIvs };
}

function maxCp(stats, level) {
	return calculateCp(stats, level, [15, 15, 15]);
}

function leagueBest(stats, cap, ivs, minLevel) {
	let best = { cp: 0, level: 1 };
	for (let level = minLevel; level <= 50; level += 0.5) {
		const cp = calculateCp(stats, level, ivs);
		if (cp <= cap && cp >= best.cp) best = { cp, level };
	}
	return best;
}

function dustForLevel(level) {
	if (level < 2.5) return 200;
	if (level < 4.5) return 400;
	if (level < 6.5) return 600;
	if (level < 8.5) return 800;
	if (level < 10.5) return 1000;
	if (level < 12.5) return 1300;
	if (level < 14.5) return 1600;
	if (level < 16.5) return 1900;
	if (level < 18.5) return 2200;
	if (level < 20.5) return 2500;
	if (level < 22.5) return 3000;
	if (level < 24.5) return 3500;
	if (level < 26.5) return 4000;
	if (level < 28.5) return 4500;
	if (level < 30.5) return 5000;
	if (level < 32.5) return 6000;
	if (level < 34.5) return 7000;
	if (level < 36.5) return 8000;
	if (level < 38.5) return 9000;
	if (level < 40.5) return 10000;
	return 10000 + Math.floor(level - 40) * 1000;
}

function powerUpCosts(fromLevel, toLevel, mode, isLucky) {
	let dust = 0;
	let candy = 0;
	let xl = 0;
	for (let level = fromLevel; level < toLevel; level += 0.5) {
		dust += dustForLevel(level);
		candy += level < 10 ? 1 : level < 20 ? 2 : level < 30 ? 3 : level < 40 ? 4 : 10;
		if (level >= 40) xl += level < 42 ? 10 : level < 44 ? 12 : level < 46 ? 15 : level < 48 ? 17 : 20;
	}
	const modeMultiplier = mode === 'shadow' ? 1.2 : mode === 'purified' ? 0.9 : 1;
	const dustMultiplier = modeMultiplier * (isLucky ? 0.5 : 1);
	return { dust: Math.ceil(dust * dustMultiplier), candy: Math.ceil(candy * modeMultiplier), xl: Math.ceil(xl * modeMultiplier) };
}

const evolutionTargets = {
	Bulbasaur: ['Ivysaur'], Ivysaur: ['Venusaur'], Charmander: ['Charmeleon'], Charmeleon: ['Charizard'],
	Squirtle: ['Wartortle'], Wartortle: ['Blastoise'], Eevee: ['Vaporeon', 'Jolteon', 'Flareon'],
	Pikachu: ['Raichu'], Dratini: ['Dragonair'], Dragonair: ['Dragonite'], Magikarp: ['Gyarados'], Machop: ['Machamp'], Haunter: ['Gengar']
};

function initTargetLevels() {
	const target = document.querySelector('#targetLevel');
	for (let level = 1; level <= 50; level += 0.5) {
		const option = document.createElement('option');
		option.value = level;
		option.textContent = level % 1 ? level.toFixed(1) : level.toFixed(0);
		target.append(option);
	}
	target.value = '50';
}

function renderCalculation() {
	if (!currentPokemonName) return;
	const selected = pokemon.find((item) => item.name === currentPokemonName);
	const stats = cpData[currentPokemonName];
	const { mode, values: ivs } = currentIvs();
	let level = Number(levelRange.value);
	if (mode === 'purified' && level < 25) {
		level = 25;
		levelRange.value = '25';
	}
	const tips = battleData[currentPokemonName] || ['Dobry do kolekcji i zadań', 'Sprawdź typ przeciwnika', 'Najlepsze ruchy zależą od roli'];
	const cp = calculateCp(stats, level, ivs);
	const bestBuddyLevel = bestBuddyInput.checked ? level + 1 : level;
	const bestBuddyCp = bestBuddyInput.checked ? calculateCp(stats, bestBuddyLevel, ivs) : cp;
	const ivPercent = (ivs.reduce((sum, iv) => sum + iv, 0) / 45 * 100).toFixed(1);
	const hp = calculateHp(stats, level, ivs[2]);
	const max40 = maxCp(stats, 40);
	const max50 = maxCp(stats, 50);
	levelValue.value = level;
	const targetSelect = document.querySelector('#targetLevel');
	const targetLevel = Number(targetSelect.value);
	const powerResult = document.querySelector('#powerResult');
	if (targetLevel <= level) {
		powerResult.innerHTML = '<span>Wybierz poziom docelowy wyższy od obecnego.</span>';
	} else {
		const afterCp = calculateCp(stats, targetLevel, ivs);
		const costs = powerUpCosts(level, targetLevel, mode, luckyInput.checked);
		powerResult.innerHTML = `<div><small>CP</small><b>${cp.toLocaleString('pl-PL')} <span>→</span> ${afterCp.toLocaleString('pl-PL')}</b></div><div><small>Koszt${luckyInput.checked ? ' Lucky · −50% Stardustu' : ''}</small><b>${costs.dust.toLocaleString('pl-PL')} Stardust · ${costs.candy} Candy${costs.xl ? ` · ${costs.xl} Candy XL` : ''}</b></div>`;
	}
	const great = leagueBest(stats, 1500, ivs, level);
	const ultra = leagueBest(stats, 2500, ivs, level);
	const evolution = (evolutionTargets[currentPokemonName] || []).map((name) => {
		const evolvedStats = cpData[name];
		return evolvedStats ? `<span>${name} <b>${calculateCp(evolvedStats, level, ivs).toLocaleString('pl-PL')} CP</b></span>` : '';
	}).join('');
	const buddyResult = bestBuddyInput.checked ? `<div class="buddy-result"><div><span>POZIOM</span><b>${level} → ${bestBuddyLevel}</b></div><div><span>BEST BUDDY CP</span><b>${cp.toLocaleString('pl-PL')} → ${bestBuddyCp.toLocaleString('pl-PL')}</b></div></div>` : '';
	cpResult.innerHTML = `<div class="main-metrics"><div><span>CP</span><strong>${cp.toLocaleString('pl-PL')}</strong></div><div><span>HP</span><strong>${hp}</strong></div><div><span>IV</span><strong>${ivPercent}%</strong></div></div><p class="result-caption">${selected.name} · poziom ${level} · IV ${ivs.join(' / ')}</p>${buddyResult}`;
	document.querySelector('#advancedResult').innerHTML = `<div class="base-stats"><span>BASE ATK <b>${stats.attack}</b></span><span>BASE DEF <b>${stats.defense}</b></span><span>BASE STA <b>${stats.stamina}</b></span></div><div class="max-cp-row"><span>MAX CP · LVL 40 <b>${max40.toLocaleString('pl-PL')}</b></span><span>LVL 50 <b>${max50.toLocaleString('pl-PL')}</b></span></div><div class="league-grid"><div><small>GREAT · 1500</small><b>${great.cp ? `${great.cp} CP` : 'Poza limitem'}</b><span>${great.cp ? `lvl ${great.level}` : 'za wysokie CP'}</span></div><div><small>ULTRA · 2500</small><b>${ultra.cp ? `${ultra.cp} CP` : 'Poza limitem'}</b><span>${ultra.cp ? `lvl ${ultra.level}` : 'za wysokie CP'}</span></div><div><small>MASTER</small><b>${calculateCp(stats, 50, ivs)} CP</b><span>lvl 50 · Twoje IV</span></div></div>${evolution ? `<div class="evolution-row"><small>CP PO EWOLUCJI · LVL ${level}</small>${evolution}</div>` : ''}<div class="battle-tip"><strong>${tips[0]}</strong><span>Słabość: ${tips[1]}</span><small>Ruchy: ${tips[2]}</small></div>`;
}

initTargetLevels();
document.querySelector('#databaseCount').textContent = pokemon.length;
searchInput.addEventListener('input', () => showSuggestions(searchInput.value.trim()));
document.querySelector('#clearSearch').addEventListener('click', () => {
	searchInput.value = '';
	suggestions.classList.remove('open');
	currentPokemonName = '';
	document.querySelector('#selectedPokemon').innerHTML = '<p class="calc-hint">Wybierz Pokémona z podpowiedzi, aby zacząć.</p>';
	cpResult.innerHTML = '<span class="cp-placeholder">Twoje wyniki pojawią się tutaj</span>';
	document.querySelector('#powerResult').innerHTML = '<span>Wybierz Pokémona</span>';
	document.querySelector('#advancedResult').innerHTML = '';
});
levelRange.addEventListener('input', renderCalculation);
bestBuddyInput.addEventListener('change', renderCalculation);
luckyInput.addEventListener('change', renderCalculation);
document.querySelector('#targetLevel').addEventListener('change', renderCalculation);
ivInputs.forEach((input) => input.addEventListener('input', renderCalculation));
document.querySelectorAll('input[name="pokemonForm"]').forEach((input) => input.addEventListener('change', () => {
	if (input.value === 'purified' && Number(levelRange.value) < 25) levelRange.value = 25;
	renderCalculation();
}));

