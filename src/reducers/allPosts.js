import { LIKE, DISLIKE, ADD_COMMENT } from '../types/types.js';
const initialState = [
    {
        id: 1,
        user: 'leonardodicaprio',
        verified: true,
        userPic: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        photo: 'https://pp.userapi.com/c851424/v851424868/15270e/ije9Rxf_aCQ.jpg',
        tagged: '',
        description: `#Regram #RG @abcnews:
    Massive 223-ft. shape of a whale made of plastic waste collected from the ocean,
    in event in China raising awareness of sea pollution. #pollution #environment #ocean #whales #beaches`,
        likes: 123,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 2,
        user: 'leonardodicaprio',
        verified: true,
        userPic: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        photo: 'https://pp.userapi.com/c854220/v854220608/79e94/mhGVDxrxcMI.jpg',
        tagged: '',
        description: `#Regram #RG @cnnbusiness:
    Climate change is likely to cost the world’s largest public companies nearly $1 trillion over the next five years.
    But the opportunities for new products and services to reduce environmental damage could be worth much more.
    A survey published Tuesday suggests that growing demand for low-emission products and shifts in consumer preferences could generate over $2 trillion for leading businesses.
    Hit the link in our bio to learn more.`,
        likes: 3256,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 3,
        user: 'leonardodicaprio',
        verified: true,
        userPic: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        photo: 'https://pp.userapi.com/c854028/v854028801/7ea34/oeOMWmxwEpU.jpg',
        tagged: [],
        description: `#Regram #RG @lionrecovery: The Makame Wildlife Management Area in northern Tanzania is rich with the Maasai culture and abundant with wildlife. But living alongside lions is not easy and creates many challenges for traditional pastoralists to keep their livestock safe. LRF Director @petelindseyafrica recently made a trip to this area to visit our partner @honeyguide_tz to see how they are tackling these issues. Click the link in our bio to learn why we're hopeful this area will become critically important for wildlife.
    Photo: @jackdswenson #lions #lionrecovery #tanzania #conservation #wildlife #bigcatsofinstagram`,
        likes: 7687,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 4,
        user: 'leonardodicaprio',
        verified: true,
        userPic: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        photo: 'https://pp.userapi.com/c854028/v854028801/7ea34/oeOMWmxwEpU.jpg',
        tagged: ['onceinhollywood'],
        description: `In theaters July 26th. #OnceUponATimeInHollywood`,
        likes: 435768,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 5,
        user: 'leonardodicaprio',
        verified: true,
        userPic: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj_400x400.jpg',
        photo: 'https://pp.userapi.com/c848524/v848524969/1ca70d/lMPS_T8UuqI.jpg',
        tagged: ['onceinhollywood'],
        description: `Did you know that only 15% of the world’s lands are protected?
    We need nature for our continued existence on the planet.
    Link in bio to sign the #GlobalDealForNature petition urging world leaders to protect half of the Earth’s lands.`,
        likes: 354657,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 6,
        user: 'momsthatshouldmodel',
        verified: false,
        userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
        photo: 'https://pp.userapi.com/c850424/v850424862/14e15b/0j4CxVUGNUM.jpg',
        tagged: ['leonardodicaprio'],
        description: `Keep laughing, a smile is beautiful 😁 `,
        likes: 278,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 7,
        user: 'momsthatshouldmodel',
        verified: false,
        userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
        photo: 'https://pp.userapi.com/c858020/v858020896/29c7/Yrr1LS0OyK0.jpg',
        tagged: ['leonardodicaprio'],
        description: `Delicious fish with plastic inside........
    Reduce the use of plastic........
    Make world great again.........
    Make marine life beautiful again.... `,
        likes: 214567,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 8,
        user: 'paginadedi',
        verified: false,
        userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
        photo: 'https://pp.userapi.com/c855320/v855320101/7ef22/v4gSdDjTjrU.jpg',
        tagged: ['leonardodicaprio'],
        description: `#leonardodicaprio #leodicaprio #leo #climatechange #serendipity #pantarei #always #happy #joy #love #loveislove #swami `,
        likes: 1145,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    },
    {
        id: 9,
        user: '_leonardo_capri',
        userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
        verified: false,
        photo: 'https://pp.userapi.com/c854228/v854228597/82126/PDZl3xMrRZw.jpg',
        tagged: ['leonardodicaprio'],
        description: `Bae😍🤤#leonardodicaprio #leonardo #dicaprio #titanic #jackdawsen #jack `,
        likes: 278933,
        commentPhoto: 1177,
        comments: [
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            },
            {
                user: 'subhamkumar7502',
                userPic: 'https://image.flaticon.com/icons/svg/181/181549.svg',
                comment: 'Ever year plastic waste are getting more and more 😢'
            }
        ]
    }
];
export default function (state = initialState, action) {
    switch (action.type) {
      case LIKE:
        return [...state, state[action.postID].likes=action.likes];
      case DISLIKE:
        return [...state, state[action.postID].likes=action.likes];
      case ADD_COMMENT:
        return [...state, state[action.postID].comments=[...state[action.postID].comments, { user:action.user,userPic:action.userPic, comment:action.comment} ]]
    default:
        return state
    }
}
