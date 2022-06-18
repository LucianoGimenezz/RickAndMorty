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
                      <div class="card__info">
                        <h2>${item.name}</h2>
                        <a href='#/${item.id}'>
                            Show more
                        </a>
                      </div>
                    </article>
                `
                ).join('')}
    
        </section>
    `;

    return view;
}

export default Home;