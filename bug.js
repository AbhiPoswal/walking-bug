// import {gsap} from 'gsap';
gsap.from('.header',
   {
      duration: 1,
      y: '-100%',
      ease: 'bounce'
   })

gsap.from('.float',
   {
      duration: 1,
      opacity: 0,
      duration: 1,
      y: '100%',
      delay: 1
   })

gsap.from('.sidebar',
   {
      duration: 1,
      opacity: 0,
      delay: 2
   })

gsap.from('#iphone_13',
   {
      duration: 1,
      x: '-100%',
      delay: 3
   })

gsap.from('#iphone_12',
   {
      duration: 1,
      y: '100%',
      delay: 4
   })

gsap.from('#nokia',
   {
      duration: 1,
      x: '100%',
      delay: 3
   })

gsap.from('.live_background',
   {
      duration: 10,
      opacity: 0,
      scale: 0,
      rotation: 720,
      ease: 'elastic'
   })

gsap.from('.live_background_2',
   {
      duration: 10,
      opacity: 0,
      scale: 0,
      rotation: 720,
      ease: 'elastic'
   })

gsap.from('.specs',
   {
      x: '100',
      duration: 2,
      ease: "elastic"
   })

gsap.from('.why_refurbished',
   {
      x: '-100',
      duration: 2,
      ease: "elastic"
   })

// bug movements, first track

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 85,
   })

gsap.to('#my_bug',
   {
      duration: 1,
      x: '150',
      delay: 2
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 180,
      delay: 4,
      scale:1.1
   })

// second track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '247',
      delay: 6
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 92,
      delay: 8,
      scale:1.2
   })

// third track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '318',
      delay: 10
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 180,
      delay: 12,
      scale:1.3
   })

// fourth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '560',
      delay: 14
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 92,
      delay: 16,
      scale:1.4
   })

// fifth track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '420',
      delay: 18
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: -2,
      delay: 20,
      scale:1.5
   })

// sixth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '150',
      delay: 22
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 92,
      delay: 24,
      scale:1.6
   })

// seventh track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '730',
      delay: 26
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 180,
      delay: 28,
      scale:1.7
   })

// eighth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '350',
      delay: 30
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: -92,
      delay: 32,
      scale:1.8
   })

// nineth track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '620',
      delay: 34
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 180,
      delay: 36,
      scale:1.9
   })

// tenth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '570',
      delay: 38
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 85,
      delay: 40,
      scale:2
   })

// eleventh track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '980',
      delay: 42
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: -2,
      delay: 44,
      scale:2.1
   })

// twelth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '190',
      delay: 46
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 92,
      delay: 48,
      scale:2.2
   })

// thirteenth track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '1190',
      delay: 50
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 180,
      delay: 52,
      scale:2.3
   })

// fourteenth track

gsap.to('#my_bug',
   {
      duration: 1,
      y: '520',
      delay: 54
   })

gsap.to('#my_bug',
   {
      duration: 1,
      rotation: 92,
      delay: 56,
      scale:2.4
   })

// fifteenth track

gsap.to('#my_bug',
   {
      duration: 1,
      x: '1320',
      delay: 58
   })

gsap.to('#my_bug',
   {
      duration: 1,
      scale: 14,
      delay: 60,
      scale:2.5
   })

// bug in middle

gsap.to('#my_bug',
   {
      duration: 1,
      x: '620',
      y: '200',
      delay: 60
   })

// path fade
gsap.to('.fade_away',
   {
      duration: 1,
      opacity: 0,
      delay: 61
   })

//  jugnu starts blinking from here

gsap.to("#ball_0th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
})

gsap.to("#ball_1st", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:.9
})

gsap.to("#ball_2nd", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:1.9
})

gsap.to("#ball_3rd", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:1.9
})

gsap.to("#ball_3rrd", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:1.4
})

gsap.to("#ball_4th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:1.5
})

gsap.to("#ball_5th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:.6
})

gsap.to("#ball_6th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:2
})

gsap.to("#ball_7th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:4
})

gsap.to("#ball_8th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:2.8
})

gsap.to("#ball_9th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:3.2
})

gsap.to("#ball_10th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:1.2
})

gsap.to("#ball_11th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:4.2
})

gsap.to("#ball_12th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:2
})

gsap.to("#ball_13th", {
   backgroundColor: "orange",
   repeat: -1,
   yoyo: true,
   delay:3
})

// jugnu starts dispearing from here

gsap.to("#ball_0th", {
   opacity:0,
   delay:3
})

gsap.to("#ball_1st", {
   opacity:0,
   delay:7
})

gsap.to("#ball_2nd", {
   opacity:0,
   delay:11
})

gsap.to("#ball_3rd", {
   opacity:0,
   delay:15
})

gsap.to("#ball_3rrd", {
   opacity:0,
   delay:19
})

gsap.to("#ball_4th", {
   opacity:0,
   delay:23
})

gsap.to("#ball_5th", {
   opacity:0,
   delay:27
})

gsap.to("#ball_6th", {
   opacity:0,
   delay:31
})

gsap.to("#ball_7th", {
   opacity:0,
   delay:35
})

gsap.to("#ball_8th", {
   opacity:0,
   delay:39
})

gsap.to("#ball_9th", {
   opacity:0,
   delay:43
})

gsap.to("#ball_10th", {
   opacity:0,
   delay:47
})

gsap.to("#ball_11th", {
   opacity:0,
   delay:51
})

gsap.to("#ball_12th", {
   opacity:0,
   delay:55
})

gsap.to("#ball_13th", {
   opacity:0,
   delay:59
})





















