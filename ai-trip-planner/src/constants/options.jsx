export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '😊'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balance between cost and comfort',
        icon: '😌'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Experience the best of comfort and quality',
        icon: '💎'
    }
];



export const SelectTravelList = [
    {
        id: 1,
        title: 'Just me',
        desc: 'A sole traveler in exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'Two people exploring together',
        icon: '❤️',
        people: '2'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A family adventure',
        icon: '👨‍👩‍👧‍👦',
        people: '3-5+'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'Traveling with friends',
        icon: '🧑‍🤝‍🧑',
        people: '2-5+'
    }
];


export const AI_PROMPT = 'Generate Travel Plan for location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName , Hotel address, Price , hotel image url , Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format. Only show what asked nothing else'

