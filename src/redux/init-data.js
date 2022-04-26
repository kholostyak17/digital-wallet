export const initialData = 
    [
        {
            email: "kholostyak17@gmail.com",
            password: "ivan",
            name: "Iván Jaén Trujillo",
            money: 380,
            transactions: [
                {
                    type: "deposit",
                    beneficiaryEmail: "kholostyak17@gmail.com",
                    beneficiaryName: "Iván Jaén Trujillo",
                    amount: 500,
                    balance: 500,
                    date: "10/08/2021 17:08"
                },
                {
                    type: "transference",
                    senderEmail: "kholostyak17@gmail.com",
                    senderName: "Iván Jaén Trujillo",
                    receptorEmail: "alberto@gmail.com",
                    receptorName: "Alberto García",
                    amount: -120,
                    balance: 380,
                    date: "10/08/2021 22:34"
                }
            ],
        },
        {
            email: "alberto@gmail.com",
            password: "alberto",
            name: "Alberto García",
            money: 620,
            transactions: [
                {
                    type: "deposit",
                    beneficiaryEmail: "alberto@gmail.com",
                    beneficiaryName: "Alberto García",
                    amount: 500,
                    balance: 500,
                    date: "10/08/2021 19:56"
                },
                {
                    type: "transference",
                    senderEmail: "kholostyak17@gmail.com",
                    senderName: "Iván Jaén Trujillo",
                    receptorEmail: "alberto@gmail.com",
                    receptorName: "Alberto García",
                    amount: 120,
                    balance: 620,
                    date: "10/08/2021 22:34"
                }
            ],
        },
    ];