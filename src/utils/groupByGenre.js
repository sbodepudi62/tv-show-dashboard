export function groupByGenre(shows) {
  const map = {};
  shows.forEach(show => {
    show.genres.forEach(g => {
      map[g] = map[g] || [];
      map[g].push(show);
    });
  });
  Object.keys(map).forEach(g =>
    map[g].sort((a,b)=>(b.rating?.average||0)-(a.rating?.average||0))
  );
  return map;
}