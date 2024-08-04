const infoCleaner = (arr) => arr.map((character)=>{

    let episodes= character.episode;
    
    
    // // Usando map para transformar cada URL en el número del episodio
    // const episodeNumbers = episodes.map(url => {
    //     // Extraer el número del episodio usando split
    //     const parts = url.split('/');
    //     return parseInt(parts[parts.length - 1], 10);
    // });
    
    const originName = character.origin.name;
    const firstWordOrigin = originName.split(' ')[0];

    return {
        id: character.id,
        name:character.name,
        gender:character.gender,
        status:character.status,
        origin:character.origin,
        origin:firstWordOrigin,
        species:character.species,
        image:character.image,
        // episodes:episodeNumbers,
       
        created: false
    }
});

module.exports={
    infoCleaner
}