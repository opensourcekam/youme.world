import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => (
  <div>
		<h2>The basics.</h2>
		<p>- Hotel</p>
		<p>- Call credit card companies</p>
		<p>- Flight</p>
		<p>- Call your phone company or get new phone</p>
		<p>- Passport and copies of personal documents (if extended stay)</p>
		<p>- Phone</p>
		<p>- Camera</p>

		<h2>Travel style</h2>
		<p>- Rolling Luggage: Let’s face it. Wheels are nice. There’s no need to carry all your gear on your back or via a duffle bag if you know you’re going to be traveling in a city where there are paved roads and sidewalks.</p>
		<p>- 4-Wheels: As you fill up your wheeled luggage, weight can become a bit restrictive: especially if you have to walk long distances. Consider 4-wheels to keep the weight off your wrist and effortlessly roll your bag by your side.</p>
		<p>- Duffel Bag: These are simple, lightweight, and Eagle Creek’s duffel bags are crazy durable. Sling it over your shoulder, or put some wheels on it and get on your way.</p>
		<p>- Wheeled Backpack: If you’ll be going through different types of terrain, or switching from airports to cobblestones, having a bag with the option to roll it or carry it like a backpack or duffel is really handy.</p>
		<p>- Travel Backpack: If you know you don’t want the extra weight of wheels, traveling with a travel pack is going to mean hands-free mobility and ultimate versatility.</p>
		<p>- Carry-On: Whenever possible, travel with a carry on luggage. It’ll just mean you can save time at the airport, save on check-in fees, guarantee the airlines won’t lose your bag… the list goes on and on.</p>
  </div>
);

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;
