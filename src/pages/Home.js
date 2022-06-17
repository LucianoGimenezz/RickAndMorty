import { getAllCharacters } from "@utils/Utils";

const Home = async () => {
    const characters = await getAllCharacters();
    const view = `
       <section class="Characters">
            ${characters.results.map(item => 
                `
                    <article class="card">
                      <img 
                        src=${item.image}
                        alt=${item.name}  
                      />
                      <a href='#/${item.id}' class="card__info">
                          <h2>${item.name}</h2>
                            <span>View</span>
                      </a>
                    </article>
                `
                ).join('')}
    
        </section>
    `;

    return view;
}

export default Home;