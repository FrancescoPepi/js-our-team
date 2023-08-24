// recupero DOM
const container = document.getElementById("container-card");

// ARRAY CON ALL'INTERNO OBJECTS
const membersTeam = [
  {
    numero: "01",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    numero: "02",
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    numero: "03",
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    numero: "04",
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    numero: "05",
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    numero: "06",
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

for (const member in membersTeam) {
  container.innerHTML += `
    <div class="col-4 my-2">
    <img src="./IMG/${membersTeam[member].foto}" alt="img profilo di: ${membersTeam[member].nome}" class="rounded mx-auto d-block w-75">
    
    ${membersTeam[member].nome}
    ${membersTeam[member].ruolo}
    </div>`;
  console.log(
    membersTeam[member].nome +
      " " +
      membersTeam[member].ruolo +
      " " +
      membersTeam[member].foto
  );
}

// console.log(membersTeam);
