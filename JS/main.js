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
  <div class="col-4">
    <div class="card mx-auto my-3" style="width: 18rem;">
        <img src="./IMG/${membersTeam[member].foto}" alt="img profilo di: ${membersTeam[member].nome}" class="card-img-top d-block">
        <div class="card-body">
            <p class="card-text text-center">${membersTeam[member].nome}</p>
            <p class="card-text text-center">${membersTeam[member].ruolo}</p>
        </div>
    </div>
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
