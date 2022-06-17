import { getAllCharacters } from "@utils/Utils";

const Home = async () => {
    const characters = await getAllCharacters();
    const view = `
       <div>
            ${characters.results.map(item => 
                `
                    <article>
                      <a href='#/${item.id}/'>
                        <img 
                          width="250px" 
                          src=${item.image}
                          alt=${item.name}  
                        />
                        <h2>${item.name}</h2>
                      </a>
                    </article>
                `
                ).join('')}
    
        </div>
    `;

    return view;
}

export default Home;