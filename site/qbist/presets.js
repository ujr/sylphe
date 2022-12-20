/*
My old EasyQbist save files, converted to JS, and some
newly added presets.
 - name:  the old file name, some renamed
 - parms: the 36 transformation steps, each defined
          by a quadruple (op, src, ctl, dst), where
          op is the operation (1..9, 0 is a no-op), and
          src, ctl, dst are the register numbers (0..5)
*/
var presets = [
{name:"Qbist",
 parms:[
  1,1,2,5, 3,0,1,5, 7,2,0,0, 8,2,3,3, 5,4,0,2, 4,2,0,3,
  5,4,4,3, 7,3,0,2, 8,4,0,1, 7,3,3,5, 6,2,4,3, 8,3,1,4,
  4,1,4,2, 5,2,0,3, 1,1,0,0, 1,1,0,5, 9,2,1,0, 1,0,2,5,
  6,5,0,5, 2,2,2,5, 5,4,3,5, 2,5,0,4, 6,4,2,2, 4,3,4,0,
  8,3,2,4, 6,0,1,4, 9,4,0,5, 1,5,3,0, 6,0,2,4, 9,1,2,1,
  4,3,5,4, 2,2,0,0, 8,5,4,4, 1,2,4,2, 3,5,3,0, 2,5,4,0]},
{name:"Kubist",
 parms:[
  3,5,0,1, 1,2,2,0, 8,5,4,4, 4,0,5,0, 2,1,3,3, 7,0,5,2,
  2,4,2,3, 3,2,0,0, 9,2,3,2, 1,2,5,0, 9,1,0,0, 5,0,3,5,
  8,5,2,0, 5,2,1,1, 7,4,3,3, 9,0,1,5, 9,2,3,3, 4,1,3,5,
  5,4,4,1, 8,4,4,0, 4,0,3,0, 2,4,1,2, 4,3,0,5, 8,1,0,5,
  3,1,2,1, 9,2,3,4, 4,4,1,1, 9,4,5,4, 8,4,1,4, 4,2,4,5,
  7,5,1,0, 3,4,2,1, 2,1,1,4, 1,4,1,1, 9,5,0,0, 2,1,4,4]},
{name:"Tulip",
 parms:[
  1,3,2,5, 5,1,3,5, 1,0,0,0, 3,5,2,5, 2,1,0,2, 2,0,1,4,
  1,1,0,1, 9,0,3,3, 4,0,2,4, 2,5,0,5, 5,5,1,2, 5,2,3,3,
  9,3,0,4, 5,5,5,4, 7,2,5,5, 2,1,4,3, 1,0,5,4, 5,2,0,0,
  4,4,4,4, 1,4,1,3, 6,0,5,4, 7,5,2,3, 8,3,0,3, 4,1,2,5,
  5,5,1,1, 5,3,3,2, 1,2,1,5, 1,4,2,0, 2,1,3,2, 3,3,5,2,
  4,0,0,2, 3,2,0,0, 2,3,2,3, 8,0,5,1, 4,2,5,0, 8,4,2,5]},
{name:"CrossWaves",
 parms:[
  3,4,3,4, 4,5,0,4, 5,5,4,4, 4,4,2,1, 2,5,1,5, 7,1,4,3,
  5,1,3,2, 2,3,1,5, 4,0,4,4, 6,5,0,2, 6,4,3,5, 9,5,5,2,
  9,4,5,5, 1,5,4,5, 5,0,5,3, 1,2,4,5, 8,1,0,5, 6,2,2,5,
  2,5,5,3, 6,2,0,3, 2,4,1,0, 3,0,5,5, 2,0,1,4, 1,5,3,5,
  2,5,0,1, 8,2,4,4, 8,2,0,5, 7,4,5,5, 4,1,5,4, 3,4,2,5,
  1,1,0,2, 4,2,5,5, 9,2,5,1, 3,2,2,4, 4,2,4,0, 7,5,0,2]},
{name:"Stained Glass",
 parms:[
  6,5,5,4, 6,1,4,0, 5,5,0,1, 9,0,2,3, 8,3,5,4, 7,1,5,0,
  4,1,1,2, 7,1,2,5, 6,4,1,4, 1,5,5,1, 1,1,1,4, 5,4,1,1,
  7,3,3,3, 1,4,4,3, 8,3,1,3, 8,5,5,1, 2,4,0,1, 6,3,3,2,
  7,5,5,4, 2,2,1,0, 1,1,3,3, 7,2,0,5, 7,3,4,2, 7,4,4,2,
  6,1,5,1, 3,2,2,3, 2,0,0,2, 2,0,1,5, 6,2,3,5, 6,1,5,5,
  2,5,0,1, 7,2,0,1, 9,2,0,3, 1,0,1,2, 9,1,1,3, 3,1,1,4]},
{name:"Frozen",
 parms:[
  4,3,4,3, 5,0,4,1, 2,5,4,1, 2,5,3,1, 1,1,0,1, 5,3,4,2,
  4,3,0,3, 4,1,0,2, 9,2,0,0, 6,0,1,0, 3,1,1,4, 1,2,0,1,
  3,2,2,2, 1,0,1,2, 7,4,0,4, 3,5,1,3, 4,5,5,3, 4,5,1,1,
  1,1,4,2, 3,5,4,3, 6,1,3,1, 6,1,4,0, 3,2,0,1, 2,4,2,3,
  7,4,5,2, 4,1,4,4, 7,2,3,3, 3,2,2,4, 8,4,1,4, 4,1,2,1,
  1,5,1,0, 1,5,1,3, 6,2,2,5, 9,4,0,1, 1,0,1,3, 2,3,5,1]},
{name:"Fluid",
 parms:[
  1,3,1,1, 3,5,2,3, 8,4,1,0, 2,0,1,4, 2,0,0,0, 8,2,5,5,
  0,2,1,1, 4,3,4,5, 0,2,4,1, 7,0,3,5, 2,0,0,2, 1,4,5,5,
  7,3,5,2, 1,5,4,1, 5,0,2,4, 5,0,3,0, 4,1,1,3, 7,0,0,0,
  4,4,1,3, 4,2,0,5, 1,2,4,3, 3,2,1,2, 6,2,4,2, 2,5,4,5,
  5,5,0,4, 0,0,4,1, 3,1,1,3, 0,5,4,4, 8,1,1,0, 8,4,0,5,
  0,5,1,5, 2,4,4,0, 3,2,4,0, 4,2,4,3, 1,4,4,4, 2,3,2,4]},
{name:"Stormy Fall",
 parms:[
  4,3,2,1, 5,0,0,2, 7,3,5,4, 9,4,3,2, 8,4,4,2, 4,0,2,4,
  9,0,5,5, 3,2,4,3, 5,1,4,3, 9,0,3,0, 4,1,1,4, 7,0,4,3,
  2,1,5,2, 2,3,2,5, 3,3,5,5, 2,0,0,5, 3,2,1,0, 7,3,4,2,
  2,0,1,2, 5,0,3,2, 7,5,0,2, 4,2,1,0, 2,4,5,2, 3,3,3,5,
  4,2,3,0, 7,5,4,4, 3,3,1,3, 7,3,4,2, 3,2,3,5, 8,5,4,4,
  5,3,0,2, 9,1,4,3, 1,5,1,1, 9,3,5,0, 6,1,3,0, 2,0,4,2]},
{name:"Laser Pulse",
 parms:[
  4,4,3,1, 6,1,1,1, 1,0,0,5, 4,0,5,0, 6,2,2,4, 7,0,1,4,
  8,2,1,0, 2,3,4,1, 4,2,1,5, 3,1,0,2, 6,4,0,3, 8,2,0,0,
  6,3,4,5, 4,2,1,5, 3,4,3,0, 7,2,1,0, 1,0,4,5, 4,5,0,5,
  1,4,0,4, 4,3,3,0, 8,3,0,2, 9,1,2,4, 2,1,3,3, 3,0,1,5,
  7,4,5,3, 7,1,4,3, 5,1,0,2, 7,1,4,2, 7,0,4,5, 6,0,5,1,
  7,5,4,5, 7,1,1,4, 9,5,2,4, 5,3,1,0, 1,3,1,4, 5,4,1,4]},
{name:"Pastell-Wobbel",
 parms:[
  1,3,3,5, 7,0,4,1, 5,3,5,5, 6,1,5,2, 1,1,5,0, 2,5,5,1,
  1,3,3,5, 8,5,3,1, 1,0,4,5, 6,5,3,1, 1,3,5,2, 0,1,5,2,
  2,4,0,2, 2,0,0,1, 3,5,2,5, 4,5,3,0, 3,1,1,0, 3,0,5,0,
  3,1,5,5, 0,1,3,4, 1,3,4,3, 8,4,1,0, 4,1,4,5, 8,4,1,3,
  7,2,3,3, 6,4,5,3, 8,0,3,5, 5,4,2,4, 3,0,0,4, 4,0,2,2,
  7,0,0,5, 8,4,1,3, 1,2,1,3, 6,3,2,0, 0,3,2,4, 7,4,3,5]},
{name:"Space Egg",
 parms:[
  7,1,4,2, 5,5,5,4, 9,3,5,1, 1,1,4,2, 6,0,5,5, 9,3,1,4,
  9,0,3,4, 2,2,5,4, 1,1,3,5, 6,0,4,1, 3,1,2,2, 7,2,5,3,
  5,2,1,3, 2,3,5,4, 4,3,5,1, 4,5,2,4, 3,2,2,1, 2,5,5,4,
  5,3,1,3, 4,4,1,3, 1,5,4,0, 9,1,5,3, 6,1,3,1, 9,5,5,2,
  3,1,5,2, 7,2,0,2, 2,5,4,5, 8,4,3,5, 7,1,0,4, 2,5,2,5,
  9,5,3,0, 9,2,0,2, 5,3,2,1, 6,5,0,1, 5,4,4,5, 8,0,2,5]},
{name:"Space Egg Neon",
 parms:[
  7,1,4,2, 5,5,5,4, 9,3,5,1, 1,1,4,2, 6,0,5,5, 9,3,1,4,
  9,0,3,4, 9,2,5,4, 1,1,3,5, 6,0,4,1, 3,1,2,2, 7,2,5,3,
  5,2,1,3, 2,3,5,4, 4,3,5,1, 4,5,2,4, 3,2,2,1, 2,5,5,4,
  5,3,1,3, 4,4,1,3, 1,5,4,0, 9,1,5,3, 6,1,3,5, 9,5,5,2,
  3,1,5,2, 7,2,0,2, 2,5,4,5, 8,4,3,5, 7,1,0,4, 2,5,2,5,
  9,5,3,0, 9,2,0,2, 5,3,2,1, 6,5,0,1, 5,4,5,5, 8,0,2,5]},
{name:"Jungle",
 parms:[
  8,3,3,0, 7,4,1,4, 3,4,1,2, 8,2,1,3, 6,0,4,0, 1,5,0,0,
  5,4,1,5, 8,3,2,3, 2,4,4,4, 2,0,1,4, 2,2,5,3, 8,3,0,5,
  2,1,4,4, 5,1,3,5, 5,4,2,0, 9,0,0,2, 2,2,0,0, 3,0,2,2,
  1,3,2,1, 7,1,5,0, 7,1,2,1, 5,2,3,1, 6,1,2,0, 1,4,1,1,
  5,1,3,2, 8,1,1,0, 4,0,5,1, 9,1,2,2, 4,5,5,3, 6,2,5,0,
  9,5,1,2, 1,5,3,5, 9,5,2,2, 6,5,5,2, 8,5,1,0, 1,5,4,3]},
{name:"Rosen",
 parms:[
  4,4,3,0, 7,5,2,1, 6,5,0,1, 9,3,0,4, 4,5,0,2, 6,5,0,5,
  7,2,3,2, 1,3,3,0, 1,2,3,2, 3,0,2,1, 7,3,0,5, 8,5,2,2,
  6,4,4,5, 5,1,1,0, 1,0,3,1, 2,2,5,4, 2,5,3,2, 3,5,1,5,
  5,0,2,5, 4,2,5,0, 9,1,4,4, 8,0,4,2, 8,1,3,5, 4,5,4,0,
  3,2,5,2, 9,2,4,5, 3,5,2,1, 1,3,1,0, 4,5,0,4, 1,1,4,4,
  7,1,4,3, 3,1,3,3, 9,4,2,3, 2,2,1,4, 1,2,1,5, 7,0,0,4]},
{name:"Herbstblätter",
 parms:[
  2,1,1,2, 3,3,5,1, 8,5,5,4, 6,2,3,4, 3,2,2,3, 2,0,2,3,
  7,2,2,5, 5,0,4,2, 4,5,2,1, 1,4,4,3, 1,0,0,1, 3,1,2,1,
  2,2,0,1, 2,2,0,2, 4,1,1,3, 2,4,1,5, 3,3,0,2, 2,2,3,4,
  3,3,1,2, 1,0,2,3, 2,5,2,3, 3,0,2,4, 6,3,3,3, 6,2,3,2,
  3,2,2,2, 1,5,3,2, 8,5,3,1, 2,2,0,3, 1,0,1,3, 2,3,0,5,
  9,1,3,2, 1,3,4,1, 3,1,5,1, 8,0,1,0, 6,4,1,3, 6,4,5,0]},
{name:"Seetang",
 parms:[
  6,5,0,1, 7,3,0,1, 9,3,1,5, 9,4,4,1, 5,1,2,5, 8,0,5,4,
  3,1,4,3, 2,4,0,2, 1,4,0,0, 6,0,5,5, 2,3,1,1, 2,5,5,3,
  9,4,2,1, 2,0,5,3, 7,0,3,1, 4,3,4,5, 2,3,2,1, 7,2,5,3,
  6,2,1,0, 9,4,1,5, 4,5,3,2, 7,5,2,4, 7,1,2,2, 5,3,1,1,
  6,2,3,0, 2,3,2,1, 1,1,1,0, 9,1,3,1, 4,2,3,5, 3,1,4,5,
  1,0,4,1, 9,2,1,5, 6,4,5,1, 3,5,3,1, 5,2,0,0, 3,1,4,5]},
{name:"Tauben",
 parms:[
  5,5,0,2, 2,4,0,4, 4,2,0,1, 5,0,5,2, 1,0,1,2, 1,0,3,5,
  5,4,1,1, 4,0,4,2, 2,2,1,3, 6,1,3,5, 4,1,3,4, 2,1,1,0,
  4,5,5,2, 7,3,5,1, 9,0,2,2, 8,0,5,2, 7,3,4,3, 5,4,0,2,
  6,3,0,3, 8,1,1,1, 8,0,0,0, 6,2,2,4, 7,1,5,0, 4,4,3,0,
  8,5,4,1, 3,4,3,0, 9,0,5,0, 2,0,3,1, 9,0,2,1, 3,2,5,1,
  4,0,5,4, 3,2,3,1, 3,5,4,0, 5,5,2,4, 4,1,1,4, 9,2,2,4]},
{name:"Nastuchecke",
 parms:[
  6,0,2,1, 4,3,4,0, 7,3,1,1, 3,0,3,0, 9,1,4,3, 7,1,4,0,
  4,5,3,1, 9,4,4,2, 9,4,0,4, 2,3,5,0, 9,1,0,3, 8,4,1,1,
  1,0,4,0, 6,2,5,4, 3,0,2,4, 2,2,3,2, 8,5,0,5, 6,4,5,4,
  3,3,0,2, 8,0,0,0, 2,5,0,1, 7,0,4,3, 6,3,4,4, 8,0,1,4,
  1,0,2,2, 9,2,2,2, 7,3,5,1, 9,0,0,5, 5,1,0,1, 4,2,1,3,
  1,2,0,5, 7,2,3,5, 1,5,1,4, 9,4,4,2, 9,3,1,3, 9,0,4,3]},
{name:"Green Mistery",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,1,3,5, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 1,0,1,0, 4,2,0,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,3, 4,4,3,3, 7,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,3,3,4, 6,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,5,4,
  2,2,2,1, 3,4,2,0, 4,4,5,4, 7,1,4,3, 6,4,4,0, 3,3,0,3]},
{name:"Grey Chaos",
 parms:[
  6,1,0,2, 4,4,4,3, 1,1,2,1, 5,1,0,0, 7,4,0,1, 4,2,3,3,
  4,2,4,4, 8,2,2,5, 3,5,5,3, 7,3,0,4, 3,5,2,2, 4,3,3,4,
  5,3,3,2, 9,0,5,4, 9,1,3,1, 6,3,2,0, 8,2,3,2, 6,3,2,0,
  4,5,2,0, 1,2,3,4, 2,1,3,1, 6,4,1,3, 7,0,5,1, 7,5,0,5,
  7,2,1,1, 2,1,1,0, 8,2,2,0, 2,0,1,0, 5,0,3,5, 1,4,1,3,
  4,3,4,5, 3,0,2,3, 4,2,0,2, 9,5,1,1, 7,1,1,5, 7,1,1,0]},
{name:"Crazy Circles",
 parms:[
  5,0,1,0, 1,2,2,1, 9,3,5,0, 2,4,0,4, 3,1,5,3, 1,3,1,2,
  7,5,4,2, 5,1,3,2, 8,2,0,4, 8,2,1,4, 8,5,4,4, 4,3,4,3,
  8,3,1,3, 5,1,5,1, 5,1,1,3, 2,0,5,4, 1,3,3,5, 2,0,3,1,
  2,3,1,0, 1,0,0,5, 3,4,1,1, 6,1,4,2, 7,3,0,3, 7,5,0,1,
  2,0,4,4, 4,5,5,0, 9,3,1,5, 3,5,1,3, 2,3,0,5, 9,0,2,5,
  4,3,0,3, 2,4,1,4, 7,4,0,0, 1,1,3,5, 8,0,5,2, 7,4,2,5]},
{name:"MickeyMouse",
 parms:[
  9,3,3,3, 3,3,2,3, 8,2,1,5, 8,1,1,4, 6,3,0,1, 8,5,3,2,
  6,5,0,3, 8,2,1,5, 2,1,2,0, 9,5,5,3, 5,3,1,1, 4,1,3,3,
  7,5,5,2, 4,3,2,2, 8,0,5,3, 4,2,5,5, 8,2,1,0, 2,3,4,4,
  1,4,5,3, 5,0,1,2, 2,5,0,5, 4,3,5,5, 3,4,0,0, 7,3,5,2,
  9,0,1,2, 4,5,1,0, 1,3,3,2, 2,0,1,4, 5,2,4,0, 2,1,3,3,
  3,0,1,5, 4,3,4,2, 8,3,3,2, 5,1,2,0, 8,5,5,0, 3,1,3,4]},
{name:"Splash",
 parms:[
  8,3,5,5, 2,2,0,3, 6,1,1,0, 4,4,2,2, 2,0,0,2, 5,2,5,1,
  1,2,0,0, 7,1,3,3, 2,5,4,1, 9,4,5,1, 6,3,4,5, 8,5,1,0,
  8,3,3,4, 8,3,2,0, 7,5,3,4, 5,1,5,3, 1,4,1,1, 6,4,3,3,
  7,3,3,4, 5,4,1,5, 9,1,0,3, 4,0,5,3, 4,1,2,2, 9,2,1,3,
  7,1,1,3, 6,3,3,4, 4,5,1,0, 8,0,0,3, 7,1,3,2, 6,4,3,0,
  8,1,4,1, 9,1,2,1, 1,2,4,1, 4,5,4,2, 7,3,5,4, 8,5,1,5]},
{name:"Frosty Scenery",
 parms:[
  8,2,4,2, 1,0,0,5, 6,4,5,4, 6,4,4,2, 4,4,4,4, 4,5,1,0,
  9,2,0,5, 7,3,3,5, 5,1,1,3, 2,4,0,3, 9,2,5,0, 8,3,2,3,
  3,5,1,4, 6,1,1,0, 7,4,3,5, 5,2,0,0, 2,5,1,4, 6,4,3,1,
  1,0,4,4, 1,4,3,0, 7,3,5,0, 8,3,2,4, 2,1,2,5, 5,3,5,4,
  6,1,2,4, 9,3,2,4, 2,4,4,3, 1,0,2,5, 9,0,3,0, 6,4,4,0,
  5,2,4,1, 8,0,3,2, 9,5,1,0, 6,0,2,2, 4,3,2,1, 1,5,5,4]},
{name:"Space Schlips",
 parms:[
  6,1,5,5, 3,2,0,1, 7,4,4,5, 4,2,3,1, 5,4,1,0, 2,0,4,3,
  1,3,4,5, 4,4,4,4, 9,1,0,5, 4,2,5,1, 9,1,5,3, 1,4,1,4,
  4,0,2,3, 2,3,1,2, 1,5,0,3, 9,4,1,4, 6,4,5,5, 7,0,4,1,
  4,5,4,5, 6,2,2,5, 7,1,1,5, 7,4,0,1, 5,5,5,3, 8,5,2,5,
  6,5,5,4, 2,3,1,5, 9,5,2,1, 5,0,2,1, 3,5,3,1, 4,4,0,5,
  9,3,4,1, 1,3,0,3, 8,5,3,1, 6,1,0,0, 9,2,0,4, 8,0,4,0]},
{name:"taufe/1",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 6,3,3,4, 2,1,3,5, 1,0,3,3,
  9,1,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,1, 5,3,2,3, 7,0,2,0,
  8,3,2,0, 1,0,1,0, 4,2,2,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,5, 4,0,3,3, 1,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 6,3,3,4, 1,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,1,3,
  2,2,3,1, 3,4,0,0, 4,3,5,4, 7,1,4,3, 8,4,4,0, 3,3,0,3]},
{name:"taufe/2",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,1,3,5, 1,0,3,3,
  9,1,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,1, 5,3,2,3, 7,0,2,0,
  8,3,2,0, 1,0,1,0, 4,2,2,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,5, 4,0,3,3, 1,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 6,3,3,4, 1,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,1,3,
  2,2,2,1, 3,4,0,0, 4,3,5,4, 7,1,4,3, 8,4,4,0, 3,3,0,3]},
{name:"taufe/3",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,1,3,5, 1,0,3,3,
  9,1,4,2, 1,3,4,2, 7,4,1,0, 5,4,5,1, 5,3,2,3, 7,0,2,0,
  8,3,2,0, 1,0,1,0, 4,2,2,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,5, 4,0,4,0, 1,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 6,3,3,4, 1,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,1,3,
  2,2,2,1, 3,4,0,0, 5,3,5,4, 7,1,4,3, 8,4,4,0, 3,3,0,3]},
{name:"taufe/4",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,1,3,5, 1,0,3,3,
  9,1,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,1, 5,3,4,3, 7,0,2,0,
  8,3,2,3, 1,0,1,0, 4,2,2,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,5, 4,0,3,3, 1,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  9,2,5,4, 6,3,3,4, 1,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,1,3,
  2,2,2,1, 3,4,0,0, 4,2,5,4, 7,1,4,3, 8,4,4,0, 3,3,0,3]},
{name:"taufe/5",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,1,3,5, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,4, 5,3,2,3, 7,0,0,0,
  8,3,2,0, 1,0,1,0, 4,2,2,0, 2,2,3,1, 7,0,5,2, 8,5,0,3,
  8,3,1,3, 4,4,3,3, 1,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 6,3,3,4, 6,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,1,3,
  2,2,2,1, 3,4,2,0, 4,3,5,4, 7,1,4,3, 6,4,4,0, 3,3,0,3]},
{name:"Patterend Curtain",
 parms:[
  8,2,3,4, 1,4,4,2, 6,3,2,3, 5,2,2,2, 5,3,2,1, 2,2,0,3,
  3,4,3,4, 1,0,1,3, 2,2,0,5, 3,3,1,5, 4,4,0,3, 9,2,2,0,
  7,0,4,5, 1,4,5,5, 4,2,1,0, 6,0,3,5, 1,4,1,1, 5,2,5,5,
  9,3,2,5, 6,5,0,3, 8,2,2,4, 3,5,2,5, 2,1,5,1, 7,5,1,3,
  2,1,0,4, 1,2,2,2, 7,4,5,2, 9,3,2,4, 1,1,1,0, 1,3,3,2,
  3,0,4,3, 3,2,0,0, 1,4,0,2, 3,4,5,1, 4,3,3,5, 8,1,3,0]},
{name:"Popiger Bilderrahmen",
 parms:[
  5,3,4,5, 2,4,4,1, 9,0,2,3, 9,0,4,3, 6,3,4,1, 4,0,3,5,
  7,3,0,5, 5,5,2,2, 5,3,4,3, 5,2,1,0, 2,4,2,0, 4,0,5,1,
  3,2,2,2, 2,5,1,1, 3,3,2,4, 5,1,0,2, 3,5,5,2, 4,1,1,1,
  1,3,5,4, 9,5,1,3, 3,3,4,1, 9,2,3,0, 8,5,3,0, 1,2,4,0,
  5,1,5,0, 8,4,3,1, 8,4,4,1, 3,5,2,3, 9,0,2,1, 1,4,3,1,
  2,2,0,4, 1,1,1,1, 8,5,0,3, 4,1,5,4, 6,4,4,2, 2,2,4,5]},
{name:"rikki/t0",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,1,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 9,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 3,3,0,5]},
{name:"rikki/t1",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,0, 1,3,3,1, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  9,3,2,0, 2,0,1,0, 5,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,3,3, 2,1,0,0, 5,2,3,0, 8,4,4,2,
  2,5,5,4, 9,5,3,2, 9,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 3,3,0,3]},
{name:"rikki/t2",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,5, 1,2,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,0, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,5,0, 6,1,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,1,4,2,
  6,2,5,4, 9,5,3,2, 1,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 3,3,0,3]},
{name:"rikki/t3",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,3,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,5,3,2, 6,3,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 8,3,0,1]},
{name:"rikki/t4",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 3,3,0,3]},
{name:"rikki/t5",
 parms:[
  1,1,2,4, 9,2,0,3, 5,5,2,1, 1,3,3,4, 7,1,2,2, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 5,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 1,2,4,3, 2,1,0,5, 5,2,3,0, 8,4,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,4,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,3,4,4, 3,3,0,3]},
{name:"rikki/t6",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 5,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,4,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,4, 3,3,0,3]},
{name:"rikki/t7",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 5,2,2,0, 6,2,3,1, 6,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,4,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,3,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,4,4,3, 6,4,4,4, 3,3,0,3]},
{name:"rikki/t8",
 parms:[
  1,1,2,4, 9,2,0,3, 1,4,1,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  6,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 5,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,4,4,2,
  2,2,5,1, 9,5,3,2, 6,4,2,1, 4,0,3,5, 4,0,5,5, 2,2,5,4,
  2,2,2,0, 7,4,2,2, 4,2,1,0, 7,1,4,3, 6,4,4,4, 3,2,0,3]},
{name:"rikki/t9",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,3,1, 1,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,3,
  8,3,1,5, 4,4,3,3, 7,2,4,3, 2,1,0,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,5,3,2, 6,3,2,1, 4,1,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,2,5,0, 7,1,4,3, 6,4,4,0, 8,3,0,1]},
{name:"rikki/tt",
 parms:[
  1,1,2,4, 9,2,0,3, 1,5,1,1, 3,3,3,4, 7,1,2,1, 1,0,3,3,
  9,3,2,2, 1,3,5,2, 7,4,1,0, 5,5,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 2,0,1,0, 4,2,2,0, 6,2,3,1, 7,0,5,2, 8,5,2,1,
  8,3,1,5, 4,4,3,3, 7,4,4,3, 2,1,0,0, 5,2,3,0, 2,1,4,2,
  2,2,5,4, 9,5,3,2, 6,4,2,1, 4,0,3,5, 6,0,5,5, 2,2,5,4,
  2,2,2,1, 7,4,2,2, 4,0,5,0, 7,1,4,3, 6,4,4,0, 3,3,0,3]},
{name:"Neonringe",
 parms:[
  7,0,3,4, 6,5,0,2, 1,3,3,4, 4,1,3,5, 8,3,5,3, 6,3,3,0,
  4,1,4,3, 5,4,5,4, 1,4,3,4, 9,5,1,5, 1,3,0,4, 7,1,2,0,
  9,4,0,4, 6,5,3,4, 2,4,0,2, 1,0,0,2, 1,5,4,5, 3,1,1,5,
  2,3,4,4, 2,4,1,4, 9,3,1,3, 8,5,0,0, 9,3,5,2, 1,2,3,0,
  1,5,1,3, 5,4,4,2, 5,5,3,2, 9,5,4,4, 7,0,5,2, 4,5,4,3,
  3,3,3,1, 3,3,1,4, 2,2,0,1, 7,0,0,4, 2,3,3,1, 5,4,2,0]},
{name:"Looping",
 parms:[
  1,0,3,5, 9,5,5,0, 1,0,2,0, 6,0,5,5, 4,1,5,4, 9,1,3,3,
  7,0,0,3, 1,4,0,1, 9,1,1,5, 4,5,5,3, 9,1,5,0, 8,3,3,2,
  5,5,1,4, 2,2,3,2, 7,1,5,5, 3,2,2,3, 2,5,5,1, 9,5,4,2,
  1,2,0,0, 9,5,2,4, 6,4,0,1, 8,2,0,3, 5,0,2,0, 1,4,2,0,
  2,4,4,3, 2,0,5,5, 2,1,3,0, 3,1,3,4, 6,1,1,2, 4,3,0,2,
  4,5,2,2, 9,5,1,1, 4,3,1,2, 4,2,5,0, 1,0,4,5, 3,5,2,1]},
{name:"Stalagmiten",
 parms:[
  1,0,2,2, 6,1,2,5, 3,3,1,0, 8,2,0,0, 7,1,1,4, 8,1,2,0,
  5,2,2,0, 3,2,0,1, 9,5,4,2, 9,2,2,1, 3,3,2,1, 4,1,5,3,
  5,4,5,3, 2,3,5,5, 6,3,5,4, 6,1,5,4, 1,0,0,2, 3,4,5,5,
  9,5,5,0, 8,3,3,1, 7,3,4,3, 4,3,1,2, 3,1,4,1, 4,4,4,3,
  9,3,5,3, 8,3,2,5, 1,2,1,4, 8,1,5,4, 2,2,5,5, 5,3,2,0,
  5,3,0,2, 7,0,5,5, 4,0,0,4, 4,5,1,4, 7,3,2,3, 4,4,5,2]},
{name:"N",
 parms:[
  4,2,3,3, 2,3,4,4, 3,3,3,3, 9,4,3,0, 2,4,3,2, 5,1,4,5,
  1,4,2,2, 9,5,5,5, 8,0,2,5, 2,0,3,5, 9,1,3,2, 5,4,5,0,
  9,1,5,0, 4,2,2,4, 4,4,4,4, 5,2,3,5, 6,0,0,0, 2,1,4,3,
  7,2,3,2, 2,1,0,1, 5,5,5,0, 3,4,1,5, 6,5,1,1, 9,0,5,5,
  9,0,1,4, 4,3,3,2, 2,3,0,2, 5,2,2,0, 9,3,2,2, 3,4,5,4,
  6,0,2,2, 5,2,0,0, 7,1,0,1, 4,1,0,4, 8,3,2,5, 1,4,2,0]},
{name:"Farbverlauf",
 parms:[
  3,3,4,2, 7,1,2,5, 2,2,3,2, 9,5,3,4, 5,0,2,2, 4,5,0,2,
  5,2,5,2, 8,1,2,4, 5,1,3,2, 3,3,5,1, 9,3,2,4, 9,2,4,1,
  1,2,0,5, 8,3,2,1, 3,3,2,1, 5,2,2,4, 7,4,1,2, 8,3,5,5,
  9,3,2,0, 3,1,3,5, 2,2,2,1, 8,5,2,1, 6,5,2,1, 7,5,1,5,
  3,4,2,3, 9,2,2,2, 7,1,1,1, 2,5,4,3, 3,4,4,3, 9,4,0,3,
  2,0,4,5, 1,4,4,3, 9,3,4,1, 8,1,0,3, 4,4,0,4, 7,2,4,5]},
{name:"Gegenlicht",
 parms:[
  6,3,5,3, 5,1,3,4, 3,4,0,3, 1,1,5,3, 9,1,2,2, 1,2,5,1,
  7,5,2,1, 6,0,2,1, 3,0,1,4, 5,0,3,5, 2,0,0,3, 6,5,3,5,
  5,2,4,3, 8,1,4,4, 2,2,0,1, 2,1,2,1, 1,0,1,5, 2,2,2,3,
  9,4,2,3, 1,5,0,4, 8,1,1,3, 1,3,0,0, 6,1,2,5, 7,4,4,0,
  6,5,2,5, 6,1,3,3, 4,3,4,5, 9,2,4,1, 7,5,3,1, 4,0,4,1,
  9,5,0,3, 9,5,2,3, 7,2,4,0, 4,3,0,3, 6,0,1,4, 2,4,5,4]},
{name:"Brezel",
 parms:[
  8,2,4,0, 2,5,2,4, 1,4,1,5, 1,2,3,3, 9,3,4,0, 1,1,0,2,
  7,2,2,4, 8,2,3,0, 8,3,4,5, 5,4,2,1, 7,5,5,5, 1,1,5,1,
  9,1,1,5, 8,4,4,3, 5,4,4,4, 2,0,0,2, 5,3,4,5, 9,5,1,2,
  1,1,3,0, 6,3,1,0, 6,2,0,5, 3,5,4,1, 7,1,4,1, 4,2,0,1,
  6,4,3,0, 1,4,3,1, 9,1,1,3, 1,1,4,1, 9,4,5,5, 2,5,2,1,
  5,2,2,5, 3,5,4,5, 8,1,1,5, 1,4,1,3, 8,2,5,1, 7,1,2,2]},
{name:"Chewing Gum",
 parms:[
  1,1,2,4, 9,2,0,3, 1,3,1,1, 1,3,3,4, 2,3,2,5, 1,0,3,3,
  9,3,4,2, 1,3,4,2, 7,4,1,0, 5,3,5,4, 5,3,2,3, 7,0,0,5,
  8,3,2,0, 1,0,1,0, 4,2,0,0, 2,2,3,1, 7,0,5,2, 5,5,0,3,
  8,3,1,3, 4,4,3,3, 7,2,2,3, 2,1,4,0, 5,2,3,0, 8,1,4,2,
  2,2,5,4, 9,3,3,4, 6,4,0,1, 4,1,3,5, 6,0,1,2, 4,2,5,4,
  2,2,2,1, 3,4,2,0, 4,4,5,4, 7,1,4,3, 6,4,4,2, 3,3,0,3]},
{name:"Schallwellen",
 parms:[
  2,0,5,3, 6,5,5,2, 3,3,1,3, 5,2,1,1, 9,0,2,2, 1,5,2,5,
  9,2,1,2, 7,3,0,1, 3,1,2,3, 8,3,0,0, 7,0,5,4, 4,5,2,3,
  6,3,1,0, 1,4,3,3, 4,2,5,4, 5,2,2,1, 8,4,5,0, 2,0,5,5,
  1,4,5,2, 6,1,1,2, 2,2,3,4, 5,2,2,3, 7,3,2,2, 8,0,0,4,
  7,5,3,0, 1,0,4,4, 1,2,4,3, 7,5,2,4, 4,3,4,5, 3,5,1,1,
  4,0,3,4, 7,1,0,1, 9,0,4,4, 1,5,4,3, 1,1,4,3, 5,4,2,3]},
{name:"Interferenzen",
 parms:[
  6,4,0,2, 7,5,5,3, 7,2,1,0, 5,0,5,4, 1,3,3,1, 1,1,2,1,
  5,1,4,1, 7,1,3,1, 6,4,5,3, 1,3,1,4, 9,5,1,3, 5,4,4,3,
  8,3,3,0, 3,3,3,3, 7,2,5,5, 9,0,1,2, 2,4,0,2, 2,2,5,3,
  1,2,3,2, 8,0,5,0, 8,1,0,0, 6,5,4,5, 9,0,3,2, 4,2,3,2,
  4,4,2,3, 9,4,5,5, 2,2,5,1, 4,5,5,2, 8,4,2,2, 8,4,0,0,
  5,3,1,2, 7,1,3,3, 3,5,5,4, 9,3,1,1, 1,2,3,3, 1,5,0,2]},
{name:"FourSquare",
 parms:[
  2,5,0,4, 6,5,3,2, 8,4,3,0, 6,0,1,2, 9,4,5,1, 4,1,0,3,
  1,5,1,4, 7,1,1,1, 4,4,0,2, 3,5,5,1, 7,2,1,3, 3,1,3,1,
  1,4,5,1, 1,0,0,0, 7,1,3,0, 3,3,5,5, 8,1,5,0, 6,2,0,2,
  1,3,2,3, 5,1,1,2, 9,4,2,0, 5,0,0,2, 2,4,3,5, 8,4,0,3,
  9,1,3,5, 2,5,5,4, 1,2,2,3, 1,2,4,5, 7,4,2,2, 4,5,5,2,
  3,3,3,2, 1,0,5,3, 1,2,4,1, 1,2,0,2, 3,5,3,4, 4,0,5,1]},
{name:"Fasnacht",
 parms:[
  5,2,5,2, 5,3,3,0, 6,4,5,2, 2,4,0,3, 2,5,3,0, 9,2,3,4,
  2,3,0,5, 8,2,5,3, 7,3,1,1, 7,5,0,0, 4,2,5,2, 1,5,3,5,
  3,1,3,2, 9,0,4,4, 7,4,1,1, 3,5,0,0, 8,1,5,2, 2,0,0,1,
  3,3,3,1, 3,0,3,0, 8,4,1,4, 7,3,2,2, 6,2,0,0, 7,3,3,4,
  8,0,2,2, 8,5,2,3, 6,2,4,5, 7,0,4,5, 3,2,5,0, 9,5,3,4,
  3,1,4,4, 3,1,3,4, 2,3,0,1, 7,0,4,4, 3,1,0,2, 8,5,3,1]},
{name:"verwischt",
 parms:[
  3,3,3,3, 4,3,0,2, 3,5,0,0, 9,5,1,3, 2,0,4,4, 5,3,1,0,
  5,3,2,5, 9,1,1,3, 1,1,2,4, 9,3,2,1, 6,1,1,3, 4,1,4,4,
  5,2,0,5, 6,3,4,2, 1,5,2,0, 1,1,5,2, 2,3,0,4, 7,2,5,4,
  3,2,2,5, 6,4,5,4, 5,3,0,2, 7,4,1,1, 3,4,1,5, 7,1,5,4,
  5,3,2,0, 8,2,5,3, 5,0,2,2, 4,4,2,4, 8,5,4,0, 9,3,0,4,
  3,1,2,2, 7,0,4,2, 1,5,3,0, 2,0,3,4, 4,0,4,0, 4,1,4,2]},
{name:"Scherenschnitt",
 parms:[
  1,1,0,4, 3,3,3,2, 1,3,4,2, 9,4,5,0, 2,3,3,2, 3,4,0,3,
  8,0,0,4, 4,3,4,1, 9,4,0,2, 7,1,4,1, 4,1,0,3, 6,1,2,4,
  4,5,5,4, 5,3,2,1, 3,1,3,3, 9,2,4,0, 5,0,3,4, 9,5,2,0,
  7,0,2,1, 6,5,4,1, 8,0,3,0, 8,1,3,0, 1,3,1,2, 7,1,3,3,
  8,0,2,5, 4,1,2,3, 6,5,0,0, 9,2,3,0, 6,2,1,2, 7,5,0,2,
  6,4,3,1, 3,5,2,0, 2,0,2,0, 7,0,1,0, 2,5,5,2, 7,1,1,4]},
{name:"Windmill",
 parms:[
  4,4,3,1, 3,1,2,3, 1,1,2,0, 0,2,5,5, 9,2,0,4, 6,3,4,1,
  8,4,1,4, 0,4,5,0, 0,4,1,0, 8,4,4,2, 3,4,3,4, 2,4,2,1,
  0,1,1,0, 0,3,2,5, 9,3,4,2, 0,0,4,0, 4,3,1,4, 0,1,5,0,
  3,1,2,0, 0,0,0,2, 0,1,5,5, 1,3,1,2, 9,0,4,5, 0,5,0,0,
  0,2,2,4, 7,2,1,0, 1,5,1,3, 7,0,0,5, 3,0,5,4, 0,4,2,1,
  0,0,4,5, 0,1,3,1, 0,4,1,0, 6,4,3,0, 0,5,2,4, 0,5,0,4]},
{name:"red & green",
 parms:[
  7,5,4,5, 9,3,3,4, 6,1,4,4, 5,1,4,4, 6,4,2,1, 2,0,1,4,
  8,1,2,5, 5,5,4,5, 7,5,1,0, 3,4,5,2, 5,3,3,1, 1,0,0,3,
  3,3,0,4, 1,0,1,3, 9,5,5,0, 8,1,0,3, 8,4,4,4, 7,1,5,4,
  9,1,4,4, 8,4,4,0, 8,4,2,5, 9,3,1,5, 3,1,5,4, 2,0,0,3,
  6,2,3,5, 2,5,1,1, 4,0,2,3, 2,2,2,5, 3,4,3,1, 7,5,3,2,
  1,3,0,5, 1,3,3,1, 6,1,2,0, 4,2,4,2, 5,3,4,4, 5,0,4,2]},
{name:"red stripes",
 parms:[
  8,2,2,0, 9,3,4,2, 3,1,3,5, 4,0,5,0, 8,0,0,3, 8,4,0,4,
  3,5,1,5, 2,2,1,2, 6,2,4,5, 5,1,1,0, 3,4,1,4, 1,0,1,1,
  1,5,3,4, 7,3,5,1, 2,5,0,0, 5,5,4,3, 9,2,5,2, 7,1,1,5,
  5,4,2,1, 9,2,1,3, 2,1,2,0, 6,3,5,3, 7,4,3,3, 6,4,3,3,
  7,4,1,4, 1,1,5,1, 2,3,0,2, 8,3,5,0, 2,0,5,5, 9,3,2,2,
  3,5,1,3, 7,1,4,2, 1,5,0,2, 2,4,1,5, 5,2,1,1, 5,3,2,0]},
]; 
