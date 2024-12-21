const boy = document.querySelector(".boys")
const girl = document.querySelector(".girls")
const btn = document.querySelector(".match-btn")

const boys = [
    {
      name: "Amizos",
      age: 24,
      imageUrl: "https://images.unsplash.com/photo-1668419394739-137237927de0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rimze",
      age: 25,
      imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Vicky",
      age: 26,
      imageUrl: "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Aditiya",
        age: 23,
        imageUrl: "https://images.unsplash.com/photo-1652715485509-da8a510cd876?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Durga",
        age: 24,
        imageUrl: "https://images.unsplash.com/photo-1663577270725-afefd82932dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Rims",
        age: 26,
        imageUrl: "https://images.unsplash.com/photo-1721750476874-1afb8cf50994?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Doms",
        age: 22,
        imageUrl: "https://images.unsplash.com/photo-1513906675212-4031e2ce2bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "james",
      age: 21,
      imageUrl: "https://images.unsplash.com/photo-1542053254535-def95e944232?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "harsha",
      age: 23,
      imageUrl: "https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Hrithik",
      age: 22,
      imageUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const girls = [
  {
    name: "Emma",
    age: 21,
    imageUrl: "https://images.unsplash.com/photo-1503342564391-ebb28fc32ffe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Evelyn",
    age: 22,
    imageUrl: "https://images.unsplash.com/photo-1622445270936-5dcb604970e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Charlotte",
    age: 23,
    imageUrl: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sophia",
    age: 23,
    imageUrl: "https://images.unsplash.com/photo-1591838497997-e0f38428c5c5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Amelia",
    age: 21,
    imageUrl: "https://images.unsplash.com/photo-1548389995-fbd3151a501f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "isabella",
    age: 22,
    imageUrl: "https://images.unsplash.com/photo-1562894369-193bedce28e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Olivia",
    age: 22,
    imageUrl: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Luna",
    age: 21,
    imageUrl: "https://images.unsplash.com/photo-1563993297290-609c9406efcd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Camila",
    age: 23,
    imageUrl: "https://images.unsplash.com/photo-1697978466177-e5c99c2c57e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Scarlett",
    age: 22,
    imageUrl: "https://images.unsplash.com/photo-1701213008329-e3e649359a19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  
];

btn.addEventListener("click",()=>{
    // console.log("hello")
    const randomBoyIndex = Math.floor(Math.random()*boys.length);
    const randomBoyImg = boys[randomBoyIndex].imageUrl;
    const randomBoyName = boys[randomBoyIndex].name;
    const randomBoyAge = boys[randomBoyIndex].age;
    boy.innerHTML = `<img src="${randomBoyImg}">
                     <h3>${randomBoyName}</h3>
                    <h4>age : <span>${randomBoyAge}</span></h4>` 
                    
    const randomGirlIndex = Math.floor(Math.random()*girls.length);
    const randomGirlImg = girls[randomGirlIndex].imageUrl;
    const randomGirlName = girls[randomGirlIndex].name;
    const randomGirlAge = girls[randomGirlIndex].age;
    girl.innerHTML = `<img src="${randomGirlImg}">
                     <h3>${randomGirlName}</h3>
                    <h4>age : <span>${randomGirlAge}</span></h4>` 
})
  