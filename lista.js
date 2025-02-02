const Console = require("console-read-write")

let listagem = 1;
let adição = 2;
let edição = 3;
let exclusão = 4;
let sair = 5;
let numeroOpcao = null
const contato = [];

async function main()
{
    menu()
    Console.write("O que você quer fazer?");
    numeroOpcao = Number(await Console.read());

    if (numeroOpcao == "" || numeroOpcao > sair || numeroOpcao < listagem || numeroOpcao != listagem && numeroOpcao != adição && numeroOpcao != edição && numeroOpcao != exclusão && numeroOpcao != sair)
    {
        Console.write("- - - - - - - - - - - - -")
        Console.write("Digite uma opção válida!")
        Console.write("- - - - - - - - - - - - -")
        main()
    }

    else
        {
            if (numeroOpcao == listagem)
        {
            listar();
        }

        else if (numeroOpcao == adição)
        {
            Console.write(". . .")
            adicionar()
        }

        else if (numeroOpcao == edição)
        {
            Console.write(". . .")
            editar();
        }

        else if (numeroOpcao == exclusão)
        {
            Console.write(". . .")
            excluir();
        }

        else
        {
            encerrar();
        }
    }
}
main()

async function menu()
{
    Console.write("1 - listar");
    Console.write("2 - adicionar");
    Console.write("3 - editar");
    Console.write("4 - excluir");
    Console.write("5 - sair");
}

async function listar()
{
    if (contato.length > 0)
    {
        Console.write("-------------------------------")
        Console.write("Lista telefônica: ")
        Console.write(" ")
        for (let indice = 0; indice < contato.length; indice++)
        Console.write(contato[indice])
        Console.write("-------------------------------")
    }
    else
    {
        Console.write("- - - - - - - - - - - - -")
        Console.write("Lista telefônica vazia!");
        Console.write("- - - - - - - - - - - - -")
    }
    voltar()
}

async function adicionar()
{
    let nome = ""
    let novoContato = ""
    let telefonesContatos = ""
    
    let repetir = ""

    do 
    {
        Console.write("Digite o nome do novo contato:");
        nome = await Console.read();
        
        Console.write("Digite o telefone do novo contato:")
        telefonesContatos = Number(await Console.read());
            
        novoContato = "Nome: " + nome.toString() + " " + "Tel: " + telefonesContatos;
        contato.push(novoContato);

        Console.write("- - - - - - - - - -")

        Console.write("Contato cadastrado.")

        Console.write("- - - - - - - - - -")

        Console.write("Deseja adicionar outro contato? (s/n)")

        repetir = await Console.read()

    }
    while (repetir == "s" || repetir == "S" || repetir == "sim" || repetir == "SIM")
    main()
}

async function editar()
{
    if (contato.length > 0)
    {
        Console.write("---------------------------------------------------")
        for (let indice = 0; indice < contato.length; indice++)
        Console.write(indice+1 + " - " + contato[indice]);
        Console.write("---------------------------------------------------")

        let numeroOpcaoEditar = null
        Console.write("Entre com o dígito de quem você quer editar: ")
        numeroOpcaoEditar = Number(await Console.read())
        
        if (numeroOpcaoEditar >= 1)
        {
            let novoNome = "";
            let novoTelefone = "";
            let contatoAtualizado = "";

            Console.write("Digite o novo nome: ")
            novoNome = (await Console.read());

            Console.write("Digite o novo telefone: ")
            novoTelefone = Number(await Console.read());

            contatoAtualizado = "Nome: " + novoNome.toString() + " " + "Tel: " + novoTelefone;

            contato[numeroOpcaoEditar - 1] = contatoAtualizado

            Console.write("- - - - - - - - - - - - - - -")
            Console.write("Contato atualizado com êxito.")
            Console.write("- - - - - - - - - - - - - - -")

            main()
        }

        else if (numeroOpcaoEditar < 1 || numeroOpcaoEditar > contato.length)
        {
            Console.write("Entre com um dígito válido")
            editar()
        } 
    }

    else
    {
        Console.write("Não há contato para ser editado")
        Console.write("Voltando para o menu...")
        Console.write(" ")
        main()
    }
}

async function excluir()
{
    if (contato.length > 0)
    {
        Console.write("---------------------------------------------------")
        for (let indice = 0; indice < contato.length; indice++)
        Console.write(indice+1 + " - " + contato[indice]);
        Console.write("---------------------------------------------------")

        let numeroOpcaoExcluir = null
        Console.write("Digite o número da lista de quem desejas excluir:")
        numeroOpcaoExcluir = Number(await Console.read())
        
        if (numeroOpcaoExcluir >= 1)
        {
            contato.splice(numeroOpcaoExcluir - 1, 1)
            Console.write("- - - - - - - - -")
            Console.write("Contato excluído.")
            Console.write("- - - - - - - - -")
            main()
        }

        else if (numeroOpcaoExcluir < 1 || numeroOpcaoExcluir > contato.length)
        {
            Console.write("Digite um número válido")
            excluir()
        } 
    }

    else
    {
        Console.write("Não há contato para ser excluído.")
        Console.write("Voltando para o menu...")
        Console.write(" ")
        main()
    }
}

async function voltar()
{
    let teclaVoltar = "";
    
    Console.write("Digite qualquer tecla para voltar ao menu principal.");
    teclaVoltar = await Console.read();
    Console.write(" ");
    
    main()
}
    
    async function encerrar()
{
    Console.write("Saindo...")    
    return;
}
