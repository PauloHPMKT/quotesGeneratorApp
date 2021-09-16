const btnGenerator = document.querySelector('#btnClick')
const innerQuotes = document.querySelector('#quote')
const innerAuthor = document.querySelector('#author')

btnGenerator.onclick = () => {
    const quotes = {
        "- Zig Ziglar" : "'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.'",
        "- Unknow" : "'No meio da dificuldade encontra-se a oportunidade.'",
        "- Tumblr" : "'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.'",
        "- Charlie Brown Jr." : "'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.'",
        "Roberto Shinyashiki" : "'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'",
        "- Nemo Nox" : "'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.'",
        "- Paulo Coelho" : "'Imagine uma nova história para sua vida e acredite nela.'",
        "- Unknow" : "'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.'",
        "- Friedrich Nietzsche" : "'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.'",
        "- Augusto Branco" : "'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.'"
    }

    const authors = Object.keys(quotes)
    // Object - lista o objeto (const quotes) para visualizar as chaves
    const author = authors[Math.floor(Math.random(quotes)*authors.length)]
    // lista const authors gerando aleatoriamente um valor randomico com um floor minimo "authors.length"
    const quote = quotes[author]
    // replica o mesmo processo de author

    innerQuotes.innerHTML = quote
    innerAuthor.innerHTML = author  
}