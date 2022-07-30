  Guide to Run Locally:
-------------------------------------------------
- Clone and Install with `npm install` or `yarn install`.
  - Use `npm run dev` or `yarn dev` to run it as Dev.
  - Access it On Vercel - [GoLedger Challenge - Breno Lira](https://goledger-challenge-web.vercel.app/) - API only works on HTTP (*trying to figure out what do.*)


 Sumary
-------------------------------------------------
- This project is made using [GoLedger - Challenge](https://github.com/GoLedgerDev/goledger-challenge-web) as guidelines. I used Next.js - since it was a differential in their [job description](https://goledger.notion.site/Trabalhe-na-GoLedger-ffd1a6548a1e4f1a959b80b36aa66831?p=fa80d2cb60a84518a81c756cd0413c05&pm=c). My style guide was inspire in their [website](https://goledger.com.br) except of my custom Fluid Typography using the [Utopia](https://utopia.fyi/type/calculator?c=320,16,1.125,1800,20,1.333,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l) system.
- It was made using Next.js, TypeScript and Tailwind. The information was dinamically generated and handled by Next.js router using simple Dinamically router - You can see it on `src/pages/list/[label].tsx`.

Home
-------------------------------------------------
![Captura de ecrã de 2022-07-29 15-32-24](https://user-images.githubusercontent.com/86065449/181823041-24438835-173b-4014-a856-f020c492c8f9.png)
- Fetch all Labels from: `http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema` - and creates buttons accordingly to that Labels. The buttons will redirect to `/list/[labels].tsx` making the frontend handle what information it would have.
  - With that I can handle changes on API or add new Labels on API without having to change the Frontend.
  
Loading
-------------------------------------------------
![Captura de ecrã de 2022-07-29 15-37-08](https://user-images.githubusercontent.com/86065449/181823551-e0af2295-48ac-439a-b4f9-3540ed3b7cf0.png)
- Uses the "Loading" state that my Custom Hooks gave me. With that I can handle Load states from the dinamically handed API data.

List
-------------------------------------------------
![Captura de ecrã de 2022-07-29 18-38-17](https://user-images.githubusercontent.com/86065449/181846647-e0ead103-90c9-4c4b-8313-b2c232b5566a.png)
- With a simple UI/UX - Implements an Edit / Delete button right after the item and a button to add new Items to that specific list. And a Search filter on top of it.

Edit (Modal)
-------------------------------------------------
![Captura de ecrã de 2022-07-29 20-24-06](https://user-images.githubusercontent.com/86065449/181860018-ea1f7fe2-3a5d-4033-9b9a-6c3da345f7c4.png)
- A simple Modal to edit Items.

Delete (Modal)
-------------------------------------------------
![Captura de ecrã de 2022-07-29 20-24-10](https://user-images.githubusercontent.com/86065449/181860047-e8b20c18-7511-45dc-b96f-379a9d3855b3.png)
- A simple Modal to delete Items.

Create (Modal)
-------------------------------------------------
![Captura de ecrã de 2022-07-29 22-37-53](https://user-images.githubusercontent.com/86065449/181865383-88e3feeb-e95a-481f-afd9-ec99508d631e.png)
![Captura de ecrã de 2022-07-29 22-38-05](https://user-images.githubusercontent.com/86065449/181865384-8bf792ce-25fe-41a7-8f25-3e934e64bb0b.png)
![Captura de ecrã de 2022-07-29 22-38-14](https://user-images.githubusercontent.com/86065449/181865385-0bfe9c53-4f07-46eb-a369-fb7be0790a8a.png)
![Captura de ecrã de 2022-07-29 22-39-21](https://user-images.githubusercontent.com/86065449/181865386-d2b05f3d-8732-4a22-a45d-5608e26c42e9.png)
- A Modal to create each new item.

404 - Not Found page
-------------------------------------------------
![Captura de ecrã de 2022-07-29 14-43-32](https://user-images.githubusercontent.com/86065449/181817921-71ec9c8b-e123-45a0-a227-1552c513f3a4.png)
- Inspired by [GoLedger - Not Found](https://goledger.com.br/404) - I've made it as a resource to countermeasure the Dinamically generate pages.
  - It is slightly different from GoLedger not Found - but I've done single adjustments that I think can be UX improvements.
  
1. Make it only searchs when the input isn't cleared.
  - If you try to search like that - currently - on GoLedger page. It would redirect the user (see the print below):
  
  ![Captura de ecrã de 2022-07-29 14-44-09](https://user-images.githubusercontent.com/86065449/181817996-16c99ea4-c7fb-4156-8375-3d8184c9b95f.png)
  ![Captura de ecrã de 2022-07-29 15-02-36](https://user-images.githubusercontent.com/86065449/181818339-446a203f-7b1b-4571-833f-50721bc8bc04.png)
  
2. Make it only searchs when the input has less than 100 chars.

  ![Captura de ecrã de 2022-07-29 15-04-17](https://user-images.githubusercontent.com/86065449/181818576-266cf003-6313-4c71-ac1b-305d4ac2c2eb.png)
  ![Captura de ecrã de 2022-07-29 15-03-53](https://user-images.githubusercontent.com/86065449/181818584-41338482-cdd8-448d-a523-8bac722aebf5.png)


Footer
-------------------------------------------------
  ![Captura de ecrã de 2022-07-29 15-08-21](https://user-images.githubusercontent.com/86065449/181819129-1f7cf772-97c0-42fb-b1eb-fcaa38bd7e32.png)


Navbar
-------------------------------------------------
  ![Captura de ecrã de 2022-07-29 15-08-14](https://user-images.githubusercontent.com/86065449/181819185-e77f5f06-4974-495e-a866-c579ebfb4748.png)

  
