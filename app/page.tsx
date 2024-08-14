import Image from "next/image";
import { db } from "@/db"
import { postsTable, usersTable } from "@/db/schema";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={async()  =>{
          "use server"
          await db.insert(usersTable).values ({
            id: 1,
            age: 20,
            email:"one@gmail.com",
            name: "one",
          });
          await db.insert(postsTable).values ({
            title: "frontforumfocus",
            content: "impact assessment",
            userId: 1,
          });

        }}>
          <button> submit</button>

        </form>
       
      </main>
    
    </div>
  );
}
