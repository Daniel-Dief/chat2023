const main = document.querySelector("main");

async function getMsgs(){
    json = await fetch('./PHP/actions/receber.php').then((data) =>{
        return data.json();
    });
    json.forEach(line => {
        console.log(line['id']);
        console.log(line['nome']);
        console.log(line['perfil']);
        console.log(line['msg']);
        console.log(line['datahora']);
    });
}