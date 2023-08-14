let galleryTimeline= document.querySelector('.gallery-timeline')
let gallery = document.querySelector('.gallery')

gallery.animate([
  {transform:'translateX(0)'},
  {transform:'translateX(calc(-100% + 100vw))'},
],{
  fill: 'both',
  timeline: new ScrollTimeline({
      scrollOffsets: [
         {target:galleryTimeline, edge:'start',threshold:1},
         {target:galleryTimeline, edge:'end',threshold:1},
      ]
  })
});

//구역은 cssunit 긴영역 target