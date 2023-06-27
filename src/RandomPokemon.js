export default function (RandomPokemon) {
  const num = Math.floor(Math.random() * 151) + 1;

  return (
    <section>
      <h2>Pokemon #{num}</h2>
    </section>
  );
}
