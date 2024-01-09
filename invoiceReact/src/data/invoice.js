export const invoice = {
    id: 10,
    concept: 'Componentes Tecnológicos',
    
    client: {
        name: 'Jaiver',
        lastName: 'Ocampo',
        dni:'4615339',
        typeDni:'cc',
        address: {
            country: 'Colombia',
            city: 'Armenia',
            street: 'Mz m cs 2',
            phone: 3236346362,
            countryCode:'+57',
        }
    },
    company: {
        name: 'camiso',
        fiscalNumber: 123456789,
    },
    items: [
        {
            id:1,
            product: 'Mouse Optico x3',
            price: 50000,
            quantity: 3,
        },
        {
            id:2,
            product: 'cpu Intel Core i7 G12',
            price: 150000,
            quantity: 1,
        },
        {
            id:3,
            product: 'Pantalla lg 24"',
            price: 750000,
            quantity: 3,
        }
    ]
}