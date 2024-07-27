//region cat images importation
import catBrit from './assets/britsh_kitt.jpg';
import catCoon from './assets/coon_kitt.jpg';
import catHair from './assets/hair_skin.jpg';
import catOutdoor from './assets/outdor.jpg';
import catRegular from './assets/regular_fit.jpg';
//endregion
//region dog images importation
import dogAdultActiv from './assets/OPTILIFE_Adult_Active.jpg';
import dogSenior from './assets/opti_life_senior.jpg';
import dogDigestion from './assets/opti_life_digestion.jpg';
import dogPuppy from './assets/OPTILIFE_Puppy.jpg';
import dogSterilized from './assets/opti_life_sterilized.jpg';
//endregion
//region bird images importation
import birdAmazon from './assets/verselelaga_prestigeloro_parque_amazone.jpg';
import birdNuts from './assets/PLA_Versele_EXOTIC_NUTS.jpg';
import birdAra from './assets/verselelaga_prestigeloro_parque_ara.jpg';
import birdSimple from './assets/pla_prestige_simple.jpg';
//endregion
//region fish images importation
import fishFlakes from './assets/tetramin_flockenfutter.jpg';
import fishGolden from './assets/tetra_goldfishmenu.jpg';
import fishTablets from './assets/etra_Pleco_Tablets.jpg';
import fishMicron from './assets/pla_sera_micron_nature.jpg';
import fishDiscus from './assets/sera_discus_granulat.jpg';
//endregion

import {Item} from "./types";


export const storageDB:Item[] = [
    {
        title: 'Royal Canin Regular Fit',
        category: 'cat',
        description: 'Refined dry food for calm adult cats of ideal weight who go outside occasionally, maintains weight control, reduces hairballs, moderate oiliness and energy.',
        cost: 45,
        img: catRegular as string
    },
    {
        title: 'Royal Canin Outdoor',
        category: 'cat',
        cost: 85,
        description: 'Dry food for active adult cats who live primarily outdoors, rich in energy, supports healthy joints and helps strengthen the immune system with nutrients.',
        img: catOutdoor as string
    },
    {
        title: 'Royal Canin Maine Coon Kitten',
        category: 'cat',
        description: 'Dry food for Maine Coon kittens up to 15 months, for harmonious growth, LIP protein and prebiotics, joint health support, adapted energy value and fat content, with antioxidants.',
        cost: 56,
        img: catCoon as string
    },
    {
        title: 'Royal Canin British Shorthair Kitten',
        category: 'cat',
        description: 'Dry food for British Shorthair cats from 2 to 12 months, antioxidant complex with vitamin E supports the immune system, LIP proteins and prebiotics for digestibility, increased tolerance.',
        cost: 49,
        img: catBrit as string
    },
    {
        title: 'Royal Canin Hair & Skin Care',
        category: 'cat',
        description: 'Balanced dry food for adult cats promotes silky coat and normal skin, skin and coat support with zinc and copper, with omega 3 and 6, visible results after 3 weeks.',
        cost: 82,
        img: catHair as string
    },
    {
        title: 'Opti Life Adult Active',
        category: 'dog',
        description: 'Dry food for active dogs of any breed with a high energy requirement. It has an adjusted protein & fat level, with L-carnitine, chondroitin & glucosamine for cartilage, with antioxidants.',
        cost: 122,
        img: dogAdultActiv as string
    },
    {
        title: 'Opti Life Senior',
        category: 'dog',
        description: 'Dry food for medium & large breed senior dogs, low in fat, with chondroitin & glucosamine for joints, FOS & MOS to regulate digestion, gluten free.',
        cost: 152,
        img: dogSenior as string
    },
    {
        title: 'Opti Life Digestion',
        category: 'dog',
        description: 'Dry food for adult dogs of medium and large breeds with sensitive digestion. With easy-to-digest lamb & rice and FOS & MOS prebiotics, gluten-free, with antioxidants for a strong immune system.',
        cost: 132,
        img: dogDigestion as string
    },
    {
        title: 'Opti Life Puppy',
        category: 'dog',
        description: 'Dry food with chicken & rice for large breed puppies, with EPA & DHA for brain development, with FOS & MOS prebiotics, high protein, strengthens joints and cartilage, gluten free.',
        cost: 137,
        img: dogPuppy as string
    },
    {
        title: 'Opti Life Adult Sterilized',
        category: 'dog',
        description: 'Gluten-free dog food for medium and large breeds that tend to be overweight, with chicken and rice, taurine, zinc, glucosamine, L-carnitine, FOS & MOS and antioxidants.',
        cost: 141,
        img: dogSterilized as string
    },
    {
        title: 'Versele-Laga Prestige Loro Parque Amazon Parrot Mix',
        category: 'bird',
        description: 'Complete food for South American parrots with a special blend of seeds, high quality and tasty. It  have a wide variety of seeds and grains and contain a range of parrot treats including puffed grains, pumpkin seeds, rose hips, dried chillies and pine nuts.',
        cost: 58,
        img: birdAmazon as string
    },
    {
        title: 'Versele-Laga Exotic Nuts',
        category: 'bird',
        description: 'Excellent mix of whole nuts and peanuts , grains, seeds, fruit and vegetables for all parrots, ideal as a reward or food supplement, for happy parrots at their best.',
        cost: 64,
        img: birdNuts as string
    },
    {
        title: 'Prestige Loro Parque Ara Parrot Mix',
        category: 'bird',
        description: 'Tasty parrot food mix, seed mix enriched with VAM extruded grains, for a natural diet of macaws and black cockatoos, developed together with scientists.',
        cost: 53,
        img: birdAra as string
    },
    {
        title: 'Versele-Laga Prestige Simple',
        category: 'bird',
        description: 'Versele Laga classic food with nuts and seeds for parrots.This classic mixed food is a good basis for a parrot\'s diet. Contains high quality seeds and grains that provide your bird with the nutrients it needs. Thus the food contributes to a strong and beautiful plumage and to a long and healthy life. We recommend that you also give the bird fresh vegetables and fruits for a varied and balanced diet.',
        cost: 64,
        img: birdSimple as string
    },
    {
        title: 'TetraMin flakes',
        category: 'fish',
        description: 'This classic food contains all the nutrients, vitamins and trace elements that fish need for a balanced diet. Vitamin C strengthens the immune system, contributes to healthy development and prevents nutritional deficiencies. Tetra\'s unique blend of natural ingredients ensures optimal absorption of nutrients.',
        cost: 70,
        img: fishFlakes as string
    },
    {
        title: 'Tetra Goldfish Menu',
        category: 'fish',
        description: 'Food for gold carp and cold water fish should not only be balanced, but also to their liking. The Tetra Goldfish Menu food mix provides your fish with all the nutrients. This premium food mix consists of four types of ingredients: chips, flakes, granules and Daphnia fleas . Thanks to Tetra\'s unique way of processing, the chips have a high nutritional value and an optimal protein/fat ratio .',
        cost: 58,
        img: fishGolden as string
    },
    {
        title: 'Tetra Pleco food tablets',
        category: 'fish',
        description: 'Plant-based food, contains a high proportion of Spirulina to suit the nutritional needs of catfish and gilts.',
        cost: 64,
        img: fishTablets as string
    },
    {
        title: 'Greenhouse Micron Nature',
        category: 'fish',
        description: 'Highly digestible growth food for fish and amphibian larvae in freshwater and marine aquariums, with zooplankton and phytoplankton, without artificial colors and preservatives, supports the immune system.',
        cost: 45,
        img: fishMicron as string
    },
    {
        title: 'Sera Discus Granulated',
        category: 'fish',
        description: 'Balanced basic food for all Discus fish, as well as juveniles and other fastidious ornamental fish, soft granules, prebiotic and mineral-rich ingredients, 4% krill, free of dyes and preservatives.',
        cost: 87,
        img: fishDiscus as string
    }
];

