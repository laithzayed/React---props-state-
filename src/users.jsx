
const users = [
    {
      id: 1,
      fullName: "Laith Zayed",
      profileImage:"https://media-exp1.licdn.com/dms/image/C4E03AQFQEf4LF0X5HA/profile-displayphoto-shrink_400_400/0/1602518853485?e=1616630400&v=beta&t=idJZW7tfJsp4nr30RA2FkvWGJWVInHgLrsFaUBWDS44",
      image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/50512676_1985324314878304_5279608421421678592_o.jpg?_nc_cat=108&ccb=2&_nc_sid=19026a&_nc_eui2=AeFx759F5BBvjNeqUNyGuw-Hw3y36d8bVVbDfLfp3xtVVrp9erRSPlnnLLKr2CC74xqoTa1cn0PqAQ7s3XWDFHS6&_nc_ohc=EyIHAUfwEtYAX9lg7Jn&_nc_ht=scontent.famm2-3.fna&oh=c410430231206bd1aa7fffe392925d5f&oe=6031C079",
      work: "Full stack Developer",
      location: "Amman, Jordan",
      facebook: "https://web.facebook.com/laith.zayed.7/",
    
    },
    {
      id: 2,
      fullName: "Sadi Ashlaq",
      work: "Full stack Developer",
      profileImage:"https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/49128377_477589115980522_5894246115817029632_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeGbzjzrLcUbSvGZuWg7suAAweSIPQUs--jB5Ig9BSz76MbAv7sSqauCCghF0fZ9utTfZTxSXpG3feErHa7zWT6z&_nc_ohc=u3D_zhJINAcAX-zguG0&_nc_ht=scontent.famm2-3.fna&oh=48fcf1c5358201a5be32d5009cd68c1c&oe=602FB2A9",
      image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/133866476_928772334195529_5189284912977498865_n.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeHu7arvwA-rbdsDbnWoPgswtX5WNHbRrQi1flY0dtGtCDMN3vDYYXCCYFNn0pAs4CM3k-AtSb54GDdgkpJEkMdH&_nc_ohc=R4BWpGR0vggAX-WwiYz&_nc_ht=scontent.famm2-3.fna&oh=f9b957086313a3907d5430c46630f267&oe=6032E21C",
      location: "Jubaiha - Amman, Jordan",
      facebook: "https://web.facebook.com/TroJaN.Ashlaq",
    
    },
    {
      id: 3,
      fullName: "Mohamed Yacoupe",
      profileImage:"https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/107391049_3301317136556752_1927268705236191016_o.jpg?_nc_cat=110&ccb=2&_nc_sid=a4a2d7&_nc_eui2=AeFurF0zigpt5JxYsTSuDe6GjnaFwvOXVmqOdoXC85dWasi7ptVG5r9oGq712VnC5QrFtcdeLeuNA4bz_jYPFu5S&_nc_ohc=IVnzym03-04AX91XtQD&_nc_ht=scontent.famm2-3.fna&oh=31562a3954bba0794400dc47deda7242&oe=6030B3F0",
      image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/12115901_1084902104864944_3151783539216440175_n.jpg?_nc_cat=107&ccb=2&_nc_sid=e3f864&_nc_eui2=AeEK8gO0A2UYbSdG7BjnOU6YX0zdoYtmHkJfTN2hi2YeQk7h5_mWdJcsGPrCs4FA89Ha7EDXcXX3uMiVuoAcNv9C&_nc_ohc=zA9vraARblAAX8PSsq7&_nc_ht=scontent.famm2-3.fna&oh=af693d846e2ff03070f8ebabb3217c44&oe=60332F07",
      work: "Full stack Web and Mobile Developer",
      location: "Amman, Jordan",
      facebook: "https://web.facebook.com/mohammad.yacoub94",

    },
    {
      id: 4,
      fullName: "Omar Al-Nawasieh",
      profileImage:"https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/118306999_3202618356493108_147750678225113422_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHugnqi8VJ8D-yvPr10mA6QfpZYLilxVdB-llguKXFV0OhD3-EQi3lXnQ-JwHS1988_13LeFijkp-Zpi2RR3Adt&_nc_ohc=ypOGsIM0itYAX-fvGlt&_nc_ht=scontent.famm2-3.fna&oh=8bdf73489993e4cf37f7737da58f400c&oe=6032993C",
      image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/16807007_1249406318480998_8791694124896379904_n.jpg?_nc_cat=111&ccb=2&_nc_sid=e3f864&_nc_eui2=AeG6JbjKWkV62mnsStdbx6cK7vZkvLgW_8Xu9mS8uBb_xcNxbeWmWy6zIUdYAo7iNSKqXGjP_GYlJirqguJBAgeJ&_nc_ohc=SWifzPYhEbIAX9cT7re&_nc_ht=scontent.famm2-3.fna&oh=40799f0be4c8e31a50be55470644059e&oe=60313041",
      work: "Back-End Developer",
      location: "Karak, Jordan",
      facebook: "https://web.facebook.com/omarjamal76",
   
    },
    {
      id: 5,
      fullName: "Anas Melhem",
      profileImage:"https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-1/s320x320/93189203_2847018718746421_3263196759999905792_n.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_eui2=AeH-kaMS87RBBeHTqxMnZW0jsv_1NsFXOBCy__U2wVc4EO1vT-E8ocPxMOVzBJU0J8SkYMR13cPKNt4FOG-V0C0M&_nc_ohc=R-CcR2JciLQAX8e_zqN&_nc_ht=scontent.famm2-3.fna&tp=7&oh=1b6fc173a397ea2d91422772e622bc68&oe=60338E4D",
      image: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-9/118821057_3227467757368180_2622646906047861234_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_eui2=AeGUHb_a0rN4sl6Y7rGyZ1aXDydWOqOMhmEPJ1Y6o4yGYeHYSMq0LrdB7iqugYSMpVwNHnqyQEH4cp_NzurfbRTI&_nc_ohc=P4PNi5s9dTkAX846NT1&_nc_oc=AQmwpVFUZj1JYWekjrazLGUE0yNZTyzFxIelq-hEAwUg1n6E5JQspWUSYEA2nh8CuJk&_nc_ht=scontent.famm2-3.fna&oh=fdc42bd24abbcbd0f0943abd6cef41d7&oe=60321472",
      work: "Dev Ops.",
      location: "Irbid, Jordan",
      facebook: "https://web.facebook.com/anas.melhem.581",

    },
    ];
    
    export default users;