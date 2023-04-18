import { documentosColecao } from "./dbConnect.js";

function obterDocumentos() {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function encontrarDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    });
  
    return documento;
  }

  function atualizaDocunento(nome, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome
    }, 
    {
        $set: {
            texto
        }
    })

    return atualizacao;
  }

  export { encontrarDocumento, atualizaDocunento, obterDocumentos };