/** Responsible for displayiny the catchy heading */

import classes from './MealsSummary.module.css';


const MealsSummary = () => {
    return <section className={classes.summary}>
    <h2>A Moments of Delivered on Time</h2>
    <p>
       “Ate, eating, going to eat” that's what you must care about.
    </p>
    <p>
       A hungry must not go to food the food will go to hungry.
    </p>
    </section>
};

export default MealsSummary;