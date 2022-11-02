import dollar from "./money.svg"
import analysis from "./analysis.svg"
import design from "./design.svg"
import implementation from "./implementation.svg"
import test from "./test.svg"
import document from "./document.svg"
import suport from "./suport.svg"

export const postArray = [
    {
        id: Math.random(),
        author: {
            name: "Etapa 1: Análise econômica",
            icon: dollar
        },
        content: [
            {
                id: Math.random(),
                post: "Qual a viabilidade do software a ser desenvolvido?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 2: Levantamento e análise de requisitos",
            icon: analysis
        },
        content: [
            {
                id: Math.random(),
                post: "Quais são os requisitos que o software em questão deve apresentar?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 3: Design do projeto",
            icon: design
        },
        content: [
            {
                id: Math.random(),
                post: "Quais são as ideias, os processos, os recursos e os entregáveis?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 4: Implementação",
            icon: implementation
        },
        content: [
            {
                id: Math.random(),
                post: "Como operacionalizar o processo?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 5: Teste",
            icon: test
        },
        content: [
            {
                id: Math.random(),
                post: "O software apresenta possíveis erros, bugs e/ou defeitos?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 6: Documentação",
            icon: document
        },
        content: [
            {
                id: Math.random(),
                post: "Como auxiliar com a manutenção do software e entender o projeto em si?"
            }
        ]
    },
    {
        id: Math.random(),
        author: {
            name: "Etapa 7: Suporte, manutenção e atualização",
            icon: suport
        },
        content: [
            {
                id: Math.random(),
                post: "Como manter o software funcional e de qualidade?"
            }
        ]
    },
]