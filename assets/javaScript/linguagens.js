let linguagens = document.querySelectorAll(".linguagem");

function mudaContexto(event) {
    let contexto = event.target.getAttribute("data-name"); // Obtém o valor do atributo data-name
    let imgLinguagem = document.querySelector(".linguagem-img");
    let nomeLinguagem = document.querySelector(".nome-linguagem");
    let numero = Math.round(Math.random() * 10);
    
    imgLinguagem.setAttribute("src", `./assets/img/${contexto}.png`);
    
    switch(numero) {
        case 1:
            nomeLinguagem.innerHTML = `<span class="verde">${contexto}</span>`;
            manuseaBorda(event, "bordaVerde")
        break;
            
        case 2:
            nomeLinguagem.innerHTML = `<span class="azul">${contexto}</span>`;
            manuseaBorda(event, "bordaAzul")
        break;
        
        case 3:
            nomeLinguagem.innerHTML = `<span class="amarelo">${contexto}</span>`;
            manuseaBorda(event, "bordaAmarela")
        break;
        
        case 4:
            nomeLinguagem.innerHTML = `<span class="roxo">${contexto}</span>`;
            manuseaBorda(event, "bordaRoxa")
        break;
            
        case 5:
            nomeLinguagem.innerHTML = `<span class="laranja">${contexto}</span>`;
            manuseaBorda(event, "bordaLaranja")
        break;
        
        case 6:
            nomeLinguagem.innerHTML = `<span class="cinza">${contexto}</span>`;
            manuseaBorda(event, "bordaCinza")
        break;
        
        case 7:
            nomeLinguagem.innerHTML = `<span class="vermelho">${contexto}</span>`;
            manuseaBorda(event, "bordaVermelha")
        break;
        
        case 8:
            nomeLinguagem.innerHTML = `<span class="rosa">${contexto}</span>`;
            manuseaBorda(event, "bordaRosa")
        break;

    default:
            nomeLinguagem.innerHTML = `<span class="">${contexto}</span>`;
            manuseaBorda(event, "bordaBranca")
                
    }
}

function manuseaBorda(parametro, classe) {
    parametro.target.classList.add(classe)

    linguagens.forEach(function(parametro) {
        parametro.addEventListener("mouseout", () => {
            parametro.classList.remove(classe)
        })

    })
}

linguagens.forEach(function(elemento) {
    elemento.addEventListener("mouseover", mudaContexto);
});

