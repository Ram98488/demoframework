import {test,expect} from "@playwright/test"
import { log } from "node:console"


test("my test realted to numbers",async ({page})=>{


    const no = 4
    let result = ""

    for(let i =1;i<=no;i++)
    {
        for(let j =1;j<=i;j++)
        {
            for(let k=1;k<=j;k++)
            {
               result += j


            }
        }
        
        result += "\n"
    }

   console.log(result)

})

