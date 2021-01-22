import { connection } from ".."
import createStudents from "../endpoints/createStudents"

export async function insertStudents(

 try{

        await connection
           .insert({
              id,
              name,
              email,
              hobbie,
              birthday,
              type: "Students"
           }).into("classe_labenu");
        )}

 
  





     
 