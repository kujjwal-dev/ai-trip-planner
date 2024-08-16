import React from 'react';
import PlaceCardItem from './PlaceCardItem';

const PlacesToVisit = ({ trip }) => {
    // Check if `tripData` and `travel_plan` are defined
    const travelPlan = trip?.tripData?.travel_plan || {};

    // Order of activities to ensure correct display
    const activityOrder = ['morning', 'afternoon', 'evening'];

    // Function to get sorted day keys
    const getSortedDayKeys = () => {
        const dayKeys = Object.keys(travelPlan);
        // Sort keys numerically (e.g., day1, day2, ...)
        return dayKeys.sort((a, b) => {
            return parseInt(a.replace('day', ''), 10) - parseInt(b.replace('day', ''), 10);
        });
    };

    return (
        <div>
            <h2 className='font-bold text-lg'>Places to visit</h2>
            <div>
                {Object.keys(travelPlan).length === 0 ? (
                    <p>No travel plans available</p>
                ) : (
                    getSortedDayKeys().map(day => (
                        <div key={day} className='mb-6 mt-5'>
                            <h3 className='font-bold text-lg'>{day}</h3>
                            <div className='grid md:grid-cols-2 gap-5 '>
                                {activityOrder.map(timeOfDay => {
                                    const details = travelPlan[day][timeOfDay];
                                    return details ? (
                                        <div key={timeOfDay} className='mb-4 my-3'>
                                            <h4 className='font-medium text-orange-500'>{timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}</h4>
                                            <p > 🕰️ {details.time}</p>
                                            <PlaceCardItem location={details.location}
                                                activity={details.activity} />

                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PlacesToVisit;
