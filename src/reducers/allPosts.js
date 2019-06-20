import PHOTO1 from '../photoes/photo1.jpg';
import PHOTO2 from '../photoes/photo2.jpg';
import PHOTO3 from '../photoes/photo3.jpg';
import PHOTO4 from '../photoes/photo4.jpg';
import PHOTO5 from '../photoes/photo5.jpg';

const initialState = [
  {
    id:1,
    user: 'leonardodicaprio',
    photo: 'https://pp.userapi.com/c850528/v850528207/14cc8c/b3Zt5vsJu6o.jpg',
    tagged:'',
    description:`#Regram #RG @abcnews:
    Massive 223-ft. shape of a whale made of plastic waste collected from the ocean,
    in event in China raising awareness of sea pollution. #pollution #environment #ocean #whales #beaches`
  },
  {
    id:2,
    user: 'leonardodicaprio',
    photo: 'https://pp.userapi.com/c850436/v850436919/14db3f/fxttF8GUXAw.jpg',
    tagged:'',
    description:`#Regram #RG @cnnbusiness:
    Climate change is likely to cost the world’s largest public companies nearly $1 trillion over the next five years.
    But the opportunities for new products and services to reduce environmental damage could be worth much more.
    A survey published Tuesday suggests that growing demand for low-emission products and shifts in consumer preferences could generate over $2 trillion for leading businesses.
    Hit the link in our bio to learn more.`
  },
  {
    id:3,
    user: 'leonardodicaprio',
    photo: 'https://pp.userapi.com/c852132/v852132554/14a4bb/XQywGIQc6_Y.jpg',
    tagged:[],
    description:`#Regram #RG @lionrecovery: The Makame Wildlife Management Area in northern Tanzania is rich with the Maasai culture and abundant with wildlife. But living alongside lions is not easy and creates many challenges for traditional pastoralists to keep their livestock safe. LRF Director @petelindseyafrica recently made a trip to this area to visit our partner @honeyguide_tz to see how they are tackling these issues. Click the link in our bio to learn why we're hopeful this area will become critically important for wildlife. Photo: @jackdswenson #lions #lionrecovery #tanzania #conservation #wildlife #bigcatsofinstagram`
  },
  {
    id:4,
    user: 'leonardodicaprio',
    photo: 'https://pp.userapi.com/c855420/v855420043/657bf/BY0FHrFnoCU.jpg',
    tagged:['onceinhollywood'],
    description:`In theaters July 26th. #OnceUponATimeInHollywood`
  },
  {
    id:5,
    user: 'leonardodicaprio',
    photo: 'https://pp.userapi.com/c855436/v855436587/6f499/G63SVQv8ivI.jpg',
    tagged:['onceinhollywood'],
    description:`Did you know that only 15% of the world’s lands are protected? We need nature for our continued existence on the planet. Link in bio to sign the #GlobalDealForNature petition urging world leaders to protect half of the Earth’s lands.`
  },
  {
    id:6,
    user: 'momsthatshouldmodel',
    photo: 'https://pp.userapi.com/c850036/v850036587/1bf70a/AKd0GX8dKnc.jpg',
    tagged:['leonardodicaprio','adamlevine'],
    description:`Keep laughing, a smile is beautiful 😁 `
  },
  {
    id:7,
    user: 'momsthatshouldmodel',
    photo: 'https://pp.userapi.com/c855120/v855120161/74fc1/Zb4zgfXy8BA.jpg',
    tagged:['leonardodicaprio','adamlevine'],
    description:`Delicious fish with plastic inside........
    Reduce the use of plastic........
    Make world great again.........
    Make marine life beautiful again.... `
  },
  {
    id:8,
    user: 'paginadedicataleonardodicaprio',
    photo: 'https://pp.userapi.com/c850036/v850036587/1bf70a/AKd0GX8dKnc.jpg',
    tagged:['leonardodicaprio'],
    description:`#leonardodicaprio #leodicaprio #leo #climatechange #serendipity #pantarei #always #happy #joy #love #loveislove #swami `
  },
  {
    id:8,
    user: '_leonardo_capri',
    photo: 'https://pp.userapi.com/c856016/v856016552/728b4/ItLUfovhUlc.jpg',
    tagged:['leonardodicaprio'],
    description:`Bae😍🤤#leonardodicaprio #leonardo #dicaprio #titanic #jackdawsen #jack `
  }
]
export default function (state = initialState,action) {
  return state;
}
