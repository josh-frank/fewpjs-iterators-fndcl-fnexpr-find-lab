function superbowlWin( record ) {
  let search = record.find( superBowl => superBowl.result === "W" );
  return !!search ? search.year : search;
}