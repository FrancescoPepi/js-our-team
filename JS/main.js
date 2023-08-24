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

for (const member of membersTeam) {
  container.innerHTML += `
  <div class="col-4">
    <div class="card mx-auto my-4" style="width: 22rem;">
        
            <img src="./IMG/${member.foto}" alt="img profilo di: ${member.nome}" class="card-img-top d-block">
         <div class="card-text">
            <p class="">${member.nome}</p>
            <p class=" ">${member.ruolo}</p>
        </div></div>
       
    </div>
    </div>`;

  console.log(member.nome + " " + member.ruolo + " " + member.foto);
}

// console.log(membersTeam);
