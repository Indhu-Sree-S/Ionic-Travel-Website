import { Component } from '@angular/core';
import { district } from './tab1.details';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
district: district[] = [
  {
    name: "kanyakumari",
    image: "https://www.tripsavvy.com/thmb/IEwZ_VuFKpFOlQCsEd9Xi9wDSUc=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-685980588-5b05334d1d640400377ff8bf.jpg",
    detail: " The southernmost tip of the Indian peninsula, Kanyakumari is one of the best tourist places in Tamil Nadu.It is indeed the reason why innumerable history buffs who love to delve deep into the rich history of Kanyakumari and also admire the architectural beauty of the various temples and monuments dotting this city, flock hear.",
    x1: "Vivekananda Rock Memorial",
    x2: "Thiruvallur Statue",
    x3: "Bhagavathi Amman Temple",
    x4: "Our Lady of Ransom Church",
    x5: "Bharatmata Temple"
  },
  {
    name: "Madurai",
    image: 'https://images.outlookindia.com/public/uploads/articles/2020/8/18/Meenakshi_Amman_Temple,_Madurai.jpg',
    detail: " Madurai is Tamil Nadu’s second largest city and one of the best tourist destinations. It has a glorious past combined with the great variety of temples and great architectural treats.",
    x1: "Meenakshi Temple",
    x2: "Puthu Mandapam",
    x3: "Gandhi Memorial Museum",
    x4: "Saint Mary’s Cathedral",
    x5: "Thirumalai Nayak Palace"
  },
  {
    name: "Rameshvaram",
    image: 'https://www.travelogyindia.com/blog/wp-content/uploads/2019/01/Rameshwaram-Pamban-Bridge.jpg',
    detail: " Located in the Ramanathapuram district of Tamil Nadu, Rameshwaram is one of the four important pilgrimage centres know as Char Dham and attracts thousands of visitors in a year.",
    x1: "Dhanushkodi",
    x2: "Pamban Bridge",
    x3: "Ariyaman Beach",
    x4: "Kothandaramaswamy Temple",
    x5: "House of Dr. APJ Abdul Kalam"
  },
  {
    name: 'Tirunelveli',
    image: 'https://www.tourmyindia.com/states/tamilnadu/images/hare-island.jpg',
    detail: 'Seated on the west bank of Thamirabarani River, Tirunelveli is an important destination in Tamil Nadu. Like many other tourist places in the state, Tirunelveli also boasts some impeccable Hindu temples as attractions and pilgrimage destinations.',
    x1: 'Kanthimathi - Nellaiyappar Temple',
    x2: 'Kutralam',
    x3: 'Krishnapuram Temple',
    x4: 'Panchalankuruchi',
    x5: 'Mundanthurai Wildlife Sanctury'
  },
  {
    name: 'Thoothukudi',
    image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/05/Sunrise_in_Tuticorin_beach.jpg',
    detail: 'Thoothukudi (formerly Tuticorin), is a port city, a municipal corporation and an industrial city in Thoothukudi district in the Indian state of Tamil Nadu. The city lies in the Coromandel Coast of Bay of Bengal. Thoothukudi is the capital and headquarters of Thoothukudi district. ',
    x1: 'Ayyanarsunai',
    x2: 'Ettayapuram',
    x3: 'Kazhugumalai',
    x4: 'Adichanallur',
    x5: 'Manapad'
  },
  {
    name: 'Tenkasi',
    image: 'https://www.trawell.in/admin/images/upload/14864523ThenmalaDam_Main.jpg',
    detail: 'According to 2011 census, Tenkasi had a population of 70,545 with a sex-ratio of 1,020 females for every 1,000 males, much above the national average of 929.[2] A total of 7,413 were under the age of six, constituting 3,774 males and 3,639 females. Scheduled Castes and Scheduled Tribes accounted for 14.16% and 0.47% of the population respectively.',
    x1: 'Sundarapandiyapuram',
    x2: 'Kasi Viswanathar Temple',
    x3: 'Papanasam Falls',
    x4: 'Kalakkad Mundanthurai Tiger Reserve',
    x5: 'Sankarankovil'
  },
  {
    name: 'Theni',
    image: 'https://res.cloudinary.com/ch/image/upload/c_fill/v1/hbimages/mobile/location/1520319858995-high-wavy-mountains.jpg',
    detail: 'Theni is a hillock town situated in the Indian state of Tamil Nadu. It is the headquarters of the Theni district. It is known for the large-scale trading of garlic, cotton, cardamom, grapes, mango and chilli. It hosts the second largest weekly market in Tamil Nadu and the fourth largest in South India.',
    x1: 'Meghamalai',
    x2: 'Suruli Falls',
    x3: 'Kurangani',
    x4: 'Top Station View Point',
    x5: 'Megamalai Wildlife Sanctuary'
  },
  {
    name: 'Virudhunagar',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/85/37/b7/temple-view-6.jpg',
    detail: 'It has been ruled at various times by Later Pandyas, Vijayanagar Empire, Madurai Nayaks, Chanda Sahib, Carnatic kingdom and the British. It was formerly known as Virudhupatti.',
    x1: 'Sathuragiri Shiva Temple',
    x2: 'Andal Renga Mannar Temple ',
    x3: 'Madavar Vilagam Vaidyanathar Temple',
    x4: 'Ayyanar Falls',
    x5: 'Pilavakkal Dam'
  },
  {
    name: 'Thanjavur',
    image: 'https://www.tusktravel.com/blog/wp-content/uploads/2021/01/Best-Tourist-Places-to-Visit-in-Tanjore.jpg',
    detail: 'Thanjavur painting is a classical South Indian painting style, which was inaugurated from the town of Thanjavur (anglicized as Tanjore). The art form',
    x1: 'Brahadeshwara Temple',
    x2: 'Gangaikonda Cholapuram',
    x3: 'Shiva Ganga Garden',
    x4: 'Vijayanagar Fort',
    x5: 'Thanjai Mamani Koil '
  },{
    name: 'Tiruchirappalli',
    image: 'https://www.travelogyindia.com/blog/wp-content/uploads/2018/02/Rockfort-Temple-Trichy.jpg',
    detail: 'The city is credited with being the best livable city[6] and the cleanest city of Tamil Nadu, as well as the fifth safest city for women in India.[7] It is the fourth largest city as well as the fourth largest urban agglomeration in the state. ',
    x1: 'Kallanai Dam',
    x2: 'Rockfort Ganpathi Temple',
    x3: 'Samayapuram Amman Temple',
    x4: 'Vekkali Amman Temple',
    x5: 'Sri Ranganatha Swamy Temple'
  },
  {
    name: 'Sivaganga',
    image: 'https://www.tourmyindia.com/states/tamilnadu/images/nattarasankottai-kannathal-temple.jpg',
    detail: 'Sivaganga (Tamil: [siʋaɡəŋɡaɪ]) is a town and headquarters of the Sivaganga district in the Indian state of Tamil Nadu. The town is located at a distance of 48 km (30 mi) from Madurai and 449 km (279 mi) from the state capital Chennai. It is an important town in this district for official and commercial purposes.',
    x1: 'Karpagavinayagar Temple',
    x2: 'Karaikudi',
    x3: 'Nattarasankottai',
    x4: 'Chettiar mansion',
    x5: 'Koppudai Nayaki Amman Temple'
  }
];

  constructor() {}





}
