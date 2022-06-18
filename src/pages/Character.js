import { getHash, getCharacterById } from "@utils/Utils";



const Character = async () => {
    const id = getHash();
    const character = await getCharacterById(id);
    const view = `
          <div class="character-container">
            <a href="/">
              Back to home
            </a>    
            <div class="character-info">
              <article>
              <img 
                src=${character.image}
                alt=${character.name}/>
              </article>
              <article class="info-container">
                <h3>Episode</h3>
                <span>${character.episode.length}</span>
                <h3>Status</h3>
                <span> ${character.status}</span>
                <h3>Gender</h3>
                <span>${character.gender}</span>
                <h3>Origin</h3>
                <span>${character.origin.name}</span>
                <h3>Last Location</h3>
                <span> ${character.location.name}</span>
              </article>
            </div>
          </div<
          `;

    return view;
}

export default Character;