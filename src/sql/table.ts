import { connection } from '..'

const table = async(): Promise<void> => {
    try{

        await connection.raw(`

        CREATE TABLE estudantes (
            id VARCHAR (64) PRIMARY KEY,
            name VARCHAR (255) NOT NULL,
            email VARCHAR (64) NOT NULL,
            birthday_date DATE NOT NULL,
            hobbies VARCHAR (255) NOT NULL,
            classe_id VARCHAR (64),
            FOREIGN KEY (classe_id) REFERENCES classes_labenu (id)
        );
        
        `)
    }
}