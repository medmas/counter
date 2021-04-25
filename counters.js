/*There is an array of words called overusedWords.
 These are words overused in this story.
 You want to let the user of your program
 know how many times they have used these overused words.*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

 let overusedWords = ['really', 'very', 'basically'];

// Мій варіант
 let reallyCounter = 0;
 for (i = 0; i < storyWords.length; i++){
   if (storyWords[i] === overusedWords[0]){
     reallyCounter = reallyCounter + 1}
   };
  console.log(reallyCounter);

 let veryCounter = 0;
 for (i = 0; i < storyWords.length; i++){
   if (storyWords[i] === overusedWords[1]){
     veryCounter = veryCounter + 1}
 };
 console.log(veryCounter);

 let basicallyCounter = 0;
 for (i = 0; i < storyWords.length; i++){
   if (storyWords[i] === overusedWords[2]){
    basicallyCounter =  basicallyCounter + 1
   }
 };
 console.log(basicallyCounter);

 //Чи можна ще спростити код, щоб не писати окремо на кожне слово в масиві overusedWords? Крім else if...
