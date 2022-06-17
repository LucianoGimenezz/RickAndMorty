import { getHash, getCharacterById } from "@utils/Utils";



const Character = async () => {
    const id = getHash();
    const character = await getCharacterById(id);
    const view = `
        <div>
            <a href="/">
              Back to home
            </a>
            <article>
                <img 
                  src=${character.image}
                  alt=${character.name}/>
                <h2></h2>
            </article>
            <article>
             <h3>Episode: <span>${character.episode.length}</span></h3>
             <h3>Status: <span> ${character.status}</span></h3>
             <h3>Gender: <span>${character.gender}</span></h3>
             <h3>Origin: <span>${character.origin.name}</span></h3>
             <h3>Last Location: <span> ${character.location.name}</span></h3>
            </article>
        </div>
    `;

    return view;
}

export default Character;