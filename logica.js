let itens = [];

function darkMode(){

    document.body.style.backgroundColor = '#222';
    const paginas = document.getElementsByClassName('pagina');
    for (let pagina of paginas) {
        pagina.style.backgroundColor = '#333';
        pagina.style.color = '#eee';
    }
}

function mostrarCadastro() {
    document.getElementById('cadastro').style.display = 'block';
    document.getElementById('lista').style.display = 'none';
}


function mostrarLista() {
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('lista').style.display = 'block';
    atualizarLista();
}


function adicionarItem() {
    const nome = document.getElementById('itemNome').value;
    const descricao = document.getElementById('itemDescricao').value;

    if (nome && descricao) {
        itens.push({ nome, descricao });
        document.getElementById('itemNome').value = '';
        document.getElementById('itemDescricao').value = '';
        alert('Item cadastrado com sucesso!');
    }
}


function atualizarLista() {
    const listaDiv = document.getElementById('itensCadastrados');

    if (itens.length === 0) {
        listaDiv.innerHTML = '<p>Nenhum item cadastrado ainda.</p>';
        return;
    }

    let html = '';
    itens.forEach((item, index) => {
        html += `
            <div class="item">
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <button onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    listaDiv.innerHTML = html;
}


function removerItem(index) {
    itens.splice(index, 1);
    atualizarLista();
}

mostrarCadastro();