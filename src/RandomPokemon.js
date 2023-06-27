export default function RandomPokemon() {
  const num = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png
`
  return (
    <section>
      <h2>Pokemon #{num}</h2>
      <img src={url} alt=""/>
    </section>
  );
}
